import Technlogy from '@/assets/images/technology/nodejs.png';
import TechnologyData from '@/lib/data/Technology/Technology';
import Image from 'next/image';



const TechPara = ({ }) => {
  return (
    <div className='w-full mt-20 bg-green-50'>
      {
        TechnologyData.map((technology, idx) => (
          <div key={idx} style={{
            backgroundColor: `${technology.color}`
          }} className={` w-full`}>
            <div className={`flex  container flex-col gap-6 py-20 ${technology.direction == 'right' ? 'justify-end' : 'justify-start'} relative`}>
              <div className={`absolute opacity-20 z-0 flex justify-center items-center h-full ${technology.direction == 'right' ? 'right-0' : ''}  lg:w-[50%] w-full`}>
                <Image className='w-[400px] mx-auto' src={technology.logo} alt='WaterMark' />

              </div>

              <div className={`flex gap-2 items-center z-10 ${technology.direction == 'right' ? 'justify-start flex-row-reverse ' : 'justify-start'}`}>
              <div className='w-[60px] h-[60px] rounded-full flex items-center' style={{
                    border: `3px solid ${technology.borderColor}`
                  }}>
                  <Image src={technology.logo} alt='technology' className={`  p-1 w-[60px] rounded-full`} />
                </div>
                <p className='text-xl font-semibold'>{technology.Technology}</p>
              </div>
              <div className='z-10 flex flex-col gap-10'>
                {
                  technology.questionAnswer.map((item, idx) => (

                    <div key={idx} className={`flex flex-col justify-start ${technology.direction == "right" ? 'items-end' : ''} gap-1 `}>
                      <h2 className="font-bold heading-2">{item?.title}</h2>
                      {
                        item.description.map((description, idx) => (
                          <p key={idx} className={`max-w-[900px] flex ${technology.direction == "right" ? "justify-start items-start text-end" : "justify-start items-end"}   text-gray-500 description-1`}>
                            {description}

                          </p>
                        ))
                      }


                    </div>
                  ))
                }
                <div className='flex flex-col gap-3'>
                  {technology?.list?.map((listData, idx) => (
                    <p key={idx} className={`lg:text-lg max-w-[700px] flex gap-3 items-start text-gray-500 md:text-base text-sm font-medium ${technology.direction == 'right' ? 'ml-auto md:mr-10 mr-3 text-end' : 'mr-auto md:ml-10 ml-3 flex-row-reverse'} `}>{listData} <span className='font-bold text-black'>{idx + 1}</span></p>
                  ))}
                </div>
                <div key={idx} className={`flex flex-col justify-start ${technology.direction == "right" ? 'items-end' : ''} gap-1 `}>
                  {
                    technology?.EndDescription?.map((description, idx) => (
                      <p key={idx} className={`max-w-[900px] flex ${technology.direction == "right" ? "justify-start items-start text-end" : "justify-start items-end"}   text-gray-500 description-1`}>
                        {description}

                      </p>
                    ))
                  }


                </div>
              </div>

            </div>
          </div>
        ))
      }






      {/* <div className='container relative flex flex-col justify-start gap-6 py-20'>
     <div className='absolute opacity-20 flex justify-center items-center h-full w-[50%]'>
     <Image className='w-[400px]' src={Technlogy} alt='WaterMark'/>

     </div>
      
    <div className='flex items-center gap-2'>
    <div className='max-w-[60px] '>
      <Image src={Technlogy} alt='technology' className=' border-[3px] w-full border-green-500 rounded-full'/>
    </div>
    <p className='text-xl font-semibold'>Node.Js</p>
    </div>
  <div className='flex flex-col gap-10'>
  <div className="flex flex-col justify-start gap-1 ">
        <h2 className="font-bold heading-2">What is Node Js ?</h2>
        <p className="max-w-[900px]  mr-auto ml-0  text-gray-500 description-1">
        Node.js is a popular open-source, cross-platform JavaScript runtime environment that executes JavaScript code server-side. It uses the V8 JavaScript engine, which is the same engine that powers Google Chrome. Node.js allows developers to use JavaScript for server-side scripting, enabling them to build scalable, event-driven applications. It's commonly used for building web servers, APIs (Application Programming Interfaces), real-time web applications, and microservices. Node.js has a vast ecosystem of libraries and frameworks, making it a versatile platform for various types of applications.

        </p>
      </div>
      <div className="flex flex-col justify-start gap-1 ">
        <h2 className="font-bold heading-2">Why a project might choose to use Node.js ?</h2>
        <p className="max-w-[900px]  mr-auto ml-0   text-gray-500 description-1">
        Node.js offers a compelling choice for projects due to several key advantages. Firstly, its utilization of JavaScript across both client and server sides provides a unified language stack, streamlining development processes. Secondly, its asynchronous and event-driven architecture suits applications requiring high concurrency and real-time interactions, leading to enhanced performance and scalability. Additionally, Node.js boasts a rich ecosystem of modules and libraries through npm, accelerating development by offering pre-built solutions for common functionalities.

        </p>
        <p className="max-w-[900px]  mr-auto ml-0   text-gray-500 description-1">
        Leveraging the performance optimizations of the V8 JavaScript engine, Node.js ensures efficient execution, particularly for I/O-bound operations. Supported by a large and active community, developers have access to abundant resources for learning and troubleshooting. Node.js facilitates scalability through easy horizontal and vertical scaling, making it adaptable to varying workload demands. Furthermore, its cross-platform compatibility enables deployment flexibility across different operating systems. These attributes collectively make Node.js a compelling choice for a wide range of projects seeking efficiency, scalability, and performance.


        </p>
      </div>
  </div>

   </div>




   <div className='container flex flex-col justify-end w-full gap-6'>
    <div className='flex flex-row-reverse items-center justify-start gap-2'>
    <div className='max-w-[60px] '>
      <Image src={Technlogy} alt='technology' className=' border-[3px] w-full border-green-500 rounded-full'/>
    </div>
    <p className='text-xl font-semibold'>Node.Js</p>
    </div>
  <div className='flex flex-col items-end justify-end gap-10'>
  <div className="flex flex-col justify-start gap-1 ">
        <h2 className="font-bold heading-2 text-end">What is Node Js ?</h2>
        <p className="max-w-[900px]  mr-auto ml-0  text-end text-gray-500 description-1">
        Node.js is a popular open-source, cross-platform JavaScript runtime environment that executes JavaScript code server-side. It uses the V8 JavaScript engine, which is the same engine that powers Google Chrome. Node.js allows developers to use JavaScript for server-side scripting, enabling them to build scalable, event-driven applications. It's commonly used for building web servers, APIs (Application Programming Interfaces), real-time web applications, and microservices. Node.js has a vast ecosystem of libraries and frameworks, making it a versatile platform for various types of applications.

        </p>
      </div>
      <div className="flex flex-col justify-start gap-1 ">
        <h2 className="font-bold heading-2 text-end">Why a project might choose to use Node.js ?</h2>
        <p className="max-w-[900px]  mr-auto ml-0 text-end  text-gray-500 description-1">
        Node.js offers a compelling choice for projects due to several key advantages. Firstly, its utilization of JavaScript across both client and server sides provides a unified language stack, streamlining development processes. Secondly, its asynchronous and event-driven architecture suits applications requiring high concurrency and real-time interactions, leading to enhanced performance and scalability. Additionally, Node.js boasts a rich ecosystem of modules and libraries through npm, accelerating development by offering pre-built solutions for common functionalities.

        </p>
        <p className="max-w-[900px]  mr-auto ml-0  text-end text-gray-500 description-1">
        Leveraging the performance optimizations of the V8 JavaScript engine, Node.js ensures efficient execution, particularly for I/O-bound operations. Supported by a large and active community, developers have access to abundant resources for learning and troubleshooting. Node.js facilitates scalability through easy horizontal and vertical scaling, making it adaptable to varying workload demands. Furthermore, its cross-platform compatibility enables deployment flexibility across different operating systems. These attributes collectively make Node.js a compelling choice for a wide range of projects seeking efficiency, scalability, and performance.


        </p>
      </div>
  </div>

   </div> */}
    </div>
  );
};

export default TechPara;
