import WebDevelopmentHero from '@/assets/images/webdevelopment/hero.png';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import Hero from '@/components/shared/hero/Hero';

const WebdevHero = () => {
  const defaultData = {
    subject: 'Need consultation about web development',
    messege:
      'Hello there, I need consultancy about web development. Is there anyone available to help me?',
  };
  const DefaultData2 = {
    subject: 'I want to know about the price ranges',
    messege:
      'Hello there, I want to know about your web development services price. Is there anyone available to inform me?',
  };
  return (
    <div>
      <Hero
        className={'items-center'}
        reverse={true}
        media={WebDevelopmentHero}
      >
        <div className="space-y-2 lg:space-y-6">
          <h1 className="w-full sm:w-4/5 md:w-full gradient-blue lg:!leading-[3.5rem]">
            Unlock Next-Level Web Magic
          </h1>
          <h3 className="sm:w-4/5 lg:w-full">
            Experience Bold and Contemporary Website Design and Development!
          </h3>
          <p className="sm:text-justify description">
            Welcome to the future of web design and development! At Clooud Gen,
            we specialize in creating captivating online experiences that blend
            creativity with functionality. Our expert team is dedicated to
            crafting websites that not only look stunning but also drive
            results. Whether you&apos;re launching a new business or revamping
            an existing one, we&apos;re here to turn your vision into reality.
            Explore our services, and let&apos;s collaborate to bring your
            digital presence to life!
          </p>
          <div className="gap-5 flex sm:flex-row flex-col">
            <ContactUsDialog
              DefaultMessege={defaultData}
              element="Free Consultation"
            />
            <ContactUsDialog
              DefaultMessege={DefaultData2}
              element="Contact for Price"
            />
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default WebdevHero;
