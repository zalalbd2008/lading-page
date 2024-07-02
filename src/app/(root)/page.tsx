import Hero from '@/features/home/components/hero';
import Sponser from '@/features/home/components/sponser';
import Features from '@/features/home/components/features';
import Prices from '@/features/home/components/price';
import AboutUs from '@/features/home/components/about-us';
import Testimonials from '@/features/home/components/testimonials';
import Video from '@/features/home/components/video';

export default async function Home() {
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
