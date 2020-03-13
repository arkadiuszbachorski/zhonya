import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
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

    const handleSubmit = () => {
        const { from } = location.state || { from: { pathname: routes.user.dashboard } };
        instance.post(api.auth.logIn, form).then(response => {
            const { data } = response;
            auth.setData(
                {
                    token: data.access_token,
                    scope: data.scope,
                    verified: data.verified,
                    rememberMe: data.verified ? rememberMe : false,
                },
                data.verified ? rememberMe : true,
            );
            history.replace(from);
        });
    };

    return (
        <MainTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <FormInCard buttonMessageId="logIn" onSubmit={handleSubmit} loading={loading}>
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
