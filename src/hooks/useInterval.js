import { useEffect, useState } from 'react';

export default transitionTime => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1);
        }, transitionTime);

        return () => clearInterval(interval);
    }, []);

    return [counter];
};
