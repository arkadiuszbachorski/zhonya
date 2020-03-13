import React from 'react';
import { Redirect, Route } from 'react-router';
import routes from '../routes';
import useAuth from '../hooks/useAuth';

const FallbackRoute = () => {
    const auth = useAuth();
    const route = auth.isAuthenticated() ? routes.user.dashboard : routes.index;
    return <Route path="*" render={() => <Redirect to={route} />} />;
};

export default FallbackRoute;
