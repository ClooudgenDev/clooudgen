import Image from 'next/image';
import TitleBg from '@/assets/images/appdevelopment/bgdevelopProcess.png'
import DevelopProcessData from '@/lib/data/AppDevelopment/DevelopProcess';
import Breaker from '@/assets/images/appdevelopment/developmentProcess/curvedLine.png';
import { cn } from '@/lib/utils';


const DevelopProcess = () => {
    const heights = [null, 'h-[118px]', 'h-[93px]', 'h-[116px]', 'h-[116px]', 'h-[95px]', 'h-[118px]', 'h-[98px]'];
    const widths = [null, 'w-[64px]', 'w-[54px]', 'w-[79px]', 'w-[76px]', 'w-[64px]', 'w-[66px]', 'w-[54px]'];
    const styles = ['left-full rotate-180 top-[50%]', 'right-full bottom-[30%]', 'left-full rotate-180 top-[50%]', 'right-full bottom-[30%]', 'left-full rotate-180 top-[50%]', 'right-full bottom-[30%]', 'left-full rotate-180 top-[30%]', 'right-full bottom-[50%]'];

    return (
        <div className='my-10'>
            <div className='relative flex items-center justify-center bottom-10'>
                <Image className='xl:max-w-[650px] lg:max-w-[550px] z-0 absolute md:max-w-[450px] sm:max-w-[400px] max-w-[300px]' src={TitleBg} alt='title bg' />
                <h2 className='relative z-10 text-sm font-bold text-center text-white lg:text-2xl md:text-xl tsm:ext-lg'>Our App Development Process</h2>
            </div>
            <section className='relative'>
                <div className='absolute inset-0 items-center justify-center hidden sm:flex -z-10'>
                    <div className='relative rotate-90 lg:rotate-0'>
                        <Image className='max-w-[1500px] lg:max-w-[1360px]' src={Breaker} alt='Breaker' />
                    </div>
                </div>
                <div className='container grid grid-cols-1 gap-10 my-10 lg:grid-cols-4 sm:grid-cols-2 gap-x-40 lg:gap-x-10 lg:gap-y-60'>
                    {
                        DevelopProcessData.map((item, index) => (
                            <div key={item.id} className='sm:max-w-[400px] flex flex-col mx-auto relative'>
                                <div className='bg-[#002952] w-full h-20  flex justify-center items-center'>
                                    <h4 className='text-center text-white ' >{item.title}</h4>

                                </div>
                                <div className='shadow bg-gradient-to-b from-blue-100 via-white to-blue-200'>

                                    <div className={`absolute hidden lg:block ${index > 3 ? 'bottom-full right-[40%] top-auto rotate-180' : 'top-full left-[40%]'}`}>
                                        <div className={cn('w-1.5 bg-primary relative h-24', heights[index])}>
                                            <div className={cn('absolute -translate-x-1/2 left-1/2 top-full w-7 h-7 rounded-full bg-primary')}></div>
                                        </div>
                                    </div>

                                    <div className={cn(`absolute hidden sm:block lg:hidden ${index > 3 ? '' : ''}`, styles[index])}>
                                        <div className={cn('h-1.5 bg-primary relative w-[54px]', widths[index])}>
                                            <div className={cn('absolute -translate-y-1/2 top-1/2 right-full w-7 h-7 rounded-full bg-primary')}></div>
                                        </div>
                                    </div>

                                    <ul className={cn('m-5 my-10 flex flex-col gap-2 h-[280px]', { ' overflow-y-scroll scroll-m-0': index === 0 || index === 2 || index === 4 || index === 5 })}>
                                        {item.description.map((listData) => (
                                            <li key={listData} className='flex items-start gap-2 text-[#002952d6] font-medium'>
                                                <span>
                                                    &#8226;
                                                </span>{listData}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default DevelopProcess;