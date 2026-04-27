'use client';

import { motion } from 'motion/react';
import { portfolioData } from '@/data/portfolio';
import { BookOpen } from 'lucide-react';

export function Research() {
  if (!portfolioData.research || portfolioData.research.length === 0) return null;

  return (
    <section id="research" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="label-editorial mb-2">Publications</div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Research & <span className="text-accent text-3xl md:text-5xl">Impact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4">
          {portfolioData.research.map((paper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card group hover:bg-[#202022] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <BookOpen className="text-accent" size={20} />
                <span className="tag-editorial">{paper.year}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 leading-snug">{paper.title}</h3>
              <p className="text-sm text-muted mb-6">{paper.journal}</p>
              
              <a
                href={paper.doi}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center text-xs font-bold text-accent uppercase tracking-widest hover:opacity-80 transition-opacity"
              >
                View DOI <span className="ml-1 leading-none group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
