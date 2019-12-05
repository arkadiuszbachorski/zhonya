import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

/*
 * To be used everywhere you need Auth data and setting Auth data
 * Returns [authData, authSet];
 * */

export default () => useContext(AuthContext);
