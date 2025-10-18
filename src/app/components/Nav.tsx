'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

type NavVariant = 'desktop' | 'mobile'

export default function Nav({ variant = 'desktop' }: { variant?: NavVariant }) {
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  const [active, setActive] = useState('Home') // Sección activa
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 }) // Indicador desktop
  const [manualScroll, setManualScroll] = useState(false) // Evita conflicto entre scroll y click
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]) // Refs de los items

  // 🧭 Detectar sección visible y actualizar active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !manualScroll) {
            const id = entry.target.id
            const matched = navItems.find((item) => item.toLowerCase() === id)
            if (matched) setActive(matched)
          }
        })
      },
      { root: null, threshold: 0.6 } // Cuando 60% de la sección es visible
    )

    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase())
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [manualScroll, navItems])

  // ⏳ Reset manual scroll después de 1s
  useEffect(() => {
    if (!manualScroll) return
    const timer = setTimeout(() => setManualScroll(false), 1000)
    return () => clearTimeout(timer)
  }, [manualScroll])

  // 🎯 Actualizar posición del indicador desktop
  useEffect(() => {
    const activeIndex = navItems.indexOf(active)
    const activeElement = itemRefs.current[activeIndex]
    if (activeElement) {
      setIndicatorStyle({ left: activeElement.offsetLeft, width: activeElement.offsetWidth })
    }
  }, [active, navItems])

  // 📱 Mobile
  if (variant === 'mobile') {
    return (
      <nav className="w-full">
        <ul className="flex flex-col space-y-6 text-lg">
          {navItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer transition-colors duration-300 ${
                active === item ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'
              }`}
              onClick={() => {
                setManualScroll(true)
                setActive(item)
                const section = document.getElementById(item.toLowerCase())
                if (section) section.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  // 💻 Desktop
  return (
    <nav className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-4 py-2">
      <ul className="flex space-x-4 relative">
        {/* Indicador animado */}
        <motion.div
          className="absolute rounded-3xl bg-cyan-400"
          animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ height: '100%', top: 0 }}
        />
        {navItems.map((item, index) => (
          <li
            key={item}
            ref={(el) => {
              itemRefs.current[index] = el ?? null // ✅ Corregido: no retornamos nada
            }}
            className={`relative z-10 px-4 py-2 rounded-3xl cursor-pointer transition-colors duration-300 ${
              active === item ? 'text-black font-medium' : 'text-white hover:text-cyan-400'
            }`}
            onClick={() => {
              setManualScroll(true)
              setActive(item)
              const section = document.getElementById(item.toLowerCase())
              if (section) section.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}
