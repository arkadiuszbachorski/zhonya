import { useEffect } from 'react';

export default (action, clock) => () => {
    useEffect(() => {
        const interval = setInterval(action, clock);

        return () => clearInterval(interval);
    }, []);
};
