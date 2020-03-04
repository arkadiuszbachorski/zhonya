import React, { useState } from 'react';
import MainTemplate from '../../components/MainTemplate/MainTemplate';
import Input from '../../components/forms/Input/Input';
import FormInCard from '../../components/forms/FormInCard/FormInCard';
import Container from '../../components/Container/Container';
import useForm from '../../hooks/useForm';
import api from '../../api';
import useAuth from '../../hooks/useAuth';
import useGuestOnly from '../../hooks/useGuestOnly';
import useInstanceWithErrorsAndToastsAndLoading from '../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import Checkbox from '../../components/forms/Checkbox/Checkbox';
import useRedirect from '../../hooks/useRedirect';

const LogIn = () => {
    useGuestOnly();

    const [form, handleChange] = useForm({
        email: '',
        password: '',
    });

    const [rememberMe, setRememberMe] = useState(true);

    const [, setAuth] = useAuth();

    const { lastAborted, setLastAborted, redirectTo } = useRedirect();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const handleSubmit = () => {
        instance.post(api.auth.logIn, form).then(response => {
            const { data } = response;
            setAuth(
                {
                    token: data.access_token,
                    scope: data.scope,
                    verified: data.verified,
                    rememberMe: data.verified ? rememberMe : false,
                },
                data.verified ? rememberMe : true,
            );
            if (lastAborted) {
                setLastAborted(null);
                redirectTo(lastAborted);
            }
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
                </FormInCard>
            </Container>
        </MainTemplate>
    );
};

export default LogIn;
