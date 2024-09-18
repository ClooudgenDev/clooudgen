import Image from 'next/image';
import TeamData from '@/lib/data/team/TeamData';

const OurTeam = () => {
  return (
    <div className="container my-10 md:my-20">
      <div className="text-center text-foreground">
        <h1>
          Meet Our <span className="text-primary">Team</span>
        </h1>
        <p className="mt-2 text-sm lg:mt-4 lg:text-xl">
          With relentless dedication, every member embodies a commitment to
        </p>
        <p className="text-sm lg:text-xl">
          {' '}
          excellence,propelling us towards success.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 my-10 md:grid-cols-3 lg:grid-cols-4 md:my-20 justify-items-center ">
        {TeamData.map((data, idx) => (
          <div key={idx} className="flex flex-col text-center">
            {/* <Image src={TeamBg} className='absolute -z-10 -top-9 md:left-4 ' height={300} width={300} alt="" /> */}
            {/* <Image src={data.img} className='' height={200} width={200} alt="" /> */}
            <div className=" border-[3px] rounded-full border-primary overflow-hidden h-56 w-56 mx-auto">
              {/* <div className='p-5 mx-auto mt-2 rounded-full w-[90%] h-[90%] bg-gradient-to-r from-cyan-700 to-blue-500'>
                            <Image src={data?.img} alt=''/>
                        </div> */}
              <Image
                className=" mx-auto  w-full h-full  object-cover object-top bg-gradient-to-t from-[#1EA6DC] to-white"
                src={data?.img}
                alt=""
              />
            </div>
            <div className="flex-grow mt-3 lg:mt-8">
              <h3 className="text-foreground lg:text-2xl">{data.name}</h3>
              <p className="mx-auto md:w-2/3 text-primary">
                {data.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
