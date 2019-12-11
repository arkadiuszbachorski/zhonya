import {useContext} from 'react';
import RedirectContext from '../contexts/RedirectContext';

/*
 * To be used everywhere you need to redirect somewhere
 * Returns setRedirect function
 * */

const useRedirect = () => useContext(RedirectContext);

export default useRedirect;
