'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ArrowRight } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'infohd@gmail.com', href: 'mailto:infohd@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+251 953 772 137', href: 'tel:+251953772137' },
    { icon: MapPin, label: 'Location', value: 'Addis Ababa, Ethiopia', href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 25,
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 25,
        delay: 0.2,
      },
    },
  };

  return (
    <section id="contact" className="py-24 bg-[#080D18] relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-[#48db9c]/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-[#48db9c]/3 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

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
            Get in Touch
          </motion.div>
          <motion.h2
            className="font-display text-3xl sm:text-4xl font-bold"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Let's Build <span className="text-[#48db9c]">Together</span>
          </motion.h2>
          <motion.p
            className="text-[#8A9BB8] mt-4 text-lg"
            whileHover={{ color: '#48db9c' }}
            transition={{ duration: 0.3 }}
          >
            Ready to transform your technology infrastructure? Reach out and let's discuss your project.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div className="lg:col-span-2 space-y-4" variants={itemVariants}>
            {contactItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                className="flex items-center gap-4 bg-[#0C1525] border border-[#48db9c]/10 rounded-xl p-4 hover:border-[#48db9c]/30 transition-all duration-200 group"
                whileHover={{
                  x: 10,
                  borderColor: 'rgba(72, 219, 156, 0.4)',
                  boxShadow: '0 8px 30px -8px rgba(72, 219, 156, 0.08)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-[#48db9c]/10 border border-[#48db9c]/15 flex items-center justify-center flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: 'rgba(72, 219, 156, 0.2)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-5 h-5 text-[#48db9c]" />
                </motion.div>
                <div>
                  <div className="text-[10px] text-[#50637E] tracking-widest uppercase">{item.label}</div>
                  <motion.div
                    className="text-sm text-[#F0F4FA]"
                    whileHover={{ color: '#48db9c' }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.value}
                  </motion.div>
                </div>
              </motion.a>
            ))}

            <motion.div
              className="flex items-center gap-3 bg-[#0C1525] border border-[#48db9c]/10 rounded-xl p-4"
              whileHover={{
                borderColor: 'rgba(72, 219, 156, 0.4)',
                boxShadow: '0 8px 30px -8px rgba(72, 219, 156, 0.08)',
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-[#48db9c]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-[#8A9BB8]">Typically responding within 24 hours</span>
            </motion.div>

            {/* Map Section */}
            <motion.div
              className="bg-[#0C1525] border border-[#48db9c]/10 rounded-xl overflow-hidden hover:border-[#48db9c]/30 transition-all duration-200"
              whileHover={{
                boxShadow: '0 8px 30px -8px rgba(72, 219, 156, 0.08)',
              }}
            >
              <div className="relative w-full h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126231.52645351132!2d38.65889684316538!3d8.989502505874425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ce3f2d8c0b%3A0x3e9b6b5b3b5b3b5b!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HD Technology Solutions Location"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 text-center border-t border-[#48db9c]/10">
                <p className="text-xs text-[#8A9BB8]">
                  <span className="text-[#48db9c]">📍</span> Addis Ababa, Ethiopia
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3 bg-[#0C1525] border border-[#48db9c]/10 rounded-2xl p-6 sm:p-8"
            variants={formVariants}
          >
            {!submitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div>
                    <label className="text-[10px] font-semibold text-[#50637E] tracking-widest uppercase">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full mt-1.5 bg-[#05080F] border border-[#48db9c]/10 rounded-lg px-4 py-3 text-[#F0F4FA] text-sm focus:border-[#48db9c]/40 outline-none transition-colors"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold text-[#50637E] tracking-widest uppercase">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full mt-1.5 bg-[#05080F] border border-[#48db9c]/10 rounded-lg px-4 py-3 text-[#F0F4FA] text-sm focus:border-[#48db9c]/40 outline-none transition-colors"
                      placeholder="info@email.com"
                      required
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="text-[10px] font-semibold text-[#50637E] tracking-widest uppercase">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full mt-1.5 bg-[#05080F] border border-[#48db9c]/10 rounded-lg px-4 py-3 text-[#F0F4FA] text-sm focus:border-[#48db9c]/40 outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="text-[10px] font-semibold text-[#50637E] tracking-widest uppercase">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full mt-1.5 bg-[#05080F] border border-[#48db9c]/10 rounded-lg px-4 py-3 text-[#F0F4FA] text-sm focus:border-[#48db9c]/40 outline-none transition-colors resize-none"
                    placeholder="Describe your project or needs..."
                    required
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#48db9c] text-[#05080F] font-display font-semibold py-3.5 rounded-xl hover:bg-white transition-all duration-200 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="relative z-10">Send Message</span>
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <Send className="w-4 h-4" />
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#48db9c] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 30,
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-[#48db9c]/10 border border-[#48db9c]/30 flex items-center justify-center mb-4"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: 2,
                  }}
                >
                  <CheckCircle className="w-8 h-8 text-[#48db9c]" />
                </motion.div>
                <h3 className="font-display text-xl font-bold text-[#F0F4FA]">Message Sent!</h3>
                <p className="text-[#8A9BB8] mt-2">Thank you — we'll get back to you within 24 hours.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
