import React from 'react';
import '../location/location.css'
const LocationMap = ({location}) => {
    return (
        <div className='responsive-map'>
           <iframe src={location}   loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default LocationMap;