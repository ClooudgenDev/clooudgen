import React from 'react';

const VideoButton = ({text,className}) => {
    return (
        <button className={` ${className} rounded-md md:text-lg sm:text-base text-sm bg-primary text-white md:px-4  px-3 py-2 hover:bg-[#33AEDF]`}>{text}</button>
    );
};

export default VideoButton;