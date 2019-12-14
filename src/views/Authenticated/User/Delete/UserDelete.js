import React, { useState } from 'react';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import sideMenuItems from '../sideMenuItems';
import { useIntl } from 'react-intl';
import { apiUserDelete } from '../../../../api/api';
import { toast } from 'react-toastify';
import useAuth from '../../../../hooks/useAuth';
import useAuthenticatedOnly from '../../../../hooks/middlewares/useAuthenticatedOnly';

const UserDelete = () => {
    useAuthenticatedOnly();

    const { formatMessage } = useIntl();
    const [, setAuth] = useAuth();
    const [loading, setLoading] = useState(false);

    const submit = () => {
        apiUserDelete(setLoading, formatMessage).then(() => {
            toast.success(formatMessage({ id: 'toast.success.deleteAccount' }));
            setAuth({
                token: null,
                scope: null,
            });
        });
    };

    return (
        <PanelTemplate titleId="model.user" sideMenuItems={sideMenuItems}>
            <Container variant={['center', 'marginTopLarge']}>
                <FormWithCard
                    onSubmit={submit}
                    loading={loading}
                    variant="delete"
                    titleId="user.delete.title"
                    paragraphIds={['actionCannotBeUndone', 'user.delete.text2']}
                />
            </Container>
        </PanelTemplate>
    );
};

export default UserDelete;
