import OurBorder from '@/assets/images/about/ourBorder.png';
import OurMissions from '@/assets/images/about/ourMission.png';
import Image from 'next/image';

const OurMission = () => {
  return (
    <div className="container my-10 md:my-20">
      <h1 className="my-4 text-3xl text-center md:text-start md:text-6xl md:my-12">
        Our <span className="gradient-blue">Mission</span>
      </h1>
      <div className="relative">
        <Image
          src={OurBorder}
          className="absolute w-full max-h-[450px] right-5 bottom-[58px] z-[-1] hidden md:block"
        />
        <div className="flex flex-col md:flex-row items-center bg-secondary px-8 md:px-16 py-10 rounded-[80px]">
          <div className="w-full mb-3  md:w-1/3 md:mb-0">
            <Image src={OurMissions} />
          </div>
          <div className="flex items-center w-full p-3 border-4 border-slate-300 md:max-w-3xl md:p-8 rounded-3xl">
            <p className="text-right text-white text-md md:text-xl font-extralight">
              Clooud Gen is dedicated to providing innovative, reliable, and
              customized IT solutions that empower businesses to thrive in the
              digital era. We are committed to understanding the unique needs
              and challenges of each client and delivering tailored strategies
              and services that drive tangible results. Our mission is to
              cultivate long-lasting partnerships built on trust, integrity, and
              transparency, while continuously pushing the boundaries of
              technology to create value and enable growth for our clients
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
