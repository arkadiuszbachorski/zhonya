import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router';
import Container from '../../../../components/Container/Container';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import api from '../../../../api';
import useAuth from '../../../../hooks/useAuth';
import routes from '../../../../routes';
import { storeKeys } from '../../../../hooks/useStore';
import { cancelMessage } from '../../../../hooks/api/getCancelToken';
import useForm from '../../../../hooks/useForm';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import FormInCard from '../../../../components/forms/FormInCard/FormInCard';
import Input from '../../../../components/forms/Input/Input';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';
import useCheckIfUserIsVerified from '../../../../hooks/useCheckIfUserIsVerified';

const Verify = () => {
    const history = useHistory();

    const auth = useAuth();

    const { formatMessage } = useIntl();

    const [instance, loading, errors, cancel] = useInstanceWithErrorsAndToastsAndLoading({
        unauthorized: 'toast.error.verified',
    });

    const [form, handleChange] = useForm({
        token: '',
    });

    const verify = () => {
        instance
            .post(api.auth.verify, {
                verification_token: form.token,
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
                    history.push(routes.user.sendVerificationEmail);
                }
            });
    };

    useCheckIfUserIsVerified();

    return (
        <PanelTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <FormInCard buttonMessageId="send" onSubmit={verify} loading={loading}>
                    <Input
                        labelId="input.verificationToken"
                        name="token"
                        value={form.token}
                        errors={errors.token}
                        onChange={handleChange}
                    />
                </FormInCard>
            </Container>
        </PanelTemplate>
    );
};

export default Verify;
