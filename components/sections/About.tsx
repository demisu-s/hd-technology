'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Zap, Users, Layers, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const whyItems = [
  { icon: Shield, title: 'Certified Professionals', desc: 'AWS, Oracle, and Satcom Tech certified engineers on every project.' },
  { icon: Zap, title: 'Fast Deployment', desc: 'Rapid setup and installation with minimal disruption to operations.' },
  { icon: Users, title: 'Dedicated Support', desc: 'Personal, responsive service from real engineers — not a call center.' },
  { icon: Layers, title: 'End-to-End', desc: 'We handle everything from planning and procurement to deployment and maintenance.' },
];

export function About() {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  const springOpacity = useSpring(opacity, { damping: 30, stiffness: 100 });
  const springScale = useSpring(scale, { damping: 30, stiffness: 100 });

  // Generate floating dots only on client side
  const floatingDots = isMounted
    ? [...Array(15)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 3,
        xOffset: (Math.random() - 0.5) * 30,
        yOffset: -30 - Math.random() * 50,
      }))
    : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-[#05080F] relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated background elements - No random values */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#48db9c]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#48db9c]/3 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Floating dots - Only render on client side */}
        {isMounted && (
          <>
            {floatingDots.map((d) => (
              <motion.div
                key={d.id}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#48db9c]/20"
                style={{
                  left: d.left,
                  top: d.top,
                }}
                animate={{
                  y: [0, d.yOffset, 0],
                  x: [0, d.xOffset, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: d.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: d.delay,
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          style={{
            opacity: springOpacity,
            scale: springScale,
          }}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 20,
              delay: 0.2,
            }}
          >
            <motion.div
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#48db9c] tracking-widest uppercase mb-4"
              whileHover={{ gap: 8 }}
            >
              <motion.span
                className="w-6 h-px bg-[#48db9c]"
                whileHover={{ width: 12 }}
                transition={{ duration: 0.3 }}
              />
              About HD
            </motion.div>

            <motion.h2
              className="font-display text-3xl sm:text-4xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Technology That <br />
              <motion.span
                className="text-[#48db9c] relative inline-block"
                whileHover={{
                  scale: 1.02,
                  textShadow: '0 0 30px rgba(72, 219, 156, 0.2)',
                }}
                transition={{ duration: 0.3 }}
              >
                Works for You
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#48db9c]/0 via-[#48db9c] to-[#48db9c]/0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.span>
            </motion.h2>

            <motion.p
              className="mt-4 text-[#8A9BB8] text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              HD Technology Solutions was founded by <strong className="text-[#F0F4FA]">Henok Worku</strong> and{' '}
              <strong className="text-[#F0F4FA]">Damisu Sefu</strong> — two engineers with a shared vision:
              to make enterprise-grade technology accessible to every organization that deserves it.
            </motion.p>

            <motion.p
              className="mt-4 text-[#8A9BB8] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              We combine deep technical certifications with real-world experience across cloud platforms,
              software systems, network infrastructure, and hardware. Whether you're scaling your business
              or starting from scratch, HD turns technology into your competitive advantage.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#48db9c] text-[#05080F] font-display font-semibold px-8 py-3.5 rounded-xl hover:bg-white transition-all duration-200 mt-6 group relative overflow-hidden"
              >
                <span className="relative z-10">Start a Project</span>
                <motion.span
                  className="text-lg inline-block relative z-10"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#48db9c] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Interactive Image and Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {/* Interactive Image with 3D tilt */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden border border-[#48db9c]/10 group cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 20px 60px -12px rgba(72, 219, 156, 0.15)',
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-64 overflow-hidden bg-[#0C1525]">
                <Image
                  src="/about-tech.svg"
                  alt="HD Technology Solutions - About Us"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080F] via-[#05080F]/40 to-transparent" />
                
                {/* Hover overlay with glow */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-[#48db9c]/20 backdrop-blur-sm border border-[#48db9c]/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <ImageIcon className="w-8 h-8 text-[#48db9c]" />
                  </motion.div>
                </motion.div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#05080F] to-transparent">
                  <motion.p
                    className="text-xs text-[#8A9BB8]"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-[#48db9c]">✦</span> Our team at work — building technology solutions for tomorrow
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Why Cards with floating animation */}
            <div className="grid grid-cols-2 gap-3">
              {whyItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(72, 219, 156, 0.5)',
                    boxShadow: '0 12px 40px -12px rgba(72, 219, 156, 0.15)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0C1525] border border-[#48db9c]/10 rounded-xl p-4 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, -15, 15, -10, 10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-5 h-5 text-[#48db9c] mb-2" />
                  </motion.div>
                  <motion.h3
                    className="font-display font-semibold text-[#F0F4FA] text-sm"
                    whileHover={{ color: '#48db9c' }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-xs text-[#8A9BB8] mt-1 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
