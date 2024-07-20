"use client";

import { useEffect, useState } from "react";

export default function NoScroll({ noScroll }) {

    const [windowResize, setWindowResize] = useState(0);

    useEffect(() => {
        document.body.style.overflow = noScroll ? 'hidden' : 'auto';

        const handleResize = () => {
            document.body.style.overflow = noScroll ? 'hidden' : 'auto';
            setWindowResize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [noScroll,windowResize]);

    return null;
}
