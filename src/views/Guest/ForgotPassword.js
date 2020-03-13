import React from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { FormattedMessage, useIntl } from 'react-intl';
import MainTemplate from '../../components/MainTemplate/MainTemplate';
import Input from '../../components/forms/Input/Input';
import FormInCard from '../../components/forms/FormInCard/FormInCard';
import Container from '../../components/Container/Container';
import useForm from '../../hooks/useForm';
import api from '../../api';
import useInstanceWithErrorsAndToastsAndLoading from '../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import routes from '../../routes';

const ForgotPassword = () => {
    const [form, handleChange] = useForm({
        email: '',
    });

    const { formatMessage } = useIntl();

    const history = useHistory();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const handleSubmit = () => {
        instance.post(api.auth.forgotPassword, form).then(() => {
            toast.success(formatMessage({ id: 'toast.success.sendPasswordResetEmail' }));
            history.push(routes.logIn);
        });
    };

    return (
        <MainTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <FormInCard buttonMessageId="action.resetPassword" onSubmit={handleSubmit} loading={loading}>
                    <p>
                        <FormattedMessage id="forgotPassword.text" />
                    </p>
                    <Input
                        labelId="input.email"
                        name="email"
                        groupSize="large"
                        value={form.email}
                        errors={errors.email}
                        onChange={handleChange}
                    />
                </FormInCard>
            </Container>
        </MainTemplate>
    );
};

export default ForgotPassword;
