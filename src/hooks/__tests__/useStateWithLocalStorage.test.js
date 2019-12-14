import { renderHook, act } from '@testing-library/react-hooks';
import useStateWithLocalStorage from '../useStateWithLocalStorage';

describe('Hook - useStateWithLocalStorage', () => {
    it('sets default value if value not present in localStorage', () => {
        const { result } = renderHook(() => useStateWithLocalStorage('test', { lorem: 'value' }));

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
});
