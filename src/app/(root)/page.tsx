import Hero from '@/components/hero';
import Sponser from '@/components/sponser';
import Features from '@/components/features';
import Prices from '@/components/price';
import AboutUs from '@/components/about-us';
import Testimonials from '@/components/testimonials';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Video from '@/components/video';

export default function Home() {
  return (
    <main>
      <Hero />
      <Sponser />
      <Features />
      <Prices />
      <Video />
      <AboutUs />
      <Testimonials />
    </main>
  );
}
