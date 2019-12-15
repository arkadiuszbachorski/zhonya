import React from 'react';
import { useIntl } from 'react-intl';
import MainTemplate from '../../components/MainTemplate/MainTemplate';
import Input from '../../components/forms/Input/Input';
import FormInCard from '../../components/forms/FormInCard/FormInCard';
import Container from '../../components/Container/Container';
import useForm from '../../hooks/useForm';
import { apiSignUp } from '../../api/api';
import useAuth from '../../hooks/useAuth';
import useGuestOnly from '../../hooks/middlewares/useGuestOnly';

const SignUp = () => {
    useGuestOnly();

    const intl = useIntl();

    const [form, handleChange, setErrors, setLoading] = useForm({
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [, setAuth] = useAuth();

    const handleSubmit = () => {
        apiSignUp(form.data, setErrors, setLoading, intl.formatMessage).then(response => {
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
                <FormInCard buttonMessageId="signUp" onSubmit={handleSubmit} loading={form.loading}>
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
                </FormInCard>
            </Container>
        </MainTemplate>
    );
};

export default SignUp;
