import heroBg from '@/assets/images/grapicdesign/whyChoose.png';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import Hero from '@/components/shared/hero/Hero';
const ChooseGrapic = () => {
  const defaultData = {
    subject: 'Need graphic design services',
    messege:
      'Hello there, I would like to get some free consultation about graphic design. Is there anyone available?',
  };
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #409FD5 0%, #2C6994 100%)',
      }}
      className="py-20"
    >
      <Hero className={'items-center mt-0'} reverse={false} media={heroBg}>
        <div className="flex flex-col gap-3 md:gap-5">
          <h1 className="w-full text-white sm:text-center md:text-end heading-2">
            Why Choose Clooud Gen for Graphic Design?
          </h1>
          <p className="mx-auto my-4 text-white sm:text-center md:text-end">
            Clooud Gen stands out as a trusted graphic design partner known for
            our creativity, attention to detail, and commitment to delivering
            exceptional results. Whether you&apos;re a startup or an established
            business, we&apos;re here to bring your vision to life through
            compelling design solutions.
          </p>
          <div className="mx-auto md:ml-auto md:mr-0">
            <ContactUsDialog
              DefaultMessege={defaultData}
              element="Get a free consultation"
            />
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default ChooseGrapic;
