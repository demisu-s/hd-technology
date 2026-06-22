'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-[#48db9c]/10 bg-[#05080F] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="HD Technology Solutions"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-display font-bold text-[#F0F4FA]">HD Technology Solutions</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#services" className="text-sm text-[#50637E] hover:text-[#48db9c] transition-colors">Services</Link>
            <Link href="#solutions" className="text-sm text-[#50637E] hover:text-[#48db9c] transition-colors">Solutions</Link>
            <Link href="#portfolio" className="text-sm text-[#50637E] hover:text-[#48db9c] transition-colors">Portfolio</Link>
            <Link href="#certifications" className="text-sm text-[#50637E] hover:text-[#48db9c] transition-colors">Certifications</Link>
            <Link href="#team" className="text-sm text-[#50637E] hover:text-[#48db9c] transition-colors">Team</Link>
            <Link href="#contact" className="text-sm text-[#50637E] hover:text-[#48db9c] transition-colors">Contact</Link>
          </nav>
          <span className="text-xs text-[#50637E]">© 2025 HD Technology Solutions</span>
        </div>
      </div>
    </footer>
  );
}
