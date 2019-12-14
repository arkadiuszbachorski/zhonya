import React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useLocale, { useLocaleProvider } from '../useLocale';
import { storeKeys, StoreContext } from '../useStore';
import { defaultLocale } from '../../locale';

const Display = ({ localeToSet }) => {
    const [lang, setLang] = useLocale();
    return (
        <>
            <p>Lang: {lang}</p>
            <button id="button" type="button" onClick={() => setLang(localeToSet)}>
                Locale setter
            </button>
        </>
    );
};

const SimulatedApp = ({ localeToSet }) => {
    const [locale, setLocale] = useLocaleProvider();

    return (
        <StoreContext.Provider
            value={{
                [storeKeys.useLocale]: [locale, setLocale],
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
