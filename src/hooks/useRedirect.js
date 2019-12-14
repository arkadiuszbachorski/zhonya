import { useEffect, useState } from 'react';
import useStore, { storeKeys } from './useStore';

/*
 * To be used everywhere you need to redirect somewhere
 * Returns setRedirect function
 * */

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
