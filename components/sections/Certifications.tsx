'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Award, Shield, Star } from 'lucide-react';
import { useRef } from 'react';

const certs = [
  { 
    name: 'AWS Certified Solutions Architect', 
    org: 'Amazon Web Services', 
    badge: 'AWS', 
    color: 'bg-[#FF9900]/10 border-[#FF9900]/30 text-[#FF9900]',
    icon: Award,
    delay: 0,
  },
  { 
    name: 'Oracle Cloud Infrastructure', 
    org: 'Oracle', 
    badge: 'OCI', 
    color: 'bg-[#F80000]/10 border-[#F80000]/30 text-[#F80000]',
    icon: Shield,
    delay: 0.1,
  },
  { 
    name: 'Satcom Tech Hardware Maintenance', 
    org: 'Satcom Technology', 
    badge: 'HW', 
    color: 'bg-[#48db9c]/10 border-[#48db9c]/30 text-[#48db9c]',
    icon: Star,
    delay: 0.2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 25,
    },
  },
};

export function Certifications() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);

  return (
    <section id="certifications" className="py-24 bg-[#05080F] relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#48db9c]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#48db9c]/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </motion.div>

      {/* Floating badges */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full border border-[#48db9c]/10"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
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
          style={{ y }}
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
            Credentials
          </motion.div>
          <motion.h2
            className="font-display text-3xl sm:text-4xl font-bold"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Certified <span className="text-[#48db9c]">Excellence</span>
          </motion.h2>
          <motion.p
            className="text-[#8A9BB8] mt-4 text-lg"
            whileHover={{ color: '#48db9c' }}
            transition={{ duration: 0.3 }}
          >
            Industry-recognized certifications that validate our expertise across cloud, development, and hardware.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                borderColor: 'rgba(72, 219, 156, 0.4)',
                boxShadow: '0 20px 60px -12px rgba(72, 219, 156, 0.12)',
              }}
              className="bg-[#0C1525] border border-[#48db9c]/10 rounded-2xl p-8 text-center transition-all duration-300 group"
            >
              <motion.div
                className={`w-20 h-20 mx-auto rounded-xl flex items-center justify-center font-display font-bold text-lg ${cert.color}`}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                {cert.badge}
              </motion.div>
              
              <motion.div
                className="text-[10px] text-[#50637E] tracking-widest uppercase mt-4"
                whileHover={{ color: '#48db9c' }}
                transition={{ duration: 0.3 }}
              >
                {cert.org}
              </motion.div>
              
              <motion.h3
                className="font-display font-semibold text-[#F0F4FA] text-lg mt-2"
                whileHover={{ color: '#48db9c' }}
                transition={{ duration: 0.3 }}
              >
                {cert.name}
              </motion.h3>
              
              <motion.div
                className="flex items-center justify-center gap-2 text-xs text-[#48db9c] mt-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <CheckCircle className="w-4 h-4" />
                </motion.div>
                Verified Certification
              </motion.div>
              
              <motion.div
                className="mt-4 h-px bg-gradient-to-r from-transparent via-[#48db9c]/20 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-[#0C1525] border border-[#48db9c]/10 rounded-2xl p-8 text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#48db9c]/5 via-transparent to-[#48db9c]/5"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-display text-lg text-[#F0F4FA] max-w-3xl mx-auto">
              Every certification represents hundreds of hours of rigorous study and real-world application —{' '}
              <span className="text-[#48db9c]">ensuring expert-level service on every engagement.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
