'use client'
import { useEffect, useState } from 'react';

const UserScroll = () => {
    const [scroY, setScrollY] = useState(0);
    const [status, setStatus] = useState(true);
  
    useEffect(() => {
      function handleScroll() {
        const scrollValueY = window.scrollY;
        const windowHeight = window.innerHeight;
        if (scrollValueY > scroY) {
          setStatus(false);
        } 
        else if(scroY < windowHeight){
            setStatus(true)
        }
         else {
          setStatus(true);
        }
        setScrollY(scrollValueY);
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scroY]);
    return [status]
};

export default UserScroll;