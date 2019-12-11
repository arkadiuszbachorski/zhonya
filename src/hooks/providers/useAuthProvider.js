import { useState } from 'react';

/*
 * To be used only once in the highest component, near AuthContext.Provider
 * */

const useAuthProvider = () => {
    const [auth, setAuth] = useState(() => {
        return JSON.parse(localStorage.getItem('auth')) || { token: null, scope: null };
    });

    const setAuthAndSaveToLocalStorage = newAuth => {
        localStorage.setItem('auth', JSON.stringify(newAuth));
        setAuth(newAuth);
    };

    return [auth, setAuthAndSaveToLocalStorage];
};

export default useAuthProvider;
