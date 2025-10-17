'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapPin } from 'react-icons/fa';

// Contact Section Component
export default function Contact() {
  // Contact information
  const contactInfo = [
    { icon: FaEnvelope, title: 'Email', value: 'yerayhudra13@gmail.com', href: 'mailto:yerayhudra13@gmail.com' },
    { icon: FaPhone, title: 'Phone', value: '+34 670 415 830', href: 'tel:+34670415830' },
    { icon: FaMapPin, title: 'Location', value: 'Barcelona, Spain', href: '#' },
  ];

  // Social media links
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/yerayhurtado', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/yerayhurtadodev/', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:yerayhudra13@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="w-full min-h-screen relative px-6 sm:px-8 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 40, -40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-pink-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -40, 40, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4">Get In Touch</p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Connect</span>
        </h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can work together to create something amazing.
        </p>
      </motion.div>

      {/* Contact info cards */}
      <div className="w-full max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
          
          {/* Email / Phone / Location */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={i}
                  href={info.href}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="mt-1 p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <Icon className="text-cyan-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 mb-1">{info.title}</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Social media links */}
          <div className="pt-8 border-t border-gray-700/50">
            <p className="text-gray-400 text-sm font-semibold mb-6">Follow me on social media</p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={i}
                    href={link.url}
                    target={link.label !== 'Email' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 group"
                    title={link.label}
                  >
                    <Icon className="text-cyan-400 text-xl group-hover:text-cyan-300 transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick stats */}
          <div className="pt-8 grid grid-cols-2 gap-4">
            {[{ label: 'Response Time', value: '< 24h' }, { label: 'Availability', value: 'Open' }].map((stat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-4 rounded-lg bg-gray-800/30 border border-gray-700/50 text-center">
                <p className="text-gray-400 text-xs font-semibold mb-1">{stat.label}</p>
                <p className="text-cyan-400 font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-20 text-center relative z-10">
        <p className="text-gray-400 mb-4">Prefer to reach out directly?</p>
        <motion.a
          href="mailto:yerayhudra13@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300"
        >
          Send me an email <span>→</span>
        </motion.a>
      </motion.div>

    </section>
  );
}
