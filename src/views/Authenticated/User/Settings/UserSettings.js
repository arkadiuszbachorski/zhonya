import React from 'react';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import ChangeThemeForm from './ChangeThemeForm';
import ChangeLocaleForm from './ChangeLocaleForm';
import UserPanelTemplate from '../UserPanelTemplate';

const UserSettings = () => {
    useAuthenticatedOnly();

    return (
        <UserPanelTemplate>
            <ChangeThemeForm />
            <ChangeLocaleForm />
        </UserPanelTemplate>
    );
};

export default UserSettings;
