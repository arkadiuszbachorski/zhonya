import { useState } from 'react';
import useInterval from './useInterval';

const useIntervalCounter = clock => {
    const [counter, setCounter] = useState(0);

    useInterval(() => {
        setCounter(oldCounter => oldCounter + 1);
    }, clock);

    return counter;
};

export default useIntervalCounter;
