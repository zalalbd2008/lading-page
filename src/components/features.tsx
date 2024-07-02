import Image from 'next/image';
import React from 'react';

function Features() {
  return (
    <section className="pt-28 pb-4 container" id="features">
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-4xl font-bold">Our Features</h2>
        <p className="w-full lg:w-1/3 block mx-auto text-center mt-5">
          Lorem ipsum dolor sit amet consectetur. Dapibus
          volutpat nunc nunc etiam vitae tristique molestie
          sed.
        </p>
      </div>
      {/* Item - 1 */}
      <div className="grid lg:grid-cols-2 mt-10 lg:mt-28 gap-x-20">
        <div className="relative flex-1">
          <div className="hidden md:block absolute -top-3 right-[200px] place-items-center z-[-1] before:absolute before:h-[140px] md:before:h-[100px] before:w-[50px] md:before:w-[200px] xl:before:w-[280px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[100px] md:after:h-[100px] lg:after:h-[150px] after:w-[200px] md:after:w-[100px] xl:after:w-[150px] after:translate-x-1/4 md:after:translate-x-1/3 after:bg-gradient-conic after:from-[#9F36F2] after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-[#9F36F2] before:opacity-20 after:via-[#8c1ce2] after:opacity-40 before:lg:h-[160px]" />
          <Image
            height={600}
            width={600}
            className="w-full object-cover"
            src="/images/features-logo.png"
            alt="features-logo"
          />
        </div>

        <div>
          <div>
            <h2 className="text-3xl font-bold">
              Mock Interviews
            </h2>
            <p className="text-black/70 dark:text-white/40 mt-5">
              Lorem ipsum dolor sit amet consectetur.
              Dapibus volutpat nunc nunc etiam vitae
              tristique molestie sed.
            </p>
          </div>

          <div className="mt-9 bg-slate-100 dark:bg-[#222533] 0 p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              Practice makes you perfect
            </h3>
            <p className="text-black/70 dark:text-white/40">
              Regular practice with AI can help you build
              confidence and reduce interview anxiety.
            </p>
          </div>
          <div className="mt-9 bg-slate-100 dark:bg-[#222533] p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              Realistic Simulations
            </h3>
            <p className="text-black/70 dark:text-white/40">
              Regular practice with AI can help you build
              confidence and reduce interview anxiety.
            </p>
          </div>
          <div className="mt-9 bg-slate-100 dark:bg-[#222533] p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              24/7 Availability
            </h3>
            <p className="text-black/70 dark:text-white/40">
              You can practice interviews anytime, without
              the hassle of scheduling conflicts or finding
              an expert peer.
            </p>
          </div>
        </div>
      </div>

      {/* Item - 2 */}
      <div className="grid lg:grid-cols-2 mt-36 gap-x-20">
        <div>
          <div>
            <h2 className="text-3xl font-bold">
              AI-Powered Resume Review
            </h2>
            <p className="text-black/70 dark:text-white/40 mt-5">
              Lorem ipsum dolor sit amet consectetur.
              Dapibus volutpat nunc nunc etiam vitae
              tristique molestie sed.
            </p>
          </div>

          <div className="mt-9 bg-slate-100 dark:bg-[#222533] p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              Professional Feedback
            </h3>
            <p className="text-black/70 dark:text-white/40">
              Get detailed feedback on your resume to ensure
              it meets the standards of your industry and
              the specific job description you are
              targeting.
            </p>
          </div>
          <div className="mt-9 bg-slate-100 dark:bg-[#222533] p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              Tailored For You
            </h3>
            <p className="text-black/70 dark:text-white/40">
              Receive personalized suggestions to enhance
              your resume and make it more impactful,
              increasing your chances of getting noticed by
              recruiters.
            </p>
          </div>
          <div className="mt-9 bg-slate-100 dark:bg-[#222533] p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              Job-Focused Insights
            </h3>
            <p className="text-black/70 dark:text-white/40">
              Gain insights into how well your resume aligns
              with the job requirements, and identify areas
              for improvement to better match the job
              description.
            </p>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="hidden md:block absolute -top-3 left-[200px] place-items-center z-[-1] before:absolute before:h-[140px] md:before:h-[100px] before:w-[50px] md:before:w-[200px] xl:before:w-[280px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[100px] md:after:h-[100px] lg:after:h-[150px] after:w-[200px] md:after:w-[100px] xl:after:w-[150px] after:translate-x-1/4 md:after:translate-x-1/3 after:bg-gradient-conic after:from-blue-400 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-400 before:opacity-50 after:via-blue-400 after:opacity-50 before:lg:h-[360px]" />
          <Image
            src="/images/ai-review.png"
            height={600}
            width={600}
            className="w-full object-cover"
            alt="ai-review"
          />
        </div>
      </div>

      {/* Item - 3*/}
      <div className="grid lg:grid-cols-2 mt-36 gap-x-20">
        <div className="relative flex-1">
          <Image
            height={600}
            width={600}
            className="w-full object-cover"
            src="/images/quize-logo.png"
            alt="features-logo"
          />
        </div>

        <div>
          <div>
            <h2 className="text-3xl font-bold">
              Resume Quiz
            </h2>
            <p className="text-black/70  dark:text-white/40 mt-5">
              Lorem ipsum dolor sit amet consectetur.
              Dapibus volutpat nunc nunc etiam vitae
              tristique molestie sed.
            </p>
          </div>

          <div className="mt-9 bg-slate-100  dark:bg-[#222533] p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              Validation
            </h3>
            <p className="text-black/70  dark:text-white/40">
              Confirms that the skills listed on your resume
              are accurately represented and you have
              sufficient knowledge of it.
            </p>
          </div>
          <div className="mt-9 bg-slate-100 dark:bg-[#222533] p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              Uncover Gaps
            </h3>
            <p className="text-black/70  dark:text-white/40">
              Provides immediate feedback to uncover gap
              between skills listed in resume and your
              foundational knowledge through a quick Quiz
            </p>
          </div>
          <div className="mt-9 bg-slate-100  dark:bg-[#222533] p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              Confidence Boost
            </h3>
            <p className="text-black/70  dark:text-white/40">
              Increases confidence by highlighting areas
              where you excel.
            </p>
          </div>
        </div>
      </div>
      {/* Item - 4*/}
      <div className="grid lg:grid-cols-2 mt-36 gap-x-20">
        <div>
          <div>
            <h2 className="text-3xl font-bold">
              Generate Cover Letters
            </h2>
            <p className="text-black/70 dark:text-white/40 mt-5">
              Lorem ipsum dolor sit amet consectetur.
              Dapibus volutpat nunc nunc etiam vitae
              tristique molestie sed.
            </p>
          </div>

          <div className="mt-9 bg-slate-100  dark:bg-[#222533] p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              Lorem ipsum dolor sit
            </h3>
            <p className="text-black/70  dark:text-white/40">
              Lorem ipsum dolor sit amet consectetur.
              Dapibus volutpat nunc nunc etiam vitae
              tristique molestie sed.
            </p>
          </div>
          <div className="mt-9 bg-slate-100  dark:bg-[#222533] p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              Lorem ipsum dolor sit
            </h3>
            <p className="text-black/70  dark:text-white/40">
              Lorem ipsum dolor sit amet consectetur.
              Dapibus volutpat nunc nunc etiam vitae
              tristique molestie sed.
            </p>
          </div>
          <div className="mt-9  bg-slate-100 dark:bg-[#222533] p-4 rounded-xl mb-4">
            <h3 className="text-2xl font-bold my-2">
              Lorem ipsum dolor sit
            </h3>
            <p className="text-black/70  dark:text-white/40">
              Lorem ipsum dolor sit amet consectetur.
              Dapibus volutpat nunc nunc etiam vitae
              tristique molestie sed.
            </p>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            height={600}
            width={600}
            className="w-full object-cover"
            src="/images/generator-convertion-letter.png"
            alt="features-logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
