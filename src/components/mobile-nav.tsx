import React from 'react';
import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import NavItme from '@/components/nav-item';

import { Button } from '@/components/ui/button';

import { ModeToggle } from '@/features/theme/components/theme';

function MobileNav() {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger
          aria-label="button"
          type="button"
          className="border border-red-500 bg-white text-[24px]"
        >
          <Menu className="h-5 w-5 " />
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-black">
          <SheetHeader>
            <div className="flex justify-start my-5">
              <ModeToggle />
            </div>
            <nav className="flex flex-col justify-start gap-y-4 items-start">
              <ul className="flex justify-start text-start gap-y-4 flex-col">
                <NavItme href="#features">Features</NavItme>
                <NavItme href="#pricing">Pricing</NavItme>
                <NavItme href="#about-us">About Us</NavItme>
              </ul>
              <Button>Sign In</Button>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNav;
