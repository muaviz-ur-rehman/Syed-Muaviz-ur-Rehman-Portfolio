'use client';

import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="tag-editorial mb-6">
            Available for Hire
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-6">
            Hi, I'm {portfolioData.personal.name.split(' ')[0]}
            <br />
            <span className="text-accent inline-block mt-2">
              <TypeAnimation
                sequence={[
                  'AI Engineer',
                  2000,
                  'Data Scientist',
                  2000,
                  'Python Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted mb-10 max-w-xl leading-relaxed">
            {portfolioData.personal.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#resume"
              className="flex items-center gap-2 bg-accent text-background px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </motion.div>

        {/* Optional Right Side Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center relative portrait-container"
        >
          {/* Abstract Data Viz Representation */}
          <div className="w-[400px] h-[500px] rounded-3xl glass relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
            <div className="grid grid-cols-4 gap-2 opacity-30">
              {Array.from({ length: 48 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    height: [20, Math.random() * 60 + 20, 20],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-4 bg-indigo-400 rounded-sm"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
