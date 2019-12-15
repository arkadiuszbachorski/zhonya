import { act, renderHook } from '@testing-library/react-hooks';
import useToggle from '../useToggle';

describe('Hook - useToggle', () => {
    it('toggles to true with default false', () => {
        const { result } = renderHook(() => useToggle());

        expect(result.current[0]).toBe(false);

        act(() => {
            result.current[1]();
        });

        expect(result.current[0]).toBe(true);
    });
});
