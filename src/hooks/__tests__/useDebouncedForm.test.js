import { act, renderHook } from '@testing-library/react-hooks';
import useDebouncedForm from '../useDebouncedForm';

const initialData = {
    lorem: 'test',
    ipsum: 'value',
};

const timeout = async delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
};

describe('Hook - useDebouncedForm', () => {
    it('updates data with debounce', async () => {
        const { result } = renderHook(() => useDebouncedForm(initialData, 200));

        act(() => {
            const fakeEvent = {
                target: {
                    name: 'lorem',
                    value: 'new',
                },
            };
            result.current[2](fakeEvent);
        });

        expect(result.current[0].lorem).toBe('test');

        await timeout(50).then(() => {
            expect(result.current[0].lorem).toBe('test');
        });

        await timeout(200).then(() => {
            expect(result.current[0].lorem).toBe('new');
        });
    });
});
