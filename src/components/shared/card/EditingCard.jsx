import Image from 'next/image';
import React from 'react';
import VideoButton  from '@/components/shared/videoediting/VideoButton';

const EditingCard = ({item}) => {
    return (
    <div  className='mx-auto flex flex-col  sm:w-[350px] h-[437px] shadow-md  '>
                       <Image src={item.image} alt='image-bg' className='rounded-t-xl w-full'/>
                       <div className='bg-white flex flex-col  p-5 rounded-b-xl'>
                              <h3 className='text-xl text-black font-medium'>{item.title}</h3>
                              <p className='mt-3 font-light text-black text-sm '>{item.description}</p>
                              <hr className='my-3' />
                              <div>
                                 <VideoButton className='rounded-xl' text={'more'}/>
                              </div>   
        </div>

    </div>
    );
};

export default EditingCard;