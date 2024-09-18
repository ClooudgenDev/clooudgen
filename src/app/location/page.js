'use client';
import LocationTab from '@/components/pages/location/LocationTab';
import LocationBanner from '@/components/pages/location/LocationBanner';

const page = () => {
  return (
    <div className="container mt-20 md:mt-32">
      <LocationBanner />
      <LocationTab />
    </div>
  );
};

export default page;
