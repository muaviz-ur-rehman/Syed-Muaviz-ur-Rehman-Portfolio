'use client';

import { motion } from 'motion/react';
import { portfolioData } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-surface border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="label-editorial mb-2">Professional Path</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
            Experience & <span className="text-accent text-3xl md:text-5xl">Leadership</span>
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-border-subtle pb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <div className="label-editorial mt-1 mb-0">{exp.company}</div>
                </div>
                <span className="tag-editorial">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-sm text-muted leading-relaxed mb-6 max-w-3xl">
                {exp.description}
              </p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achieve, i) => (
                  <li key={i} className="flex gap-3 text-muted text-sm items-start">
                    <span className="text-accent mt-[2px] text-xs">▹</span>
                    <span>{achieve}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
