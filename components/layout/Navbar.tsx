'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#05080F]/90 backdrop-blur-xl border-b border-[#48db9c]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Replace with your image */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/Logo.png"
                alt="HD Technology Solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-display text-xl font-bold text-white tracking-tight">HD</span>
              <span className="block text-[10px] text-[#50637E] tracking-[0.2em] uppercase">Technology Solutions</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#8A9BB8] hover:text-[#48db9c] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#48db9c] text-[#05080F] font-display font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white transition-all duration-200"
            >
              Get in Touch
              <ChevronRight className="w-4 h-4" />
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#F0F4FA] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#080D18] border-t border-[#48db9c]/10 px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#F0F4FA] font-medium py-2 hover:text-[#48db9c] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center bg-[#48db9c] text-[#05080F] font-display font-semibold px-6 py-3 rounded-lg hover:bg-white transition-colors mt-2"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
