import { act, renderHook } from '@testing-library/react-hooks';
import useFilter from '../useFilter';

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

describe('Hook - useFilter', () => {
    it('preserves initial data', () => {
        const { result } = renderHook(() => useFilter(initialData));

        expect(Object.keys(result.current[1]).length).toBe(2);
        expect(result.current[1].lorem).toBe('test');
        expect(result.current[1].ipsum).toBe('value');
    });

    it('updates data with debounce', async () => {
        const { result } = renderHook(() => useFilter(initialData, 200));

        act(() => {
            const fakeEvent = {
                target: {
                    name: 'lorem',
                    value: 'new',
                },
            };
            result.current[2](fakeEvent);
        });

        expect(result.current[1].lorem).toBe('test');

        await timeout(50).then(() => {
            expect(result.current[1].lorem).toBe('test');
        });

        await timeout(200).then(() => {
            expect(result.current[1].lorem).toBe('new');
        });
    });
});
