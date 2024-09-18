"use client"
import JobsData from '@/lib/data/career/JobsData';
import { useParams } from 'next/navigation';
import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import React from 'react';
import { HiCurrencyDollar } from "react-icons/hi2";
import { IoTime } from "react-icons/io5";
import moment from 'moment';
import JobOverview from './JobOverview';
import JobDescription from './JobDescription';

const JobDetails = () => {
  const { id } = useParams();
  const data = JobsData.find((job) => job.id == id);
  console.log('salarydata', data);
  const SalaryCutting = (salary) => {
    if (salary < 1000) {
      return salary
    }
    else {
      return `${salary / 1000}k`
    }
  }
  return (
    <div className="container flex flex-col-reverse gap-10 mt-40 mb-20 xl:flex-row">
      <JobDescription data={data} />
      <JobOverview data={data} />
    </div>
  );
};

export default JobDetails;
