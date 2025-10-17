'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiMysql, SiFigma, SiTailwindcss, SiPhp, SiBootstrap, SiSpringboot, SiGit, SiGithub } from 'react-icons/si';

// Skills data
const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5', category: 'Frontend' },
  { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3', category: 'Frontend' },
  { icon: <FaJsSquare className="text-yellow-400" />, name: 'JavaScript', category: 'Frontend' },
  { icon: <FaReact className="text-cyan-400" />, name: 'React', category: 'Frontend' },
  { icon: <SiNextdotjs className="text-white" />, name: 'Next.js', category: 'Frontend' },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind CSS', category: 'Frontend' },
  { icon: <FaPython className="text-blue-500" />, name: 'Python', category: 'Backend' },
  { icon: <SiMysql className="text-blue-700" />, name: 'MySQL', category: 'Database' },
  { icon: <SiFigma className="text-purple-500" />, name: 'Figma', category: 'Design' },
  { icon: <FaJava className="text-red-600" />, name: 'Java', category: 'Backend' },
  { icon: <SiPhp className="text-[#777BB4]" />, name: 'PHP', category: 'Backend' },
  { icon: <SiBootstrap className="text-purple-500" />, name: 'Bootstrap', category: 'Frontend' },
  { icon: <SiSpringboot className="text-green-500" />, name: 'Spring Boot', category: 'Backend' },
  { icon: <SiGit className="text-orange-600" />, name: 'Git', category: 'Version Control' },
  { icon: <SiGithub className="text-gray-300" />, name: 'GitHub', category: 'Version Control' },
];

// Skill categories
const categories = ['All', 'Frontend', 'Backend', 'Database', 'Design', 'Version Control'];

// Skills Section Component
export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter skills based on selected category
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="w-full min-h-screen relative px-6 sm:px-8 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden">
      
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
        <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4">My Arsenal</p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
        </h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      {/* Category filter buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {categories.map((cat, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                : 'border-2 border-gray-600 text-gray-300 hover:border-cyan-400/50'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills grid */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 md:gap-8 w-full max-w-6xl relative z-10"
        layout
      >
        {filteredSkills.map((skill, i) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="group relative"
          >
            {/* Skill card */}
            <motion.div
              whileHover={{ y: -8, scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer h-full"
            >
              <motion.div
                className="text-5xl md:text-6xl mb-3 relative"
                whileHover={{
                  filter: 'drop-shadow(0 0 15px currentColor)',
                  textShadow: '0 0 20px rgba(6, 182, 212, 0.6)',
                }}
                transition={{ duration: 0.2 }}
              >
                {skill.icon}
              </motion.div>
              <p className="text-xs md:text-sm font-semibold text-center text-gray-200 group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">{skill.category}</p>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"
                initial={false}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
