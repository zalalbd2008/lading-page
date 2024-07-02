import React from 'react';
import Link from 'next/link';

import { ModeToggle } from '@/features/theme/components/theme';

import NavItme from '@/components/nav-item';
import { Button } from '@/components/ui/button';
import MobileNav from '@/components/mobile-nav';
import Image from 'next/image';

function Header() {
  return (
    <header className="container pt-9">
      <div className="absolute flex top-80 left-1/2 md:left-2/3 lg:left-[70%] transform -translate-x-1/2 -translate-y-1/2 justify-center place-items-center z-[-1] before:absolute before:h-[240px] md:before:h-[300px] before:w-[250px] md:before:w-[400px] xl:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[400px] md:after:h-[500px] lg:after:h-[650px] after:w-[200px] md:after:w-[300px] xl:after:w-[450px] after:translate-x-1/4 md:after:translate-x-1/3 after:bg-gradient-conic after:from-[#9F36F2] after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-[#9F36F2] before:opacity-40 after:via-[#8c1ce2] after:opacity-40 before:lg:h-[660px]" />

      <div className="flex justify-between items-start">
        <div className="flex justify-start items-end  gap-x-3">
          <Link
            href="/"
            className="flex justify-start items-end  gap-x-3"
          >
            <Image
              height={30}
              width={30}
              src="/logo.png"
              alt="logo"
            />
            <div className="text-2xl font-bold ">
              Perpwell.io
            </div>
          </Link>
        </div>

        <MobileNav />
        <nav className="justify-between gap-x-4 items-center hidden md:flex">
          <ul className="flex justify-between gap-x-4">
            <NavItme href="#features">Features</NavItme>
            <NavItme href="#pricing">Pricing</NavItme>
            <NavItme href="#about-us">About Us</NavItme>
          </ul>
          <Button className='ms-6'>Sign In</Button>
          <div>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
