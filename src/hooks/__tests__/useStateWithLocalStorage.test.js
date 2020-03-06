import { act, renderHook } from '@testing-library/react-hooks';
import useStateWithLocalStorage from '../useStateWithLocalStorage';

describe('Hook - useStateWithLocalStorage', () => {
    it('sets default value if value not present in localStorage', () => {
        const { result } = renderHook(() => useStateWithLocalStorage('test', { lorem: 'value' }));

        expect(result.current[0].lorem).toBe('value');
    });

    it('executes function when provided as default value', () => {
        const value = 'value';
        const { result } = renderHook(() => {
            return useStateWithLocalStorage('test', () => {
                return {
                    lorem: value,
                };
            });
        });

        expect(result.current[0].lorem).toBe('value');
    });

    it('keeps data in hook', () => {
        const { result } = renderHook(() => useStateWithLocalStorage('test', { lorem: 'value' }));

        act(() => {
            result.current[1]({
                lorem: 'newValue',
            });
        });

        expect(result.current[0].lorem).toBe('newValue');
    });

    it('keeps data in localStorage', () => {
        expect(JSON.parse(localStorage.getItem('test')).lorem).toBe('newValue');
    });

    it('doesnt keep data in localStorage when not wanted', () => {
        const { result } = renderHook(() => useStateWithLocalStorage('lorem', 'ipsum', false));

        expect(result.current[0]).toBe('ipsum');

        act(() => {
            result.current[1]('dolor', false);
        });

        expect(result.current[0]).toBe('dolor');
        expect(localStorage.getItem('lorem')).toBeNull();
    });

    it('handles undefined in localStorage', () => {
        localStorage.setItem('dolor', undefined);
        const { result } = renderHook(() => useStateWithLocalStorage('dolor', 'amet'));

        expect(result.current[0]).toBe('amet');
    });
});
