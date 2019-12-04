import { useState } from 'react';

export default initial => {
    const [state, setState] = useState(initial);

    const mergeAndSetState = newState => {
        setState(oldState => {
            return {
                ...oldState,
                ...newState,
            };
        });
    };

    return [state, mergeAndSetState];
};
