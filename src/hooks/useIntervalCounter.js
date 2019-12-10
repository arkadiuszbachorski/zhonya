import { useState } from 'react';
import useInterval from './useInterval';

export default clock => {
    const [counter, setCounter] = useState(0);

    useInterval(() => {
        setCounter(oldCounter => oldCounter + 1);
    }, clock);

    return counter;
};
