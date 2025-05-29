import { useCallback } from 'react';

const Anchor = ({ targetId, children, className = '', offset = 0 }) => {
    const handleClick = useCallback(
        (e) => {
            e.preventDefault();
            const element = document.getElementById(targetId);

            if (element) {
                const topPosition = element.getBoundingClientRect().top + window.scrollY + offset;
                window.scrollTo({ top: topPosition, behavior: 'smooth' });
            }
        },
        [targetId, offset]
    );

    return (
        <button onClick={handleClick} className={className} style={{ all: 'unset', cursor: 'pointer' }}>
            {children}
        </button>
    );
};
export default Anchor