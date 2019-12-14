import useStore from './useStore';

/*
 * To be used everywhere you need to redirect somewhere
 * Returns setRedirect function
 * */

const useRedirect = () => useStore('redirect');

export default useRedirect;
