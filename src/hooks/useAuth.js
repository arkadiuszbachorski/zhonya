import useStore, { storeKeys } from './useStore';
import useStateWithLocalStorage from './useStateWithLocalStorage';

export const useAuthProvider = () => {
    return useStateWithLocalStorage(storeKeys.useAuth, {
        token: null,
        scope: null,
        verified: null,
        rememberMe: false,
    });
};

const useAuth = () => useStore(storeKeys.useAuth);

export default useAuth;
