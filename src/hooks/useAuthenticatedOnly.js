import { useEffect } from 'react';
import axios from 'axios';
import useAuth from './useAuth';
import useRedirect from './useRedirect';
import routes from '../routes';

const useAuthenticatedOnly = (scope = null) => {
    const [auth] = useAuth();
    const redirect = useRedirect();

    useEffect(() => {
        if (auth.token === null || (scope && auth.scope && !auth.scope.includes(scope))) {
            redirect(routes.logIn);
        }
    }, [auth.token, auth.scope, redirect, scope]);
};

export default useAuthenticatedOnly;
