import { useState } from 'react';
import useInterval from './useInterval';

const useIntervalCounter = (clock, initialValue = 0, checkActiveness = false) => {
    const [counter, setCounter] = useState(initialValue);

    useInterval(
        () => {
            setCounter(oldCounter => oldCounter + 1);
        },
        clock,
        checkActiveness,
    );

    return counter;
};

export default useIntervalCounter;
