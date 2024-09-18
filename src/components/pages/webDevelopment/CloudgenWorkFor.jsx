import FadeIn from '@/components/shared/animation/FadeIn';
import FadeUp from '@/components/shared/animation/FadeUp';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import { WorkData } from '@/lib/data/webDevelopment/cloudgenWorkFor';
import WorkCard from './WorkCard';

const CloudgenWorkFor = () => {
  const defaultData = {
    subject: 'Need custom website',
    messege:
      'Hello there, I need a custom website. Is there anyone available to assist me?',
  };
  return (
    <div className="container my-10 md:my-20">
      <FadeIn>
        <div className="container flex items-center justify-center">
          {/* <Image src={icon} className='lg:w-[180px] w-[100px]' alt='' />
                    <h1 className='relative text-center lg:-left-24 -left-14 heading-2 gradient-blue'>Clooud Gen commonly Works</h1> */}
          <h1 className="text-center heading-2 gradient-blue">
            Clooud Gen commonly Works
          </h1>
        </div>
      </FadeIn>

      <div className="container grid grid-cols-1 gap-1 my-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
        {WorkData?.map((workCards, index) => (
          <FadeUp key={index}>
            <WorkCard workCards={workCards}></WorkCard>
          </FadeUp>
        ))}
      </div>
      <p className="my-5 text-lg font-semibold text-center text-secondary">
        Need custom web services or development? Lets discuss!
      </p>

      <div className="flex justify-center">
        <ContactUsDialog
          DefaultMessege={defaultData}
          element="Contact for Customization"
        />
      </div>
    </div>
  );
};

export default CloudgenWorkFor;
