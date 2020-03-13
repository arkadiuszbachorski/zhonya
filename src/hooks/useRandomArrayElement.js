import { useMemo } from 'react';
import randomInteger from '../utils/randomInteger';

const useRandomArrayElement = (array = []) => {
    return useMemo(() => {
        if (array.length === 0) {
            return null;
        }
        const index = randomInteger(0, array.length - 1);
        return array[index];
    }, [array]);
};

export default useRandomArrayElement;
