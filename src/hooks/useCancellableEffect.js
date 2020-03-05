import { useEffect } from 'react';

const useCancellableEffect = (callback, deps, cancel) => {
    useEffect(() => {
        callback();

        return () => {
            cancel();
        };
    }, deps);
};

export default useCancellableEffect;
