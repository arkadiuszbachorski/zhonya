import { useEffect } from 'react';

const useInterval = (action, clock) => {
    useEffect(() => {
        const interval = setInterval(action, clock);

        return () => clearInterval(interval);
    }, [action, clock]);
};

export default useInterval;
