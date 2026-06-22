import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HD Technology Solutions – Enterprise IT & Cloud Experts',
  description: 'HD delivers certified end-to-end technology solutions — cloud architecture, software development, network infrastructure, and hardware maintenance. Built by experts, engineered for results.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#05080F] text-[#F0F4FA] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
