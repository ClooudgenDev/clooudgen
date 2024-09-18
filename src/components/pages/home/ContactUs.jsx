import FadeLeft from '@/components/shared/animation/FadeLeft';
import FadeRight from '@/components/shared/animation/FadeRight';
import ContactForm from '@/components/shared/form/ContactForm';

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-4 my-20 relative ">
      <div className="container grid gap-20 sm:gap-10 items-center lg:grid-cols-12">
        <div className="lg:col-span-7 grid ">
          {/* fade right animation */}
          <FadeRight>
            <div className="mb-4">
              <h2 className="section-heading | font-bold inline-block">
                Contact Clooud Gen
              </h2>
              <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mt-4">
                Have a question or feedback? Reach out to us!
              </p>
            </div>
            <ContactForm />
          </FadeRight>
        </div>

        <div className="lg:col-span-5 space-y-2 h-full w-full">
          {/* Zoom In animation */}
          <FadeLeft>
            <div className="bg-foreground h-full text-white py-5 px-5 sm:px-14 rounded-xl">
              <div className="mb-8">
                <h3 className="text-lg font-semibold">CONTACT</h3>
                <ul className="flex items-center ps-5 sm:ps-0">
                  <li className="list-disc text-3xl relative text-primary">
                    <div className="w-[85px] h-0.5 bg-primary absolute left-7/12 -translate-y-1/2 top-1/2"></div>
                  </li>
                </ul>
                <h4 className="text-2xl sm:text-3xl font-bold">
                  Our Contact Detail
                </h4>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <MailIcon className="text-gray-400 mr-4" />
                  <div>
                    <h5 className="font-semibold">Send E-Mail</h5>
                    <span className="text-gray-400">info@clooudgen.com</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <PhoneIcon className="text-gray-400 mr-4" />
                  <div>
                    <h5 className="font-semibold">Call Anytime</h5>
                    <span className="text-gray-400">+8809638152434</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <LocateIcon className="text-gray-400 mr-4 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold">Locations</h5>
                    <span className="text-gray-400">100% Remote</span>
                  </div>
                </div>
              </div>
              <div className="flex mt-8 space-x-4">
                <a href="#">
                  <FacebookIcon className="text-gray-400" />
                </a>
                <a href="#">
                  <TwitterIcon className="text-gray-400" />
                </a>
                <a href="#">
                  <LinkedinIcon className="text-gray-400" />
                </a>
                <a href="#">
                  <PinIcon className="text-gray-400" />
                </a>
              </div>
            </div>
          </FadeLeft>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function PinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
