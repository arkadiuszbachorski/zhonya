import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import RedirectContext from '../../../contexts/RedirectContext';
import AuthContext from '../../../contexts/AuthContext';
import useRedirectProvider from '../../providers/useRedirectProvider';
import useRedirect from '../../useRedirect';
import '@testing-library/jest-dom/extend-expect';
import useAuth from '../../useAuth';
import useAuthProvider from '../../providers/useAuthProvider';
import useAuthenticatedOnly from '../useAuthenticatedOnly';

const Index = () => {
    const redirect = useRedirect();
    const [auth, setAuth] = useAuth();
    return (
        <>
            <button type="button" id="redirect" onClick={() => redirect('/admin-only')}>
                Redirect me to admin only
            </button>
            <button
                type="button"
                id="auth"
                onClick={() => setAuth({ token: 'topSecret', scope: auth.scope ? 'admin' : 'user' })}
            >
                Authenticate me
            </button>
        </>
    );
};

const AuthenticatedOnly = () => {
    useAuthenticatedOnly('admin');
    const redirect = useRedirect();

    return (
        <>
            <button type="button" id="redirect-index" onClick={() => redirect('/')}>
                Redirect to index
            </button>
            <h1>Only admins are allowed to be here</h1>
        </>
    );
};

const SimulatedApp = () => {
    const [redirect, setRedirect] = useRedirectProvider();
    const auth = useAuthProvider();
    return (
        <Router>
            <AuthContext.Provider value={auth}>
                <RedirectContext.Provider value={setRedirect}>
                    <Router>
                        <Switch>
                            {redirect && <Redirect to={redirect === '/log-in' ? '/' : redirect} />}
                            <Route path="/" exact component={Index} />
                            <Route path="/admin-only" exact component={AuthenticatedOnly} />
                        </Switch>
                    </Router>
                </RedirectContext.Provider>
            </AuthContext.Provider>
        </Router>
    );
};

describe('Hooks - useAuthenticatedOnly', () => {
    it("doesn't have access to admin restricted page as guest", () => {
        const { queryByText } = render(<SimulatedApp />);
        const redirect = document.getElementById('redirect');

        expect(document.location.pathname).toBe('/');

        fireEvent.click(redirect);

        expect(document.location.pathname).not.toBe('/admin-only');
        expect(queryByText('Only admins are allowed to be here')).not.toBeInTheDocument();
    });

    it("doesn't have access to admin restricted page as authenticated user", async () => {
        const { queryByText } = render(<SimulatedApp />);
        expect(document.location.pathname).toBe('/');

        const auth = document.getElementById('auth');
        const redirect = document.getElementById('redirect');

        await fireEvent.click(auth);
        await fireEvent.click(redirect);

        expect(document.location.pathname).not.toBe('/admin-only');
        expect(queryByText('Only admins are allowed to be here')).not.toBeInTheDocument();
    });

    it("doesn't have access to admin restricted page as authenticated admin", () => {
        const { queryByText } = render(<SimulatedApp />);
        expect(document.location.pathname).toBe('/');

        const auth = document.getElementById('auth');
        const redirect = document.getElementById('redirect');

        fireEvent.click(auth);
        fireEvent.click(redirect);

        expect(document.location.pathname).toBe('/admin-only');
        expect(queryByText('Only admins are allowed to be here')).toBeInTheDocument();
    });
});
