import { useEffect, useState } from 'react';
import useStore, { storeKeys } from './useStore';

export const useRedirectProvider = () => {
    const [redirectPath, redirectTo] = useState(null);
    const [lastAborted, setLastAbortedState] = useState(null);

    const setLastAborted = value => {
        if (value && value.pathname.includes('logout')) {
            setLastAbortedState(null);
            return;
        }
        setLastAbortedState(value);
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
