import { motion } from "framer-motion";

const COMPETITIONS = [
  {
    title: "Duothan 4.0 — Buildathon",
    org: "IEEE of NSBM",
    year: "2024",
    rank: "Champions",
    tier: "gold",
  },
  {
    title: "AlgoXplore",
    org: "IEEE of NSBM",
    year: "2024",
    rank: "Champions",
    tier: "gold",
  },
  {
    title: "CodeRush",
    org: "Intra-Faculty Ideathon & Hackathon",
    year: "2023",
    rank: "Champions",
    tier: "gold",
  },
  {
    title: "CodeRally 5.0",
    org: "IEEE Computer Society of IIT",
    year: "2024",
    rank: "2nd Runner Up",
    tier: "bronze",
  },
  {
    title: "Codefest Hackathon",
    org: "SLIIT × 99x",
    year: "2022",
    rank: "Top 10 Finalist",
    tier: "finalist",
  },
];

const TIER = {
  gold: {
    badge: "bg-amber-400/10 text-amber-400 border-amber-400/30",
    dot: "bg-amber-400",
    icon: "🏆",
  },
  bronze: {
    badge: "bg-orange-400/10 text-orange-400 border-orange-400/30",
    dot: "bg-orange-400",
    icon: "🥉",
  },
  finalist: {
    badge: "bg-slate-400/10 text-slate-300 border-slate-400/20",
    dot: "bg-slate-400",
    icon: "🎖️",
  },
};

export default function Competitions() {
  return (
    <section id="competitions" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            Achievements
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Hackathons & Competitions
          </h2>
          <div className="w-14 h-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full mt-3 mb-12" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {COMPETITIONS.map((comp, i) => {
            const style = TIER[comp.tier];
            return (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-white/8 bg-white/3 p-5 flex gap-4 hover:border-white/15 transition-colors duration-300"
              >
                <div className="text-2xl leading-none pt-0.5 shrink-0">
                  {style.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h3
                      className="text-sm font-semibold text-white leading-snug"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {comp.title}
                    </h3>
                    <span className="text-xs text-slate-500 shrink-0">
                      {comp.year}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">
                    {comp.org}
                  </p>
                  <span
                    className={`inline-block mt-2 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${style.badge}`}
                  >
                    {comp.rank}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
