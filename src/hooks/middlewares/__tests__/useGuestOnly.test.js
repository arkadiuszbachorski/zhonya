import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import RedirectContext from '../../../contexts/RedirectContext';
import AuthContext from '../../../contexts/AuthContext';
import useRedirectProvider from '../../providers/useRedirectProvider';
import useRedirect from '../../useRedirect';
import '@testing-library/jest-dom/extend-expect';
import useGuestOnly from '../useGuestOnly';
import useAuth from '../../useAuth';
import useAuthProvider from '../../providers/useAuthProvider';

const Index = () => {
    const redirect = useRedirect();
    const [, setAuth] = useAuth();
    return (
        <>
            <button type="button" id="redirect" onClick={() => redirect('/guest-only')}>
                Redirect me to guest only
            </button>
            <button type="button" id="auth" onClick={() => setAuth({ token: 'topSecret', scope: 'user' })}>
                Authenticate me
            </button>
        </>
    );
};

const GuestOnly = () => {
    useGuestOnly();
    const redirect = useRedirect();

    return (
        <>
            <button type="button" id="redirect-index" onClick={() => redirect('/')}>
                Redirect to index
            </button>
            <h1>Only guests are allowed to be here</h1>
        </>
    );
};

const SimulatedApp = () => {
    const [redirect, setRedirect] = useRedirectProvider();
    const auth = useAuthProvider();
    return (
        <AuthContext.Provider value={auth}>
            <RedirectContext.Provider value={setRedirect}>
                <Router>
                    <Switch>
                        {redirect && <Redirect to={redirect} />}
                        <Route path="/" exact component={Index} />
                        <Route path="/guest-only" exact component={GuestOnly} />
                    </Switch>
                </Router>
            </RedirectContext.Provider>
        </AuthContext.Provider>
    );
};

describe('Hooks - useGuestOnly', () => {
    it('has access to guest restricted page as guest', () => {
        const { getByText } = render(<SimulatedApp />);
        const redirect = document.getElementById('redirect');

        expect(document.location.pathname).toBe('/');

        fireEvent.click(redirect);

        expect(document.location.pathname).toBe('/guest-only');
        expect(getByText('Only guests are allowed to be here')).toBeInTheDocument();
    });

    it("doesn't have access to guest restricted page as authenticated", () => {
        const { queryByText } = render(<SimulatedApp />);
        expect(document.location.pathname).toBe('/guest-only');
        const redirectIndex = document.getElementById('redirect-index');
        fireEvent.click(redirectIndex);
        expect(document.location.pathname).toBe('/');

        const auth = document.getElementById('auth');
        const redirect = document.getElementById('redirect');

        fireEvent.click(auth);
        fireEvent.click(redirect);

        expect(document.location.pathname).not.toBe('/guest-only');
        expect(queryByText('Only guests are allowed to be here')).not.toBeInTheDocument();
    });
});
