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
import { storeKeys } from '../../../hooks/useStore';

const Verify = () => {
    useAuthenticatedOnly({
        checkIfEmailNotVerified: true,
    });

    const redirectTo = useRedirect();

    const [auth, setAuth] = useAuth();

    const { formatMessage } = useIntl();

    const [instance] = useInstanceWithToastsAndLoading();

    const { token } = useParams();

    const submit = () => {
        instance
            .post(api.auth.verify, {
                verification_token: token,
            })
            .then(() => {
                if (!auth.rememberMe) {
                    localStorage.removeItem(storeKeys.useAuth);
                }
                toast.success(formatMessage({ id: 'toast.success.verified' }));
                setAuth(
                    {
                        ...auth,
                        verified: true,
                    },
                    auth.rememberMe,
                );
                redirectTo(routes.user.dashboard);
            })
            .catch(() => {
                toast.error(formatMessage({ id: 'toast.error.verified' }));
                redirectTo(routes.sendVerificationEmail);
            });
    };

    useEffect(() => {
        if (!auth.verified) {
            submit();
        } else {
            redirectTo(routes.user.dashboard);
        }
    }, []);

    return (
        <PanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <Loading loading />
            </Container>
        </PanelTemplate>
    );
};

export default Verify;
