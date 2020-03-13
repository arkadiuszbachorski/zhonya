import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useHistory, useParams } from 'react-router';
import Container from '../../../../components/Container/Container';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import api from '../../../../api';
import Loading from '../../../../components/loading/Loading/Loading';
import useAuth from '../../../../hooks/useAuth';
import routes from '../../../../routes';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';
import { cancelMessage } from '../../../../hooks/api/getCancelToken';

const Delete = () => {
    const history = useHistory();

    const auth = useAuth();

    const { formatMessage } = useIntl();

    const [instance, , cancel] = useInstanceWithToastsAndLoading({
        unauthorized: 'toast.error.delete',
    });

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
                        history.push(routes.user.sendDeleteEmail);
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
