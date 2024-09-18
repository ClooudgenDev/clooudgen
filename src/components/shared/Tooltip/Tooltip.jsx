import { cn } from '@/lib/utils';
import React from 'react';

const Tooltip = ({ children, className,text }) => {
  return (
    <div className="pointer group relative   flex h-10 w-max ">
      {/* Hover button */}
      {/* <button className={cn(`rounded-md border border-[#0EA5E9] px-3 py-2 text-[#0EA5E9]`,className)}>Hover</button> */}
      {children}
      {/* Hover Text */}
      <div
        className={cn(
          `absolute -bottom-5 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-16 group-hover:opacity-100  `,
          className
        )}
      >
        <p className="rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9] text-wrap">
          {' '}
         {text}
        </p>
        <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] "></span>
      </div>
    </div>
  );
};

export default Tooltip;
