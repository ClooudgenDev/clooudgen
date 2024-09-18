'use client'

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

const ScrollDown = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Check if user has scrolled down the page
    useEffect(() => {
        const handleScroll = () => {
            const bottomOffset = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight;

            if (window.pageYOffset > 100 && !bottomOffset) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to scroll the page down
    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight - 100, // Adjust this value as needed
            behavior: 'smooth', // Smooth scrolling
            duration: 50000,
        });
    };

    return (

        <IoIosArrowDropupCircle onClick={scrollDown} className={cn('fixed -translate-x-1/2 left-1/2 bottom-10 rotate-180 z-20 text-white opacity-20 cursor-pointer mix-blend-difference', { 'hidden': !isVisible })} size={40} />
    );
};

export default ScrollDown;