import React from 'react';
import { Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import routes from '../routes';

export default wrappedComponent => {
    const [auth] = useAuth();

    if (auth.token !== null) {
        return <Redirect to={routes.userSettings} />;
    }

    return wrappedComponent;
};
