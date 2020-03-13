import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from 'react-intl';
import { Slide, ToastContainer } from 'react-toastify';
import { StoreContext, storeKeys } from '../useStore';
import useModelTitle, { useModelTitleProvider } from '../useModelTitle';
import { useAuthProvider } from '../useAuth';
import { useLocaleProvider } from '../useLocale';
import locale from '../../locale';

const Changer = () => {
    const [tagName, setTagName] = useModelTitle('tag', 1);
    return (
        <>
            <h1>Tag name: {tagName || 'none'}</h1>
            <button id="button" type="button" onClick={() => setTagName(1, 'Lorem ipsum')}>
                Tag name setter
            </button>
        </>
    );
};

const SimulatedApp = () => {
    const auth = useAuthProvider();
    const { locale: currentLocale, setLocale } = useLocaleProvider();
    const modelTitle = useModelTitleProvider();

    return (
        <IntlProvider locale={currentLocale} messages={locale[currentLocale]}>
            <StoreContext.Provider
                value={{
                    [storeKeys.useAuth]: auth,
                    [storeKeys.useLocale]: [currentLocale, setLocale],
                    [storeKeys.useModelTitle]: modelTitle,
                }}
            >
                <ToastContainer newestOnTop position="bottom-right" transition={Slide} />
                <Changer />
            </StoreContext.Provider>
        </IntlProvider>
    );
};

describe('Hooks - useModelTitle, useModelTitleProvider both', () => {
    it('holds default null', () => {
        const { getByText } = render(<SimulatedApp />);
        expect(getByText('Tag name: none')).toBeInTheDocument();
    });

    it('name can be set', () => {
        const { getByText } = render(<SimulatedApp />);
        const button = document.getElementById('button');
        fireEvent.click(button);
        expect(getByText('Tag name: Lorem ipsum')).toBeInTheDocument();
    });
});
