'use client';

import React from 'react';
import Image from 'next/image';
import { Outfit } from 'next/font/google';

import { Button } from '@/components/ui/button';

const outfit = Outfit({ subsets: ['latin'] });

function Hero() {
  const clickHandeler = async () => {
    const fetchData = async () => {
      const res = await fetch(
        'https://api.example.com/data'
      );
      const result = await res.json();
      console.log('Json response ');
    };
    await fetchData();
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2  gap-4 mt-10  items-center lg:h-[500px] container">
      <div>
        <h1
          className={`${outfit.className} text-5xl font-semibold`}
        >
          Preparation for Interviews Simplified
        </h1>
        <div className="w-1/2 h-1 bg-gradient-custome rounded-3xl my-5" />
        <p className="text-white md:w-1/2 block  lg:w-full text-start py-5 ">
          We help you snag your dream job with AI-powered
          resume reviews, mock interviews, and a resume quiz
          to boost your confidence and show off your skills!
        </p>
        <div className="flex gap-y-3 gap-x-5 mt-10 flex-col md:flex-row ">
          <Button
            size="lg"
            className="text-md py-6 hover:scale-105 transition-all"
            onClick={clickHandeler}
          >
            Start 14 Days Free Trial
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center border border-black dark:border-white py-6 gap-x-2 hover:scale-105 transition-all"
          >
            <div>
              <Image
                src="/images/play.png"
                alt="play"
                height={200}
                width={200}
                className="h-6 w-6 object-cover "
              />
            </div>
            <div>
              <span className="text-[17px] ">
                Watch A Demo
              </span>
            </div>
          </Button>
        </div>
      </div>
      <div className="py-2">
        <Image
          alt="hero"
          loading="lazy"
          height={400}
          width={400}
          decoding="async"
          // data-nimg="1"
          className="w-full object-cover"
          src="/images/hero-400x400.png"
        />
      </div>
    </section>
  );
}

export default Hero;
