import React from 'react';
import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import moment from 'moment';
import { HiCurrencyDollar } from "react-icons/hi2";
import { IoTime } from "react-icons/io5";
import DynamicModal from '@/components/shared/modal/DynamicModal';
import { LuLoader } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/shared/form/ContactForm';
import Link from 'next/link';
import { DialogClose } from '@/components/ui/dialog';
const JobOverview = ({ data }) => {
    return (
        <div className="bg-white xl:w-[30%] w-full md:p-10 sm:p-6 p-5 shadow-md rounded-md ">
            <h2 className='text-xl lg:text-2xl '>Job Overview</h2>
            <div className='flex flex-col gap-4 font-medium mt-7'>
                <div className='flex items-center gap-2 text-sm md:text-xl'>
                    <IoLocationSharp className='text-xl font-bold text-primary md:text-2xl'></IoLocationSharp>
                    <p className=''>Location :</p> <p>{data.location}</p>
                </div>
                <div className='flex items-center gap-2 text-sm md:text-xl'>
                    <HiCurrencyDollar className='text-xl font-bold text-primary md:text-2xl'></HiCurrencyDollar>
                    <p className=''>Salary : {data.salary}</p>
                </div>
                <div className='flex items-center gap-2 text-sm md:text-xl'>
                    <IoTime className='text-xl font-bold text-primary md:text-2xl'></IoTime>
                    Deadline : <p>{moment(data.timestamp).format('LL')}</p>
                </div>

                <DynamicModal long variant="default" trigger="Apply Now">
                    <h3 className='text-2xl font-bold'>Apply Now</h3>
                    <p>Interested candidates are invited to send their resume, a cover letter, and a portfolio of their work to hr@clooudgen.com . Please include &quot;Full Stack Developer (MERN) Application&quot; in the subject line of your email.</p>

                    <div className='flex items-end w-1/2 gap-5'>
                        <DialogClose><Button>Cancel</Button></DialogClose>
                        <a className='w-' href="mailto:hr@clooudgen.com"><Button className="">Apply</Button></a>
                    </div>
                </DynamicModal>


            </div>
        </div>
    );
};

export default JobOverview;