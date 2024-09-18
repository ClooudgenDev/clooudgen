import FourButton from '@/components/shared/FourButton';

const ItContact = () => {
  return (
    <div className="container relative ">
      <div
        className="lg:h-[350px] flex flex-col justify-center lg:my-20 my-10 relative py-5"
        style={{
          backgroundImage: `url(./contact.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="container py-5 text-xl text-center lg:text-3xl text-primary">
          Experience Effortless IT Excellence and Maximize Your Business
          Potential with Clooud Gen
        </p>

        <div className="max-w-[728px] mx-auto">
          <FourButton />
        </div>
      </div>
    </div>
  );
};

export default ItContact;
