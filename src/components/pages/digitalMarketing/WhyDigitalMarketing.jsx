import whyMarketing from '@/assets/images/DigitalMarketing/whyDigitalMarketing.png';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import Image from 'next/image';

const WhyDigitalMarketing = () => {
  const defaultData = {
    subject: 'Needs digital marketing consultation',
    messege:
      'Hello there, I would like to get digital marketing consultation from Clooud Gen. Is there anyone available?',
  };
  return (
    <div className="container flex flex-col items-center gap-10 my-20 lg:gap-0 lg:flex-row lg:mt-36">
      <div className="bg-blue-100 p-10 flex-1 lg:min-h-[550px] flex flex-col justify-center items-center relative">
        <div className="absolute xl:left-[100px] lg:left-20 -z-10 xl:w-[800px] md:h-[600px] lg:w-[800px] md:w-[600px] md:left-20 lg:block hidden border-4 border-primary border-dotted  "></div>
        <h1 className="my-5 heading-2">
          Why Choose Clooud Gen
          <span className="text-primary"> for Digital Marketing?</span>
        </h1>
        <p className="my-5 lg:pr-5 description-1">
          Clooud Gen is your trusted partner for digital marketing success. We
          have a track record of delivering results-driven strategies and
          personalized approaches. We&apos;re committed to helping you achieve
          your business objectives. From strategy development to implementation
          and optimization, we support your growth every step of the way.
        </p>

        <div className="md:mt-5">
          <ContactUsDialog
            DefaultMessege={defaultData}
            element="Request Consultation"
          />
        </div>
      </div>
      <Image
        className="flex-1  relative max-w-[600px] w-full mx-auto xl:-left-14 border rounded-[60px] "
        src={whyMarketing}
        alt=""
      />
    </div>
  );
};

export default WhyDigitalMarketing;
