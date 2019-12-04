import React, { useEffect, useState } from 'react';
import MainTemplate from '../components/MainTemplate/MainTemplate';
import Input from '../components/Input/Input';
import CardForm from '../components/cards/CardForm/CardForm';
import Container from '../components/Container/Container';
import useForm from '../hooks/useForm';
import { apiTest } from '../api/api';

Input.defaultProps.groupSize = 'large';

const LogIn = () => {
    const [form, handleChange, setErrors, setLoading] = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = e => {
        e.preventDefault();
        apiTest(form.data, setErrors, setLoading).then(response => console.log(response));
    };

    return (
        <MainTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <CardForm buttonMessageId="logIn" onSubmit={handleSubmit} loading={form.loading}>
                    <Input
                        labelId="input.email"
                        name="email"
                        value={form.data.email}
                        errors={form.errors.email}
                        onChange={handleChange}
                    />
                    <Input
                        labelId="input.password"
                        name="password"
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
