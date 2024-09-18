import { Button } from '@/components/ui/button';
import React from 'react';
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const OurFacility = () => {
    const services = ['Excellence in every service provided.','Unmatched support for client needs.','Ensuring your utmost satisfaction always.']
  return (
    <div className="flex items-center">
      <section
        id=""
        className={`w-full flex-1 py-10 my-10 md:my-20 h-[440px] lg:block hidden bg-center md:py-12 lg:py-16  bg-slate-400  text-background`}
        style={{ backgroundImage: 'url(./Facility.jpg)' }}
      ></section>
      <section
        id=""
        className={`w-full py-10 my-10 md:my-20 lg:h-[440px] h-full px-10 md:py-12 lg:py-16 flex-1 bg-slate-400  text-background`}
        style={{ backgroundImage: 'url(./second.jpg)' }}
      >
        <div className=''>
            <h4 className='heading-2'>We give the best to our client</h4>
            <p className='my-4'>We prioritize excellence, delivering top-quality services and unmatched support to ensure our client&apos;s utmost satisfaction.</p>
            <div className='flex flex-col gap-3 mt-4 mb-5'>
              {services.map((item,key)=>(
                <li key={key} className='text-xl list-none flex gap-3'><IoCheckmarkDoneSharp className='text-primary' />{item}</li>
              ))}
            </div>
            <Button className='ml-6'>Read More</Button>
        </div>
      </section>
    </div>
  );
};

export default OurFacility;
