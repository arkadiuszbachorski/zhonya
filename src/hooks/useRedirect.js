import { useEffect, useState } from 'react';
import useStore, { storeKeys } from './useStore';

export const useRedirectProvider = () => {
    const [redirectPath, redirectTo] = useState(null);

    useEffect(() => {
        if (redirectPath !== null) {
            redirectTo(null);
        }
    }, [redirectPath]);

    return { redirectPath, redirectTo };
};

const useRedirect = () => useStore(storeKeys.useRedirect);

export default useRedirect;
