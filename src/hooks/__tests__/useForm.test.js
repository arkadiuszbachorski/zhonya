import { act, renderHook } from '@testing-library/react-hooks';
import useForm from '../useForm';

const initialData = {
    lorem: 'test',
    ipsum: 'value',
};

describe('Hook - useForm', () => {
    it('preserves initial data', () => {
        const { result } = renderHook(() => useForm(initialData));

        expect(Object.keys(result.current[0]).length).toBe(2);
        expect(result.current[0].lorem).toBe('test');
        expect(result.current[0].ipsum).toBe('value');
    });

    it('updates data with event handling', () => {
        const { result } = renderHook(() => useForm(initialData));

        act(() => {
            const fakeEvent = {
                target: {
                    name: 'lorem',
                    value: 'new',
                },
            };
            result.current[1](fakeEvent);
        });

        expect(result.current[0].lorem).toBe('new');
    });

    it('resets data to initial', () => {
        const { result } = renderHook(() => useForm(initialData));

        act(() => {
            const fakeEvent = {
                target: {
                    name: 'lorem',
                    value: 'new',
                },
            };
            result.current[1](fakeEvent);
        });

        expect(result.current[0].lorem).toBe('new');

        act(() => {
            result.current[2]();
        });

        expect(result.current[0].lorem).toBe('test');
    });
});
