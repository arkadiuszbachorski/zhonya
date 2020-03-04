import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import useAuth from './useAuth';
import useRedirect from './useRedirect';
import routes from '../routes';

const useAuthenticatedOnly = (customSettings = null) => {
    const [auth] = useAuth();
    const { redirectTo, setLastAborted } = useRedirect();
    const [first, setFirst] = useState(true);

    const location = useLocation();

    const settings = useMemo(() => {
        return (
            customSettings ?? {
                scope: false,
                checkIfEmailVerified: true,
                checkIfEmailNotVerified: false,
            }
        );
    }, [customSettings]);

    const checkIfAuthenticated = () => {
        if (auth.token === null || (settings.scope && auth.scope && !auth.scope.includes(settings.scope))) {
            setLastAborted(location);
            redirectTo(routes.logIn);
        } else if (settings.checkIfEmailVerified && !auth.verified) {
            setLastAborted(location);
            redirectTo(routes.sendVerificationEmail);
        } else if (settings.checkIfEmailNotVerified && auth.verified) {
            redirectTo(routes.user.dashboard);
        }
        if (first) {
            setFirst(false);
        }
    };

    if (first) {
        checkIfAuthenticated();
    }

    useEffect(checkIfAuthenticated, [auth.token, auth.scope, redirectTo, settings]);
};

export default useAuthenticatedOnly;
