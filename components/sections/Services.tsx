'use client';

import { motion } from 'framer-motion';
import { Network, Code, Cloud, Server, Camera, Wrench } from 'lucide-react';

const services = [
  { 
    icon: Network, 
    title: 'Network Configuration', 
    desc: 'Enterprise-grade network design, configuration, and optimization. LAN/WAN setup, routing, switching, and security hardening.',
    tags: ['LAN/WAN', 'Routing', 'Firewall', 'VPN'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  { 
    icon: Code, 
    title: 'Software Development', 
    desc: 'Custom web applications, mobile apps, APIs, and enterprise systems designed with scalability and performance.',
    tags: ['Web Apps', 'Mobile', 'APIs', 'Enterprise'],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  { 
    icon: Cloud, 
    title: 'Cloud Solutions', 
    desc: 'AWS and Oracle certified cloud architecture, migration, and management. Scale your infrastructure intelligently.',
    tags: ['AWS', 'Oracle Cloud', 'Migration', 'DevOps'],
    gradient: 'from-orange-500/20 to-yellow-500/20',
  },
  { 
    icon: Server, 
    title: 'Local Server Setup', 
    desc: 'On-premise server installation, configuration, and maintenance. From rack setup to performance tuning.',
    tags: ['Installation', 'Config', 'Monitoring', 'Backup'],
    gradient: 'from-green-500/20 to-teal-500/20',
  },
  { 
    icon: Camera, 
    title: 'Security & Surveillance', 
    desc: 'Complete CCTV and IP camera installation, configuration, and integration. Protect your premises professionally.',
    tags: ['CCTV', 'IP Cameras', 'NVR/DVR', 'Remote View'],
    gradient: 'from-red-500/20 to-pink-500/20',
  },
  { 
    icon: Wrench, 
    title: 'Hardware Maintenance', 
    desc: 'Satcom Tech certified hardware servicing for office equipment. Repair, maintenance, and procurement.',
    tags: ['Repair', 'Maintenance', 'Procurement', 'Support'],
    gradient: 'from-gray-500/20 to-slate-500/20',
  },
];

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      stiffness: 100,
      damping: 20,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#080D18] relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#48db9c]/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
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
          <motion.div
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#48db9c] tracking-widest uppercase mb-4"
            whileHover={{ gap: 8 }}
          >
            <motion.span
              className="w-6 h-px bg-[#48db9c]"
              whileHover={{ width: 12 }}
              transition={{ duration: 0.3 }}
            />
            What We Do
          </motion.div>
          <motion.h2
            className="font-display text-3xl sm:text-4xl font-bold"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Full-Stack <span className="text-[#48db9c]">Tech Solutions</span>
          </motion.h2>
          <motion.p
            className="text-[#8A9BB8] mt-4 text-lg"
            whileHover={{ color: '#48db9c' }}
            transition={{ duration: 0.3 }}
          >
            From the network layer to the application layer — we handle the entire technology stack.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: 'rgba(72, 219, 156, 0.4)',
                boxShadow: '0 20px 60px -12px rgba(72, 219, 156, 0.15)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0C1525] border border-[#48db9c]/10 rounded-2xl p-6 transition-all duration-300 group"
            >
              <motion.div
                className={`w-12 h-12 bg-gradient-to-r ${service.gradient} border border-[#48db9c]/15 rounded-xl flex items-center justify-center mb-5`}
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="w-6 h-6 text-[#48db9c]" />
              </motion.div>
              <motion.h3
                className="font-display font-semibold text-[#F0F4FA] text-lg"
                whileHover={{ color: '#48db9c' }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
              <p className="text-sm text-[#8A9BB8] mt-2 leading-relaxed">{service.desc}</p>
              <motion.div
                className="flex flex-wrap gap-2 mt-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {service.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="text-[10px] font-medium text-[#48db9c]/70 bg-[#48db9c]/5 border border-[#48db9c]/10 px-3 py-1 rounded-full"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(72, 219, 156, 0.15)',
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
