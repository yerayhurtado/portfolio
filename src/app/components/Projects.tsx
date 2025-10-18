'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { JSX, useState } from 'react';
import { FaLaravel, FaGithub, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';

interface Project {
  title: string;
  description: string;
  images?: string[];
  github?: string;
  technologies?: string[];
  category: string;
  year: string;
  comingSoon?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Projects data
const projects: Project[] = [
  {
    title: 'Virtual Fitness',
    description:
      'E-commerce platform for fitness equipment with real-time inventory, advanced booking system, secure payments, admin dashboard, and automated email notifications.',
    images: ['/HomeVF.png', '/ProductsVF.png', '/AdminVF.png', '/CartVF.png'],
    github: 'https://github.com/yerayhurtado/VirtualFitness',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Laravel'],
    category: 'Full Stack',
    year: '2024',
  },
  {
    title: 'Coming Soon',
    description:
      'Elegant restaurant landing page showcasing the menu, location, and contact information with a modern design.',
    comingSoon: true,
    category: 'Landing Page',
    year: '2025',
  },
];

// Map tech names to icons
const techIcons: Record<string, JSX.Element> = {
  'Next.js': <SiNextdotjs size={18} />,
  React: <FaReact size={18} />,
  'Tailwind CSS': <SiTailwindcss size={18} />,
  Laravel: <FaLaravel size={18} />,
  MongoDB: <SiMongodb size={18} />,
};

// Single Project Card
function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Coming Soon Card
  if (project.comingSoon) {
    return (
      <motion.div
        className="group relative rounded-2xl overflow-hidden h-96 md:h-[28rem]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: index * 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 via-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-600/50" />
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>
            <div className="text-6xl mb-4">🚀</div>
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex gap-3">
            <span className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-sm font-semibold">
              {project.category}
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 text-sm font-semibold">
              {project.year}
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  // Image navigation
  const handleNextImage = () => setCurrentImage((prev) => (prev + 1) % (project.images?.length || 1));
  const handlePrevImage = () => setCurrentImage((prev) => (prev - 1 + (project.images?.length || 1)) % (project.images?.length || 1));

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden h-96 md:h-[28rem]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative w-full h-2/3 overflow-hidden bg-black rounded-2xl">
        {project.images && project.images.length > 0 && (
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full relative"
          >
            <Image
              src={project.images[currentImage]}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        {/* Navigation Buttons */}
        {project.images && project.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute top-1/2 left-3 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full transition-all
                         opacity-100 sm:opacity-0 group-hover:sm:opacity-100"
            >
              ‹
            </button>
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 right-3 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white px-3 py-2 rounded-full transition-all
                         opacity-100 sm:opacity-0 group-hover:sm:opacity-100"
            >
              ›
            </button>
            <div className="absolute bottom-3 right-3 bg-black/60 px-3 py-1 rounded-full text-white text-xs font-semibold">
              {currentImage + 1} / {project.images.length}
            </div>
          </>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Project content */}
      <div className="relative h-1/3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 p-4 md:p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <span className="px-2 py-1 rounded text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 font-semibold">
              {project.category}
            </span>
          </div>
          <p className="text-xs md:text-sm text-gray-400 line-clamp-1">{project.description}</p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-2 flex-wrap">
            {project.technologies?.map((tech, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-1 px-2 py-1 rounded bg-gray-700/50 text-gray-300 hover:text-cyan-300 transition-colors text-xs"
                whileHover={{ scale: 1.05 }}
              >
                {techIcons[tech]} <span className="hidden sm:inline">{tech}</span>
              </motion.div>
            ))}
          </div>

          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              <FaGithub size={14} />
              <span className="hidden sm:inline">View</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Projects Section
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen relative px-6 sm:px-8 md:px-12 lg:px-20 py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute top-20 -right-40 w-80 h-80 bg-gradient-to-bl from-blue-500/20 to-purple-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 50, -50, 0], y: [0, -60, 60, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4">Showcase</p>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          Featured{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
        </h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl relative z-10" layout>
        {projects.map((proj, i) => (
          <ProjectCard key={i} project={proj} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
