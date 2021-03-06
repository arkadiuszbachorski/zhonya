import { useEffect, useState } from 'react';

let hidden = null;
let visibilityChange = null;

if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
}

const useVisibility = () => {
    const [visible, setVisible] = useState(!document[hidden]);

    const setVisibleDocumentHidden = () => {
        setVisible(!document[hidden]);
    };

    useEffect(() => {
        window.addEventListener(visibilityChange, setVisibleDocumentHidden);

        return () => window.removeEventListener(visibilityChange, setVisibleDocumentHidden);
    }, []);

    return visible;
};

export default useVisibility;
