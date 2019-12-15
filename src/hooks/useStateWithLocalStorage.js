import { useState } from 'react';

/*
 * To be used only once in the highest component, near AuthContext.Provider
 * */

const useStateWithLocalStorage = (key, initial) => {
    const [state, setState] = useState(() => {
        const item = JSON.parse(localStorage.getItem(key));
        if (item) return item;
        if (typeof initial === 'function') return initial();
        return initial;
    });

    const setStateAndSaveToLocalStorage = newValue => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setState(newValue);
    };

    return [state, setStateAndSaveToLocalStorage];
};

export default useStateWithLocalStorage;
