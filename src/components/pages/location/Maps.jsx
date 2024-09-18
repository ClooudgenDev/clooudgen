import { IoMdCall } from 'react-icons/io';
import { MdOutlineMail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import LocationMap from '@/components/pages/location/LocationMap';

const Maps = ({ locationTitle, number, email, location }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:py-8  bg-white rouned-xl">
      <div className="col-span-3 text-center md:my-auto my-5">
        <IoLocationOutline className="text-5xl mx-auto" />
        <h3 className="">Location</h3>
        <p className="px-4 font-medium">{locationTitle}</p>
        <a href="mailto:info@clooudgen.com">
          <p className="font-medium">
            <MdOutlineMail className="text-lg inline-block mr-1" />
            {email}
          </p>
        </a>
        <a href="tel:+8809638152434">
          <p className="font-medium">
            <IoMdCall className="text-lg inline-block mr-1" />
            {number}
          </p>
        </a>
      </div>

      <div className="col-span-9 md:pr-8">
        <LocationMap location={location} />
      </div>
    </div>
  );
};

export default Maps;
