import { useState } from 'react';
import useInterval from './useInterval';

const useIntervalCounter = (clock, initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    useInterval(() => {
        setCounter(oldCounter => oldCounter + 1);
    }, clock);

    return counter;
};

export default useIntervalCounter;
