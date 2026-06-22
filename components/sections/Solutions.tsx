'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Database, Globe, Layers, ShieldCheck, Cpu, Zap, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const solutions = [
  { 
    icon: Database, 
    title: 'Enterprise IT Infrastructure', 
    desc: 'End-to-end IT infrastructure design, deployment, and management for organizations of all sizes.',
    color: 'from-blue-500/20 to-cyan-500/20',
    delay: 0,
  },
  { 
    icon: Globe, 
    title: 'Digital Transformation', 
    desc: 'Strategic consulting and implementation to modernize your business processes and technology stack.',
    color: 'from-purple-500/20 to-pink-500/20',
    delay: 0.1,
  },
  { 
    icon: Layers, 
    title: 'Hybrid Cloud Solutions', 
    desc: 'Seamless integration of on-premise and cloud environments for maximum flexibility and control.',
    color: 'from-orange-500/20 to-yellow-500/20',
    delay: 0.2,
  },
  { 
    icon: ShieldCheck, 
    title: 'Security & Compliance', 
    desc: 'Comprehensive security assessments, implementation, and ongoing monitoring to protect your data.',
    color: 'from-green-500/20 to-emerald-500/20',
    delay: 0.1,
  },
  { 
    icon: Cpu, 
    title: 'IoT & Smart Solutions', 
    desc: 'Design and deployment of IoT systems for smart offices, monitoring, and automation.',
    color: 'from-red-500/20 to-orange-500/20',
    delay: 0.2,
  },
  { 
    icon: Zap, 
    title: 'IT Operations Support', 
    desc: 'Managed IT services, helpdesk, and proactive maintenance to keep your business running smoothly.',
    color: 'from-yellow-500/20 to-amber-500/20',
    delay: 0.3,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 25,
    },
  },
};

export function Solutions() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="solutions" className="py-24 bg-[#05080F] relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#48db9c]/[0.02] blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#48db9c]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50 - Math.random() * 80, 0],
              x: [0, (Math.random() - 0.5) * 40, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ opacity }}
          className="text-center max-w-2xl mx-auto mb-16"
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
            Solutions
          </motion.div>
          <motion.h2
            className="font-display text-3xl sm:text-4xl font-bold"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Enterprise-Grade <span className="text-[#48db9c]">Technology Solutions</span>
          </motion.h2>
          <motion.p
            className="text-[#8A9BB8] mt-4 text-lg"
            whileHover={{ color: '#48db9c' }}
            transition={{ duration: 0.3 }}
          >
            Tailored solutions designed to address your unique business challenges and drive growth.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: 'rgba(72, 219, 156, 0.4)',
                boxShadow: '0 20px 60px -12px rgba(72, 219, 156, 0.12)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0C1525] border border-[#48db9c]/10 rounded-2xl p-6 transition-all duration-300 group"
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${sol.color} border border-[#48db9c]/15 rounded-xl flex items-center justify-center mb-4`}
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 5, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <sol.icon className="w-6 h-6 text-[#48db9c]" />
              </motion.div>
              <motion.h3
                className="font-display font-semibold text-[#F0F4FA] text-lg"
                whileHover={{ color: '#48db9c' }}
                transition={{ duration: 0.3 }}
              >
                {sol.title}
              </motion.h3>
              <motion.p
                className="text-sm text-[#8A9BB8] mt-2 leading-relaxed"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {sol.desc}
              </motion.p>
              <motion.div
                className="mt-4 h-px bg-[#48db9c]/10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.div
                className="mt-4 flex items-center gap-2 text-xs text-[#50637E]"
                whileHover={{ color: '#48db9c', x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-3 h-3" />
                Learn more
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-[#48db9c]/30 text-[#48db9c] font-display font-semibold px-8 py-3.5 rounded-xl hover:bg-[#48db9c]/10 transition-all duration-200 group"
            >
              Discuss Your Needs
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
