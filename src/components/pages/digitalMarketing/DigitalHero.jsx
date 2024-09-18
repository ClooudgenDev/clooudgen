import DigitalHeroImage from '@/assets/images/DigitalMarketing/digitalHero.png';
import StarHero from '@/assets/images/DigitalMarketing/starHero.png';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import Hero from '@/components/shared/hero/Hero';
import Image from 'next/image';

const DigitalHero = () => {
  const defaultData = {
    subject: 'Needs some digital marketing service',
    messege:
      'Hello there, I would like to get some digital marketing services from Clooud Gen. Is there anyone available?',
  };
  return (
    <Hero className={'items-center'} reverse={true} media={DigitalHeroImage}>
      <div className="relative ">
        <h1 className="leading-snug">
          Elevate Your Online Presence with Expert Digital Marketing Solutions
        </h1>
        <Image
          src={StarHero}
          className="absolute md:w-[250px] bottom-24 left-[480px] -z-10 2xl:block hidden"
          alt=""
        />
        <p className="w-full my-5 text-primary md:w-2/3 md:my-10 description-1">
          Drive Growth and Engagement with Clooud Gen Tailored Strategies{' '}
        </p>
        <ContactUsDialog DefaultMessege={defaultData} element="Get Started" />
      </div>
    </Hero>
  );
};

export default DigitalHero;
