import React from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import api from '../../../../api';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import UserPanelTemplate from '../UserPanelTemplate';

const UserSendDeleteMail = () => {
    const [instance, loading] = useInstanceWithToastsAndLoading();

    const { formatMessage } = useIntl();

    const handleSubmit = () => {
        instance
            .post(api.user.sendDelete)
            .then(() => {
                toast.success(formatMessage({ id: 'toast.success.delete.sendMail' }));
            })
            .catch(() => {
                toast.error(formatMessage({ id: 'toast.error.delete.sendMail' }));
            });
    };

    return (
        <UserPanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <FormWithCard
                    onSubmit={handleSubmit}
                    loading={loading}
                    variant="delete"
                    titleId="user.delete.title"
                    paragraphIds={['actionCannotBeUndone', 'user.delete.text2', 'user.delete.text3']}
                />
            </Container>
        </UserPanelTemplate>
    );
};

export default UserSendDeleteMail;
