import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Research } from '@/components/sections/Research';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-accent-dim">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-background">
      </div>

      <Navbar />
      
      <div className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Research />
        <Resume />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
