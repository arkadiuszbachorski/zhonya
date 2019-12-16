import { useEffect } from 'react';
import useAuth from '../useAuth';
import useRedirect from '../useRedirect';
import routes from '../../routes';

const useGuestOnly = () => {
    const [auth] = useAuth();
    const setRedirect = useRedirect();

    useEffect(() => {
        if (auth.token !== null) {
            setRedirect(routes.user.settings);
        }
    }, [auth.token, auth.scope, setRedirect]);
};

export default useGuestOnly;
