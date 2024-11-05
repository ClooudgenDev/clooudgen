import { IoMdCall } from 'react-icons/io';
import { MdOutlineMail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import LocationMap from '@/components/pages/location/LocationMap';

const Maps = ({ locationTitle, number1, number2, email, location }) => {
  return (
    <div className="grid grid-cols-1 bg-white md:grid-cols-12 md:py-8 rouned-xl">
      <div className="col-span-3 my-5 text-center md:my-auto">
        <IoLocationOutline className="mx-auto text-5xl" />
        <h3 className="">Location</h3>
        <p className="px-4 font-medium">{locationTitle}</p>
        <a href="mailto:info@clooudgen.com">
          <p className="font-medium">
            <MdOutlineMail className="inline-block mr-1 text-lg" />
            {email}
          </p>
        </a>
        <a href="tel:+8809638152434">
          <p className="font-medium">
            <IoMdCall className="inline-block mr-1 text-lg" />
            {number1}
          </p>
        </a>
        {
          number2 &&
          <a href="tel:+8809638152434">
            <p className="font-medium">
              <IoMdCall className="inline-block mr-1 text-lg" />
              {number2}
            </p>
          </a>
        }
      </div>

      <div className="col-span-9 md:pr-8">
        <LocationMap location={location} />
      </div>
    </div>
  );
};

export default Maps;