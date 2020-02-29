import { useLayoutEffect, useState } from 'react';
import useAuth from './useAuth';
import useRedirect from './useRedirect';
import routes from '../routes';

const useGuestOnly = () => {
    const [auth] = useAuth();
    const setRedirect = useRedirect();
    const [first, setFirst] = useState(true);

    const redirectIfNotGuest = () => {
        if (auth.token !== null) {
            setRedirect(routes.user.dashboard);
        }
        if (first) {
            setFirst(false);
        }
    };

    if (first) {
        redirectIfNotGuest();
    }

    useLayoutEffect(redirectIfNotGuest, [auth.token, auth.scope, setRedirect]);
};

export default useGuestOnly;
