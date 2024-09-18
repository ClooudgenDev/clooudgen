import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineAttachEmail } from 'react-icons/md';
import ContactForm from '../form/ContactForm';
import DynamicModal from '../modal/DynamicModal';

const ContactUsDialog = ({
  element = 'Get started',
  DefaultMessege = { subject: '', messege: '' },
  className,
}) => {
  return (
    <DynamicModal long trigger={element}>
      <div>
        <h2 className="section-heading | font-bold inline-block">
          Contact Clooud Gen
        </h2>
        <p className="mt-4 text-lg text-gray-500 sm:text-xl dark:text-gray-400">
          Have a question or feedback? Reach out to us!
        </p>
        <div className="flex gap-5 mt-3 sm:hidden">
          <Link
            href="https://api.whatsapp.com/send?phone=1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-green-600" size={20} />
          </Link>
          <Link
            href="mailto:recipient@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineAttachEmail className="text-red-600" size={20} />
          </Link>
          <Link href="tel:+1234567890">
            <FaPhone className="text-primary" size={18} />
          </Link>
        </div>
      </div>

      <ContactForm defaultData={DefaultMessege} className={'lg:max-w-xl'} />
      <h4 className="hidden mt-5 sm:block">Contact With</h4>
      <div className="hidden gap-8 sm:flex">
        <Link
          href="https://api.whatsapp.com/send?phone=1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-green-600" size={40} />
        </Link>
        <Link
          href="mailto:recipient@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdOutlineAttachEmail className="text-red-600" size={40} />
        </Link>
        <Link href="tel:+1234567890">
          <FaPhone className="text-primary" size={32} />
        </Link>
      </div>
    </DynamicModal>
  );
};

export default ContactUsDialog;
// import { Button } from '@/components/ui/button';
// import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
// import Link from 'next/link';
// import { FaPhone, FaWhatsapp } from 'react-icons/fa';
// import { MdOutlineAttachEmail } from 'react-icons/md';
// import ContactForm from '../form/ContactForm';

// const ContactUsDialog = ({
//   element = 'Get started',
//   DefaultMessege = { subject: '', messege: '' },
//   className,
// }) => {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className={className}>{element}</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[600px] overflow-y-scroll h-[720px]">
//         <div>
//           <h2 className="section-heading | font-bold inline-block">
//             Contact Clooud Gen
//           </h2>
//           <p className="mt-4 text-lg text-gray-500 sm:text-xl dark:text-gray-400">
//             Have a question or feedback? Reach out to us!
//           </p>
//           <div className="flex gap-5 mt-3 sm:hidden">
//             <Link
//               href="https://api.whatsapp.com/send?phone=1234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaWhatsapp className="text-green-600" size={20} />
//             </Link>
//             <Link
//               href="mailto:recipient@example.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <MdOutlineAttachEmail className="text-red-600" size={20} />
//             </Link>
//             <Link href="tel:+1234567890">
//               <FaPhone className="text-primary" size={18} />
//             </Link>
//           </div>
//         </div>

//         <ContactForm defaultData={DefaultMessege} className={'lg:max-w-xl'} />
//         <h4 className="hidden mt-5 sm:block">Contact With</h4>
//         <div className="hidden gap-8 sm:flex">
//           <Link
//             href="https://api.whatsapp.com/send?phone=1234567890"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaWhatsapp className="text-green-600" size={40} />
//           </Link>
//           <Link
//             href="mailto:recipient@example.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <MdOutlineAttachEmail className="text-red-600" size={40} />
//           </Link>
//           <Link href="tel:+1234567890">
//             <FaPhone className="text-primary" size={32} />
//           </Link>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default ContactUsDialog;
