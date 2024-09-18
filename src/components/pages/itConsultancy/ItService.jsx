import React from 'react';
import converted from '@/assets/images/it-consultancy/converted.png';
import Image from 'next/image';
import { ItService1 } from '@/lib/data/itConsult/services';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import iconTop from '@/assets/images/it-consultancy/icon.png';
import iconBottom from '@/assets/images/it-consultancy/icon2.png';
import line from '@/assets/images/it-consultancy/Line.png';
import line2 from '@/assets/images/it-consultancy/Line2.png';

const ItService = () => {
  const leftItems = ItService1.slice(0, 4);
  const rightItems = ItService1.slice(4);
  return (
    <div className="container my-20 contain lg:my-32">
      <div className="w-[90%] my-10 mx-auto">
        <p className="sm:text-center sm:text-lg">
          <span className="text-primary">
            We&apos;ve partnered with Fortune 5 companies and leading brands to
            elevate their digital strategies through our expert{' '}
          </span>
          <br />
          IT consulting services. Together, we&apos;ve crafted comprehensive
          product roadmaps to drive success in today&apos;s dynamic market
          landscape.
        </p>
      </div>
      <div className="relative p-5 border border-blue-200 ">
        <Image
          className="absolute top-0 hidden md:block"
          src={iconTop}
          alt=""
        />
        <div className="relative items-center justify-between xl:flex">
          <div className="max-w-[500px] mx-auto">
            <p className="space-y-2 heading-2 text-center">
              IT Consulting services that we offer
            </p>
            <p className="description-1">
              Embark on a revolutionary IT voyage with Intellectsoft. We&apos;re
              more than just consultants; we become your strategic allies,
              collaborating to elevate your software architecture and design a
              technology-driven roadmap. Through meticulous refinement of your
              software ecosystem, our skilled engineers facilitate a seamless
              digital evolution, guiding you from strategic blueprints to
              flawless implementation.
            </p>
            <Image src={converted} alt="" />
          </div>

          <div className="grid md:grid-cols-2 md:gap-24 relative max-w-[800px] mx-auto justify-center items-center md:pb-20">
            <div className="space-y-8 lg:mt-20 ">
              {leftItems?.map((information, index) => (
                <div
                  className="bg-white rounded-xl relative flex items-center shadow hover:border-primary transition-all duration-300 hover:shadow-none border-gray-200 border text-gray-700 px-5 py-6 justify-between max-w-[400px] "
                  key={index}
                >
                  <div className=" bg-no-repeat bg-center rounded-xl min-h-[285px]  w-full ">
                    <Image
                      className="block mx-auto w-[60px] h-[60px]"
                      width={60}
                      height={60}
                      src={information?.image?.src}
                      alt=""
                    />
                    <h3 className="p-4 text-xl font-semibold text-center rounded-t-xl mt-5 text-black ">
                      {information.title}
                    </h3>

                    <div className="relative text-center text-gray-700 ">
                      <div className="h-full">
                        {/* <div className='absolute inset-0 flex items-center justify-center opacity-15'>
                                                        <Image className='block ' width={120} height={120} src={information?.image?.src} alt='' />
                                                    </div> */}
                        <p className="z-50   text-gray-500 text-center">
                          {information?.details}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-12  w-[60px] md:block hidden !-z-50 ">
                    <Image src={line} alt="" />
                  </div>
                </div>
              ))}
            </div>

            <div className="w-1 h-full bg-blue-400 absolute top-0 -translate-x-1/2 md:left-[50%] md:block hidden"></div>

            <div className="mt-8 space-y-8 md:mt-0 ">
              {rightItems?.map((information, index) => (
                <div
                  className="bg-white rounded-xl relative flex items-center shadow hover:border-primary transition-all duration-300 hover:shadow-none border-gray-200 border text-gray-700 px-5 py-6 justify-between max-w-[400px] "
                  key={index}
                >
                  <div className="absolute -left-12 -z-10 w-[60px] md:block hidden">
                    <Image src={line2} alt="" />
                  </div>
                  <div className=" bg-no-repeat bg-center rounded-xl min-h-[285px]  w-full ">
                    <Image
                      className="block mx-auto"
                      width={60}
                      height={60}
                      src={information?.image?.src}
                      alt=""
                    />
                    <h3 className="p-4 text-xl font-semibold text-center rounded-t-xl mt-5 text-black ">
                      {information.title}
                    </h3>

                    <div className="relative text-center text-gray-700 ">
                      <div className="h-full">
                        {/* <div className='absolute inset-0 flex items-center justify-center opacity-15'>
                                                        <Image className='block ' width={120} height={120} src={information?.image?.src} alt='' />
                                                    </div> */}
                        <p className="z-50   text-gray-500 text-center">
                          {information?.details}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className='absolute -left-12  w-[60px] md:block hidden !-z-50 ' >
                                            <Image src={line} alt='' />
                                        </div> */}
                </div>
              ))}
              <Image
                className="absolute hidden -right-0 -bottom-5 sm:block "
                src={iconBottom}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItService;
