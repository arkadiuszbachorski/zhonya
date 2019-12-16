import React from 'react';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import sideMenuItems from '../sideMenuItems';
import ChangeThemeForm from './ChangeThemeForm';
import ChangeLocaleForm from './ChangeLocaleForm';

const UserSettings = () => {
    useAuthenticatedOnly();

    return (
        <PanelTemplate titleId="model.user" sideMenuItems={sideMenuItems}>
            <ChangeThemeForm />
            <ChangeLocaleForm />
        </PanelTemplate>
    );
};

export default UserSettings;
