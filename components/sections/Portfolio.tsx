'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, CheckCircle, TrendingUp, Award, Users, Zap } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  { 
    title: 'Cloud Migration for Financial Services', 
    desc: 'End-to-end migration of legacy systems to AWS cloud with zero downtime.',
    tags: ['AWS', 'Migration', 'Finance'],
    icon: TrendingUp,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  { 
    title: 'Enterprise Network Overhaul', 
    desc: 'Complete redesign and deployment of LAN/WAN infrastructure for a 500+ employee organization.',
    tags: ['Network', 'LAN/WAN', 'Security'],
    icon: Award,
    color: 'from-purple-500/20 to-pink-500/20',
  },
  { 
    title: 'Custom ERP System', 
    desc: 'Development of a custom enterprise resource planning system with real-time analytics.',
    tags: ['Software', 'ERP', 'Analytics'],
    icon: Zap,
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  { 
    title: 'CCTV & Security Installation', 
    desc: 'Comprehensive IP camera and NVR deployment for a multi-site corporate campus.',
    tags: ['CCTV', 'Security', 'Installation'],
    icon: Users,
    color: 'from-green-500/20 to-emerald-500/20',
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

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 25,
    },
  },
};

export function Portfolio() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <section id="portfolio" className="py-24 bg-[#080D18] relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#48db9c]/5 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-[#48db9c]/3 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ opacity, scale }}
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
            Portfolio
          </motion.div>
          <motion.h2
            className="font-display text-3xl sm:text-4xl font-bold"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Projects That <span className="text-[#48db9c]">Deliver Results</span>
          </motion.h2>
          <motion.p
            className="text-[#8A9BB8] mt-4 text-lg"
            whileHover={{ color: '#48db9c' }}
            transition={{ duration: 0.3 }}
          >
            A selection of our recent work — each project reflects our commitment to quality and innovation.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                borderColor: 'rgba(72, 219, 156, 0.4)',
                boxShadow: '0 20px 60px -12px rgba(72, 219, 156, 0.12)',
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0C1525] border border-[#48db9c]/10 rounded-2xl p-7 transition-all duration-300 group"
            >
              <motion.div
                className="flex items-start justify-between"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${project.color} border border-[#48db9c]/15 rounded-xl flex items-center justify-center`}
                  whileHover={{
                    rotate: [0, -10, 10, -5, 5, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <project.icon className="w-6 h-6 text-[#48db9c]" />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#50637E] group-hover:text-[#48db9c] transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
              </motion.div>
              
              <motion.h3
                className="font-display font-semibold text-[#F0F4FA] text-xl mt-4"
                whileHover={{ color: '#48db9c' }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p
                className="text-[#8A9BB8] mt-2 leading-relaxed"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {project.desc}
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-2 mt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="text-xs font-medium text-[#48db9c]/60 bg-[#48db9c]/5 border border-[#48db9c]/10 px-3 py-1 rounded-full"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(72, 219, 156, 0.15)',
                      borderColor: 'rgba(72, 219, 156, 0.3)',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div
                className="mt-4 flex items-center gap-2 text-xs text-[#50637E]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <CheckCircle className="w-3 h-3 text-[#48db9c]" />
                <span>Completed successfully</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
