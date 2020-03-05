import React, { useEffect } from 'react';

import useAuth from '../../../../hooks/useAuth';
import UserPanelTemplate from '../UserPanelTemplate';

const UserLogout = () => {
    const auth = useAuth();

    useEffect(() => {
        auth.logOut();
    }, []);

    return <UserPanelTemplate />;
};

export default UserLogout;
