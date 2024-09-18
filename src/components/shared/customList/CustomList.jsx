import { CheckIcon } from 'lucide-react';

const CustomList = ({listIcon, children}) => {
    return (
        <li className="flex items-start my-2 list-disc">
           <CheckIcon className='text-primary'/>
            <div className='w-full ms-3'>
                {children}
            </div>
        </li>
    );
};

export default CustomList;