import { act, renderHook } from '@testing-library/react-hooks';
import useForm from '../useForm';

const initialData = {
    lorem: 'test',
    ipsum: 'value',
};

describe('Hook - useForm', () => {
    it('preserves initial data', () => {
        const { result } = renderHook(() => useForm(initialData));

        expect(Object.keys(result.current[0].data).length).toBe(2);
        expect(result.current[0].data.lorem).toBe('test');
        expect(result.current[0].data.ipsum).toBe('value');
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

        expect(result.current[0].data.lorem).toBe('new');
    });

    it('sets errors', () => {
        const { result } = renderHook(() => useForm(initialData));

        expect(Object.keys(result.current[0].errors).length).toBe(0);

        act(() => {
            result.current[2]({
                lorem: ['Required'],
            });
        });

        expect(Object.keys(result.current[0].errors).length).toBe(1);
        expect(result.current[0].errors.lorem).toBeInstanceOf(Array);
    });

    it('sets loading', () => {
        const { result } = renderHook(() => useForm(initialData));

        expect(result.current[0].loading).toBe(false);

        act(() => {
            result.current[3](true);
        });

        expect(result.current[0].loading).toBe(true);
    });
});
