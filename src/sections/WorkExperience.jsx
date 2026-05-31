import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    company: "Revocare Solutions",
    location: "Colombo, Sri Lanka",
    role: "Software Engineer Intern",
    period: "Feb 2025 – Aug 2025",
    bullets: [
      "Developed end-to-end full-stack web and cross-platform mobile applications using Java/Spring Boot and React.",
      "Built and integrated RESTful APIs, managed database schema migrations using Liquibase, and integrated AWS S3 for scalable file storage.",
      "Configured Testcontainers, authored unit tests, and contributed to CI/CD pipelines using Git workflows.",
      "Collaborated in agile, cross-functional teams and participated in code reviews to ensure secure coding practices.",
    ],
    color: "from-cyan-500 to-violet-500",
    icon: "💼",
  },
  {
    company: "D. Samson Industries (Pvt) Ltd. (DSI)",
    location: "Galle, Sri Lanka",
    role: "IT Management Trainee",
    period: "Nov 2021 – Apr 2022",
    bullets: [
      "Maintained, supported, and troubleshot the enterprise-wide ERP system (IFS) to resolve operational issues.",
      "Developed data analytics and operational dashboards utilizing Crystal Reports and IFS Lobby.",
    ],
    color: "from-violet-500 to-emerald-500",
    icon: "🖥️",
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            Career
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Work Experience
          </h2>
          <div className="w-14 h-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full mt-3 mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative sm:pl-16"
              >
                <div className="hidden sm:flex absolute left-0 top-5 w-12 h-12 rounded-full border border-white/10 bg-[#050510] items-center justify-center text-xl z-10">
                  {exp.icon}
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/3 p-6 hover:border-white/15 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {exp.company}
                      </h3>
                      <p className="text-sm text-slate-400 mt-0.5">{exp.role}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <p className="text-xs text-slate-500 mt-1.5">{exp.location}</p>
                    </div>
                  </div>

                  <div
                    className={`w-full h-px bg-linear-to-r ${exp.color} opacity-20 mb-4`}
                  />

                  <ul className="space-y-2">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
