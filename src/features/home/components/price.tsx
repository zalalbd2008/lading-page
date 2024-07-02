'use client';
import React, { useState } from 'react';
import { Outfit } from 'next/font/google';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

const outfit = Outfit({ subsets: ['latin'] });

const plans = [
  {
    id: 'starter',
    title: 'Starter Plan',
    price: 29,
    features: [
      '10 GB Dedicated Hosting Free',
      'Best for Developers, Freelancers',
      '1 Year Support',
    ],
    description:
      'This package is suitable for teams 1-15 people.',
  },
  {
    id: 'basic',
    title: 'Basic Plan',
    price: 79,
    features: [
      '15 GB Dedicated Hosting Free',
      'Best for Developers, Freelancers',
      '5 Year Support',
      'Free Custom Domain',
      'Basic Statistics',
    ],
    description:
      'This package is suitable for teams 1-50 people.',
  },
  {
    id: 'premium',
    title: 'Premium Plan',
    price: 129,
    features: [
      '20 GB Dedicated Hosting Free',
      'Best for Developers, Freelancers',
      'Unlimited Support',
      'Free Custom Domain',
      'Full Statistics',
    ],
    description:
      'This package is suitable for teams 1-100 people.',
  },
];

function Prices() {
  const [packagePlan, setPackagePlan] =
    useState<boolean>(false);

  const clickHandeler = (id: string) => {
    const fetchData = async () => {
      const res = await fetch(
        'https://api.example.com/data',
        {
          body: JSON.stringify({ id }),
        }
      );
      const result = await res.json();
    };
    fetchData();
  };
  const [active, setActive] = useState<
    { id: string; isActive: boolean }[]
  >([
    { id: 'basic', isActive: false },
    { id: 'premium', isActive: true },
    { id: 'starter', isActive: false },
  ]);

  const seletPlan = (id: any) => {
    setActive(prev =>
      prev.map(item => ({
        ...item,
        isActive: item.id === id ? true : false,
      }))
    );
  };

  return (
    <section className="container mt-28 mb-5">
      <div className="text-center  ">
        <h2 className="text-3xl font-bold ">
          Make the wise decision for your business
        </h2>
        <p className="text-balck/60 pt-5">
          Choose from our affordable 3 packages
        </p>
      </div>

      <div className="flex gap-x-3 justify-center pt-10 pb-3">
        <h3 className="text-lg">Monthly</h3>
        <Switch
          type="button"
          aria-label="button"
          title="switch button"
          checked={packagePlan}
          onCheckedChange={() =>
            setPackagePlan(pre => !pre)
          }
        />
        <h3 className="text-lg">Yearly</h3>
      </div>
      <div className="hidden lg:grid grid-cols-3 mt-20 ">
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            onClick={() => seletPlan(plan.id)}
            className={cn(
              'p-6 rounded-2xl w-[350px] relative flex flex-col justify-between',
              active.find(item => item.id === plan.id)
                ?.isActive
                ? 'gradient-border dark:gradient-border-1'
                : 'bg-slate-100 dark:bg-[#222533]  border-[2px] '
            )}
          >
            <p className="pb-6 mt-3">{plan.title}</p>
            <p className="font-bold flex items-end">
              <span className="text-4xl">{`$${plan.price}`}</span>
              <span>
                /{packagePlan ? 'Yearly' : 'Monthly'}
              </span>
            </p>
            <p
              className={cn(
                'my-2 text-sm pt-4',
                active.find(item => item.id === plan.id)
                  ?.isActive
                  ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'my-2 text-sm text-black/70 dark:text-slate-200/50'
              )}
            >
              {plan.description}
            </p>
            <div className="pt-10">
              <p className="text-md font-bold text-[20px]">
                What’s included:
              </p>
              <ul>
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={cn(
                      ' mt-5 font-semibold text-md my-2',
                      active.find(
                        item => item.id === plan.id
                      )?.isActive
                        ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'
                        : '  text-black/70 dark:text-slate-200/50'
                    )}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[100px] flex items-end ">
              <Button
                className="bg-none mt-6 border-black dark:border-white w-11/12 block m-auto text-md font-semibold"
                onClick={() => clickHandeler(plan.id)}
                variant={
                  active.find(item => item.id === plan.id)
                    ?.isActive
                    ? 'default'
                    : 'secondary'
                }
              >
                Get Started
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <MobileCard
          active={active}
          packagePlan={packagePlan}
          seletPlan={seletPlan}
          clickHandeler={clickHandeler}
        />
      </div>
    </section>
  );
}

interface MobilePrps {
  active: { id: string; isActive: boolean }[];
  packagePlan: boolean;
  seletPlan: (id: string) => void;
  clickHandeler: (id: string) => void;
}
const MobileCard = ({
  active,
  packagePlan,
  seletPlan,
  clickHandeler,
}: MobilePrps) => {
  return (
    <Carousel className="block lg:hidden overflow-hidden my-10 pt-16">
      <CarouselContent>
        {plans.map((plan, index) => (
          <CarouselItem key={plan.id}>
            <div
              onClick={() => seletPlan(plan.id)}
              className={cn(
                'p-6 rounded-2xl relative flex flex-col justify-between',
                active.find(
                  (item: any) => item.id === plan.id
                )?.isActive
                  ? 'gradient-border dark:gradient-border-1'
                  : 'bg-slate-100 dark:bg-[#222533]  border-[2px] '
              )}
            >
              <p className="pb-6 mt-3">{plan.title}</p>
              <p className="font-bold flex items-end">
                <span className="text-4xl">{`$${plan.price}`}</span>
                <span>
                  /{packagePlan ? 'Yearly' : 'Monthly'}
                </span>
              </p>
              <p
                className={cn(
                  'my-2 text-sm pt-4',
                  active.find(
                    (item: any) => item.id === plan.id
                  )?.isActive
                    ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'my-2 text-sm text-black/70 dark:text-slate-200/50'
                )}
              >
                {plan.description}
              </p>
              <div className="pt-10">
                <p className="text-md font-bold text-[20px]">
                  What’s included:
                </p>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={cn(
                        ' mt-5 font-semibold text-md my-2',
                        active.find(
                          item => item.id === plan.id
                        )?.isActive
                          ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'
                          : '  text-black/70 dark:text-slate-200/50'
                      )}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-[100px] flex items-end ">
                <Button
                  className="bg-none mt-6 border-black dark:border-white w-11/12 block m-auto text-md font-semibold"
                  onClick={() => clickHandeler(plan.id)}
                  variant={
                    active.find(
                      (item: any) => item.id === plan.id
                    )?.isActive
                      ? 'default'
                      : 'secondary'
                  }
                >
                  Get Started
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Prices;
