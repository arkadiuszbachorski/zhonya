import React from 'react';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import useAuthenticatedOnly from '../../../../hooks/middlewares/useAuthenticatedOnly';
import sideMenuItems from '../sideMenuItems';
import ChangePasswordForm from './ChangePasswordForm';
import ChangeEmailForm from './ChangeEmailForm';

const UserData = () => {
    useAuthenticatedOnly();

    return (
        <PanelTemplate titleId="model.user" sideMenuItems={sideMenuItems}>
            <ChangePasswordForm />
            <ChangeEmailForm />
        </PanelTemplate>
    );
};

export default UserData;
