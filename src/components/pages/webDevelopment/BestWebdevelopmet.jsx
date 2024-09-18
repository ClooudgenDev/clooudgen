import bestHero from '@/assets/images/webdevelopment/bestWeb.svg';
import icon from '@/assets/images/webdevelopment/icon.png';
import FadeUp from '@/components/shared/animation/FadeUp';
import Hero from '@/components/shared/hero/Hero';
import { Button } from '@/components/ui/button';
import { BestData } from '@/lib/data/webDevelopment/bestweb';
import Image from 'next/image';
import Link from 'next/link';
import BestDataCard from './BestDataCard';

const BestWebdevelopmet = () => {
  const defaultData = {
    subject: 'Need consultation about web development',
    messege:
      'Hello there, I need consultancy about web development. Is there anyone available to help me?',
  };
  return (
    <div className="container my-10 md:my-20 ">
      <Hero className={'items-center mt-20'} media={bestHero}>
        <div>
          <div className="items-center lg:flex">
            <Image className="hidden lg:block" src={icon} alt="" />
            <h1 className="relative w-full heading-2 sm:w-4/5 md:w-full gradient-blue lg:-left-20">
              Why we are best for web development?
            </h1>
          </div>
          <h4 className="my-5 font-medium sm:text-justify description-1">
            Clooud Gen stands out for web development due to its commitment to
            innovation, trustworthiness, security, and proficiency, ensuring
            top-notch solutions tailored to clients needs.
          </h4>
        </div>
      </Hero>

      <div className="grid grid-cols-1 gap-5 my-5 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
        {BestData?.map((data, index) => (
          <FadeUp key={index}>
            <BestDataCard data={data}></BestDataCard>
          </FadeUp>
        ))}
      </div>
      <div className="flex justify-center mb-5">
        <Link href="/project-album?tab=webDevelopment">
          <Button>Explore Our Creation</Button>
        </Link>
      </div>
    </div>
  );
};

export default BestWebdevelopmet;
