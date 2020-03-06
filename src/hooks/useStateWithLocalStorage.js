import { useState } from 'react';

/*
 * To be used only once in the highest component, near AuthContext.Provider
 * */

const useStateWithLocalStorage = (key, initial) => {
    const [state, setState] = useState(() => {
        const item = localStorage.getItem(key);
        const parsed = item !== 'undefined' ? JSON.parse(item) : undefined;
        if (parsed) return parsed;
        if (typeof initial === 'function') return initial();
        return initial;
    });

    const setStateAndSaveToLocalStorage = (newValue, saveToStorage = true) => {
        if (saveToStorage) {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
        setState(newValue);
    };

    return [state, setStateAndSaveToLocalStorage];
};

export default useStateWithLocalStorage;
