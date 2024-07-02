'use client';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

function Testimonials() {
  return (
    <section className="container mt-28 ">
      <div className="text-center">
        <h2 className="text-3xl font-bold">testimonial</h2>
        <p className="w-full lg:w-1/3 block  pt-6 text-black/70 dark:text-slate-200/50 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Dapibus
          volutpat nunc nunc etiam vitae tristique molestie
          sed.
        </p>
      </div>
      <div className="my-7  h-full">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full overflow-hidden h-full "
        >
          <CarouselContent>
            <CarouselItem>
              <div className="w-full lg:w-1/2 block mx-auto p-5 py-16 ">
                <div className="flex gap-x-4 items-center relative">
                  <div className="absolute -left-52 hidden lg:block">
                    <Image
                      height={600}
                      width={600}
                      src="/icon/icon-1.png"
                      alt="icon"
                      className="w-[80px] object-cover"
                    />
                  </div>
                  <Image
                    height={600}
                    width={600}
                    src="/images/reviewers/user-1.png"
                    alt="user"
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h4>Joe Biiden</h4>
                    <p className="text-[10px]">
                      CEO of unknown
                    </p>
                  </div>
                </div>
                <div className="pt-10 relative">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. In nisl urna risus nisl.
                  Aliquam, placerat lacus pharetra, porta
                  sit pharetra laoreet dignissim. At luctus
                  iaculis duis duis. Diam aenean semper
                  libero pharetra, sit placerat enim,
                  interdum. A tincidunt id tellus semper
                  sollicitudin turpis habitasse mattis.
                  Phasellus eget rhoncus viverra porttitor
                  aliquam sed pellentesque scelerisque
                  vulputate. Mauris elementum duis iaculis
                  pellentesque magna. Imperdiet platea
                  adipiscing cras at. Turpis porta feugiat
                  sed augue nam integer eu, at morbi.
                  <div className="absolute -right-32 -bottom-10 hidden lg:block">
                    <Image
                      height={600}
                      width={600}
                      src="/icon/icon-2.png"
                      alt="icon"
                      className="w-[80px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full lg:w-1/2 block mx-auto p-5 py-16 ">
                <div className="flex gap-x-4 items-center relative">
                  <div className="absolute -left-52 hidden lg:block">
                    <Image
                      height={600}
                      width={600}
                      src="/icon/icon-1.png"
                      alt="icon"
                      className="w-[80px] object-cover"
                    />
                  </div>
                  <Image
                    height={600}
                    width={600}
                    src="/images/reviewers/user-1.png"
                    alt="user"
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h4>Joe Biiden</h4>
                    <p className="text-[10px]">
                      CEO of unknown
                    </p>
                  </div>
                </div>
                <div className="pt-10 relative">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. In nisl urna risus nisl.
                  Aliquam, placerat lacus pharetra, porta
                  sit pharetra laoreet dignissim. At luctus
                  iaculis duis duis. Diam aenean semper
                  libero pharetra, sit placerat enim,
                  interdum. A tincidunt id tellus semper
                  sollicitudin turpis habitasse mattis.
                  Phasellus eget rhoncus viverra porttitor
                  aliquam sed pellentesque scelerisque
                  vulputate. Mauris elementum duis iaculis
                  pellentesque magna. Imperdiet platea
                  adipiscing cras at. Turpis porta feugiat
                  sed augue nam integer eu, at morbi.
                  <div className="absolute -right-32 -bottom-10 hidden lg:block">
                    <Image
                      height={600}
                      width={600}
                      src="/icon/icon-2.png"
                      alt="icon"
                      className="w-[80px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full lg:w-1/2 block mx-auto p-5 py-16 ">
                <div className="flex gap-x-4 items-center relative">
                  <div className="absolute -left-52 hidden lg:block">
                    <Image
                      height={600}
                      width={600}
                      src="/icon/icon-1.png"
                      alt="icon"
                      className="w-[80px] object-cover"
                    />
                  </div>
                  <Image
                    height={600}
                    width={600}
                    src="/images/reviewers/user-1.png"
                    alt="user"
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h4>Joe Biiden</h4>
                    <p className="text-[10px]">
                      CEO of unknown
                    </p>
                  </div>
                </div>
                <div className="pt-10 relative">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. In nisl urna risus nisl.
                  Aliquam, placerat lacus pharetra, porta
                  sit pharetra laoreet dignissim. At luctus
                  iaculis duis duis. Diam aenean semper
                  libero pharetra, sit placerat enim,
                  interdum. A tincidunt id tellus semper
                  sollicitudin turpis habitasse mattis.
                  Phasellus eget rhoncus viverra porttitor
                  aliquam sed pellentesque scelerisque
                  vulputate. Mauris elementum duis iaculis
                  pellentesque magna. Imperdiet platea
                  adipiscing cras at. Turpis porta feugiat
                  sed augue nam integer eu, at morbi.
                  <div className="absolute -right-32 -bottom-10 hidden lg:block">
                    <Image
                      height={600}
                      width={600}
                      src="/icon/icon-2.png"
                      alt="icon"
                      className="w-[80px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
