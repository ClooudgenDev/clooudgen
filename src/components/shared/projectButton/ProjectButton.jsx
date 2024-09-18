import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
const ProjectButton = ({text = "hello"}) => {
    return (
        <button className=" text-white px-4 py-2  rounded-md shadow-lg text-xl group flex  cursor-pointer flex-col">
      <span className='flex gap-1 items-center'>{text}{' '} <IoIosArrowRoundForward className='text-2xl' /></span>  
        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
      </button>
    );
};

export default ProjectButton;