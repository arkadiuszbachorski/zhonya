import React from 'react';
import { useIntl } from 'react-intl';
import MainTemplate from '../components/MainTemplate/MainTemplate';
import Input from '../components/Input/Input';
import CardForm from '../components/cards/CardForm/CardForm';
import Container from '../components/Container/Container';
import useForm from '../hooks/useForm';
import { apiSignUp } from '../api/api';
import useAuth from '../hooks/useAuth';
import useRedirect from '../hooks/useRedirect';
import routes from '../routes';
import useGuestOnly from '../hooks/middlewares/useGuestOnly';

const SignUp = () => {
    useGuestOnly();

    const intl = useIntl();

    const [form, handleChange, setErrors, setLoading] = useForm({
        email: '',
        password: '',
        password_confirmation: '',
    });

    const setRedirect = useRedirect();

    const [, setAuth] = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        apiSignUp(form.data, setErrors, setLoading, intl.formatMessage).then(response => {
            const { data } = response;
            setAuth(data);
            setRedirect(routes.userSettings);
        });
    };

    return (
        <MainTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <CardForm buttonMessageId="signUp" onSubmit={handleSubmit} loading={form.loading}>
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
                    <Input
                        labelId="input.passwordConfirmation"
                        name="password_confirmation"
                        groupSize="large"
                        value={form.data.password_confirmation}
                        errors={form.errors.password_confirmation}
                        type="password"
                        onChange={handleChange}
                    />
                </CardForm>
            </Container>
        </MainTemplate>
    );
};

export default SignUp;
