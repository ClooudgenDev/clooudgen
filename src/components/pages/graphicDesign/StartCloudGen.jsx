import heroBg from '@/assets/images/grapicdesign/StartCloudgen.png';
import FourButton from '@/components/shared/FourButton';
import Hero from '@/components/shared/hero/Hero';

const StartCloudGen = () => {
  const defaultData = {
    subject: 'Want to contact with Clooud Gen',
    messege:
      'Hello there, I would like to get connect with Clooud Gen about there graphic design services. Is there anyone available?',
  };
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #142B51 0%, #409FD5 100%)',
      }}
      className="my-20 py-14"
    >
      <Hero className={'items-center mt-0'} reverse={false} media={heroBg}>
        <div className="flex flex-col gap-2 md:gap-3">
          <h1 className="w-full mx-auto text-white sm:text-center heading-2">
            Get Started With Clooud Gen
          </h1>
          <p className="mx-auto my-4 text-white sm:text-center">
            Ready to enhance your brand&apos;s visual appeal? Contact Clooud Gen
            today to discuss your graphic design needs and let&apos;s
            collaborate to achieve impactful results.
          </p>
          <div className="mx-auto ">
            <FourButton />
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default StartCloudGen;
