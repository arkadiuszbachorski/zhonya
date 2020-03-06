import React from 'react';
import { useHistory } from 'react-router';
import MainTemplate from '../../components/MainTemplate/MainTemplate';
import Input from '../../components/forms/Input/Input';
import FormInCard from '../../components/forms/FormInCard/FormInCard';
import Container from '../../components/Container/Container';
import useForm from '../../hooks/useForm';
import api from '../../api';
import useAuth from '../../hooks/useAuth';
import useInstanceWithErrorsAndToastsAndLoading from '../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import routes from '../../routes';

const SignUp = () => {
    const [form, handleChange] = useForm({
        email: '',
        password: '',
        password_confirmation: '',
    });

    const history = useHistory();

    const auth = useAuth();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const handleSubmit = () => {
        instance.post(api.auth.signIn, form).then(response => {
            const { data } = response;
            auth.setData({
                token: data.access_token,
                scope: data.scope,
                verified: data.verified,
                rememberMe: true,
            });
            history.push(routes.user.sendVerificationEmail);
        });
    };

    return (
        <MainTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <FormInCard buttonMessageId="signUp" onSubmit={handleSubmit} loading={loading}>
                    <Input
                        labelId="input.email"
                        name="email"
                        groupSize="large"
                        value={form.email}
                        errors={errors.email}
                        onChange={handleChange}
                    />
                    <Input
                        labelId="input.password"
                        name="password"
                        groupSize="large"
                        value={form.password}
                        errors={errors.password}
                        type="password"
                        onChange={handleChange}
                    />
                    <Input
                        labelId="input.passwordConfirmation"
                        name="password_confirmation"
                        groupSize="large"
                        value={form.password_confirmation}
                        errors={errors.password_confirmation}
                        type="password"
                        onChange={handleChange}
                    />
                </FormInCard>
            </Container>
        </MainTemplate>
    );
};

export default SignUp;
