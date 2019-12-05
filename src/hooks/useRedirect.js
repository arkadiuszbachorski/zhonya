import { useContext } from 'react';
import RedirectContext from '../contexts/RedirectContext';

/*
 * To be used everywhere you need to redirect somewhere
 * Returns setRedirect function
 * */

export default () => useContext(RedirectContext);
