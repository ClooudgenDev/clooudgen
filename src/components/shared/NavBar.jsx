'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CloudGen from '@/assets/images/clooudgen.png';
import { cn } from '@/lib/utils';
import { LuMenu } from 'react-icons/lu';
import CustomMobileNavigationMenu from '../pages/home/CustomMobileNavigationMenu';
import CustomNavigationMenu from '../pages/home/CustomNavigationMenu';
import UserScroll from './UserScroll';

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [status] = UserScroll();

  return (
    <div
      className={`backdrop-blur-3xl z-50 ${
        status ? 'top-10' : 'top-0'
      } duration-1000 transition-all bg-white bg-opacity-50 fixed left-0 z-50 w-full`}
    >
      <div
        className={cn('mx-auto flex justify-between items-center', {
          'container py-2 md:py-3': !mobileNav,
        })}
      >
        <Link href={'/'}>
          <Image
            className={cn('', { hidden: mobileNav })}
            src={CloudGen}
            width={80}
            alt="Logo"
          />
        </Link>
        <LuMenu
          onClick={() => setMobileNav((prev) => !prev)}
          className={cn('w-7 h-7 sm:hidden cursor-pointer', {
            hidden: mobileNav,
          })}
        />

        <CustomNavigationMenu className={'hidden sm:flex'} />

        <CustomMobileNavigationMenu
          setMobileNav={setMobileNav}
          className={cn(
            'absolute top-0 right-0 bg-white z-[9999] scrollbar-hidden w-full h-screen overflow-x-scroll text-foreground hidden',
            { 'block sm:hidden': mobileNav }
          )}
        />
      </div>
    </div>
  );
};

export default NavBar;

// 'use client'

// import { useState } from "react";
// import Image from "next/image";
// import NavigationMenuWraper from "./NavigationMenuWraper";
// import { cn } from "@/lib/utils";
// import { LuMenu } from "react-icons/lu";
// import CloudGen from "@/assets/images/cloudgen.png"

// const NavBar = () => {
//     const [mobileNav, setMobileNav] = useState(false)
//     return (
//         <div className="container flex items-center justify-between py-5 mx-auto">
//             <Image src={CloudGen} width={80} alt="Logo" />

//             <LuMenu onClick={() => setMobileNav((prev) => !prev)} className={cn("w-9 h-9 sm:hidden cursor-pointer", { 'hidden': mobileNav })} />

//             <div className={cn("hidden sm:flex", { 'block sm:hidden': mobileNav })}>
//                 {/* <div className={"hidden sm:flex"}> */}
//                 <NavigationMenuWraper className="p-5 px-10 w-80 text-start whitespace-nowrap" menu={'About'} >
//                     <ul>
//                         <li>About Clooud Gen</li>
//                         <li>How We Work</li>
//                         <li>FAQ</li>
//                         <li>Our Team</li>
//                         <li>Subscription</li>
//                         <li>Privacy Policy</li>
//                     </ul>
//                 </NavigationMenuWraper>
//                 <NavigationMenuWraper className="w-full p-5 text-start" menu={'Services'} >about CloudGen</NavigationMenuWraper>
//                 <NavigationMenuWraper className="w-full p-5 text-start" menu={'Company'} >about CloudGen</NavigationMenuWraper>
//                 <NavigationMenuWraper className="w-full p-5 text-start" menu={'Project'} >about CloudGen</NavigationMenuWraper>

//             </div>
//         </div>
//     );
// };

// export default NavBar;
