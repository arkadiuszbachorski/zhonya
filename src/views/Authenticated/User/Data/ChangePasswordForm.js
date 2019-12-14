import React from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import useForm from '../../../../hooks/useForm';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import Input from '../../../../components/forms/Input/Input';
import { apiUserChangePassword } from '../../../../api/api';

const ChangePasswordForm = () => {
    const { formatMessage } = useIntl();

    const [form, handleChange, setErrors, setLoading, resetData] = useForm({
        old_password: '',
        new_password: '',
        new_password_confirmation: '',
    });

    const submit = () => {
        apiUserChangePassword(form.data, setErrors, setLoading, formatMessage).then(response => {
            toast.success(formatMessage({ id: 'toast.success.changePassword' }));
            resetData();
        });
    };

    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                onSubmit={submit}
                loading={form.loading}
                paragraphIds={['user.data.password.text1']}
                variant="edit"
                titleId="user.data.password.title"
            >
                <Input
                    type="password"
                    labelId="input.oldPassword"
                    name="old_password"
                    value={form.data.old_password}
                    errors={form.errors.old_password}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    labelId="input.newPassword"
                    name="new_password"
                    value={form.data.new_password}
                    errors={form.errors.new_password}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    labelId="input.confirmNewPassword"
                    name="new_password_confirmation"
                    value={form.data.new_password_confirmation}
                    errors={form.errors.new_password_confirmation}
                    onChange={handleChange}
                />
            </FormWithCard>
        </Container>
    );
};

export default ChangePasswordForm;
