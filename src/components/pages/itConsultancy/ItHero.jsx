import Hero from '@/components/shared/hero/Hero';

import ItHeroImage from '@/assets/images/it-consultancy/hero.png';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';

const ItHero = () => {
  const defaultData = {
    subject: `Need IT Consultancy.`,
    messege: `I need IT consultancy. Is there anyone here who can assist me?`,
  };
  return (
    <div className="container my-20 ">
      <Hero className={'items-center'} media={ItHeroImage}>
        <div>
          <div className="relative">
            <h3 className="mb-2 text-primary">Clooud Gen</h3>
            <h1 className="w-full mb-5"> IT Consulting Services </h1>
            <p className="sm:text-justify description">
              Your trusted partner in navigating the digital landscape. As
              pioneers in IT consulting, we empower businesses to thrive in the
              evolving tech realm. With innovative solutions and unparalleled
              expertise, we turn challenges into opportunities, guiding you
              toward sustainable growth. Whether a startup or a seasoned
              enterprise, Clooud Gen tailors its approach to meet your unique
              needs, delivering excellence at every step.
            </p>
          </div>

          <div className="mt-10 md:mt-16">
            <ContactUsDialog
              DefaultMessege={defaultData}
              element="Get Free Consultation"
            />
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default ItHero;
