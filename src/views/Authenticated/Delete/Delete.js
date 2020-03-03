import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import useAuthenticatedOnly from '../../../hooks/useAuthenticatedOnly';
import Container from '../../../components/Container/Container';
import useInstanceWithToastsAndLoading from '../../../hooks/api/useInstanceWithToastsAndLoading';
import PanelTemplate from '../../../components/PanelTemplate/PanelTemplate';
import api from '../../../api';
import Loading from '../../../components/loading/Loading/Loading';
import useAuth from '../../../hooks/useAuth';
import useRedirect from '../../../hooks/useRedirect';
import routes from '../../../routes';

const Delete = () => {
    useAuthenticatedOnly();

    const { redirectTo } = useRedirect();

    const [, setAuth] = useAuth();

    const { formatMessage } = useIntl();

    const [instance] = useInstanceWithToastsAndLoading();

    const { token } = useParams();

    const submit = () => {
        instance
            .post(api.user.delete, {
                delete_token: token,
            })
            .then(() => {
                toast.success(formatMessage({ id: 'toast.success.delete' }));
                setAuth({
                    token: null,
                    scope: null,
                    verified: null,
                    rememberMe: false,
                });
            })
            .catch(() => {
                toast.error(formatMessage({ id: 'toast.error.delete' }));
                redirectTo(routes.user.delete);
            });
    };

    useEffect(() => {
        submit();
    }, []);

    return (
        <PanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <Loading loading />
            </Container>
        </PanelTemplate>
    );
};

export default Delete;
