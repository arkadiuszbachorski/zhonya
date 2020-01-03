import React from 'react';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import ChangeThemeForm from './ChangeThemeForm';
import ChangeLocaleForm from './ChangeLocaleForm';
import UserPanelTemplate from '../UserPanelTemplate';
import ChangeTimePreferenceForm from './ChangeTimePreferenceForm';

const UserSettings = () => {
    useAuthenticatedOnly();

    return (
        <UserPanelTemplate>
            <ChangeThemeForm />
            <ChangeLocaleForm />
            <ChangeTimePreferenceForm />
        </UserPanelTemplate>
    );
};

export default UserSettings;
