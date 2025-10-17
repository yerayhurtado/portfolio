'use client'

import { motion } from 'framer-motion';
import React from 'react';

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-screen mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-96 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-cyan-500/20 to-blue-600/10 blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="flex-1 space-y-8 max-w-full lg:max-w-2xl z-10"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* Heading */}
        <div>
          <motion.p
            className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Know Me Better
          </motion.p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Paragraphs */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            Hi, I'm <span className="text-cyan-400 font-semibold">Yeray Hurtado</span>, a 20-year-old Web Developer and aspiring AI & Big Data Scientist from <span className="text-blue-400 font-semibold">Barcelona</span>.
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            I recently completed my studies in web app development and am now pursuing a <span className="text-cyan-400 font-semibold">Master's in AI & Big Data</span>. I love building modern, scalable web apps and designing smart AI solutions.
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            Learning new tech, exploring tools, and turning ideas into real applications excites me. My goal is to merge web development and AI to create impactful digital solutions.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer group"
          >
            Let's Work Together
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xl"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Visual with animated nodes */}
      <div className="flex-1 flex justify-center lg:justify-end items-center relative mt-12 lg:mt-0 z-10">
        <AboutVisual />
      </div>
    </section>
  );
}

// Visual component with floating nodes and connecting lines
function AboutVisual() {
  // Create nodes with random positions, size, and animation offsets
  const nodes = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    x: Math.random() * 320 - 160,
    y: Math.random() * 320 - 160,
    size: Math.random() * 14 + 5,
    offsetX: Math.random() * 30 - 15,
    offsetY: Math.random() * 30 - 15,
    duration: 6 + Math.random() * 6,
  }));

  return (
    <motion.div
      className="relative w-64 sm:w-80 md:w-96 lg:w-[28rem] h-64 sm:h-80 md:h-96 lg:h-[28rem] flex items-center justify-center overflow-visible"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9 }}
    >
      {/* Pulsing blurred background */}
      <motion.div
        className="absolute w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-600/20 blur-3xl -z-10"
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Lines between some nodes */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
          </linearGradient>
        </defs>
        {nodes.map((node, i) =>
          nodes.map((target, j) =>
            i < j && Math.random() > 0.7 ? (
              <motion.line
                key={`line-${i}-${j}`}
                x1={node.x + 128}
                y1={node.y + 128}
                x2={target.x + 128}
                y2={target.y + 128}
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }}
              />
            ) : null
          )
        )}
      </svg>

      {/* Floating nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full shadow-lg"
          style={{
            width: node.size,
            height: node.size,
            left: node.x + 128,
            top: node.y + 128,
            background: `linear-gradient(135deg, rgba(6, 182, 212, ${0.6 + Math.random() * 0.4}), rgba(59, 130, 246, ${0.4 + Math.random() * 0.4}))`,
            boxShadow: `0 0 ${node.size * 2}px rgba(6, 182, 212, 0.5)`,
          }}
          animate={{
            x: [0, node.offsetX, -node.offsetX / 2, 0],
            y: [0, node.offsetY, -node.offsetY / 2, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glowing center */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
