import Image from 'next/image';
import React from 'react';
import various from '@/assets/images/webdevelopment/8th section vector.png';
import html from '@/assets/images/webdevelopment/Technology/html.png';
import css from '@/assets/images/webdevelopment/Technology/css.png';
import tailwind from '@/assets/images/webdevelopment/Technology/tailwind.png';
import javascript from '@/assets/images/webdevelopment/Technology/js.png';
import react from '@/assets/images/webdevelopment/Technology/react.png';
import nextjs from '@/assets/images/webdevelopment/Technology/next.png';
import nodejs from '@/assets/images/webdevelopment/Technology/node.png';
import mysql from '@/assets/images/webdevelopment/Technology/mysql.png';
import aspnet from '@/assets/images/webdevelopment/Technology/asp.png';
import mongodb from '@/assets/images/webdevelopment/Technology/mongodb.png';
import express from '@/assets/images/webdevelopment/Technology/express.png';
import oracle from '@/assets/images/webdevelopment/Technology/oracle.png';
import reddis from '@/assets/images/webdevelopment/Technology/reddis.png';
import wordpress from '@/assets/images/webdevelopment/Technology/wordpress.png';
import zoomla from '@/assets/images/webdevelopment/Technology/zoomla.png';
// Express js
// Oracle
// Raddis
// Laravel
// Wordpress
// Zoomla
import { Card } from '@/components/ui/card';
import WebTechnology from './WebTechnology';
import Marquee from 'react-fast-marquee';

const WebVarious = () => {
  return (
    <div className="relative my-10 mb-10 md:my-20 border border-blue-300 container lg:rounded-xl rounded-none">
      <div className="py-5  lg:pt-10">
        <div className="flex lg:max-w-[1200px] mx-auto items-center justify-center">
          <h1 className="w-full  text-center text-secondary heading-2 ">
            We utilize various technologies in our projects.
          </h1>
          <Image className="lg:w-[100px] w-[80px] sm:block hidden" src={various} alt="" />
        </div>

        {/* <div className="container justify-center  my-10">
          <Card className="bg-blue-50 w-[130px] h-[140px]">
            <Image className="mx-auto mt-3" src={html} alt="" />
            <p className="mt-3 text-sm text-center uppercase">HTML 5</p>
          </Card>
        </div> */}

        {/* <WebTechnology /> */}
        <Marquee className="mt-10">
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={html} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={css} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={tailwind} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={javascript} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={react} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={nextjs} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={nodejs} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={express} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={mysql} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={aspnet} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={mongodb} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={oracle} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={reddis} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={wordpress} alt="html" />
          <Image className="md:w-[100px] sm:w-[70px] w-[50px] md:mx-7 sm:mx-5 mx-3" src={zoomla} alt="html" />
        </Marquee>
      </div>
    </div>
  );
};

export default WebVarious;
