import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

function Video() {
  return (
    <section className=" mt-[200px] container  items-center grid   md:grid-cols-2 lg:grid-cols-2 gap-5  mb-5">
      <div className="relative w-full lg:w-9/12 ">
        <Image
          height={600}
          width={600}
          className="object-cover "
          src="/images/work-plan.png"
          alt="team-member"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="relative">
            <Image
              height={20}
              width={20}
              src="/icon/play.png"
              alt="play"
            />
            <div className="absolute w-14 h-14 bg-white/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-full " />
          </div>
        </div>
      </div>
      <div className="self-center ">
        <h2 className="text-3xl font-bold">How it works</h2>
        <p className="w-full lg:w-1/2 block  text-start pt-6 text-black/70 dark:text-slate-200/50">
          We apply the latest technology to improve the
          quality of data collected. We invest in the people
          we work with.It helps provide insights for making
          better decisions quickly.
        </p>
        <Button size="lg" className="mt-10">
          Get Started for Free
        </Button>
      </div>
    </section>
  );
}

export default Video;
