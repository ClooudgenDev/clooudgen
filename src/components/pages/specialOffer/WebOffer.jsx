import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import { Button } from '@/components/ui/button';
import { webDevOffer } from '@/lib/data/offer/offer';
import Image from 'next/image';
import React from 'react';
import OrderNowDialog from './OrderNowDialog';
import Link from 'next/link';

const WebOffer = () => {
  const defaultData = {
    subject: 'Need custom website',
    messege:
      'Hello there, I need a custom website. Is there anyone available to assist me?',
  };

  return (
    // <div className='container grid justify-center grid-cols-1 gap-5 xl:grid-cols-3 md:grid-cols-2 justify-items-center'>
    <div className="container  flex flex-wrap justify-center gap-5">
      {webDevOffer?.map((data, index) => (
        <div
          key={index}
          className="w-full relative max-w-[400px] p-5  hover:rounded-lg transition-all duration-500 ease-in border-2 border-background hover:border-primary shadow-xl border-b-primary "
        >
          <Image
            alt=""
            src={data?.image}
            className="w-[130px] h-[130px] mx-auto flex justify-center items-center rounded-full border-4 border-foreground"
          />
          <h5 className="absolute top-2 right-1 text-white bg-red-500 text-sm p-1 rounded-tl-xl rounded-br-xl ">
            {data.deadline}
          </h5>
          <h2 className="text-center">{data?.title}</h2>
          <div className="text-center ">
            <ul className="mt-5 text-black ">
              {data?.features?.map((featuresInfo) => (
                <li className="my-2 font-semibold" key={featuresInfo}>
                  <p>{featuresInfo}</p>
                </li>
              ))}
            </ul>
            <p className=" mb-2 font-medium">
              Price:{' '}
              <span className="font-semibold">
                {' '}
                <s>{data?.price}</s>
              </span>
            </p>
            <p>
              <span className="font-semibold text-2xl">
                {' '}
                {data?.specialPrice}
              </span>{' '}
            </p>
          </div>
          <div className="flex justify-center gap-3 mt-5">
            {/* <Button className="w-full text-xs border sm:text-sm hover:bg-background hover:text-foreground border-primary duration-300 ease-in">
              Order Now
            </Button> */}
            <OrderNowDialog
              element="Order Now"
              className="w-full text-xs border sm:text-sm hover:bg-background hover:text-foreground border-primary duration-300 ease-in"
            />
            <ContactUsDialog
              DefaultMessege={defaultData}
              element="Customize"
              className="w-full text-xs border sm:text-sm hover:bg-background hover:text-foreground border-primary duration-300 ease-in"
            />
            {/* <Button className="w-full text-xs border sm:text-sm hover:bg-background hover:text-foreground border-primary duration-500 ease-in">Customize</Button> */}
            <Link href={`/special-offer/${data.id}`} className="">
              <Button className="w-full text-xs border sm:text-sm hover:bg-background hover:text-foreground border-primary">
                {' '}
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebOffer;
