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
import { storeKeys } from '../../../../hooks/useStore';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';
import { cancelMessage } from '../../../../hooks/api/useCancelToken';

const Verify = () => {
    const history = useHistory();

    const auth = useAuth();

    const { formatMessage } = useIntl();

    const [instance, , cancel] = useInstanceWithToastsAndLoading();

    const { token } = useParams();

    useCancellableEffect(
        () => {
            instance
                .post(api.auth.verify, {
                    verification_token: token,
                })
                .then(() => {
                    if (!auth.rememberMe) {
                        localStorage.removeItem(storeKeys.useAuth);
                    }
                    toast.success(formatMessage({ id: 'toast.success.verified' }));
                    auth.setVerified(true, auth.data.rememberMe);
                    history.push(routes.user.dashboard);
                })
                .catch(error => {
                    if (error.message !== cancelMessage) {
                        toast.error(formatMessage({ id: 'toast.error.verified' }));
                        history.push(routes.sendVerificationEmail);
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

export default Verify;
