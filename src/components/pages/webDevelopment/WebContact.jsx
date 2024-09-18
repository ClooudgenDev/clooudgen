import FourButton from '@/components/shared/FourButton';
import { Button } from '@/components/ui/button';

const WebContact = () => {
  return (
    <div className="lg:h-[300px] bg-foreground flex flex-col justify-center md:my-20 my-10 ">
      <p className="container py-5 text-lg font-medium text-center text-white lg:text-2xl md:text-xl">
        If you&apos;re unsure about how to begin your website project, feel free
        to reach out to us at{' '}
        <span className=" whitespace-nowrap">+8809638152434</span> between{' '}
        <span className=" whitespace-nowrap">8:30 AM</span> and{' '}
        <span className=" whitespace-nowrap">9:00 PM.</span> Alternatively, you
        can initiate a live chat. Our live chat support is accessible{' '}
        <span className=" whitespace-nowrap">24/7.</span>
      </p>
      <div className='max-w-[728px] mx-auto'>

        <FourButton />
      </div>
    </div>
  );
};

export default WebContact;
