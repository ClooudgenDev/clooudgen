import Image from 'next/image';
import logo from '@/assets/images/clooudgen.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CareerHero = () => {
  return (
    
    <div className="container pt-32 mt-20 pb-24 ">
      <Image src={logo} className="w-[80px] md:my-8 my-5 mx-auto" alt="logo" />
      <h2 className="text-center heading-1">
        Careers at <span className="text-primary">Clooud Gen</span>{' '}
      </h2>
      <p className="my-5 text-sm font-medium text-center text-gray-500  lg:text-lg md:text-base md:my-7">
        We want to empower everyone to unleash their creativity
      </p>
      <p className=" text-sm font-medium lg:text-lg md:text-base text-gray-500 md:my-7 my-5 text-center mx-auto max-w-[550px]">
        Join us to build customized teams, delivering solutions that drive
        business success and innovation.
      </p>

      <Link href='#jobs' className="flex justify-center ">
        <Button className="mx-auto rounded-3xl">View Oppurtunities</Button>
      </Link>
    </div>
  );
};

export default CareerHero;
