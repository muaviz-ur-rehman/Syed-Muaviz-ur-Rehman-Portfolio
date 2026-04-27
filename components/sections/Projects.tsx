'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '@/data/portfolio';
import { ExternalLink, X } from 'lucide-react';

export function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData.projects[0] | null>(null);

  const categories = ['All', ...Array.from(new Set(portfolioData.projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Featured Work<span className="text-indigo-400">.</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === cat 
                    ? 'bg-white text-black font-medium' 
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
                className="card cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="label-editorial uppercase tracking-widest text-[#a1a1aa]">
                    {project.category}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={16} className="text-[#a1a1aa]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-auto pt-4 border-t border-border-subtle">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="skill-pill-editorial">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] text-muted px-2 py-1">+{project.techStack.length - 3}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pr-6 sm:pr-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-surface border border-border-subtle hover:bg-border-subtle rounded-md transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              
              <div className="tag-editorial mb-4">
                {selectedProject.category}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">{selectedProject.title}</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="label-editorial mb-2">Overview</h4>
                  <p className="text-sm text-muted leading-relaxed">{selectedProject.description}</p>
                </div>
                
                <div>
                  <h4 className="label-editorial mb-2">Problem Solved</h4>
                  <p className="text-sm text-muted leading-relaxed">{selectedProject.problemSolved}</p>
                </div>

                <div>
                  <h4 className="label-editorial mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="skill-pill-editorial">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
