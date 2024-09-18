import CustomList from '@/components/shared/customList/CustomList';
const WhyCloudgen = () => {
  return (
    <div className="container">
      <h1 className="w-full md:mb-5 sm:w-4/5 md:w-full">
        {' '}
        Why Choose Clooud Gen?
      </h1>

      <p className="my-4 sm:text-justify text-md md:text-lg">
        Join us at Clooud Gen, where we transform technological challenges into
        opportunities for growth and success. Let’s shape the future of your
        business together.
      </p>
      <ul className="text-sm list-disc md:text-lg">
        <CustomList>
          <span className="font-bold">Innovative Approach:</span> We are
          constantly exploring new technologies and methodologies to deliver
          innovative solutions that meet the changing needs of our clients.
        </CustomList>
        <CustomList>
          <span className="font-bold">Client-Centric Focus:</span> Our clients
          are at the heart of everything we do. We work closely with you to
          understand your challenges and objectives, ensuring our solutions
          align with your business goals.
        </CustomList>
        <CustomList>
          <span className="font-bold">Experienced Team:</span> Our team
          comprises seasoned professionals with deep expertise in software
          development, cloud computing, data analytics, AI, and IT consulting.
          Their combined knowledge and experience enable us to tackle even the
          most complex projects.
        </CustomList>
        <CustomList>
          <span className="font-bold">Commitment to Quality:</span> Quality is
          paramount at Clooud Gen. We adhere to rigorous quality standards and
          best practices to ensure our solutions are reliable, efficient, and
          effective.
        </CustomList>
        <CustomList>
          <span className="font-bold">Agility and Flexibility:</span> In today’s
          fast-paced world, agility is crucial. We pride ourselves on our
          ability to adapt quickly to changes and deliver solutions that are
          flexible and scalable.
        </CustomList>
      </ul>
    </div>
  );
};

export default WhyCloudgen;
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import React from 'react';
// import About from '@/assets/images/about.png'

// const WhyCloudgen = () => {
//     return (
//         <div className="container flex flex-col">
//             <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
//                 <div className="grid items-center justify-center grid-cols-2 gap-5 justify-items-center bg-slate-500 rounded-xl">

//                     <div className='relative flex h-full ml-auto'>
//                         <Image
//                             alt="Teamwork"
//                             className="object-cover w-4/6 my-auto ml-auto border-4 border-black rounded-lg h-4/6"
//                             height="300"
//                             src={About}
//                             width="260"
//                         />

//                         <Image
//                             alt="Teamwork"
//                             className="absolute mb-6 ml-6 rounded-lg bottom-3 left-1/2"
//                             height={200}
//                             width={200}
//                             src={About}

//                         />
//                     </div>

//                     <Image
//                         alt="sdfdsfdsf"
//                         className="rounded-lg mr-auto w-full aspect-[4/6] object-cover"
//                         height="400"
//                         src={About}
//                         width="300"
//                     />
//                 </div>

//                 <div className="m-10 mr-0 space-y-10">
//                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Us</h2>
//                     <p className="text-justify text-gray-500 md:text-xl/relaxed dark:text-gray-400">
//                         CloudGen stands at the forefront of web development, offering comprehensive services spanning from website construction to seamless backend-frontend integration. Our mission is to empower businesses with digital solutions that not only meet but exceed expectations. With a blend of expertise and passion, we redefine the digital landscape, one project at a time.
//                     </p>
//                     <Button>Know More</Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WhyCloudgen;
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import React from 'react';
// import About from '@/assets/images/about.png'

