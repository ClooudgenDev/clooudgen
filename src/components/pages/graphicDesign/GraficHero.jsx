import heroBg from '@/assets/images/grapicdesign/banner.png';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import Hero from '@/components/shared/hero/Hero';

const GraficHero = () => {
  const defaultData = {
    subject: 'Need graphic design services',
    messege:
      'Hello there, I would like to get some free consultation about graphic design. Is there anyone available?',
  };
  return (
    // <FadeUp>
    //     <TitleAndDescription
    //         positionBoth={'center'}
    //         title={'Graphic Design'}
    //         description={'Creating compelling digital experiences is our passion. So what is on your mind?'}
    //     />

    //     <LargeButton
    //         text={'See More'}
    //         LeftIcon={CgDesignmodo}
    //         RightIcon={CiLocationArrow1}
    //         customStyle={'mb-8'}
    //     />
    // </FadeUp>
    <div className="my-20 md:my-40">
      <Hero className={'items-center'} reverse={true} media={heroBg}>
        <div>
          <p className="my-3 text-primary sm:text-lg">
            Elevate Your Brand with Stunning Visuals
          </p>
          <h1 className="w-full heading-1">
            Creative Graphic Design Solutions by Clooud Gen
          </h1>
          <p className="my-4 description-1">
            At Clooud Gen, we specialize in delivering innovative and impactful
            graphic design solutions tailored to your brand&apos;s unique
            identity. Our team of creative experts is dedicated to transforming
            ideas into visually captivating designs that resonate with your
            audience.
          </p>

          <ContactUsDialog
            DefaultMessege={defaultData}
            element="Get A Free Consultation"
          />
        </div>
      </Hero>
    </div>
  );
};

export default GraficHero;
