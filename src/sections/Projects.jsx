import { motion } from "framer-motion";
import SpotlightCard from "../components/ui/SpotlightCard";

const PROJECTS = [
  {
    title: "Medichive — Healthcare Records App",
    description:
      "Led development of a healthcare management platform for small practices, featuring secure patient data storage, report management, and a full doctor/drug admin module with authentication.",
    tech: ["React.js", "NestJS", "MySQL"],
    accent: "from-cyan-500 to-sky-500",
    badge: "Team Lead",
    github: "#",
    live: "#",
  },
  {
    title: "Sri Learn Academy LMS",
    description:
      "Full-stack Learning Management System enabling educators to publish courses and students to track progress. Features Clerk authentication, Stripe payments, and a fully responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    accent: "from-violet-500 to-purple-500",
    badge: null,
    github: "#",
    live: "#",
  },
  {
    title: "Sri Lankan Vehicle Valuator",
    description:
      "Full-stack ML valuation platform with a custom Python web scraper and an XGBoost model (R² = 0.83). SHAP-based explainability provides transparent, real-time price predictions.",
    tech: ["Python", "FastAPI", "React.js", "XGBoost", "SHAP"],
    accent: "from-emerald-500 to-teal-500",
    badge: null,
    github: "#",
    live: "#",
  },
  {
    title: "Project Atlas — FPGA DL Accelerator",
    description:
      "Co-developing a reconfigurable FPGA accelerator for real-time deep learning inference on IoT edge devices, with dynamic memory pooling to virtually fold large models onto constrained hardware.",
    tech: ["FPGA", "Deep Learning", "IoT", "Hardware Design"],
    accent: "from-orange-500 to-amber-500",
    badge: "Ongoing",
    github: "#",
    live: null,
  },
];

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Projects
          </h2>
          <div className="w-14 h-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full mt-3 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <SpotlightCard
                className="p-6 h-full flex flex-col gap-4 group"
                spotlightColor="rgba(139,92,246,0.1)"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-1 rounded-full bg-linear-to-r ${proj.accent}`}
                  />
                  {proj.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/10">
                      {proj.badge}
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl font-semibold text-white"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {proj.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed flex-1">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-xs text-slate-300 bg-white/5 border border-white/10 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-1">
                  {proj.github !== "#" ? (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon /> Code
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-slate-600 cursor-default">
                      <GithubIcon /> Code
                    </span>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalIcon /> Live demo
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
