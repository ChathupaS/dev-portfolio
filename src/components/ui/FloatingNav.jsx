import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#competitions" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(y < 80 || y < lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-2 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-1rem)] max-w-88 sm:max-w-max"
        >
          <div className="grid grid-cols-4 gap-1 px-2 py-2 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-xl shadow-black/40 sm:flex sm:items-center sm:gap-0.5 sm:px-3 sm:rounded-full sm:whitespace-nowrap sm:max-w-max">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.label)}
                className={`relative flex items-center justify-center px-2 py-1.5 text-[11px] leading-none sm:shrink-0 sm:px-4 sm:text-sm font-medium rounded-full transition-colors duration-200 ${
                  active === item.label
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {active === item.label && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 rounded-full bg-cyan-500/20 border border-cyan-500/30"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
