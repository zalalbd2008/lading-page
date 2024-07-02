import Image from 'next/image';
import React from 'react';

function AboutUs() {
  return (
    <section id="about-us" className="container mt-32 mb-5">
      <div className="text-center">
        <h2 className="font-bold text-3xl">About Us</h2>
        <p className="w-full lg:w-1/3 block  pt-6 text-black/70 dark:text-slate-200/50 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Dapibus
          volutpat nunc nunc etiam vitae tristique molestie
          sed.
        </p>
      </div>
      <div className="grid md:grid-col-2 lg:grid-cols-3 mt-14 gap-5 gap-x-20">
        <div className="bg-slate-100 dark:bg-[#222533] flex justify-center items-center p-7 rounded-2xl flex-col">
          <Image
            height={600}
            width={600}
            className="w-[100px] mx-auto block object-cover"
            src="/icon/book.png"
            alt="book"
          />
          <div className="mt-5">
            <h3 className="text-2xl font-bold text-center">
              Our Story
            </h3>
            <p className="w-full block  pt-6 text-black/70 dark:text-slate-200/50 mx-auto text-center">
              At PrepWell.io, we are passionate about
              helping individuals achieve career success.
              Our journey began with a vision to
              revolutionize the way people prepare for job
              opportunities.
            </p>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-[#222533] flex justify-center items-center p-7 rounded-2xl flex-col">
          <Image
            height={600}
            width={600}
            className="w-[100px] mx-auto block object-cover"
            src="/icon/ice.png"
            alt="ice"
          />
          <div className="mt-5">
            <h3 className="text-2xl font-bold text-center">
              Our Vision
            </h3>
            <p className="w-full block  pt-6 text-black/70 dark:text-slate-200/50 mx-auto text-center">
              We envision a future where every job applicant
              feels confident and well-prepared to secure
              their desired role, and we are committed to
              making this vision a reality.
            </p>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-[#222533] flex justify-center items-center p-7 rounded-2xl flex-col">
          <Image
            height={600}
            width={600}
            className="w-[100px] mx-auto block object-cover"
            src="/icon/tuch.png"
            alt="ice"
          />
          <div className="mt-5">
            <h3 className="text-2xl font-bold text-center">
              Our Technology
            </h3>
            <p className="w-full block  pt-6 text-black/70 dark:text-slate-200/50 mx-auto text-center">
              Leveraging cutting-edge AI technology, we
              provide personalized and effective career
              preparation solutions to empower our users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
