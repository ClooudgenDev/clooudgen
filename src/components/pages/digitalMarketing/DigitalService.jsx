import serviceData from '@/lib/data/digitalMarketing/DigitalService';
import serviceData2 from '@/lib/data/digitalMarketing/ServiceData2';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const DigitalService = () => {
  return (
    <section className="container my-10 lg:mt-20 ">
      <div className="my-5 text-center ">
        <h2 className="font-bold heading-2">Our Services</h2>
        <h5 className="flex justify-center mt-0 text-center text-primary description-1">
          Tailored Solutions for Your Success
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mx-auto w-11/12 sm:w-[80%] lg:w-full relative my-8">
        <div className="space-y-8">
          {serviceData.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-5 md:gap-0 rounded-lg sm:max-w-full max-w-[400px] mx-auto group md:border border-blue-100 md:overflow-hidden hover:bg-blue-50"
            >
              <Image
                src={data.image}
                className="object-cover object-center w-full max-w-[200px] md:ml-0 md:mr-auto mx-auto md:h-auto h-[200px] rounded rounded-r-none duration-500"
                alt=""
                height={237}
              />
              <div className="flex flex-col justify-center p-2 overflow-hidden transition-colors duration-500 border border-blue-100 rounded md:border-none md:p-4 bg-opacity-10">
                <h3 className="mb-3 text-lg font-semibold md:text-xl">
                  {data.title}
                </h3>
                <p className="text-sm font-light">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 hidden lg:block h-full w-[1px] bg-primary"
          alt=""
        />
        <div
          className="absolute hidden w-2 h-2 -translate-x-1/2 rounded-full left-1/2 lg:block bg-primary"
          alt=""
        />
        <div
          className="absolute bottom-0 hidden w-2 h-2 -translate-x-1/2 rounded-full left-1/2 lg:block bg-primary"
          alt=""
        />
        <div className="mt-0 space-y-8 lg:mt-28">
          {serviceData2.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-5 md:gap-0 rounded-lg sm:max-w-full max-w-[400px] mx-auto group md:border hover:bg-blue-50 border-blue-100 md:overflow-hidden"
            >
              <Image
                src={data.image}
                className="object-cover object-center w-full max-w-[200px] md:ml-0 md:mr-auto mx-auto md:h-auto h-[200px] rounded rounded-r-none duration-500"
                alt=""
                height={237}
              />
              <div className="flex flex-col justify-center p-2 overflow-hidden transition-colors duration-500 border border-blue-100 rounded md:border-none md:p-4 bg-opacity-10">
                <h3 className="mb-3 text-lg font-semibold md:text-xl">
                  {data.title}
                </h3>
                <p className="text-sm font-light">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5 md:gap-40 sm:flex-row ">
        <div className="flex justify-center">
          <a
            target="_blank"
            href="https://tawk.to/chat/660b2ad71ec1082f04ddae9f/1hqdpundk"
          >
            <Button className="rounded-lg ">Live Chat</Button>
          </a>
        </div>
        <div className="flex justify-center">
          <a href="mailto:info@clooudgen.com">
            <Button className="rounded-lg">Mail Now</Button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default DigitalService;
