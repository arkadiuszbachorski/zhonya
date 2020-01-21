import { useEffect } from 'react';
import useVisibility from './useVisibility';

const useInterval = (action, clock, checkActiveness = false) => {
    const visible = useVisibility();

    useEffect(() => {
        let interval;
        if (checkActiveness && visible) {
            interval = setInterval(action, clock);
        }

        return () => clearInterval(interval);
    }, [action, clock, document.hidden, checkActiveness]);
};

export default useInterval;
