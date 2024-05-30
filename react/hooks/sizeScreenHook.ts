import { useState, useEffect } from "react";

type UseResizeHook = [number, boolean];

const useResize = (BREAKPOINT_MOBIL: number = 768): UseResizeHook => {
    const [isMobil, setIsMobil] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const handleUpdate = () => {
            const currentWidth = window.innerWidth;
            setIsMobil(currentWidth <= BREAKPOINT_MOBIL);
            setWidth(currentWidth);
        };

        window.addEventListener("resize", handleUpdate);
        handleUpdate();

        return () => window.removeEventListener("resize", handleUpdate);
    }, [BREAKPOINT_MOBIL]);

    return [width, isMobil];
};

export default useResize;