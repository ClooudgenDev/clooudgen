import titleBg from '@/assets/images/appdevelopment/bgwhyChoose.png'

import Image from 'next/image';

import WhyChooseUsData from '@/lib/data/AppDevelopment/WhyChoose';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

const WhyChoose = () => {
  return (
    <div className='container w-full mt-20 mb-20 md:mt-36'>
      <div className='relative flex items-center justify-center bottom-10'>
        <Image className='absolute xl:max-w-[500px] lg:max-w-[450px] z-0 md:max-w-[350px] sm:max-w-[300px] max-w-[300px]' src={titleBg} alt='title bg' />
        <h2 className='relative z-10 font-bold text-center text-white'>Why Choose Us</h2>
      </div>
      <div className='grid grid-cols-1 gap-1 mb-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 lg:mb-10'>
        {
          WhyChooseUsData.map((item, idx) => (
            <div key={idx} className='container relative flex flex-col w-full '>
              <Image className='relative bg-white p-2 rounded-full  w-[100px] -bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10' src={item.img} alt="hero" />
              <div>
                <Card className="xl:h-[240px] lg:h-[230px] sm:h-[240px] flex-grow w-full flex flex-col p-5 bg-secondary">
                  <CardTitle className="my-6 text-center text-gray-50">{item.title}</CardTitle>
                  <CardDescription className='text-white '>{item.description}</CardDescription>
                </Card>
              </div>
            </div>
          ))
        }

      </div>

    </div>
  );
};

export default WhyChoose;