'use client';

import OfferTab from './OfferTab';

const Offer = () => {
  return (
    <>
      <div className="relative h-[400px] flex justify-center items-center container my-10">
        <div className="absolute inset-0 bg-no-repeat" style={{
          backgroundImage: `url('./heroOffer.png')`, backgroundPosition: 'cover', backgroundPosition: 'center', opacity: 0.10,
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
        </div>
        <div className="relative z-10 text-center mt-16 max-w-[730px] mx-auto">
          <h2 className="text-2xl font-bold">
            Ignite Your Entrepreneurial Journey with Cloud Gen
          </h2>
          <p className="mt-3">
            Unleash the potential of your business with Cloud Gen&apos;s innovative cloud solutions. Our latest campaign is designed exclusively for entrepreneurs looking to scale, innovate, and succeed. Join us today and access exclusive tools and resources to take your venture to the next level. Empower your vision with Cloud Gen – your partner in growth and success.
          </p>
        </div>
      </div>
      <OfferTab />
    </>

  );
};

export default Offer;
