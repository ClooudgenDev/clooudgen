'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
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


  return (
    <div className="container mx-auto mt-40 mb-20">
      <div className="flex flex-col justify-between gap-10 md:items-center md:flex-row ">
        <h1 className="text-3xl font-bold">{data?.projectName}</h1>
        {link ? (
          <Link href={link}>
            {/* <Button className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"> */}
            View Link <IoMdLink className="text-xl" />
            {/* </Button> */}
          </Link>
        ) : (
          <TooltipProvider>
            <Tooltip>
                <TooltipTrigger variant="outline" className="flex items-center gap-2 px-4 py-2 text-white transition bg-gray-500 rounded-full hover:bg-gray-500 disabled">
                  View Link <IoMdLink className="text-xl" />
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
      <div className="flex flex-col gap-10 mt-20 lg:flex-row">
        {/* Project Description */}
        <div className="flex flex-col gap-8 lg:w-[45%] w-full">
          <div>
            <h4 className="text-2xl font-semibold">Project Description</h4>
            <p className="flex flex-col mt-3 leading-relaxed text-gray-700 gap-7">
              {data?.projectDescription?.map((item, key) => (
                <span key={key}>{item}</span>
              ))}
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Skills</h4>
            <div className="flex flex-wrap gap-2 mt-3">
              {data?.skills?.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-gray-700 bg-gray-200 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Image/Video */}
        <div className="lg:w-[55%] w-full   rounded-md mt-10 h-[400px] overflow-y-visible ">
          <ProjectGallery data={data?.img} id={id} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
