import HeroImage from '@/assets/images/videoediting/videoHero.png';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import Hero from '@/components/shared/hero/Hero';

const VideoHero = () => {
  const defaultData = {
    subject: 'Need video editing services',
    messege:
      'Hello there, I need video editing services for my buisness. Is there anyone available to guide me?',
  };
  return (
    <div className="my-20 md:my-32">
      <Hero className={'items-center mb-10'} media={HeroImage}>
        <div>
          <div className="relative md:text-end">
            <h1 className="w-full my-5 space-y-2 ">
              Professional Video Editing Services by Clooud Gen{' '}
            </h1>
            <h4 className=" text-primary description-1">
              Enhance Your Storytelling with Expert Editing
            </h4>
          </div>

          <div className="flex justify-end mt-10 md:mt-16 ">
            <ContactUsDialog
              DefaultMessege={defaultData}
              element="Let's Talk Us"
            />
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default VideoHero;
