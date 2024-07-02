import { Button } from '@/components/ui/button';
import {
  Facebook,
  Github,
  Instagram,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    // clip-path: polygon(51% 4%, 84% 9%, 100% 13%, 100% 81%, 100% 100%, 0 100%, 0 78%, 0 12%, 17% 8%);
    <footer
      className="bg-[#D8DAE6] dark:bg-[#191B27] kk pt-10 relative"
      style={{
        clipPath:
          'polygon(51% 4%, 84% 9%, 100% 13%, 100% 81%, 100% 100%, 0 100%, 0 78%, 0 12%, 17% 8%)',
      }}
    >
      <div>
        <Image
          height={600}
          width={600}
          className="hidden lg:block absolute w-[20%]  -top-16 -left-10 -rotate-[10deg]"
          src="/icon/shape.png"
          alt="shape"
        />
        <Image
          height={600}
          width={600}
          className="hidden lg:block absolute w-[20%]  -top-0 -left-10 -rotate-[2deg]"
          src="/icon/shape.png"
          alt=""
        />
        <Image
          height={600}
          width={600}
          className="hidden lg:block absolute w-[25%] top-3 -left-[110px] rotate-[5deg]"
          src="/icon/shape.png"
          alt=""
        />
        <Image
          height={600}
          width={600}
          className="hidden lg:block absolute w-[25%] top-3 -left-[30px] -rotate-[7deg]"
          src="/icon/shape.png"
          alt=""
        />
      </div>

      <div className="pt-20">
        <h2 className="text-black dark:text-white text-3xl font-bold text-center">
          Get Started Today
        </h2>
        <p className="text-black dark:text-white pt-3 text-center w-full md:w-1/3 lg:w-1/4 block m-auto p-2">
          We&apos;re in beta! Share your email to try our
          product, and we&apos;ll reach out to you.
        </p>
      </div>

      <form className="flex justify-center my-5">
        <div className=" bg-slate-100 dark:bg-[#191B27] rounded-lg flex  items-center px-2  justify-center gap-x-4 py-1">
          <div className="text-1xl text-black dark:text-white">
            @
          </div>
          <input
            type="text"
            className="bg-slate-100 dark:bg-[#191B27] text-black  dark:text-white border-none outline-none py-3"
            placeholder="Enter your email address"
          />
          <Button type="submit">Get started now</Button>
        </div>
      </form>
      <p className="text-black dark:text-white text-center py-5 ">
        No ads. No trails. No commitments
      </p>

      <div className="bg-gradient-custome pt-10 px-6 pb-5 ">
        <div className="flex flex-col items-center flex-wrap md:flex-row justify-between  gap-4  ">
          <div className="hidden  lg:block">
            <p className="text-white">
              ©2024 Made with ❤️ by PrepWell
            </p>
          </div>
          <div className="flex gap-x-4 flex-col md:flex-row gap-y-4 ">
            <div className="text-sm lg:text-md text-white">
              EMAIL. hello@prepwell.io
            </div>
            <Link
              href="/"
              className="text-sm lg:text-md text-white"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/"
              className="text-sm lg:text-md text-white"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex  lg:justify-end items-center gap-x-6 lg:pt-0">
            <Twitter className="h-4 w-4 text-white" />
            <Facebook className="h-4 w-4 text-white" />
            <Instagram className="h-4 w-4 text-white" />
            <Github className="h-4 w-4 text-white" />
          </div>
        </div>
        <div className=" lg:hidden text-center flex justify-center mt-10 pb-2">
          <p className="text-white">
            ©2024 Made with ❤️ by PrepWell
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
