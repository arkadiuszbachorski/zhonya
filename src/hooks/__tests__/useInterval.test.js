import { renderHook } from '@testing-library/react-hooks';
import useInterval from '../useInterval';

describe('Hook - useInterval', () => {
    it('action is not called immediately', () => {
        const fn = jest.fn();
        renderHook(() => useInterval(fn, 200));

        expect(fn).toBeCalledTimes(0);
    });

    it('action is called exactly 3 times', async () => {
        const fn = jest.fn();
        renderHook(() => useInterval(fn, 100));

        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 350);
        });

        await promise.then(() => {
            expect(fn).toBeCalledTimes(3);
        });
    });
});
