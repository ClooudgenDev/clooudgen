'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { IoMdLink } from 'react-icons/io';
import { useState, useEffect } from 'react';
import ProjectData from '@/lib/data/project/project';
import ProjectGallery from './ProjectGallery';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
const ProjectDetails = ({ viewLink = true, link = '' }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const data = [...ProjectData];
    const findData = data.find((item) => item.id == id);
    setData(findData);
    console.log(findData);
  }, [id]);
  const skills = ['React js ', 'Node js', 'Redux', 'Mongodb'];
  return (
    <div className="mt-40 mb-20 container mx-auto">
      <div className="flex justify-between md:items-center md:flex-row flex-col gap-10 ">
        <h1 className="text-3xl font-bold">{data?.projectName}</h1>
        {link ? (
          <Link href={link}>
            <Button className="rounded-full flex items-center gap-2 bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">
              View Link <IoMdLink className="text-xl" />
            </Button>
          </Link>
        ) : (
          // <Tooltip text="We cannot show you the link because of the client privacy. Contact with us for more details">
          //   {' '}

          // </Tooltip>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger variant="outline">
                <Button className="rounded-full flex items-center gap-2 bg-gray-500 hover:bg-gray-500 text-white px-4 py-2  transition disabled">
                  View Link <IoMdLink className="text-xl" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-[350px] text-red-500">
                  We cannot show you the link because of the client privacy.
                  Contact with us for more details
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      {/* Project details */}
      <div className="flex gap-10 lg:flex-row flex-col mt-20">
        {/* Project Description */}
        <div className="flex flex-col gap-8 lg:w-[45%] w-full">
          <div>
            <h4 className="text-2xl font-semibold">Project Description</h4>
            <p className="mt-3 text-gray-700 leading-relaxed flex flex-col gap-7">
              {data?.projectDescription?.map((item, key) => (
                <span key={key}>{item}</span>
              ))}
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Skills</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {data?.skills?.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Image/Video */}
        <div className="lg:w-[55%] w-full   rounded-md mt-10 h-[400px] overflow-y-visible ">
          <ProjectGallery data={data?.img} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
