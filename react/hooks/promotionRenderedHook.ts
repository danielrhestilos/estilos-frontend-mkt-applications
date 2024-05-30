import { useEffect, useState } from 'react';
import { canUseDOM } from 'vtex.render-runtime';

const useRenderedState = () => {
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        const checkSessionStorage = () => {
            const dataLocalStorage = canUseDOM ? window.sessionStorage.getItem('PromotionsEstilosCard') : null;

            if (dataLocalStorage !== null) {
                setRendered(true);
            } else {
                setTimeout(checkSessionStorage, 1500); // Wait 1.5 seconds before rechecking
            }
        };

        checkSessionStorage();
    }, []);

    return rendered;
};

export default useRenderedState;