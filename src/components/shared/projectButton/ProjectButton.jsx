import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
const ProjectButton = ({text = "hello"}) => {
    return (
      <button className="flex flex-col px-4 py-2 text-xl text-white rounded-md shadow-lg cursor-pointer  group">
        <span className='flex items-center gap-1'>{text}{' '} <IoIosArrowRoundForward className='text-2xl' /></span>  
        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-full"></span>
      </button>
    );
};

export default ProjectButton;