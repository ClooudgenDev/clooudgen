import React from 'react';
import { TfiBag } from 'react-icons/tfi';
import { IoMdDoneAll } from 'react-icons/io';
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { SlCalender } from "react-icons/sl";
import moment from 'moment';
import Link from 'next/link';

const Job = ({job}) => {
    // const SalaryCutting = (salary)=>{
    //     if(salary < 1000){
    //        return salary
    //     }
    //     else {
    //       return `${salary / 1000}k`
    //     }
    //    }
    return (
        <div
        className="flex justify-between lg:w-[900px] w-full lg:flex-row flex-col shadow-sm lg:items-center p-7 mx-auto  bg-white rounded-md"
      >
        <div className="flex flex-col gap-4">
          <h2 className="flex items-center gap-3 text-xl">
            <TfiBag className="font-semibold" />
            {job.title}
          </h2>
          <div>
            {job.requirements.map((item, key) => (
              <p className="flex items-center gap-2" key={key}>
                <IoMdDoneAll className="font-bold text-primary" /> {item}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mb-4 lg:mb-0">
            {job.tags.map((tag, key) => (
              <p
                className="border-primary py-2 lg:text-base md:text-sm text-[12px] px-4 rounded-full border-2 "
                key={key}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-7">
          <div className='flex flex-col items-start h-full gap-3'>
            {/* <h4 className='flex items-center gap-2 font-medium'><RiMoneyDollarCircleLine className='text-2xl text-primary'   /> Salary  {SalaryCutting(job.minSalary)} - {SalaryCutting(job.maxSalary)}</h4> */}
            <h4 className='flex items-center gap-2 font-medium'><RiMoneyDollarCircleLine className='text-2xl text-primary' /> Salary : {job.salary}</h4>
            <h4 className='flex items-center gap-2 font-medium'><SlCalender className='text-xl text-primary' /> Deadline : {moment(job.timestamp).format('MMMM D, YYYY')}</h4>
          </div>
          <div className='lg:flex-1'>
          <Link href={`/career/${job.id}`}>
              <button className='px-5 py-3 text-white bg-primary rounded-xl'>View Details</button>
          </Link>
         
          </div>

          
        </div>
      </div>
    );
};

export default Job;