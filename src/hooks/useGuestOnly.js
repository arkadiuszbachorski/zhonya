import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useRedirect from './useRedirect';
import routes from '../routes';

const useGuestOnly = () => {
    const [auth] = useAuth();
    const { redirectTo } = useRedirect();
    const [first, setFirst] = useState(true);

    const redirectIfNotGuest = () => {
        if (auth.token !== null) {
            redirectTo(routes.user.dashboard);
        }
        if (first) {
            setFirst(false);
        }
    };

    if (first) {
        redirectIfNotGuest();
    }

    useEffect(redirectIfNotGuest, [auth.token, auth.scope, redirectTo]);
};

export default useGuestOnly;
