import React from 'react';

const RemoteIdCard = ({data}) => {
    const {image, title, description} = data
    return (
        <div className='flex flex-col border border-gray-300 md:p-6 p-4 rounded-lg'>
            <data.image className='font-extrabold' size={70} />
            <h4 className='mt-5 text-xl text-primary font-semibold'>{title}</h4>
            <p className='text-base mt-3'>{description}</p>
            
        </div>
    );
};

export default RemoteIdCard;