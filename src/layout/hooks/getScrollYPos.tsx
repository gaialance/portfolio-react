import { useLayoutEffect , useState } from "react";

export function useScrollYPos() : number{

    const [scrollYPosition, setScrollYPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollYPosition(position);
    };

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollYPosition]);
    return scrollYPosition
}