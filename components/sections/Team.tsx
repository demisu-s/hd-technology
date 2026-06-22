'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, Sparkles } from 'lucide-react';

const team = [
  {
    name: 'Henok Worku',
    role: 'Co-Founder & Cloud Architect',
    initials: 'H',
    desc: 'Henok leads cloud architecture and network design, combining deep AWS and Oracle expertise to build scalable, resilient infrastructure.',
    skills: ['AWS Certified', 'Oracle Cloud', 'Network Engineering', 'Cloud Strategy'],
    gradient: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    name: 'Damisu Sefu',
    role: 'Co-Founder & Software Engineer',
    initials: 'D',
    desc: 'Damisu drives software development and hardware operations, bridging code and physical infrastructure to deliver complete, integrated solutions.',
    skills: ['Software Development', 'Hardware Systems', 'System Integration', 'Tech Support'],
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

export function Team() {
  return (
    <section id="team" className="py-24 bg-[#080D18] relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#48db9c]/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#48db9c] tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-[#48db9c]" />
            The Founders
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Built by <span className="text-[#48db9c]">Experts</span>
          </h2>
          <p className="text-[#8A9BB8] mt-4 text-lg">
            HD is founded on a partnership of complementary expertise — cloud and hardware, software and systems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                borderColor: 'rgba(72, 219, 156, 0.4)',
                boxShadow: '0 20px 60px -12px rgba(72, 219, 156, 0.15)',
              }}
              className="bg-[#0C1525] border border-[#48db9c]/10 rounded-2xl p-8 transition-all duration-300"
            >
              <motion.div
                className="flex items-center gap-4 mb-4"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${member.gradient} border border-[#48db9c]/25 flex items-center justify-center font-display text-2xl font-bold text-[#48db9c]`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {member.initials}
                </motion.div>
                <div>
                  <motion.h3
                    className="font-display font-bold text-[#F0F4FA] text-xl"
                    whileHover={{ color: '#48db9c' }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-[#48db9c]"
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {member.role}
                  </motion.p>
                </div>
              </motion.div>
              
              <motion.p
                className="text-[#8A9BB8] text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {member.desc}
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {member.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="text-xs font-medium text-[#48db9c]/70 bg-[#48db9c]/5 border border-[#48db9c]/10 px-3 py-1 rounded-full"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(72, 219, 156, 0.15)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div
                className="flex gap-3 mt-4 pt-4 border-t border-[#48db9c]/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="#"
                  className="p-2 rounded-lg bg-[#05080F] border border-[#48db9c]/10 text-[#50637E] hover:text-[#48db9c] hover:border-[#48db9c]/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 rounded-lg bg-[#05080F] border border-[#48db9c]/10 text-[#50637E] hover:text-[#48db9c] hover:border-[#48db9c]/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 rounded-lg bg-[#05080F] border border-[#48db9c]/10 text-[#50637E] hover:text-[#48db9c] hover:border-[#48db9c]/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
