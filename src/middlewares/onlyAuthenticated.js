import React from 'react';
import { Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import routes from '../routes';

export default (wrappedComponent, scope = null) => {
    const [auth] = useAuth();

    if (auth.token === null || (scope && !auth.scope.contains(scope))) {
        return <Redirect to={routes.logIn} />;
    }

    return wrappedComponent;
};
