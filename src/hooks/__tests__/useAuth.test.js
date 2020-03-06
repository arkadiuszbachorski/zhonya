import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useAuth, { useAuthProvider } from '../useAuth';
import { StoreContext, storeKeys } from '../useStore';

const Changer = () => {
    const { data, setData } = useAuth();
    return (
        <>
            <h1>Token: {data.token || 'null'}</h1>
            <h1>Scope: {data.scope || 'null'}</h1>
            <button id="button" type="button" onClick={() => setData({ token: 'topSecret', scope: 'user' })}>
                Auth setter
            </button>
        </>
    );
};

const SimulatedApp = () => {
    const auth = useAuthProvider();

    return (
        <StoreContext.Provider
            value={{
                [storeKeys.useAuth]: auth,
            }}
        >
            <Changer />
        </StoreContext.Provider>
    );
};

describe('Hooks - useAuth, useAuthProvider both', () => {
    it('gets empty auth data', () => {
        const { getByText } = render(<SimulatedApp />);
        expect(getByText('Token: null')).toBeInTheDocument();
        expect(getByText('Scope: null')).toBeInTheDocument();
    });

    it('sets auth data', () => {
        const { getByText } = render(<SimulatedApp />);
        const button = document.getElementById('button');
        fireEvent.click(button);
        expect(getByText('Token: topSecret')).toBeInTheDocument();
        expect(getByText('Scope: user')).toBeInTheDocument();
    });

    it('preserves data in localStorage', () => {
        const { token } = JSON.parse(localStorage.getItem('auth'));
        expect(token).toBe('topSecret');
    });
});
