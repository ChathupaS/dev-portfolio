import { motion } from "framer-motion";

const EDUCATION = [
  {
    institution: "University of Moratuwa",
    location: "Moratuwa, Sri Lanka",
    degree: "BSc (Hons) in Information Technology",
    period: "2022 – Expected 2026",
    highlights: ["CGPA: 3.64 (Up to L3S2)", "Dean's List — L2S1"],
    color: "from-cyan-500 to-violet-500",
    icon: "🎓",
  },
  {
    institution: "Richmond College Galle",
    location: "Galle, Sri Lanka",
    degree: "G.C.E Advanced Level — Physical Science",
    period: "2020",
    highlights: ["Results: 2 A's, 1 B", "Z-Score: 1.7626"],
    color: "from-violet-500 to-emerald-500",
    icon: "🏫",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white/1.5">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            Background
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Education
          </h2>
          <div className="w-14 h-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full mt-3 mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

          <div className="space-y-8">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative sm:pl-16"
              >
                <div className="hidden sm:flex absolute left-0 top-5 w-12 h-12 rounded-full border border-white/10 bg-[#050510] items-center justify-center text-xl z-10">
                  {edu.icon}
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/3 p-6 hover:border-white/15 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-slate-400 mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                      <p className="text-xs text-slate-500 mt-1.5">
                        {edu.location}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-full h-px bg-linear-to-r ${edu.color} opacity-20 mb-4`}
                  />

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
