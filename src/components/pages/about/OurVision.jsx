import OurBorder from '@/assets/images/about/ourBorder.png';
import OurVisions from '@/assets/images/about/ourVision.png';
import Image from 'next/image';
const OurVision = () => {
  return (
    <div className="container my-10 md:my-20">
      <h1 className="my-4 text-3xl text-center md:text-end md:text-6xl md:my-12">
        Our <span className="gradient-blue">Vision</span>
      </h1>
      <div className="relative">
        <Image
          alt="img"
          src={OurBorder}
          className="absolute w-full max-h-[450px] right-5 bottom-0 z-[-1] hidden md:block"
        />
        <div className="flex flex-col md:flex-row items-center bg-secondary px-8 md:px-16 py-10 rounded-[80px]">
          <div className="w-full mb-3 md:w-1/3 md:mb-0">
            <Image alt="img" src={OurVisions} />
          </div>
          <div className="flex items-center w-full p-3 border-4 border-slate-300 md:max-w-3xl md:p-8 rounded-3xl">
            <p className="text-right text-white text-md md:text-xl font-extralight">
              Clooud Gen envisions a future where businesses seamlessly harness
              the power of technology to innovate, grow, and thrive in a rapidly
              evolving digital landscape. We aspire to be the trusted partner
              that empowers organizations to unlock their full potential through
              cutting-edge IT solutions and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
