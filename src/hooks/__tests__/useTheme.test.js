import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { StoreContext, storeKeys } from '../useStore';
import useTheme, { useThemeProvider } from '../useTheme';

const Changer = () => {
    const { setTheme } = useTheme();
    return (
        <>
            <button id="button" type="button" onClick={() => setTheme('dark')}>
                Theme setter
            </button>
        </>
    );
};

const SimulatedApp = () => {
    const theme = useThemeProvider();

    return (
        <StoreContext.Provider
            value={{
                [storeKeys.useTheme]: theme,
            }}
        >
            <Changer />
        </StoreContext.Provider>
    );
};

describe('Hooks - useTheme', () => {
    it('gets default theme', () => {
        render(<SimulatedApp />);

        expect(document.body.dataset.theme).toBe('light');
    });

    it('sets theme', () => {
        render(<SimulatedApp />);
        const button = document.getElementById('button');
        fireEvent.click(button);
        expect(document.body.dataset.theme).toBe('dark');
    });
});
