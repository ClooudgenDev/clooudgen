'use client';
import { subscriptionAction } from '@/app/services/actions/subscriptionAction';
import Amex from '@/assets/footer/amex.svg';
import Asia from '@/assets/footer/asia.svg';
import Bkash from '@/assets/footer/bkash.svg';
import Brac from '@/assets/footer/brac.svg';
import Dbbl from '@/assets/footer/dbbl.svg';
import Islamibank from '@/assets/footer/islamibank.svg';
import Master from '@/assets/footer/master.svg';
import Mcash from '@/assets/footer/mcash.svg';
import Nagad from '@/assets/footer/nagad.svg';
import Okwallet from '@/assets/footer/okwallet.svg';
import Payoneer from '@/assets/footer/payoneer.svg';
import Paypal from '@/assets/footer/paypal.svg';
import Rocket from '@/assets/footer/rocket.svg';
import Upay from '@/assets/footer/upay.svg';
import Visa from '@/assets/footer/visa.svg';
import CityBank from '@/assets/footer/cityBank.png';
import Logo from '@/assets/images/clooudgen.png';
import BlankLink from '@/assets/footer/blankLink.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import swal from 'sweetalert';
import { FormInput } from './form/FormInput';
import { Input } from '../ui/input';
import logo from '@/assets/footer/logo.png';
import servicesData from '@/lib/data/servicesData';
import companyData from '@/lib/data/companyData';
import FooterSection from './FooterSection';
import { cn } from '@/lib/utils';

export default function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  const handleSubscription = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // const email = data.get("email");
      const email = e.target.email.value;
      const res = await subscriptionAction(email);
      if (res?.success) {
        formRef.current.reset();
        setIsLoading(false);
        swal('Subscribe successfully');
      } else {
        swal('Something went wrong. Try again later.');
        setIsLoading(false);
      }
    } catch (error) {
      swal('Something went wrong. Try again later.');
      setIsLoading(false);
    }
  };
  const handleClickTwitter = () => {
    swal('We are not available at Twitter ');
  };
  const handleClickYoutube = () => {
    swal('We are not available at Youtube');
  };
  const QuickLinks = [
    {
      title: 'Home',
      href: '/',
    },

    {
      title: 'Subscription Plans',
      href: '/subscription#plan',
      description: "Meet Clooud Gen's world class expert team.",
    },

    {
      title: 'Make Your Team',
      href: '/make-your-team',
      description:
        'Smart Solutions for a Connected World, Discover the Power of Technology',
    },
    {
      title: 'Project Album',
      href: '/project-album',
      description: 'Our efforts take shape. See the latest from your team.',
    },
  ];

  return (
    <>
      <section className="relative pt-20 text-white">
        <div
          style={{ backgroundImage: "url('/footer-bg.png')" }}
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#013a74]  to-[#013a74] opacity-70" />
        <div className="relative z-10  h-full">
          <footer className="container grid xl:grid-cols-4  grid-cols-2 gap-6">
            {/* footer logo and newsLetter */}
            <div className="flex col-span-2 xl:col-span-1 lg:col-span-4 flex-col gap-5 items-start">
              <Image alt="footer-logo" className='max-w-[200px]' src={logo} />
              <p className="md:text-sm text-[12px] font-normal">
                Cloud Gen Empower businesses with advanced IT solutions for
                digital innovation and growth.
              </p>
              <div className="flex flex-col gap-3">
                <h3 className=" font-medium text-lg lg:text-xl">Newsletter</h3>
                <p className='md:text-sm text-[12px] font-normal'>
                  Subscribe to our newsletter to receive updates on the latest
                  news!
                </p>
                {/* Newsletter from */}
                <form
                  onSubmit={handleSubscription}
                  ref={formRef}
                  className="relative flex items-center"
                >
                  <Input
                    className="flex-1 bg-transparent placeholder:text-gray-200 border-slate-500 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-slate-500"
                    type="email"
                    required
                    name={'email'}
                    placeholder={'Your Email'}
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 -translate-y-1/2 top-1/2"
                    disabled={isLoading}
                  >
                    <FaPaperPlane
                      className={cn('text-slate-300', {
                        'animate-pulse': isLoading,
                      })}
                      size={20}
                    />
                  </button>
                </form>
              </div>
            </div>
            {/* footer services */}
            <div className='col-span-2 grid  gap-10 grid-cols-2'>
              <FooterSection data={servicesData} title={'Services'} />

              {/* footer Company */}
              <FooterSection data={companyData} title={'Company'} />
            </div>

            {/* Ouick link  */}
            <div className="lg:mx-auto grid lg:grid-cols-1 grid-cols-2 lg:col-span-1   col-span-2">
              <FooterSection data={QuickLinks} title="Quick Links" />

              <div className="xl:ml-4 lg:ml-0 ml-4 -mt-0">
                <h3 className="font-medium text-lg lg:text-xl">Follow Us</h3>
                <div className="flex gap-4 mt-3 ">
                  <a href="https://www.facebook.com/clooudgen">
                    <FacebookIcon className="sm:w-6 xsm:w-5 w-4 sm:h-6 xsm:h-5 h-4" />
                  </a>
                  <a href="#" onClick={handleClickTwitter}>
                    <TwitterIcon className="sm:w-6 xsm:w-5 w-4 sm:h-6 xsm:h-5 h-4" />
                  </a>
                  <a href="#" onClick={handleClickYoutube}>
                    <YoutubeIcon className="sm:w-6 xsm:w-5 w-4 sm:h-6 xsm:h-5 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/company/102063246">
                    <LinkedinIcon className="sm:w-6 xsm:w-5 w-4 sm:h-6 xsm:h-5 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
          <hr className=" h-1 w-full mt-20" />
          <div className="container  flex flex-wrap items-center justify-center gap-2 my-8 justify-items-center">
            <PaymentIcon img={Payoneer} className={'bg-white'} />
            <PaymentIcon img={Paypal} />
            <PaymentIcon img={CityBank} />
            <PaymentIcon img={Visa} />
            <PaymentIcon img={Master} />
            <PaymentIcon img={Amex} />
            <PaymentIcon img={Bkash} />
            <PaymentIcon img={Rocket} />
            <PaymentIcon img={Nagad} />
            <PaymentIcon img={Rocket} />
            <PaymentIcon img={Brac} />
            <PaymentIcon img={Dbbl} />
            <PaymentIcon img={Islamibank} />
          </div>
          <div className="py-5 bg-black">
            <p className="text-sm text-center text-gray-400">
              © 2024 Clooud Gen all rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

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

function YoutubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export const PaymentIcon = ({ img, className }) => {
  return (
    <Image
      className={cn(
        'rounded-sm md:w-[80px] sm:w-[65px] w-[50px] md:h-[42px] sm:h-[36px] h-[30px]',
        className
      )}
      loading="lazy"
      src={img}
      alt="paymentImg"
      width={80}
    />
  );
};
