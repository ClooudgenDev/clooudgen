'use client'

import { useEffect, useState } from 'react';
import { smoothScroll } from "@/lib/smoothScroll";
import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            setIsVisible(scrollTop > windowHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <IoIosArrowDropupCircle
                    onClick={smoothScroll}
                    className="rounded-full fixed right-5 md:right-28 bottom-20 md:bottom-6 z-20 text-primary cursor-pointer"
                    size={40}
                />
            )}
        </>
    );
};

export default ScrollToTop;