import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useLocale, { useLocaleProvider } from '../useLocale';
import { StoreContext, storeKeys } from '../useStore';
import { defaultLocale } from '../../locale';

// eslint-disable-next-line react/prop-types
const Display = ({ localeToSet }) => {
    const { locale, setLocale } = useLocale();
    return (
        <>
            <p>Lang: {locale}</p>
            <button id="button" type="button" onClick={() => setLocale(localeToSet)}>
                Locale setter
            </button>
        </>
    );
};

// eslint-disable-next-line react/prop-types
const SimulatedApp = ({ localeToSet }) => {
    const locale = useLocaleProvider();

    return (
        <StoreContext.Provider
            value={{
                [storeKeys.useLocale]: locale,
            }}
        >
            <Display localeToSet={localeToSet} />
        </StoreContext.Provider>
    );
};

describe('Hook - useLocale', () => {
    it('default locale', () => {
        const { getByText } = render(<SimulatedApp />);
        expect(getByText(`Lang: ${defaultLocale}`)).toBeInTheDocument();
    });

    it('sets available locale', () => {
        const { getByText } = render(<SimulatedApp localeToSet="pl" />);
        const button = document.getElementById('button');
        act(() => {
            fireEvent.click(button);
        });
        expect(getByText(`Lang: pl`)).toBeInTheDocument();
    });

    it('sets unavailable locale', () => {
        const { getByText } = render(<SimulatedApp localeToSet="xyz" />);
        const button = document.getElementById('button');
        fireEvent.click(button);
        expect(getByText(`Lang: ${defaultLocale}`)).toBeInTheDocument();
    });
});
