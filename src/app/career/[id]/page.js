'use client';

import JobsData from '@/lib/data/career/JobsData';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import careerBg from '@/assets/images/career/bg.jpg';
import { contact } from '@/assets/images/contactClooudgen/contact.png';
import JobDetails from '@/components/pages/career/JobDetails/JobDetails';

const CareerDetails = () => {

  return (
    <div className=" ">
      <JobDetails/>
    </div>
  );
};

export default JobDetails;
