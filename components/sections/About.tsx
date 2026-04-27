'use client';

import { motion } from 'motion/react';
import { portfolioData } from '@/data/portfolio';
import { Activity } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="label-editorial mb-2">Background</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase tracking-tight">
            About <span className="text-accent text-3xl md:text-5xl">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            <div className="prose prose-invert prose-lg">
              <p className="text-muted leading-relaxed">
                {portfolioData.personal.about}
              </p>
            </div>
            
            {/* Currently Building Badge */}
            <div className="card max-w-sm flex flex-row items-center gap-4">
              <div className="p-2 bg-accent-dim rounded-md shrink-0">
                <Activity className="text-accent" size={20} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold mb-1 text-sm">Currently Building</h4>
                <p className="text-muted text-xs leading-tight">Advanced Retrieval-Augmented Generation (RAG) System for Legal Documents</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="card group hover:bg-[#202022] transition-colors cursor-default justify-center items-center text-center">
                <div className="font-bold text-3xl mb-1 text-foreground">{portfolioData.personal.cgpa}</div>
                <div className="label-editorial m-0">CGPA (CS)</div>
              </div>
              <div className="card group hover:bg-[#202022] transition-colors cursor-default justify-center items-center text-center">
                <div className="font-bold text-3xl mb-1 text-foreground">{portfolioData.projects.length}+</div>
                <div className="label-editorial m-0">Projects</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Simple Timeline / Highlights */}
            <div className="label-editorial mb-4">Education & Growth</div>
            {portfolioData.education && (
              <div className="card">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-sm text-foreground">{portfolioData.education.degree}</h4>
                  <span className="text-[10px] uppercase text-muted tracking-widest">{portfolioData.education.status}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed mb-4">{portfolioData.education.university}</p>
                <div className="label-editorial text-[9px]">Academic Excellence</div>
                <div className="font-bold text-xl">{portfolioData.education.cgpa}</div>
              </div>
            )}
            
            <div className="card">
              <div className="label-editorial mb-4">Certifications</div>
              <div className="flex flex-col gap-4">
                {portfolioData.certifications.map((cert, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-border-subtle pb-3 last:border-0 last:pb-0">
                    <h4 className="font-bold text-sm text-foreground">{cert.title}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-muted">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
