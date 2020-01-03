import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useTimePreference, { useTimePreferenceProvider } from '../useTimePreference';
import { StoreContext, storeKeys } from '../useStore';
import { renderHook } from '@testing-library/react-hooks';

const Changer = ({ preference }) => {
    const [timePreference, setTimePreference] = useTimePreference();
    return (
        <>
            <h1>Preference: {timePreference || 'null'}</h1>
            <button id="button" type="button" onClick={() => setTimePreference(preference)}>
                Preference setter
            </button>
        </>
    );
};

const SimulatedApp = ({ preference }) => {
    const auth = useTimePreferenceProvider();

    return (
        <StoreContext.Provider
            value={{
                [storeKeys.useTimePreference]: auth,
            }}
        >
            <Changer preference={preference} />
        </StoreContext.Provider>
    );
};

describe('Hooks - useTimePreference, useTimePreferenceProvider both', () => {
    it('get default long', () => {
        const { getByText } = render(<SimulatedApp />);
        expect(getByText('Preference: long')).toBeInTheDocument();
    });

    it('set valid preference', () => {
        const { getByText } = render(<SimulatedApp preference="short" />);
        const button = document.getElementById('button');
        fireEvent.click(button);
        expect(getByText('Preference: short')).toBeInTheDocument();
    });

    it("can't set invalid preference", () => {
        const { result } = renderHook(() => useTimePreferenceProvider());
        expect(() => {
            result.current[1]('lorem');
        }).toThrow();
    });

    it('preserves data in localStorage', () => {
        const preference = JSON.parse(localStorage.getItem('timePreference'));
        expect(preference).toBe('short');
    });
});
