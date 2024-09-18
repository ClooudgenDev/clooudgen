import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
const JobDescription = ({ data }) => {
  const {
    id,
    title,
    type,
    requirements,
    jobDescription,
    detailedRequirements,
    qualification,
    Offer,
    experience,
    tags,
    location,
    Salary,
  } = data;
  return (
    <div className="bg-white xl:w-[70%] w-full md:p-10 p-4 shadow-md rounded-md flex flex-col gap-10">
      {/* Job Title */}
      <div className="">
        <h4 className="font-bold lg:text-2xl md:text-xl text-lg">
          Job Title : {title}
        </h4>
      </div>
      {/* Job Description */}
      <div className="">
        <h4 className="font-bold lg:text-2xl md:text-xl text-lg">Job Description</h4>
        <h4 className="description-1 ">{jobDescription}</h4>
      </div>
      {/* Job responsibities */}
      <div className="">
        <h4 className="font-bold lg:text-2xl md:text-xl text-lg">
          Key Responsibilities
        </h4>
        <div className="flex flex-col gap-2 mt-3">
            {detailedRequirements.map((item,key)=>(
                <p key={key} className='text-sm font-medium lg:text-lg md:text-base flex pl-4 gap-2 justify-start  items-start'><span className='font-bold'>{key+1}.</span> {' '}  {item}</p>
            ))}
        </div>
      </div>
      {/* Job qualifications */}
      <div className="">
        <h4 className="font-bold lg:text-2xl md:text-xl text-lg">
         Qualifications
        </h4>
        <div className="flex flex-col gap-2 mt-3">
            {qualification.map((item,key)=>(
                <p key={key} className='text-sm font-medium lg:text-lg md:text-base flex pl-4 gap-2 justify-start  items-start'><span className='font-bold'>{key+1}.</span> {' '}  {item}</p>
            ))}
        </div>
      </div>
      <div className="">
        <h4 className="font-bold lg:text-2xl md:text-xl text-lg">What We Offer</h4>
        <div className="flex flex-col gap-2 mt-3">
            {Offer.map((item,key)=>(
                <p key={key} className='text-sm font-medium lg:text-lg md:text-base flex pl-4 gap-2 justify-start  items-start'><span className='font-bold'>{key+1}.</span> {' '}  {item}</p>
            ))}
        </div>
      </div>
      {/* <div className="">

        <h4 className="description-1 ">We are willing see your skills that can help our organization to grow </h4>
      </div> */}
      {/*  */}
    </div>
  );
};

export default JobDescription;
