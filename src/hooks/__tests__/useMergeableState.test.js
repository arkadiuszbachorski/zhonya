import { act, renderHook } from '@testing-library/react-hooks';
import useMergeableState from '../useMergeableState';

describe('Hook - useMergeableState', () => {
    it('holds default value', () => {
        const { result } = renderHook(() => useMergeableState({ lorem: 'default' }));
        expect(result.current[0].lorem).toBe('default');
    });

    it('updates state', () => {
        const { result } = renderHook(() => useMergeableState({ lorem: 'default' }));

        act(() => {
            result.current[1]({
                lorem: 'changed',
            });
        });

        expect(result.current[0].lorem).toBe('changed');
    });

    it('merges state', () => {
        const { result } = renderHook(() => useMergeableState({ lorem: 'default' }));

        act(() => {
            result.current[1]({
                ipsum: 'new',
            });
        });

        expect(Object.keys(result.current[0]).length).toBe(2);
        expect(result.current[0].ipsum).toBe('new');
    });
});
