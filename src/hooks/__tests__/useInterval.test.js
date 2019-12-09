import { renderHook } from '@testing-library/react-hooks';
import useInterval from '../useInterval';

describe('Hook - useInterval', () => {
    it('action is not called immediately', () => {
        const fn = jest.fn();
        renderHook(() => useInterval(fn, 200));

        expect(fn).toBeCalledTimes(0);
    });

    it('action is called exactly 3 times', () => {
        const fn = jest.fn();
        renderHook(() => useInterval(fn, 150));

        const promise = new Promise(resolve => {
            setTimeout(() => {
                fn();
                resolve();
            }, 500);
        });

        promise.then(() => {
            expect(fn).toBeCalledTimes(3);
        });
    });
});
