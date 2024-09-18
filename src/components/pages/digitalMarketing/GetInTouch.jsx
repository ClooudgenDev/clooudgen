import FourButton from '@/components/shared/FourButton';

const GetInTouch = () => {
  const defaultData = {
    subject: 'Needs some digital marketing service',
    messege:
      'Hello there, I would like to get some digital marketing services from Clooud Gen. Is there anyone available?',
  };
  return (
    <section
      className="lg:h-[400px] my-10 flex flex-col justify-center items-center p-10 text-white"
      style={{
        backgroundImage: `url(./touchBg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container text-center text-foreground lg:max-w-[950px]">
        <h1 className="heading-2">Get in Touch with Clooud Gen</h1>
        <p className="my-10 description-1 text-primary">
          Ready to take your digital marketing efforts to the next level?
          Contact Clooud Gen today to schedule a consultation with our team of
          experts. Let&apos;s discuss how we can tailor our services to meet
          your unique needs and drive success for your business.
        </p>

        <div className="max-w-[600px] mx-auto">
          <FourButton />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
