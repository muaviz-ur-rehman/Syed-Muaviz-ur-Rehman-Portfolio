'use client';

import { portfolioData } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border-subtle bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-center text-center md:text-left text-sm text-muted">
        <div>
          <span className="font-bold text-foreground">SYED</span><span className="text-accent text-xs">.MUAVIZ</span>
        </div>
        <div className="md:text-center text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Building with Data
        </div>
        <div className="flex gap-4 justify-center md:justify-end text-xs tracking-widest uppercase">
           <a href="#about" className="hover:text-accent transition-colors">Archive</a>
           <a href="#research" className="hover:text-accent transition-colors">Research</a>
        </div>
      </div>
    </footer>
  );
}
