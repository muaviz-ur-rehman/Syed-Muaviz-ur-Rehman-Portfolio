'use client';

import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';

export function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="label-editorial mb-2">Qualifications</div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Curriculum <span className="text-accent text-3xl md:text-5xl">Vitae</span>
            </h2>
          </motion.div>

          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors shrink-0 max-w-max"
          >
            Download PDF <Download size={18} />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full aspect-[1/1.4] md:aspect-[16/9] lg:aspect-[21/9] card border border-border-subtle overflow-hidden relative flex flex-col items-center justify-center group p-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10 flex flex-col items-center justify-end pb-12 opacity-80 group-hover:opacity-100 transition-opacity">
            <p className="text-foreground font-bold uppercase tracking-widest text-sm mb-4">Interactive CV Viewer</p>
            <button className="flex items-center gap-2 bg-accent text-background px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
              <FileText size={18} /> Open Full Screen
            </button>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-20 bg-surface">
            {/* abstract placeholder pattern for resume viewer */}
            <div className="w-[80%] max-w-3xl h-[120%] bg-[#fafafa] rounded-md shadow-2xl rotate-2 translate-y-12" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
