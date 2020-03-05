import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';
import routes from '../routes';
import useAuth from '../hooks/useAuth';

const GuestRoute = ({ to, component: Component }) => {
    const auth = useAuth();

    if (auth.isAuthenticated()) {
        return <Redirect to={routes.user.dashboard} />;
    }

    return <Route to={to} exact component={Component} />;
};

GuestRoute.propTypes = {
    to: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
};

export default GuestRoute;
