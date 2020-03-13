import useStore, { storeKeys } from './useStore';
import useStateWithLocalStorage from './useStateWithLocalStorage';

const defaultAuthData = {
    token: null,
    scope: null,
    verified: null,
    rememberMe: false,
};

export const useAuthProvider = () => {
    const [data, setData] = useStateWithLocalStorage(storeKeys.useAuth, defaultAuthData);

    const isAuthenticated = () => {
        return data.token !== null;
    };

    const hasScope = scope => {
        return (data.scope ?? '').includes(scope);
    };

    const isVerified = () => {
        return !!data.verified;
    };

    const logOut = () => {
        setData(defaultAuthData);
    };

    const logIn = (loginData, rememberMe) => {
        setData(
            {
                token: loginData.access_token,
                scope: loginData.scope,
                verified: loginData.verified,
                rememberMe: loginData.verified ? rememberMe : false,
            },
            loginData.verified ? rememberMe : true,
        );
    };

    const setVerified = (verified, saveInStorage = true) => {
        setData(
            oldData => ({
                ...oldData,
                verified,
            }),
            saveInStorage,
        );
    };

    return { data, setData, isAuthenticated, hasScope, logOut, isVerified, setVerified, logIn };
};

const useAuth = () => useStore(storeKeys.useAuth);

export default useAuth;
