import { motion } from "framer-motion";
import ParticleField from "../components/three/ParticleField";
import TextGenerate from "../components/ui/TextGenerate";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-start justify-center pt-28 md:items-center md:pt-0 overflow-hidden"
    >
      <ParticleField />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#050510] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6 md:gap-20">
        <div className="flex-1 space-y-5 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/10">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="bg-linear-to-r bg-white bg-clip-text text-transparent">
              Chathupa S.
            </span>
            <br />
            <span className="bg-linear-to-r bg-white bg-clip-text text-transparent">
              Dewasirinarayana
            </span>
          </motion.h1>

          <TextGenerate
            text="Full-Stack Software Engineer"
            className="text-2xl md:text-3xl font-semibold text-slate-400 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            delay={0.5}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-base text-slate-400 max-w-lg"
          >
            I build end-to-end web applications — from responsive React
            frontends to robust Java/Spring Boot APIs and cloud deployments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start pt-1"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-colors duration-200 shadow-lg shadow-cyan-500/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative shrink-0"
        >
          <div className="absolute inset-0 blur-3xl bg-linear-to-br from-cyan-500/40 to-violet-600/40 scale-150 rounded-full" />

          <div className="relative rounded-3xl bg-linear-to-br from-white/7 to-white/2 border border-white/10 p-4 shadow-2xl shadow-cyan-500/10">
            <div className="relative w-44 h-44 md:w-72 md:h-72">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 160deg, #06b6d4 230deg, #8b5cf6 310deg, transparent 360deg)",
                }}
              />

              <div className="absolute inset-0.75 rounded-full bg-[#0a0a1a]" />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-1.5 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 180deg, transparent 200deg, rgba(139,92,246,0.6) 270deg, transparent 360deg)",
                }}
              />
              <div className="absolute inset-2 rounded-full bg-linear-to-br from-slate-800 to-slate-900" />

              <img
                src={profileImg}
                alt="Chathupa S. Dewasirinarayana"
                className="absolute inset-2.5 w-[calc(100%-20px)] h-[calc(100%-20px)] rounded-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/15 rounded-full flex justify-center items-start pt-1.5"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
