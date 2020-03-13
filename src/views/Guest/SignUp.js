import React from 'react';
import { useHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import MainTemplate from '../../components/MainTemplate/MainTemplate';
import Input from '../../components/forms/Input/Input';
import FormInCard from '../../components/forms/FormInCard/FormInCard';
import Container from '../../components/Container/Container';
import useForm from '../../hooks/useForm';
import api from '../../api';
import useAuth from '../../hooks/useAuth';
import useInstanceWithErrorsAndToastsAndLoading from '../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import routes from '../../routes';
import ButtonSocial from '../../components/buttons/ButtonSocial/ButtonSocial';

const SignUp = () => {
    const [form, handleChange] = useForm({
        email: '',
        password: '',
        password_confirmation: '',
    });

    const history = useHistory();

    const auth = useAuth();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const handleSignUp = (route, payload) => {
        return () => {
            instance.post(route, payload).then(response => {
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
    };

    const logInFacebook = response => {
        const data = {
            email: response.email,
            access_token: response.accessToken,
        };
        handleSignUp(api.auth.signInFacebook, data)();
    };

    const handleSubmit = handleSignUp(api.auth.signIn, form);

    return (
        <MainTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <FormInCard buttonMessageId="signUp" onSubmit={handleSubmit} loading={loading}>
                    <FacebookLogin
                        appId="512393846378772"
                        fields="email"
                        callback={logInFacebook}
                        render={renderProps => (
                            <ButtonSocial
                                onClick={renderProps.onClick}
                                variant="facebook"
                                messageId="signUp.facebook"
                            />
                        )}
                    />
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
