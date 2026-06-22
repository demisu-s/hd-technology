import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Solutions } from '@/components/sections/Solutions';
import { Portfolio } from '@/components/sections/Portfolio';
import { Certifications } from '@/components/sections/Certifications';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="bg-[#05080F] text-[#F0F4FA] overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Portfolio />
      <Certifications />
      <Team />
      <Contact />
    </main>
  );
}
