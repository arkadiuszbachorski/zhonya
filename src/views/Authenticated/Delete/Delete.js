import React from 'react';
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
import useCancellableEffect from '../../../hooks/useCancellableEffect';
import { cancelMessage } from '../../../hooks/api/useCancelToken';

const Delete = () => {
    useAuthenticatedOnly();

    const { redirectTo } = useRedirect();

    const auth = useAuth();

    const { formatMessage } = useIntl();

    const [instance, , cancel] = useInstanceWithToastsAndLoading();

    const { token } = useParams();

    useCancellableEffect(
        () => {
            instance
                .post(api.user.delete, {
                    delete_token: token,
                })
                .then(() => {
                    toast.success(formatMessage({ id: 'toast.success.delete' }));
                    auth.logOut();
                })
                .catch(error => {
                    if (error.message !== cancelMessage) {
                        toast.error(formatMessage({ id: 'toast.error.delete' }));
                        redirectTo(routes.user.delete);
                    }
                });
        },
        [],
        cancel,
    );

    return (
        <PanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <Loading loading />
            </Container>
        </PanelTemplate>
    );
};

export default Delete;
