import React from 'react';

import ChangeThemeForm from './ChangeThemeForm';
import ChangeLocaleForm from './ChangeLocaleForm';
import UserPanelTemplate from '../UserPanelTemplate';
import ChangeTimePreferenceForm from './ChangeTimePreferenceForm';
import ChangeDatePreferenceForm from './ChangeDatePreferenceForm';
import ChangeStatisticsPreferenceForm from './ChangeStatisticsPreferenceForm';

const UserSettings = () => {
    return (
        <UserPanelTemplate>
            <ChangeThemeForm />
            <ChangeLocaleForm />
            <ChangeTimePreferenceForm />
            <ChangeDatePreferenceForm />
            <ChangeStatisticsPreferenceForm />
        </UserPanelTemplate>
    );
};

export default UserSettings;
