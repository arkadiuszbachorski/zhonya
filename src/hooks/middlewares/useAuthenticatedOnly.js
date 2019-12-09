import { useEffect } from 'react';
import useAuth from '../useAuth';
import useRedirect from '../useRedirect';
import routes from '../../routes';

export default (scope = null) => {
    const [auth] = useAuth();
    const redirect = useRedirect();

    useEffect(() => {
        if (auth.token === null || (scope && auth.scope && !auth.scope.includes(scope))) {
            redirect(routes.logIn);
        }
    }, [auth.token, auth.scope, redirect, scope]);
};
