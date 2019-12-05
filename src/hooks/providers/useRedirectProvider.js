import { useEffect, useState } from 'react';

/*
 * To be used only once in the highest component, near RedirectContext.Provider
 * */

export default () => {
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        if (redirect !== null) {
            setRedirect(null);
        }
    }, [redirect]);

    return [redirect, setRedirect];
};
