import executiveImg from '@/assets/images/payment/payment-executive.png';
import Image from 'next/image';

import ContactUsDialog from '@/components/shared/contactUsDialog/ContactUsDialog';
const PayWithExicutive = () => {
  const defaultData = {
    subject: 'Need to contact with executive',
    messege:
      'Hello there, I would like to get connected with Clooud Gen executive. Is there anyone available?',
  };
  return (
    <div className="container my-10 md:my-20">
      <div className="items-center gap-10 md:flex ">
        <div className="space-y-5 sm:text-center">
          <h2 className="">Payment via Clooud Gen Executive</h2>
          <p>
            You may remit your payment through our executive service. Kindly
            Contact Clooud Gen to schedule an executive to retrieve the payment
            from your office or location. At present, this service is
            exclusively available in Dhaka,Bangladesh.
          </p>
          <div className="flex justify-center mt-5">
            <ContactUsDialog
              DefaultMessege={defaultData}
              element="Contact Our Executive"
            />
          </div>
        </div>

        <div>
          <Image
            className="md:max-w-[1200px] w-full"
            src={executiveImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PayWithExicutive;
