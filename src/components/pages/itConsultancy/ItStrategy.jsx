import Hero from '@/components/shared/hero/Hero';
import { Button } from '@/components/ui/button';
import React from 'react';
import Itobject from '@/assets/images/it-consultancy/ItObject.png';
import Image from 'next/image';
import FourButton from '@/components/shared/FourButton';
const ItStrategy = () => {
  return (
    <div className="my-20 lg:my-32 bg-gradient-to-r from-cyan-100 to-cyan-50">
      <div className="container items-center justify-between gap-10 px-5 py-16 xl:flex ">
        <div>
          <p className="sm:text-center description-1">
            Is there a gap between your business objectives and your IT
            strategy? Let us bridge that divide with our comprehensive IT
            consulting services. Connect with us today to align your technology
            vision with your business goals!
          </p>
          <div className='max-w-[600px] mx-auto'>

            <FourButton />
          </div>
        </div>
        <Image className="xl:max-w-[600px] mx-auto" src={Itobject} alt="" />
      </div>
    </div>
  );
};

export default ItStrategy;
