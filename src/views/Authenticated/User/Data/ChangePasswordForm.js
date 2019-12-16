import React from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import useForm from '../../../../hooks/useForm';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import Input from '../../../../components/forms/Input/Input';
import api from '../../../../api';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';

const ChangePasswordForm = () => {
    const { formatMessage } = useIntl();

    const [data, handleChange, resetToInit] = useForm({
        old_password: '',
        new_password: '',
        new_password_confirmation: '',
    });

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const submit = () => {
        instance.put(api.user.changePassword, data).then(() => {
            toast.success(formatMessage({ id: 'toast.success.changePassword' }));
            resetToInit();
        });
    };

    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                onSubmit={submit}
                loading={loading}
                paragraphIds={['user.data.password.text1']}
                variant="edit"
                titleId="user.data.password.title"
            >
                <Input
                    type="password"
                    labelId="input.oldPassword"
                    name="old_password"
                    value={data.old_password}
                    errors={errors.old_password}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    labelId="input.newPassword"
                    name="new_password"
                    value={data.new_password}
                    errors={errors.new_password}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    labelId="input.confirmNewPassword"
                    name="new_password_confirmation"
                    value={data.new_password_confirmation}
                    errors={errors.new_password_confirmation}
                    onChange={handleChange}
                />
            </FormWithCard>
        </Container>
    );
};

export default ChangePasswordForm;
