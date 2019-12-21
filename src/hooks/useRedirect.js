import { useEffect, useState } from 'react';
import useStore, { storeKeys } from './useStore';

export const useRedirectProvider = () => {
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        if (redirect !== null) {
            setRedirect(null);
        }
    }, [redirect]);

    return [redirect, setRedirect];
};

const useRedirect = () => useStore(storeKeys.useRedirect);

export default useRedirect;
