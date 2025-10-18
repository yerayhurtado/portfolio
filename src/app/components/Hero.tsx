'use client';

import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const [text] = useTypewriter({
    words: ['Web Developer', 'AI & Big Data Scientist'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 2500,
  });

  const [loaded, setLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detectar preferencia de movimiento reducido
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPrefersReducedMotion(prefersReduced);

    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Variantes de animación optimizadas
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const floatingVariant = {
    animate: prefersReducedMotion ? {} : { y: [0, -12, 0] },
    transition: { duration: 6, repeat: Infinity },
  };

  return (
    <section
      id="home"
      role="banner"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-8 md:px-12 lg:px-20 min-h-screen pt-24 md:pt-32 overflow-hidden"
    >
      {/* Animated background circles - GPU accelerated */}
      <motion.div
        className="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/10 rounded-full blur-3xl will-change-transform"
        animate={
          prefersReducedMotion
            ? {}
            : { x: [0, 50, -50, 0], y: [0, 50, -50, 0] }
        }
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-500/30 to-pink-500/10 rounded-full blur-3xl will-change-transform"
        animate={
          prefersReducedMotion
            ? {}
            : { x: [0, -50, 50, 0], y: [0, -50, 50, 0] }
        }
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Left Content */}
      <motion.div
        initial="hidden"
        animate={loaded ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="md:w-1/2 flex flex-col justify-center z-10 relative"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -20 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 w-fit px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 backdrop-blur-sm"
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-cyan-400 will-change-transform"
            animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-cyan-300">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
          transition={{ delay: 0.05, duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
        >
          Hey, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
            Yeray
          </span>
        </motion.h1>

        {/* Subtitle with typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {text}
            </span>
            <span className="text-cyan-400 text-3xl md:text-4xl">
              <Cursor cursorStyle="|" />
            </span>
          </h2>
        </motion.div>

        {/* Short description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-10 text-gray-300 leading-relaxed font-light"
        >
          Building smart web solutions with modern tech, AI, and Big Data.
          Let&apos;s create something amazing together.
        </motion.p>

        {/* Social icons */}
        <motion.div
          className="flex gap-6 mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {[
            {
              icon: FaGithub,
              url: 'https://github.com/yerayhurtado',
              label: 'GitHub',
            },
            {
              icon: FaLinkedin,
              url: 'https://www.linkedin.com/in/yerayhurtadodev/',
              label: 'LinkedIn',
            },
            {
              icon: FaEnvelope,
              url: 'mailto:yerayhudra13@gmail.com',
              label: 'Email',
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target={social.icon !== FaEnvelope ? '_blank' : '_self'}
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg overflow-hidden text-center transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-400 text-gray-300 font-bold rounded-lg hover:border-white hover:text-white transition-all duration-200 text-center"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Avatar */}
      <div className="relative md:w-1/2 flex justify-center items-center pointer-events-none mb-12 md:mb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{
            opacity: loaded ? 1 : 0,
            scale: loaded ? 1 : 0.8,
            rotate: loaded ? 0 : -5,
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] aspect-[4/5] z-10"
        >
          {/* Animated outer orb - más eficiente */}
          <motion.div
            className="absolute -inset-8 rounded-full will-change-transform"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    background: [
                      'conic-gradient(from 0deg, rgba(6,182,212,0.6), rgba(59,130,246,0.4), rgba(139,92,246,0.3), rgba(6,182,212,0.6))',
                      'conic-gradient(from 90deg, rgba(59,130,246,0.6), rgba(139,92,246,0.4), rgba(6,182,212,0.3), rgba(59,130,246,0.6))',
                      'conic-gradient(from 180deg, rgba(139,92,246,0.6), rgba(6,182,212,0.4), rgba(59,130,246,0.3), rgba(139,92,246,0.6))',
                      'conic-gradient(from 270deg, rgba(6,182,212,0.6), rgba(59,130,246,0.4), rgba(139,92,246,0.3), rgba(6,182,212,0.6))',
                    ],
                    rotate: [0, 360],
                  }
            }
            transition={{ duration: 10, repeat: Infinity }}
          />

          {/* Glowing background - animación simplificada */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl opacity-50 will-change-transform"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    background: [
                      'radial-gradient(circle at 30% 30%, rgba(6,182,212,0.6), transparent 70%)',
                      'radial-gradient(circle at 70% 70%, rgba(59,130,246,0.6), transparent 70%)',
                    ],
                  }
            }
            transition={{ duration: 12, repeat: Infinity }}
          />

          {/* Floating avatar */}
          <motion.div
            className="relative w-full h-full rounded-3xl overflow-hidden will-change-transform"
            animate={prefersReducedMotion ? {} : floatingVariant.animate}
            transition={floatingVariant.transition}
          >
            <img
              src="/AvatarYeray.png"
              alt="Yeray Avatar"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll button */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer z-20"
        animate={
          prefersReducedMotion ? {} : { y: [0, 10, 0] }
        }
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <span className="text-xs text-gray-400 tracking-widest uppercase font-semibold">
          Scroll to explore
        </span>
        <motion.svg
          className="w-6 h-6 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={
            prefersReducedMotion ? {} : { y: [0, 4, 0] }
          }
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}