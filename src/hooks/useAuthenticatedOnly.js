import { useLayoutEffect, useState } from 'react';
import useAuth from './useAuth';
import useRedirect from './useRedirect';
import routes from '../routes';

const useAuthenticatedOnly = (customSettings = null) => {
    const [auth] = useAuth();
    const redirect = useRedirect();
    const [first, setFirst] = useState(true);

    const settings = customSettings || {
        scope: false,
        checkIfEmailVerified: true,
        checkIfEmailNotVerified: false,
    };

    const checkIfAuthenticated = () => {
        if (auth.token === null || (settings.scope && auth.scope && !auth.scope.includes(settings.scope))) {
            redirect(routes.logIn);
        } else if (settings.checkIfEmailVerified && !auth.verified) {
            redirect(routes.sendVerificationEmail);
        } else if (settings.checkIfEmailNotVerified && auth.verified) {
            redirect(routes.user.dashboard);
        }
        if (first) {
            setFirst(false);
        }
    };

    if (first) {
        checkIfAuthenticated();
    }

    useLayoutEffect(checkIfAuthenticated, [auth.token, auth.scope, redirect, settings]);
};

export default useAuthenticatedOnly;
