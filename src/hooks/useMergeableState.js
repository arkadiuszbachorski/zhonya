import { useState } from 'react';

const useMergeableState = initial => {
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

export default useMergeableState;
