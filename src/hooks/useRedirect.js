import { useEffect, useState } from 'react';
import useStore, { storeKeys } from './useStore';

export const useRedirectProvider = () => {
    const [redirectPath, redirectTo] = useState(null);
    const [lastAborted, setLastAbortedState] = useState(null);

    const setLastAborted = value => {
        const path = value.pathname ?? value;
        if (path && path.includes('logout')) {
            setLastAbortedState(null);
            return;
        }
        setLastAbortedState(path);
    };

    useEffect(() => {
        if (redirectPath !== null) {
            redirectTo(null);
        }
    }, [redirectPath]);

    return { redirectPath, redirectTo, lastAborted, setLastAborted };
};

const useRedirect = () => useStore(storeKeys.useRedirect);

export default useRedirect;