// const WhyCloudgen = () => {
//     return (
//         <div className="container flex flex-col">
//             <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
//                 <div className="grid items-center justify-center grid-cols-2 gap-5 bg-slate-500 rounded-xl">
//                     <div className="relative flex justify-end ml-auto min-w-4/6">
//                         {/* <img
//                                 alt="Origami"
//                                 className="rounded-lg"
//                                 height="300"
//                                 src="https://www.reshot.com/preview-assets/illustrations/ZK3N2W7CDX/website-design-ZK3N2W7CDX-w1600.jpg"
//                                 style={{
//                                     aspectRatio: "300/300",
//                                     height: "300px",
//                                     objectFit: "cover",
//                                     width: "280px",
//                                 }}
//                                 width="280"
//                             /> */}
//                         <Image
//                             alt="Teamwork"
//                             className="rounded-lg border-4 border-black w-[250px]"
//                             height="300"
//                             src={About}
//                             width="260"
//                         />
//                         {/* <div className="absolute bottom-0 left-0 ml-6 mb-6 bg-[#333333] text-white p-4 rounded-lg">
//                                 <p>We&aposre delivering the best customer experience!</p>
//                             </div> */}
// <Image
//     alt="Teamwork"
//     className="absolute mb-6 ml-6 rounded-lg -bottom-12 left-1/2"
//     height={200}
//     width={200}
//     src={About}

// />
//                     </div>
//                     <Image
//                         alt="Teamwork"
//                         className="min-w-full rounded-lg"
//                         height="400"
//                         src={About}
//                         style={{
//                             aspectRatio: "300/400",
//                             height: "400px",
//                             objectFit: "cover",
//                             width: "300px",
//                         }}
//                         width="300"
//                     />
//                 </div>

//                 <div className="m-10 mr-0 space-y-10">
//                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Us</h2>
//                     <p className="text-justify text-gray-500 md:text-xl/relaxed dark:text-gray-400">
//                         CloudGen stands at the forefront of web development, offering comprehensive services spanning from website construction to seamless backend-frontend integration. Our mission is to empower businesses with digital solutions that not only meet but exceed expectations. With a blend of expertise and passion, we redefine the digital landscape, one project at a time.
//                     </p>
//                     <Button>Know More</Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WhyCloudgen;

// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import React from 'react';
// import About from '@/assets/images/about.png'

// const WhyCloudgen = () => {
//     return (
//             <div className="container flex flex-col gap-4">
//                 <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
//                     <div className="flex items-center justify-center p-6 m-10 ml-0 bg-slate-500 rounded-xl">
//                         <div className="relative w-2/5">
//                             {/* <img
//                                 alt="Origami"
//                                 className="rounded-lg"
//                                 height="300"
//                                 src="https://www.reshot.com/preview-assets/illustrations/ZK3N2W7CDX/website-design-ZK3N2W7CDX-w1600.jpg"
//                                 style={{
//                                     aspectRatio: "300/300",
//                                     height: "300px",
//                                     objectFit: "cover",
//                                     width: "280px",
//                                 }}
//                                 width="280"
//                             /> */}
//                             <Image
//                                 alt="Teamwork"
//                                 className="border-4 border-black rounded-lg"
//                                 height="300"
//                                 src={About}
//                                 style={{
//                                     aspectRatio: "300/400",
//                                     height: "300px",
//                                     objectFit: "cover",
//                                     width: "280px",
//                                 }}
//                                 width="280"
//                             />
//                             {/* <div className="absolute bottom-0 left-0 ml-6 mb-6 bg-[#333333] text-white p-4 rounded-lg">
//                                 <p>We&aposre delivering the best customer experience!</p>
//                             </div> */}
//                             <Image
//                                 alt="Teamwork"
//                                 className="absolute bottom-0 mb-6 ml-6 rounded-lg left-1/2"
//                                 height={200}
//                                 width={200}
//                                 src={About}

//                             />
//                         </div>
//                         <Image
//                             alt="Teamwork"
//                             className="ml-4 rounded-lg"
//                             height="400"
//                             src={About}
//                             style={{
//                                 aspectRatio: "300/400",
//                                 height: "400px",
//                                 objectFit: "cover",
//                                 width: "300px",
//                             }}
//                             width="300"
//                         />
//                     </div>

//                     <div className="m-10 mr-0 space-y-10">
//                         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Us</h2>
//                         <p className="text-justify text-gray-500 md:text-xl/relaxed dark:text-gray-400">
//                             CloudGen stands at the forefront of web development, offering comprehensive services spanning from website construction to seamless backend-frontend integration. Our mission is to empower businesses with digital solutions that not only meet but exceed expectations. With a blend of expertise and passion, we redefine the digital landscape, one project at a time.
//                         </p>
//                         <Button>Know More</Button>
//                     </div>
//                 </div>
//             </div>
//     );
// };

// export default WhyCloudgen;
