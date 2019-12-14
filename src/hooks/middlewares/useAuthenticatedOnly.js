import { useEffect } from 'react';
import useAuth from '../useAuth';
import useRedirect from '../useRedirect';
import routes from '../../routes';
import axios from 'axios';

const useAuthenticatedOnly = (scope = null) => {
    const [auth] = useAuth();
    const redirect = useRedirect();

    useEffect(() => {
        if (auth.token === null || (scope && auth.scope && !auth.scope.includes(scope))) {
            redirect(routes.logIn);
        } else {
            axios.defaults.headers.common.Authorization = `Bearer ${auth.token}`;
        }
    }, [auth.token, auth.scope, redirect, scope]);
};

export default useAuthenticatedOnly;
