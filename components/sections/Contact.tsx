'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<null | 'sending' | 'sent'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-border-subtle bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="label-editorial mb-2">Connect</div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Let's <span className="text-accent text-3xl md:text-5xl">Collaborate</span>
          </h2>
          <p className="text-sm text-muted max-w-2xl leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border-subtle rounded-md flex items-center justify-center shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <h4 className="text-foreground font-bold mb-1 text-sm uppercase tracking-wide">Email</h4>
                <a href={`mailto:${portfolioData.personal.email}`} className="text-sm text-muted hover:text-accent transition-colors">
                  {portfolioData.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-border-subtle rounded-md flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <h4 className="text-foreground font-bold mb-1 text-sm uppercase tracking-wide">Location</h4>
                <p className="text-sm text-muted">Bhakkar, Punjab Pakistan</p>
              </div>
            </div>

            <div className="pt-8 border-t border-border-subtle">
              <h4 className="label-editorial mb-4">Connect visually</h4>
              <div className="flex gap-4">
                <a href={portfolioData.personal.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 border border-border-subtle rounded-md flex items-center justify-center hover:bg-border-subtle hover:text-accent transition-colors">
                  <Github size={18} />
                </a>
                <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 border border-border-subtle rounded-md flex items-center justify-center hover:bg-border-subtle hover:text-accent transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 card p-8!"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="label-editorial text-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border-subtle rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="label-editorial text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-border-subtle rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="label-editorial text-foreground">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background border border-border-subtle rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full md:w-auto px-8 py-3 bg-accent text-background rounded-md font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-xs"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
                {status !== 'sending' && status !== 'sent' && <Send size={14} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
