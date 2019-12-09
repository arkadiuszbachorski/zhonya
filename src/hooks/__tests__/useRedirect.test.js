import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter, Redirect, Route, Switch } from 'react-router-dom';
import RedirectContext from '../../contexts/RedirectContext';
import useRedirectProvider from '../providers/useRedirectProvider';
import useRedirect from '../useRedirect';
import '@testing-library/jest-dom/extend-expect';

const SimulatedIndex = () => {
    const redirect = useRedirect();
    return (
        <button type="button" id="button" onClick={() => redirect('/result')}>
            Redirect me
        </button>
    );
};

const SimulatedResult = () => <h1>You were redirected</h1>;

const SimulatedApp = () => {
    const [redirect, setRedirect] = useRedirectProvider();
    return (
        <MemoryRouter>
            <RedirectContext.Provider value={setRedirect}>
                <Router>
                    <Switch>
                        {redirect && <Redirect to={redirect} />}
                        <Route path="/" exact component={SimulatedIndex} />
                        <Route path="/result" exact component={SimulatedResult} />
                    </Switch>
                </Router>
            </RedirectContext.Provider>
        </MemoryRouter>
    );
};

describe('Hooks - useRedirect, useRedirectProvider both', () => {
    it('redirect with useRedirect hook', () => {
        const { getByText } = render(<SimulatedApp />);
        const button = document.getElementById('button');

        expect(document.location.pathname).toBe('/');

        fireEvent.click(button);

        expect(document.location.pathname).toBe('/result');
        expect(getByText('You were redirected')).toBeInTheDocument();
    });
});
