import React from 'react';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import ChangePasswordForm from './ChangePasswordForm';
import ChangeEmailForm from './ChangeEmailForm';
import UserPanelTemplate from '../UserPanelTemplate';

const UserData = () => {
    useAuthenticatedOnly();

    return (
        <UserPanelTemplate>
            <ChangePasswordForm />
            <ChangeEmailForm />
        </UserPanelTemplate>
    );
};

export default UserData;
