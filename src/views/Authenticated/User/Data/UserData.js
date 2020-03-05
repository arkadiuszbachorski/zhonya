import React from 'react';

import ChangePasswordForm from './ChangePasswordForm';
import ChangeEmailForm from './ChangeEmailForm';
import UserPanelTemplate from '../UserPanelTemplate';

const UserData = () => {
    return (
        <UserPanelTemplate>
            <ChangePasswordForm />
            <ChangeEmailForm />
        </UserPanelTemplate>
    );
};

export default UserData;
