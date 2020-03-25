import React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from 'react-intl';
import { Slide, ToastContainer } from 'react-toastify';
import { StoreContext, storeKeys } from '../useStore';
import useModelTitle, { useModelTitleProvider } from '../useModelTitle';
import { useAuthProvider } from '../useAuth';
import { useLocaleProvider } from '../useLocale';
import locale from '../../locale';
import * as useInstanceWithToastsAndLoading from '../api/useInstanceWithToastsAndLoading';

useInstanceWithToastsAndLoading.default = jest.fn(() => {
    const instance = {
        get: jest.fn(),
    };
    instance.get.mockResolvedValue({
        data: 'Fetched name',
    });
    const loading = false;
    const cancel = () => null;

    return [instance, loading, cancel];
});

const Changer = () => {
    const [tagName, setTagName] = useModelTitle('tag', 1, 'test.com');
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

    it('fetches data automatically', async () => {
        const { getByText } = render(<SimulatedApp />);
        await setTimeout(() => {
            expect(getByText('Tag name: Fetched name')).toBeInTheDocument();
        }, 500);
    });

    it('name can be set manually', () => {
        const { getByText } = render(<SimulatedApp />);
        const button = document.getElementById('button');
        act(() => {
            fireEvent.click(button);
        });
        expect(getByText('Tag name: Lorem ipsum')).toBeInTheDocument();
    });
});
