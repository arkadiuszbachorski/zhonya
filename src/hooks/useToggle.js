import { useState } from 'react';

export default (init = false) => {
    const [state, setState] = useState(init);

    const toggleState = () => setState(oldState => !oldState);

    return [state, toggleState];
};
