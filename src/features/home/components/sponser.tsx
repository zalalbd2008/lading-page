import Image from 'next/image';
import React from 'react';

function Sponser() {
  return (
    <section className="pt-[200px]">
      <div className="h-[0.1px] w-full bg-gray-100  dark:bg-gray-900" />
      <div className="pt-16">
        <h1 className="text-2xl tracking-wider font-medium text-center">
          Trusted by nearly 5000+ paying customers
        </h1>
        <div className="flex justify-center pt-12 mb-3">
          <div className="grid  grid-cols-4 justify-center gap-3 md:gap-x-20 px-5">
            <Image
              src="/images/trast-customer-1.png"
              alt="trast-customer"
              height={200}
              width={200}
              className="max-w-[150px] w-full object-cover"
            />
            <Image
              src="/images/trast-customer-2.png"
              alt="trast-customer"
              height={200}
              width={200}
              className="max-w-[150px] w-full object-cover"
            />
            <Image
              src="/images/trast-customer-3.png"
              alt="trast-customer"
              height={200}
              width={200}
              className="max-w-[150px] w-full object-cover"
            />
            <Image
              src="/images/trast-customer-4.png"
              alt="trast-customer"
              height={200}
              width={200}
              className="max-w-[150px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponser;
