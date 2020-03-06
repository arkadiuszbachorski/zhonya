import React from 'react';

import ChangeThemeForm from './ChangeThemeForm';
import ChangeLocaleForm from './ChangeLocaleForm';
import UserPanelTemplate from '../UserPanelTemplate';
import ChangeTimePreferenceForm from './ChangeTimePreferenceForm';
import ChangeDatePreferenceForm from './ChangeDatePreferenceForm';

const UserSettings = () => {
    return (
        <UserPanelTemplate>
            <ChangeThemeForm />
            <ChangeLocaleForm />
            <ChangeTimePreferenceForm />
            <ChangeDatePreferenceForm />
        </UserPanelTemplate>
    );
};

export default UserSettings;
