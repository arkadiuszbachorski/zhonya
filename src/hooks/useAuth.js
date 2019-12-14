import useStore from './useStore';

/*
 * To be used everywhere you need Auth data and setting Auth data
 * Returns [authData, authSet];
 * */

const useAuth = () => useStore('auth');

export default useAuth;
