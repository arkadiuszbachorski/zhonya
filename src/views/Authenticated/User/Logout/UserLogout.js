import React, { useEffect } from 'react';
import PanelTemplate from '../../../../components/PanelTemplate/PanelTemplate';
import useAuthenticatedOnly from '../../../../hooks/middlewares/useAuthenticatedOnly';
import sideMenuItems from '../sideMenuItems';
import useAuth from '../../../../hooks/useAuth';

const UserLogout = () => {
    useAuthenticatedOnly();

    const [, setAuth] = useAuth();

    useEffect(() => {
        setAuth({
            token: null,
            scope: null,
        });
    }, [setAuth]);

    return <PanelTemplate titleId="model.user" sideMenuItems={sideMenuItems} />;
};

export default UserLogout;
