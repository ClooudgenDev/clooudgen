import HeroMainImageGif1 from '@/assets/images/maintenance/heroImg.png';
import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
import CustomList from '@/components/shared/customList/CustomList';
import Hero from '@/components/shared/hero/Hero';
const HeroMaintenance = () => {
  const defaultData = {
    subject: 'Need some web related support',
    messege:
      'Hello there, I need some web maintenance support for my website. Is there anyone available to help me?',
  };
  return (
    <div className="container">
      <Hero
        media={HeroMainImageGif1}
        imageStyle="w-full"
        reverse={true}
        className="mt-20 lg:mt-32"
      >
        <div className="">
          <h1 className="w-full md:mb-5 sm:w-4/5 md:w-full">
            {' '}
            Comprehensive Website Maintenance Solutions
          </h1>
          <h3 className="md:heading-3"> Ensuring Full Site Care and Support</h3>

          <p className="my-4 sm:text-justify text-md md:text-lg">
            Allow our specialists to manage your website, freeing you to
            concentrate on your business.
          </p>
          <ul className="text-sm list-disc md:text-lg mb-6">
            <CustomList>Content Edits Support</CustomList>
            <CustomList>Fast Website Loading</CustomList>
            <CustomList>Monthly Preventive Activities</CustomList>
            <CustomList>Security Optimization</CustomList>
            <CustomList>Unlimited Tech Support</CustomList>
            <CustomList>24x7 Website Monitoring</CustomList>
          </ul>
          {/* <div className='mt-10'>
                        <button className='p-1 text-white bg-primary md:text-xl md:p-2'>See More <IoIosArrowRoundForward className='inline-block text-3xl' /></button>
                    </div> */}
          {/* <button className="px-4 py-3 my-5 text-white rounded-full opacity-50 bg- md:px-10">GET A QUOTE</button> */}
          <ContactUsDialog
            DefaultMessege={defaultData}
            element="Get Web Support"
          />
        </div>
      </Hero>
    </div>
  );
};

export default HeroMaintenance;
