'use client';
import { useEffect, useState } from 'react';
import Popup from './Popup';

export default function Advertisement() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popup, setPopup] = useState(0)

  useEffect(() => {
    // Show popup 1 second after the page loads
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 5000);


    // Cleanup the timer if the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <Popup isVisible={isPopupVisible} onClose={handleClosePopup} />
    </div>
  );
}
