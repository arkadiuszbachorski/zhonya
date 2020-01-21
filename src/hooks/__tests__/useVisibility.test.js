import { renderHook } from '@testing-library/react-hooks';
import useVisibility from '../useVisibility';

describe('Hook - useVisibility', () => {
    it('element is visible', () => {
        const { result } = renderHook(() => useVisibility());

        expect(result.current).toBe(true);
    });
});
