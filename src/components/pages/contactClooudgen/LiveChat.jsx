import Image from 'next/image';
import React from 'react';
import livechat from '@/assets/images/contactClooudgen/livechat.png'
const LiveChat = () => {
    return (
        <div className='relative my-20'>
        <div className='relative border-foreground border-4 bg-white w-[80px] h-[80px] rounded-full grid justify-center items-center left-36 top-6'>
            <Image src={livechat} alt='' />
        </div>
        <div className='flex flex-col justify-center items-center bg-white w-[350px] h-[200px] rounded-xl space-y-4'>
            <h3>24/7 Live Chat</h3>
            <p>+880 1531-770084</p>
        </div>
    </div>
    );
};

export default LiveChat;