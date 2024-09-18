import { Button } from '@/components/ui/button';
import React from 'react';
import mail from '@/assets/images/software/mail.png';
import whatsapp from '@/assets/images/software/whatsapp.png';
import call from '@/assets/images/software/call.png';
import Image from 'next/image';
import FourButton from '@/components/shared/FourButton';


const SoftwareContact = () => {
  return (
    <div className="my-20 lg:mt-32">
      <div
        className="lg:h-[350px] flex flex-col justify-center  relative"
        style={{
          backgroundImage: `url(./contactImage.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="container py-5 text-xl text-center lg:text-3xl text-background">
          I&apos;d love to hear about your project
        </p>
        <div className='max-w-[728px] mx-auto'>

          <FourButton />
        </div>
      </div>
    </div>
  );
};

export default SoftwareContact;
