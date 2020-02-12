import { renderHook } from '@testing-library/react-hooks';
import useRandomArrayElement from '../useRandomArrayElement';

describe('Hook - useRandomArrayElement', () => {
    it('gets element from array', () => {
        const { result } = renderHook(() => useRandomArrayElement(['lorem']));

        expect(result.current[0]).toBe('lorem');
    });

    it('gets null when array not provided', () => {
        const { result } = renderHook(() => useRandomArrayElement([]));

        expect(result.current[0]).toBe(null);
    });
});
