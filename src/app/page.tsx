import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { Topics } from '@/components/sections/Topics';
import { Team } from '@/components/sections/Team';
import { Process } from '@/components/sections/Process';
import { FormSection } from '@/components/sections/FormSection';
import { FollowUp } from '@/components/sections/FollowUp';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';

export const revalidate = 30;

export default function HomePage() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <Topics />
        <Team />
        <Process />
        <FormSection />
        <FollowUp />
        <FAQ />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
