'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import BlackFriday from '../../../../public/BlackFridayOffer.png';
import shapeWave from '@/assets/svg/campaigns/shape-wave.png';
import shapeWave1 from '@/assets/svg/campaigns/shape-wave1.png';
import dotsRight from '@/assets/svg/campaigns/dots-right.png';
import dotsLeft from '@/assets/svg/campaigns/dots-left.png';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { set } from 'mongoose';

export default function Popup() {

  const [isVisible, setisVisible] = useState(false);

  setTimeout(() => {
    setisVisible(true)
  }, 5000);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up on unmount
    };
  }, [isVisible]);

  // if (!isVisible) return null;

  return (
    <div onClick={() => setisVisible((prev) => !prev)} className={cn(
      "fixed inset-0 flex z-50 items-center justify-center bg-opacity-55 bg-black/80 transition-opacity duration-300",
      {
        'opacity-0 pointer-events-none': !isVisible, // Hide the element
        'opacity-100 pointer-events-auto': isVisible, // Show the element
      }
    )}>
      <div onClick={(e) => e.stopPropagation()} className="relative max-w-lg m-1.5 overflow-hidden bg-white rounded shadow-lg">
        <button
          className="absolute px-4 py-2 text-white rounded -right-3 -top-1"
          onClick={() => setisVisible((prev) => !prev)}
        >
          <MdClose className="w-6 h-6 p-1 bg-red-500 rounded-full" />
        </button>

        <Image src={BlackFriday} alt='Black friday Offer' />
        {/* <div>
          <Image className="w-60" src={shapeWave} alt="shapeWave" />
        </div>

        <Image
          className="absolute w-10 right-10 top-16 animate-bounce"
          src={dotsRight}
          alt="shapeWave1"
        />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <p className="text-sm text-center">
            Clooud Gen&apos;s
          </p>
          <h4 className="mb-2 text-center text-foreground">
            Entrepreneurs
          </h4>
          <h3 className="mb-2 text-4xl text-foreground">CAMPAINGS</h3>
          <h4 className="mb-2 text-2xl text-center">Ongoing</h4>
          <p className="mb-2 text-center text-foreground">GET UP TO <span className='font-semibold '>35%</span> OFF</p>

          <Link className="flex justify-center" href="/special-offer">
            <Button variant="outline" className="font-bold border-[3px] border-foreground">
              See Details
            </Button>

          </Link>
        </div>

        <Image
          className="absolute w-10 bottom-16 left-10"
          src={dotsLeft}
          alt="shapeWave1"
        />
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <Image
            className=" w-60"
            src={shapeWave1}
            alt="shapeWave"
          />
        </div> */}
      </div>
      {/* <div onClick={(e) => e.stopPropagation()} className="bg-white w-[450px] h-[450px] rounded shadow-lg relative overflow-hidden m-3">
        <div>
          <Image className="w-60" src={shapeWave} alt="shapeWave" />
        </div>

        <Image
          className="absolute w-10 right-10 top-16 animate-bounce"
          src={dotsRight}
          alt="shapeWave1"
        />
        <button
          className="absolute px-4 py-2 text-white rounded -right-3 -top-1"
          onClick={() => setisVisible((prev) => !prev)}
        >
          <MdClose className="w-6 h-6 p-1 rounded-full bg-primary" />
        </button>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <p className="text-sm text-center">
            Clooud Gen&apos;s
          </p>
          <h4 className="mb-2 text-center text-foreground">
            Entrepreneurs
          </h4>
          <h3 className="mb-2 text-4xl text-foreground">CAMPAINGS</h3>
          <h4 className="mb-2 text-2xl text-center">Ongoing</h4>
          <p className="mb-2 text-center text-foreground">GET UP TO <span className='font-semibold '>35%</span> OFF</p>

          <Link className="flex justify-center" href="/special-offer">
            <Button variant="outline" className="font-bold border-[3px] border-foreground">
              See Details
            </Button>

          </Link>
        </div>

        <Image
          className="absolute w-10 bottom-16 left-10"
          src={dotsLeft}
          alt="shapeWave1"
        />
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <Image
            className=" w-60"
            src={shapeWave1}
            alt="shapeWave"
          />
        </div>
      </div> */}
    </div>
  );
}
