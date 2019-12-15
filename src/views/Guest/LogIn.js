import React from 'react';
import MainTemplate from '../../components/MainTemplate/MainTemplate';
import Input from '../../components/forms/Input/Input';
import FormInCard from '../../components/forms/FormInCard/FormInCard';
import Container from '../../components/Container/Container';
import useForm from '../../hooks/useForm';
import { apiLogIn } from '../../api/api';
import useAuth from '../../hooks/useAuth';
import useGuestOnly from '../../hooks/middlewares/useGuestOnly';
import { useIntl } from 'react-intl';

const LogIn = () => {
    useGuestOnly();

    const intl = useIntl();

    const [form, handleChange, setErrors, setLoading] = useForm({
        email: '',
        password: '',
    });

    const [, setAuth] = useAuth();

    const handleSubmit = () => {
        apiLogIn(form.data, setErrors, setLoading, intl.formatMessage).then(response => {
            const { data } = response;
            setAuth({
                token: data.access_token,
                scope: data.scope,
            });
        });
    };

    return (
        <MainTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <FormInCard buttonMessageId="logIn" onSubmit={handleSubmit} loading={form.loading}>
                    <Input
                        labelId="input.email"
                        name="email"
                        groupSize="large"
                        value={form.data.email}
                        errors={form.errors.email}
                        onChange={handleChange}
                    />
                    <Input
                        labelId="input.password"
                        name="password"
                        groupSize="large"
                        value={form.data.password}
                        errors={form.errors.password}
                        type="password"
                        onChange={handleChange}
                    />
                </FormInCard>
            </Container>
        </MainTemplate>
    );
};

export default LogIn;
