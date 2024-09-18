import { cn } from '@/lib/utils';

const Timeline = ({ events }) => {
    return (
        <div id='sectionId' className='relative my-20'>
            <div className='w-0.5 h-full bg-gray-200 absolute top-0 -translate-x-1/2 left-1/2'></div>

            {events.map((event, index) =>
                <div key={index} className='relative flex items-center justify-center gap-10 my-16'>
                    <span className={cn('absolute px-5 lg:text-xl', { 'left-[55%] md:left-[53%]': index % 2 === 0 }, { 'right-[55%] md:right-[53%] text-right': index % 2 !== 0 })}>{event.description}</span>
                    <span className={cn('bg-foreground text-white rounded-full h-7 w-7 text-center flex justify-center items-center font-bold', event.indexColor)}>{index + 1}</span>
                </div>
            )}

        </div>
    );
};

export default Timeline;