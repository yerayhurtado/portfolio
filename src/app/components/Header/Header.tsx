'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Nav from '../Nav'

export default function Header() {
  const [loaded, setLoaded] = useState(false) // Fade-in animation
  const [menuOpen, setMenuOpen] = useState(false) // Mobile menu toggle

  // Fade-in effect on mount
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Header principal */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 z-50 
          backdrop-blur-2xl bg-gradient-to-b from-black/80 via-black/50 to-transparent 
          border-b border-cyan-400/10 transition-all duration-300"
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <h1 className="text-2xl md:text-xl text-white font-black tracking-wider">
            YerayHurtado
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">.dev</span>
          </h1>
        </motion.div>

        {/* Nav escritorio */}
        <div className="hidden lg:flex flex-1 justify-center">
          <Nav variant="desktop" />
        </div>

        {/* Botón CV escritorio */}
        <div className="hidden lg:block">
          <motion.a
            href="/CV_Yeray_Hurtado.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
              border border-cyan-400 text-cyan-400 rounded-lg font-semibold tracking-wide 
              transition-all duration-300 hover:from-cyan-500/30 hover:to-blue-500/30
              hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            Download CV
          </motion.a>
        </div>

        {/* Botón menú móvil */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="lg:hidden text-cyan-400 hover:text-cyan-300 transition-colors z-[60] p-2"
          aria-label="Toggle menu"
        >
          <motion.div animate={{ rotate: menuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </motion.button>
      </motion.header>

      {/* Overlay móvil */}
      <motion.div
        onClick={() => setMenuOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden ${
          menuOpen ? 'visible' : 'invisible'
        }`}
      />

      {/* Menú móvil */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-gradient-to-b from-black via-black to-gray-900/50 
          lg:hidden shadow-2xl z-50 border-l border-cyan-400/20"
      >
        {/* Botón cerrar */}
        <motion.button
          onClick={() => setMenuOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-6 right-6 text-cyan-400 hover:text-cyan-300 transition-colors p-2 z-[70]"
          aria-label="Close menu"
        >
          <X size={28} />
        </motion.button>

        {/* Contenido menú móvil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex flex-col h-full p-8 pt-24 space-y-8 text-white"
        >
          {/* Nav móvil */}
          <Nav variant="mobile" />

          {/* Divisor */}
          <div className="h-px bg-gradient-to-r from-cyan-400/20 to-transparent" />

          {/* Botón CV móvil */}
          <motion.a
            href="/CV_Yeray_Hurtado.pdf"
            download
            whileHover={{ scale: 1.05, x: 8 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
              border border-cyan-400 text-cyan-400 rounded-lg font-semibold tracking-wide 
              transition-all duration-300 hover:from-cyan-500/30 hover:to-blue-500/30
              hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] inline-block"
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  )
}
