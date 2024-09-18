import JobsData from '@/lib/data/career/JobsData';

import Job from './Job';

const Jobs = () => {
  return (
    <div id='jobs' className="container lg:pt-32  my-20">
      <div>
        <h4 className="heading-2 text-center my-4">COME JOIN US</h4>
        <h2 className="heading-1  text-center">Career Openings </h2>
        <p className=" text-sm font-medium max-w-[750px] mx-auto lg:text-lg md:text-base text-gray-500 md:my-7 my-5 text-center">
          We&apos;re always looking for creative, talented self starters to join
          the <span className="text-primary">Clooud Gen</span> family. Check out
          our openings roles below and fill out an applicaiton
        </p>

        <div className="flex justify-center my-20  flex-col gap-5  ">
          {JobsData.map((job, key) => (
            <Job job={job} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
