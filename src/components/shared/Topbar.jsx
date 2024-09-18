'use client'
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import UserScroll from "./UserScroll";
import { IoLocationOutline } from "react-icons/io5";

const Topbar = () => {
  const [status] = UserScroll()
  return (
    <div className={`bg-foreground ${status ? ' top-0 h-10' : 'h-0 -top-[0.5px]'} overflow-hidden transition-all duration-1000 text-sm flex justify-end items-center lg:px-10 md:px-6 px-4 text-white bg-opacity-50 fixed left-0 z-50 w-full`}>
      <div className="container flex justify-center md:justify-end">
        {/* social icons */}
        <div className="flex items-center lg:gap-2 ">
          <a href="location" className="flex items-center gap-1 px-3 cursor-pointer ">
            <span className="text-xl"><IoLocationOutline /></span>
            <p className="hidden md:block">Branch Address</p>
          </a>
          <a href="mailto:info@clooudgen.com" className="flex items-center gap-1 px-3 cursor-pointer ">
            <span className="text-xl"><MdOutlineMail /></span>
            <p className="hidden md:block"> info@clooudgen.com </p>
          </a>
          <a href="tel:+14072082598" className="flex items-center gap-1 px-3 cursor-pointer ">
            <span className="text-xl"><IoMdCall /></span>
            <p className="hidden md:block"> +14072082598 </p>
          </a>
          {/* <a href="https://wa.me/8801531770084" className="flex items-center gap-1 px-3 cursor-pointer md:hidden">
            <span className="text-xl"><FaWhatsapp /></span>
            <p className="hidden md:block"> +880 1531-770084 </p>
          </a> */}
        </div>
      </div>
    </div>

  );
};

export default Topbar;