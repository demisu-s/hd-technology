'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className, width = 40, height = 40 }: LogoProps) {
  return (
    <div className={cn('relative', className)} style={{ width, height }}>
      <Image
        src="/logo.png"
        alt="HD Technology Solutions"
        fill
        sizes={`${width}px`}
        className="object-contain"
        priority
      />
    </div>
  );
}
