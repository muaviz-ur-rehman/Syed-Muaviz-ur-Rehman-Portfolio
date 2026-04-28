import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syed Muaviz Ur Rehman | Portfolio',
  description: 'Portfolio of Syed Muaviz Ur Rehman - AI, Data Science & Python Specialist',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className="antialiased selection:bg-accent-dim selection:text-accent" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
