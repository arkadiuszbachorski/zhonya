import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import useForm from '../../../../hooks/useForm';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import Input from '../../../../components/forms/Input/Input';
import { apiUserChangeEmail } from '../../../../api/api';

const ChangeEmailForm = () => {
    const { formatMessage } = useIntl();

    const [form, handleChange, setErrors, setLoading] = useForm({
        email: '',
    });

    const submit = () => {
        apiUserChangeEmail(form.data, setErrors, setLoading, formatMessage).then(() => {
            toast.success(formatMessage({ id: 'toast.success.changeEmail' }));
        });
    };

    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                onSubmit={submit}
                loading={form.loading}
                variant="edit"
                titleId="user.data.email.title"
                paragraphIds={['user.data.email.text1', 'user.data.email.text2']}
            >
                <Input
                    labelId="input.newEmail"
                    name="email"
                    value={form.data.email}
                    errors={form.errors.email}
                    onChange={handleChange}
                />
            </FormWithCard>
        </Container>
    );
};

export default ChangeEmailForm;
