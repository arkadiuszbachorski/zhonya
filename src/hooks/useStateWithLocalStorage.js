import { useState } from 'react';

/*
 * To be used only once in the highest component, near AuthContext.Provider
 * */

const useStateWithLocalStorage = (key, initial) => {
    const [state, setState] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) || initial;
    });

    const setStateAndSaveToLocalStorage = newValue => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setState(newValue);
    };

    return [state, setStateAndSaveToLocalStorage];
};

export default useStateWithLocalStorage;
