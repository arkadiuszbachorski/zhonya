import { useEffect } from 'react';
import { useHistory } from 'react-router';
import useInstanceWithToastsAndLoading from './api/useInstanceWithToastsAndLoading';
import routes from '../routes';
import api from '../api';
import useAuth from './useAuth';

const useCheckIfUserIsVerified = () => {
    const [instance] = useInstanceWithToastsAndLoading();

    const { setVerified } = useAuth();

    const history = useHistory();

    useEffect(() => {
        instance.get(api.auth.data).then(({ data: { verified } }) => {
            if (verified) {
                setVerified(true);
                history.push(routes.user.dashboard);
            }
        });
    }, []);
};

export default useCheckIfUserIsVerified;
