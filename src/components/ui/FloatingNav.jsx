import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#competitions' },
  { label: 'Contact', href: '#contact' },
]

export default function FloatingNav() {
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setVisible(y < 80 || y < lastY)
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-0.5 px-3 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-xl shadow-black/40">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                  active === item.label ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {active === item.label && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 rounded-full bg-cyan-500/20 border border-cyan-500/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
