import { cn } from '@/lib/utils';
import Image from 'next/image';
import FadeLeft from '../animation/FadeLeft';
import FadeRight from '../animation/FadeRight';
import ZoomIn from '../animation/ZoomIn';

const Hero = ({ children, media, reverse, className, height = 500, imageStyle }) => {
  return (
    <>
      {reverse ? (
        <section
          className={cn(
            `grid gap-4 items-center md:grid-cols-2 pt-10 px-3 hero max-w-[1400px] mx-auto`,
            className
          )}
        >
          <FadeRight>{children}</FadeRight>

          <ZoomIn>
            <Image
              key={0}
              height={height}
              src={media}
              alt="hero image"
              className={cn(`mx-auto md:-mt-20 object-cover`, imageStyle)}
            />
          </ZoomIn>
          {/* <SharedCarousel>
                        {[
                            <Image key={0} height={437} src={HeroImageGif} alt="hero image" className="mx-auto" />,
                            <Image key={1} height={437} src={HeroImageGif1} alt="hero image" className="mx-auto" />,
                            <Image key={2} height={437} src={HeroImageGif2} alt="hero image" className="mx-auto" />,
                            <Image key={2} height={437} src={HeroImageGif3} alt="hero image" className="mx-auto" />,
                        ]}
                    </SharedCarousel> */}
        </section>
      ) : (
        <section
          className={cn(
            `grid gap-4 items-center md:grid-cols-2 pt-10 px-3 hero max-w-[1400px] mx-auto`,
            className
          )}
        >
          <ZoomIn>
            <Image
              key={0}
                height={height}
              src={media}
              alt="hero image"
              className="mx-auto"
            />
            {/* <SharedCarousel>
                        {[
                            <Image key={0} height={437} src={HeroImageGif} alt="hero image" className="mx-auto" />,
                            <Image key={1} height={437} src={HeroImageGif1} alt="hero image" className="mx-auto" />,
                            <Image key={2} height={437} src={HeroImageGif2} alt="hero image" className="mx-auto" />,
                            <Image key={2} height={437} src={HeroImageGif3} alt="hero image" className="mx-auto" />,
                        ]}
                    </SharedCarousel> */}
          </ZoomIn>
          <FadeLeft>{children}</FadeLeft>
        </section>
      )}
    </>
  );
};

export default Hero;

// 'use client'

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { SharedCarousel } from '@/components/shared/carousel/SharedCarousel';
// import { Button } from '@/components/ui/button';
// import HeroImageGif from "@/assets/hero/developers.gif";
// import HeroImageGif1 from "@/assets/hero/coder1.gif";
// import HeroImageGif2 from "@/assets/hero/coder2.gif";
// import HeroImageGif3 from "@/assets/hero/users.gif";
// import { FaWhatsapp } from 'react-icons/fa6';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';

// const Hero = () => {
//     const [step, setStep] = useState(0)
//     return (
//         <section className="hero | container mt-28">
//             <div className="grid items-start gap-4 mt-12 md:grid-cols-2">
//                 {step < 1 ? <div>
//                     <h1 className='w-full text-3xl sm:text-4xl lg:text-4xl xl:text-5xl sm:w-5/6'>A Creative way to grow your Exciting Business ideas</h1>
//                     <h4 className="my-4 text-gray-500 sm:text-justify">
//                         Clooud Gen, crafting digital experiences that transcend the ordinary. With a focus on innovation and precision, our team of experts delivers cutting-edge solutions in website development, management, and app creation. Welcome to a realm where technology meets creativity, where your digital dreams take flight.
//                     </h4>

//                     <Button onClick={() => setStep((prev) => prev + 1)}>Get started</Button>
//                 </div> : step < 2 ?
//                     <div className="grid gap-4">
//                         <div>
//                             <h2 className="section-heading | font-bold inline-block">Contact Clooud Gen</h2>
//                             <p className="mt-4 text-lg text-gray-500 sm:text-xl dark:text-gray-400">Have a question or feedback? Reach out to us!</p>
//                         </div>
//                         <div className="grid-cols-2 gap-3 sm:grid lg:max-w-xl">
//                             <div className="flex flex-col space-y-1.5 my-3">
//                                 <label htmlFor="name">Name <span className="text-red-500">*</span></label>
//                                 <Input id="name" placeholder="Your Name" autoComplete="off" />
//                             </div>
//                             <div className="flex flex-col space-y-1.5 my-3">
//                                 <label htmlFor="email">Email <span className="text-red-500">*</span></label>
//                                 <Input id="email" placeholder="Your Email" type="email" autoComplete="off" />
//                             </div>
//                             <div className="flex flex-col space-y-1.5 my-3">
//                                 <label htmlFor="name">Subject <span className="text-red-500">*</span></label>
//                                 <Input id="name" placeholder="Subject" autoComplete="off" />
//                             </div>
//                             <div className="flex flex-col space-y-1.5 my-3">
//                                 <label htmlFor="email">Phone</label>
//                                 <Input id="email" placeholder="Phone" type="text" autoComplete="off" />
//                             </div>
//                             <div className="col-span-2 flex flex-col space-y-1.5 my-3">
//                                 <label htmlFor="message">Message <span className="text-red-500">*</span></label>
//                                 <Textarea id="message" placeholder="Your Message" />
//                             </div>
//                             <Button className="w-1/2 mt-3 sm:w-2/3">Submit</Button>
//                             <Button onClick={() => setStep((prev) => prev + 1)} className="w-1/2 mt-3 ml-auto sm:w-2/3">Contact Via</Button>
//                         </div>
//                     </div> :
//                     'whatsapp/email'
//                 }

//                 <div className="hidden md:block">
//                     <SharedCarousel autoplay={true}>
//                         {[
//                             <Image key={0} height={437} src={HeroImageGif} alt="hero image" className="mx-auto" />,
//                             <Image key={1} height={437} src={HeroImageGif1} alt="hero image" className="mx-auto" />,
//                             <Image key={2} height={437} src={HeroImageGif2} alt="hero image" className="mx-auto" />,
//                             <Image key={2} height={437} src={HeroImageGif3} alt="hero image" className="mx-auto" />,
//                         ]}
//                     </SharedCarousel>
//                 </div>
//             </div>

//         </section>
//     );
// };

// export default Hero;
