import React, { useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import MainTemplate from '../../components/MainTemplate/MainTemplate';
import Input from '../../components/forms/Input/Input';
import FormInCard from '../../components/forms/FormInCard/FormInCard';
import Container from '../../components/Container/Container';
import useForm from '../../hooks/useForm';
import api from '../../api';
import useAuth from '../../hooks/useAuth';
import useInstanceWithErrorsAndToastsAndLoading from '../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import Checkbox from '../../components/forms/Checkbox/Checkbox';
import routes from '../../routes';
import ButtonSocial from '../../components/buttons/ButtonSocial/ButtonSocial';

const LogIn = () => {
    const [form, handleChange] = useForm({
        email: '',
        password: '',
    });

    const history = useHistory();

    const location = useLocation();

    const [rememberMe, setRememberMe] = useState(false);

    const auth = useAuth();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading({
        unauthorized: 'toast.error.login.wrongCredentials',
    });

    const from = useMemo(() => {
        const { from: fr } = location.state || { from: { pathname: routes.user.dashboard } };

        return fr;
    }, [location.state]);

    const handleSubmit = () => {
        instance.post(api.auth.logIn, form).then(response => {
            auth.logIn(response.data, rememberMe);
            history.replace(from);
        });
    };

    const logInFacebook = fbResponse => {
        if (fbResponse.status === 'unknown') {
            return;
        }

        const data = {
            email: fbResponse.email,
            access_token: fbResponse.accessToken,
        };
        instance.post(api.auth.logInFacebook, data).then(response => {
            auth.logIn(response.data, rememberMe);
            history.replace(from);
        });
    };

    return (
        <MainTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <FormInCard buttonMessageId="logIn" onSubmit={handleSubmit} loading={loading}>
                    <FacebookLogin
                        appId="512393846378772"
                        fields="email"
                        callback={logInFacebook}
                        render={renderProps => (
                            <ButtonSocial onClick={renderProps.onClick} variant="facebook" messageId="logIn.facebook" />
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
                    <Checkbox
                        checked={rememberMe}
                        groupSize="large"
                        value="rememberMe"
                        labelId="rememberMe"
                        name="rememberMe"
                        onChange={e => setRememberMe(e.target.checked)}
                    />
                    <Link to={routes.forgotPassword} className="small-muted-link">
                        <FormattedMessage id="forgotPassword" />
                    </Link>
                </FormInCard>
            </Container>
        </MainTemplate>
    );
};

export default LogIn;
