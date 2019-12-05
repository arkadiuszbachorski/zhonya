import React from 'react';
import MainTemplate from '../components/MainTemplate/MainTemplate';
import Input from '../components/Input/Input';
import CardForm from '../components/cards/CardForm/CardForm';
import Container from '../components/Container/Container';
import useForm from '../hooks/useForm';
import { apiLogIn } from '../api/api';
import useAuth from '../hooks/useAuth';
import useRedirect from '../hooks/useRedirect';
import routes from '../routes';
import useGuestOnly from '../hooks/middlewares/useGuestOnly';

const LogIn = () => {
    useGuestOnly();

    const [form, handleChange, setErrors, setLoading] = useForm({
        email: '',
        password: '',
    });

    const setRedirect = useRedirect();

    const [, setAuth] = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        apiLogIn(form.data, setErrors, setLoading).then(response => {
            const { data } = response;
            setAuth(data);
            setRedirect(routes.settings);
        });
    };

    return (
        <MainTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <CardForm buttonMessageId="logIn" onSubmit={handleSubmit} loading={form.loading}>
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
                </CardForm>
            </Container>
        </MainTemplate>
    );
};

export default LogIn;
