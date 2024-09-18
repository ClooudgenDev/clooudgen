import icon from '@/assets/images/subscription/questionIcon.png';
import subHero from '@/assets/images/subscription/subscripHero.png';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import Hero from '@/components/shared/hero/Hero';
import Image from 'next/image';
const SubsHero = () => {
  return (
    <div className="my-10 md:my-32">
      <Hero
        className={
          'items-center bg-gradient-to-r from-blue-50 to-white border rounded-xl'
        }
        reverse={true}
        media={subHero}
      >
        <div>
          <div className="relative flex items-center gap-3">
            <div>
              <h1 className="w-full heading-1 text-primary">Need an IT TEAM</h1>
              <p className="text-tertiary">Your Complete IT Team is Here</p>
            </div>
            <Image className="relative bottom-16" src={icon} alt="" />
          </div>
          <p className="description-1">
            Do you need assistance with your new start-up or an existing
            business? Do you require a professional IT department/team? Clooud
            Gen brings a professional IT team to you. From development to video
            editing, graphic design, and marketing, Clooud Gen provides a
            complete solution
            <span className="text-primary"> From only $499 month.</span>
          </p>
          <div className="my-10">
            <ContactUsDialog element="Lets Talk" />
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default SubsHero;
