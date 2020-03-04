import { useEffect, useMemo, useState } from 'react';
import useAuth from './useAuth';
import useRedirect from './useRedirect';
import routes from '../routes';

const useAuthenticatedOnly = (customSettings = null) => {
    const [auth] = useAuth();
    const { redirectTo } = useRedirect();
    const [first, setFirst] = useState(true);

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
            redirectTo(routes.logIn);
        } else if (settings.checkIfEmailVerified && !auth.verified) {
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
