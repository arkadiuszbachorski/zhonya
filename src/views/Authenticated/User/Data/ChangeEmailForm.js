import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import useForm from '../../../../hooks/useForm';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import Input from '../../../../components/forms/Input/Input';
import api from '../../../../api';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import useAuth from '../../../../hooks/useAuth';

const ChangeEmailForm = () => {
    const auth = useAuth();

    const { formatMessage } = useIntl();

    const [form, handleChange] = useForm({
        email: '',
    });

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const submit = () => {
        instance.put(api.user.changeEmail, form).then(() => {
            toast.success(formatMessage({ id: 'toast.success.changeEmail' }));
            auth.setVerified(false);
        });
    };

    return (
        <Container variant={['center', 'marginTopLarge']}>
            <FormWithCard
                onSubmit={submit}
                loading={loading}
                variant="edit"
                titleId="user.data.email.title"
                paragraphIds={['user.data.email.text1', 'user.data.email.text2']}
            >
                <Input
                    labelId="input.newEmail"
                    name="email"
                    value={form.email}
                    errors={errors.email}
                    onChange={handleChange}
                />
            </FormWithCard>
        </Container>
    );
};

export default ChangeEmailForm;
