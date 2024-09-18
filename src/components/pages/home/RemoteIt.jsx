import RemoteIdCard from '@/components/shared/home/RemoteIdCard';
import RemoteIdData from '@/lib/data/home/RemoteId';
import React from 'react';

const RemoteIt = () => {
    return (
        <div className='container my-20 lg:mt-32'>
           <div className='mb-20'>
           <h2 className='heading-1 text-center'>Remote IT team from Bangladesh</h2>
            <p className='description-1 text-center'>At Clooud Gen, we bring you the best of Bangladesh&apos;s highly skilled IT professionals. Our remote IT team is dedicated to delivering top-notch technology solutions that meet your business needs. Here&apos;s why partnering with us is a smart choice</p>
           </div>
           
            <div className='' >
                <h2 className='heading-2'>Expertise and Experience</h2>
                <p className='description-1'>Our team comprises seasoned experts with extensive experience in various IT domains, including:</p>
            </div>
           <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14'>
                   {RemoteIdData.map((data,idx)=>(
                    <RemoteIdCard data={data} key={idx}/>
                   ))}
           </div>
        </div>
    );
};

export default RemoteIt;