import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { FormattedMessage, useIntl } from 'react-intl';
import useAuthenticatedOnly from '../../../hooks/useAuthenticatedOnly';
import Container from '../../../components/Container/Container';
import FormInCard from '../../../components/forms/FormInCard/FormInCard';
import useInstanceWithToastsAndLoading from '../../../hooks/api/useInstanceWithToastsAndLoading';
import PanelTemplate from '../../../components/PanelTemplate/PanelTemplate';
import api from '../../../api';

const SendVerificationEmail = () => {
    useAuthenticatedOnly({
        checkIfEmailNotVerified: true,
    });

    const { formatMessage } = useIntl();

    const [instance, loading] = useInstanceWithToastsAndLoading();

    const submit = () => {
        instance
            .post(api.auth.send)
            .then(() => {
                toast.success(formatMessage({ id: 'toast.success.sendVerificationEmail' }));
            })
            .catch(() => {
                toast.error(formatMessage({ id: 'toast.error.sendVerificationEmail' }));
            });
    };

    useEffect(() => {
        submit();
    }, []);

    return (
        <PanelTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <FormInCard buttonMessageId="action.sendVerificationEmail" onSubmit={submit} loading={loading}>
                    <p>
                        <FormattedMessage id="verificationEmail.text" />
                    </p>
                </FormInCard>
            </Container>
        </PanelTemplate>
    );
};

export default SendVerificationEmail;
