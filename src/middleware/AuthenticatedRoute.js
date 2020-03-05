import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';
import routes from '../routes';
import useAuth from '../hooks/useAuth';

const AuthenticatedRoute = ({ to, component: Component, settings }) => {
    const auth = useAuth();

    if (!auth.isAuthenticated() || (settings.scope && auth.scope && !auth.hasScope(settings.scope))) {
        return <Redirect to={routes.logIn} />;
    }
    if (settings.checkIfEmailVerified && !auth.isVerified()) {
        return <Redirect to={routes.sendVerificationEmail} />;
    }
    if (settings.checkIfEmailNotVerified && auth.isVerified()) {
        return <Redirect to={routes.user.dashboard} />;
    }

    return <Route to={to} exact component={Component} />;
};

AuthenticatedRoute.propTypes = {
    to: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    settings: PropTypes.shape({
        scope: PropTypes.string,
        checkIfEmailVerified: PropTypes.bool,
        checkIfEmailNotVerified: PropTypes.bool,
    }),
};

AuthenticatedRoute.defaultProps = {
    settings: {
        scope: false,
        checkIfEmailVerified: true,
        checkIfEmailNotVerified: false,
    },
};

export default AuthenticatedRoute;
