'use client';
import React from 'react';
import OrderNowDialog from '@/components/pages/specialOffer/OrderNowDialog';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import { webDevOffer } from '@/lib/data/offer/offer';
import { useParams } from 'next/navigation';

export default function LearnMore() {
  const { id } = useParams();
  const findData = webDevOffer.find((data) => data.id === id);
  const { learnMore } = findData;
  const { Features, WhyChooseUs, CallToAction, title } = learnMore || {};

  const defaultData = {
    subject: 'Need custom website',
    messege:
      'Hello there, I need a custom website. Is there anyone available to assist me?',
  };

  return (
    <div className="mt-[200px] container">
      <h1 className="text-center">{title}</h1>
      <p className="font-semibold mt-10 text-xl">Features:</p>
      {/* {
        offerDetailsData.map((data, index) => (
          <div key={index}>
            <p className="mt-5">{data?.FullMERNWebsitePackage?.Features}</p>
            </div>))
      } */}
      {Features?.map((feature, index) => (
        <div key={index}>
          <h5 className="font-semibold text-xl text-black px-10 mt-5">
            {feature.FeatureName}
          </h5>
          <ul className="list-disc list-inside px-16 mt-3">
            {Object.entries(feature.Details).map(([key, detail], idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-10">
        <p className="font-semibold text-xl">Why Choose Us?</p>
        {WhyChooseUs?.map((item, index) => (
          <div key={index} className="px-10 mt-5 ">
            <ul className="font-semibold text-lg list-disc text-black list-inside">
              {item.Title}
            </ul>
            <li>{item.Description}</li>
          </div>
        ))}
      </div>
      <p className=" font-semibold mt-5 ">{CallToAction}</p>
      <div className="flex justify-around gap-10 my-10">
        <OrderNowDialog
          element="Order Now"
          className="w-full text-xs border sm:text-sm hover:bg-background hover:text-foreground border-primary duration-300 ease-in"
        />
        <ContactUsDialog
          DefaultMessege={defaultData}
          element="Customize"
          className="w-full text-xs border sm:text-sm hover:bg-background hover:text-foreground border-primary duration-300 ease-in"
        />
      </div>
    </div>
  );
}
