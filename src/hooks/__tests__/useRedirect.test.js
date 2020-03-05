import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter, Redirect, Route, Switch } from 'react-router-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import useRedirect, { useRedirectProvider } from '../useRedirect';
import '@testing-library/jest-dom/extend-expect';
import { StoreContext, storeKeys } from '../useStore';

const SimulatedIndex = () => {
    const { redirectTo } = useRedirect();
    return (
        <button type="button" id="button" onClick={() => redirectTo('/result')}>
            Redirect me
        </button>
    );
};

const SimulatedResult = () => <h1>You were redirected</h1>;

const SimulatedApp = () => {
    const redirect = useRedirectProvider();
    return (
        <MemoryRouter>
            <StoreContext.Provider
                value={{
                    [storeKeys.useRedirect]: redirect,
                }}
            >
                <Router>
                    <Switch>
                        {redirect.redirectPath && <Redirect to={redirect.redirectPath} />}
                        <Route path="/" exact component={SimulatedIndex} />
                        <Route path="/result" exact component={SimulatedResult} />
                    </Switch>
                </Router>
            </StoreContext.Provider>
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

    it('able to set lastAborted as Location object or simple string', () => {
        const { result } = renderHook(() => useRedirectProvider());

        expect(result.current.lastAborted).toBeNull();

        act(() => {
            result.current.setLastAborted({
                pathname: '/lorem',
            });
        });

        expect(result.current.lastAborted).toBe('/lorem');

        act(() => {
            result.current.setLastAborted('/ipsum');
        });

        expect(result.current.lastAborted).toBe('/ipsum');
    });

    it('cant set login route as lastAborted', () => {
        const { result } = renderHook(() => useRedirectProvider());

        expect(result.current.lastAborted).toBeNull();

        result.current.setLastAborted('/logout');

        expect(result.current.lastAborted).toBeNull();
    });
});
