import MobileBanking from '@/components/pages/payment/MobileBanking';
import PayWithExicutive from '@/components/pages/payment/PayWithExicutive';
import PaymentHero from '@/components/pages/payment/PaymentHero';
import PaymentMethod from '@/components/pages/payment/PaymentMethod';
import React from 'react';

export const metadata = {
    title: "Clooudgen | Payment Option",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };
const page = () => {
    return (
        <div className='overflow-hidden'>
            <PaymentHero />
            <PaymentMethod />
            <MobileBanking />
            <PayWithExicutive />
        </div>
    );
};

export default page;