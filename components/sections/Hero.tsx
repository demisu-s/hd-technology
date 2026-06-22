'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play, Pause } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Logo } from '@/components/ui/Logo';

const stats = [
  { label: 'AWS Certified', value: 'AWS' },
  { label: 'Services', value: '6+' },
  { label: 'Support', value: '24/7' },
  { label: 'Certifications', value: '3' },
];

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fix hydration by only rendering particles after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mouse tracking for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Spring animations for smooth following
  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(useMotionValue(0), v => v * -10), springConfig);
  const rotateY = useSpring(useTransform(useMotionValue(0), v => v * 10), springConfig);

  // Update rotate values based on mouse
  useEffect(() => {
    rotateX.set(mousePosition.y);
    rotateY.set(mousePosition.x);
  }, [mousePosition]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Generate particles only on client side to avoid hydration mismatch
  const particles = isMounted
    ? [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 5 + Math.random() * 10,
        delay: Math.random() * 5,
        xOffset: (Math.random() - 0.5) * 50,
        yOffset: -50 - Math.random() * 100,
      }))
    : [];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#05080F] overflow-hidden pt-20 pb-16"
    >
      {/* Animated Background Orbs - No random values */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#48db9c]/5 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#48db9c]/4 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating Particles - Only render on client side */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-1 h-1 rounded-full bg-[#48db9c]/30"
              style={{
                left: p.left,
                top: p.top,
              }}
              animate={{
                y: [0, p.yOffset, 0],
                x: [0, p.xOffset, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge with glow */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 bg-[#48db9c]/10 border border-[#48db9c]/20 rounded-full px-4 py-2 mb-8 relative"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(72, 219, 156, 0.15)',
          }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-[#48db9c]"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs font-medium text-[#48db9c] tracking-wider">Certified Technology Partner — Addis Ababa</span>
        </motion.div>

        {/* 3D Logo with tilt effect */}
        <motion.div
          variants={itemVariants}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 800,
          }}
          className="flex justify-center mb-10"
        >
          <motion.div
            className="relative w-28 h-28 bg-[#0C1525] border border-[#48db9c]/15 rounded-2xl flex items-center justify-center"
            animate={floatAnimation}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 60px rgba(72, 219, 156, 0.2)',
            }}
          >
            <Logo width={56} height={56} />
            <motion.div
              className="absolute inset-[-4px] rounded-2xl border-2 border-[#48db9c]/0"
              whileHover={{
                borderColor: 'rgba(72, 219, 156, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full bg-[#48db9c]/0 blur-2xl"
              whileHover={{
                backgroundColor: 'rgba(72, 219, 156, 0.05)',
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Title with gradient effect */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
        >
          Where Technology
          <br />
          <motion.span
            className="text-[#48db9c] relative inline-block"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: '200% auto',
              backgroundImage: 'linear-gradient(135deg, #48db9c, #6ee2b0, #48db9c)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Meets Precision
          </motion.span>
          <motion.span
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#48db9c]/0 via-[#48db9c] to-[#48db9c]/0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto mt-6 text-[#8A9BB8] text-lg leading-relaxed"
        >
          HD delivers certified end-to-end technology solutions — cloud architecture, software development,
          network infrastructure, and hardware maintenance. Built by experts, engineered for results.
        </motion.p>

        {/* Interactive Media Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto mt-8"
        >
          <motion.div
            className="relative rounded-xl overflow-hidden border border-[#48db9c]/10 group"
            whileHover={{
              boxShadow: '0 0 40px rgba(72, 219, 156, 0.1)',
            }}
          >
            <div className="relative w-full h-48 sm:h-64 overflow-hidden bg-[#0C1525]">
              <Image
                src="/hero-tech.svg"
                alt="HD Technology Solutions - Tech Infrastructure"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-[#05080F]/40 to-transparent" />
              
              {/* Pulse ring around play button */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-24 h-24 rounded-full border-2 border-[#48db9c]/20" />
              </motion.div>
              
              <motion.button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#48db9c]/20 backdrop-blur-sm border border-[#48db9c]/30 flex items-center justify-center hover:bg-[#48db9c]/30 transition-all duration-300 hover:scale-110 group/btn z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isVideoPlaying ? (
                  <Pause className="w-6 h-6 text-[#48db9c]" />
                ) : (
                  <Play className="w-6 h-6 text-[#48db9c] ml-1" />
                )}
              </motion.button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#05080F] to-transparent">
              <p className="text-xs text-[#8A9BB8]">
                <span className="text-[#48db9c]">▶</span> Interactive demo — click play to see our technology in action
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 bg-[#48db9c] text-[#05080F] font-display font-semibold px-8 py-4 rounded-xl hover:bg-white transition-all duration-200 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Services</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#48db9c] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#team"
              className="inline-flex items-center gap-2 border border-[#48db9c]/30 text-[#48db9c] font-display font-semibold px-8 py-4 rounded-xl hover:bg-[#48db9c]/10 transition-all duration-200"
            >
              Meet Our Team
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="font-display text-2xl font-bold text-[#48db9c] relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 + idx * 0.1 }}
                >
                  {stat.value}
                </motion.span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#48db9c]/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              <div className="text-xs text-[#50637E] tracking-widest uppercase mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#50637E] text-xs tracking-widest uppercase hover:text-[#48db9c] transition-colors group"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span>Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-[#48db9c] to-transparent"
            animate={{
              height: ['10px', '40px', '10px'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
