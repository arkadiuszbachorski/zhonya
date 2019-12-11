import {useState} from 'react';

const useToggle = (init = false) => {
    const [state, setState] = useState(init);

    const toggleState = () => setState(oldState => !oldState);

    return [state, toggleState];
};

export default useToggle;
