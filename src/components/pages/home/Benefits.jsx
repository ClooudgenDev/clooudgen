import Image from 'next/image';
import Datas from '@/lib/data/home/benefits';
import BenefitKey from '@/assets/images/home/benefit/key.png'
const Benefits = () => {
    return (
        <section className='container my-10 md:mt-20 '>
            <div className='space-y-2 text-center'>
                <h2 className="section-heading">
                    What are the benefits of a remote IT team? 
                </h2>
                {/* <Image alt=''src={BenefitKey}  className=' h-[40px]  w-[320px]   ' /> */}
                <p className='w-full mx-auto text-sm md:w-1/2 md:text-lg'>A remote IT team offers a variety of benefits that can positively impact an organization&apos;s efficiency, cost-effectiveness, and overall productivity. Here are some of the key advantages:</p>
            </div>
            <div className='grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:my-10'>
                {
                    Datas.map((data, index) => <div key={index} className='p-5 border-2'>
                        <div className='flex items-center'>
                        <div className='relative sm:w-[33%] xsm:w-[35%] w-[37%] min-w-[96px] max-w-[96px] h-24 border-4 rounded-full border-primary'>
                            <div className='absolute flex items-center justify-center w-[76px] h-[76px] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-xl left-1/2 top-1/2'>
                                <div className='w-16 h-16 p-2 text-5xl text-white rounded-full bg-primary'>{data.icon}</div>
                                <Image alt=''src={BenefitKey}  className='absolute left-full  w-[400px]   ' />
                                
                            </div>
                            
                        </div>
                        <Image alt=''src={BenefitKey}  className='relative  -left-[11px] h-[50px]  w-[calc(100%-96px)]  ' />
                        </div>

                        <h4 className='my-3 text-[22px] text-start text-primary'>{data.title}</h4>
                        <ul>
                            <li><span className='text-sm font-semibold md:text-lg'>{data.liH1}</span>{data.li1}</li>
                            <li><span className='text-sm font-semibold md:text-lg'>{data.liH2}</span>{data.li2}</li>
                        </ul>
                    </div>
                     
                )
                }
            </div>
        </section>
    );
};

export default Benefits;