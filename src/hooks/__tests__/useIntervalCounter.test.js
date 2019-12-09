import { renderHook } from '@testing-library/react-hooks';
import useIntervalCounter from '../useIntervalCounter';

describe('Hook - useIntervalCounter', () => {
    it('counter is equal 2 after it ticked 2 times', () => {
        const { result } = renderHook(() => useIntervalCounter(200));

        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 500);
        });

        promise.then(() => {
            expect(result.current).toBe(2);
        });
    });
});
