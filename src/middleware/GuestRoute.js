import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';
import routes from '../routes';
import useAuth from '../hooks/useAuth';

const GuestRoute = ({ component: Component, ...rest }) => {
    const auth = useAuth();

    return (
        <Route
            {...rest}
            render={() => {
                if (auth.isAuthenticated()) {
                    return <Redirect to={routes.user.dashboard} />;
                }

                return <Component />;
            }}
        />
    );
};

GuestRoute.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
};

export default GuestRoute;
