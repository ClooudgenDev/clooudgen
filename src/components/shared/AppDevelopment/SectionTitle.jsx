import Image from 'next/image';
import React from 'react';

const SectionTitle = ({title,description,titleImage}) => {
    return (
        <div className='flex justify-center flex-col'> 
              <h1 className='text-center flex items-center gap-3 justify-center '>{title}
              {titleImage && <span><Image className='md:w-12 w-10' alt='titleImage'  src={titleImage}/></span>}
               
              </h1>
             <p className='text-[#1D3F70] md:text-base text-sm my-3  font-light italic text-center'>{description}</p>
        </div>
    );
};

export default SectionTitle;