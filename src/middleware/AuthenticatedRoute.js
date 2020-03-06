import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';
import routes from '../routes';
import useAuth from '../hooks/useAuth';

const AuthenticatedRoute = ({ component: Component, settings, ...rest }) => {
    const auth = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (!auth.isAuthenticated() || (settings.scope && !auth.hasScope(settings.scope))) {
                    return (
                        <Redirect
                            to={{
                                pathname: routes.logIn,
                                state: { from: location },
                            }}
                        />
                    );
                }
                if (settings.checkIfEmailVerified && !auth.isVerified()) {
                    return (
                        <Redirect
                            to={{
                                pathname: routes.sendVerificationEmail,
                                state: { from: location },
                            }}
                        />
                    );
                }
                if (settings.checkIfEmailNotVerified && auth.isVerified()) {
                    return <Redirect to={routes.user.dashboard} />;
                }

                return <Component />;
            }}
        />
    );
};

AuthenticatedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    settings: PropTypes.shape({
        scope: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
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
