import React, { useEffect } from 'react';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useAuth from '../../../../hooks/useAuth';
import UserPanelTemplate from '../UserPanelTemplate';

const UserLogout = () => {
    useAuthenticatedOnly();

    const [, setAuth] = useAuth();

    useEffect(() => {
        setAuth({
            token: null,
            scope: null,
        });
    }, [setAuth]);

    return <UserPanelTemplate />;
};

export default UserLogout;
