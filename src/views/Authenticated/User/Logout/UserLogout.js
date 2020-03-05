import React, { useEffect } from 'react';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useAuth from '../../../../hooks/useAuth';
import UserPanelTemplate from '../UserPanelTemplate';

const UserLogout = () => {
    useAuthenticatedOnly();

    const auth = useAuth();

    useEffect(() => {
        auth.logOut();
    }, []);

    return <UserPanelTemplate />;
};

export default UserLogout;
