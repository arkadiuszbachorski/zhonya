import React from 'react';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router';
import Container from '../../../../components/Container/Container';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import api from '../../../../api';
import useAuth from '../../../../hooks/useAuth';
import routes from '../../../../routes';
import { cancelMessage } from '../../../../hooks/api/getCancelToken';
import FormInCard from '../../../../components/forms/FormInCard/FormInCard';
import Input from '../../../../components/forms/Input/Input';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import useForm from '../../../../hooks/useForm';

const Delete = () => {
    const history = useHistory();

    const auth = useAuth();

    const { formatMessage } = useIntl();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading({
        unauthorized: 'toast.error.delete',
    });

    const [form, handleChange] = useForm({
        token: '',
    });

    const deleteAccount = () => {
        instance
            .post(api.user.delete, {
                delete_token: form.token,
            })
            .then(() => {
                toast.success(formatMessage({ id: 'toast.success.delete' }));
                auth.logOut();
            })
            .catch(error => {
                if (error.message !== cancelMessage) {
                    history.push(routes.user.sendDeleteEmail);
                }
            });
    };

    return (
        <PanelTemplate>
            <Container variant={['center', 'smallItems', 'marginTopLarge']}>
                <FormInCard variant="danger" buttonMessageId="send" onSubmit={deleteAccount} loading={loading}>
                    <Input
                        labelId="input.deleteToken"
                        name="token"
                        value={form.token}
                        errors={errors.token}
                        onChange={handleChange}
                    />
                </FormInCard>
            </Container>
        </PanelTemplate>
    );
};

export default Delete;
