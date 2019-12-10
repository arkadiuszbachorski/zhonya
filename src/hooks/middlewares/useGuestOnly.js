import { useEffect } from 'react';
import useAuth from '../useAuth';
import useRedirect from '../useRedirect';
import routes from '../../routes';

export default () => {
    const [auth] = useAuth();
    const setRedirect = useRedirect();

    useEffect(() => {
        if (auth.token !== null) {
            setRedirect(routes.userSettings);
        }
    }, [auth.token, auth.scope, setRedirect]);
};
