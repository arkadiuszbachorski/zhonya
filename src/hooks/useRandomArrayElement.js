import { useState } from 'react';
import randomInteger from '../utils/randomInteger';

const useRandomArrayElement = (array = []) => {
    const [state, setState] = useState(() => {
        if (array.length === 0) {
            return null;
        }
        const index = randomInteger(0, array.length - 1);
        return array[index];
    });

    return [state, setState];
};

export default useRandomArrayElement;
