'use client';

import { motion } from 'motion/react';
import { portfolioData } from '@/data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="label-editorial mb-2">Technical Stack</div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Skills & <span className="text-accent text-3xl md:text-5xl">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {portfolioData.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card"
            >
              <h3 className="label-editorial mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="skill-pill-editorial"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
