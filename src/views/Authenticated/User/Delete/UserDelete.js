import React from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import Container from '../../../../components/Container/Container';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import sideMenuItems from '../sideMenuItems';
import api from '../../../../api';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import useAuth from '../../../../hooks/useAuth';

const UserDelete = () => {
    useAuthenticatedOnly();

    const [instance, loading] = useInstanceWithToastsAndLoading(api.user.delete);

    const { formatMessage } = useIntl();

    const [, setAuth] = useAuth();

    const handleSubmit = () => {
        instance.delete(api.user.delete).then(() => {
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
                    onSubmit={handleSubmit}
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
