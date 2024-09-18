import ContactCard from '@/components/pages/contactClooudgen/ContactCard';
import React from 'react';

export const metadata = {
    title: "Clooudgen | Contact Cloouden",
    description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
  };
const ContactClooudgen = () => {
    return (
        <div className='overflow-hidden'>
            <ContactCard />
        </div>
    );
};

export default ContactClooudgen;