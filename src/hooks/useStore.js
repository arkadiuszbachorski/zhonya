import { useContext } from 'react';
import StoreContext from '../StoreContext';

const useStore = key => {
    const store = useContext(StoreContext);

    return store[key];
};

export default useStore;
