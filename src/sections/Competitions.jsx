import { motion } from "framer-motion";

const COMPETITIONS = [
  {
    title: "Duothan 4.0 — Buildathon",
    org: "IEEE of NSBM",
    year: "2024",
    rank: "Champions",
    tier: "gold",
    link: "https://www.linkedin.com/posts/chathupa_duothan-duothan4-ieeensbm-activity-7199384154763894784-cosN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfaUhUBrpAv9czbS5-H3bTW1E8B5x_Flcc",
    image: "/competitions/duothan.jpg",
  },
  {
    title: "AlgoXplore",
    org: "IEEE of NSBM",
    year: "2024",
    rank: "Champions",
    tier: "gold",
    link: "https://www.linkedin.com/posts/chathupa_algoxplore-codingcompetition-teamheisenberg-activity-7268866317770735617-Xt_u?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfaUhUBrpAv9czbS5-H3bTW1E8B5x_Flcc",
    image: "/competitions/algoxplore.jpg",
  },
  {
    title: "CodeRush",
    org: "Intra-Faculty Ideathon & Hackathon",
    year: "2023",
    rank: "Champions",
    tier: "gold",
    link: "https://www.linkedin.com/posts/chathupa_coderushchamps-coderush2023-fit-activity-7195315806526660608-bAMu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfaUhUBrpAv9czbS5-H3bTW1E8B5x_Flcc",
    image: "/competitions/coderush.jpg",
  },
  {
    title: "CodeRally 5.0",
    org: "IEEE Computer Society of IIT",
    year: "2024",
    rank: "2nd Runner Up",
    tier: "bronze",
    link: "https://www.linkedin.com/posts/chathupa_coderally5-teamheisenberg-activity-7245672746146226176-MqyU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfaUhUBrpAv9czbS5-H3bTW1E8B5x_Flcc",
    image: "/competitions/coderally.jpg",
  },
  {
    title: "Codefest Hackathon",
    org: "SLIIT × 99x",
    year: "2022",
    rank: "Top 10 Finalist",
    tier: "finalist",
    link: "https://www.linkedin.com/posts/chathupa_99x-sliit-codefest2022-activity-7030180219340693504-QiZc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfaUhUBrpAv9czbS5-H3bTW1E8B5x_Flcc",
    image: "/competitions/codefest.jpg",
  },
];

const TIER = {
  gold: {
    badge: "bg-amber-400/10 text-amber-400 border-amber-400/30",
    icon: "🏆",
    overlay: "from-amber-900/60 to-black/80",
  },
  bronze: {
    badge: "bg-orange-400/10 text-orange-400 border-orange-400/30",
    icon: "🥉",
    overlay: "from-orange-900/60 to-black/80",
  },
  finalist: {
    badge: "bg-slate-400/10 text-slate-300 border-slate-400/20",
    icon: "🎖️",
    overlay: "from-slate-800/60 to-black/80",
  },
};

const ExternalIcon = () => (
  <svg
    className="w-3.5 h-3.5"
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
            const hasLink = comp.link && comp.link !== "#";
            const Wrapper = hasLink ? "a" : "div";
            const wrapperProps = hasLink
              ? {
                  href: comp.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="block rounded-2xl border border-white/8 overflow-hidden hover:border-white/20 transition-colors duration-300 relative group"
                >
                  {/* Background image */}
                  <img
                    src={comp.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-300"
                  />

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${style.overlay}`}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-5 flex gap-4">
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
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs text-slate-400">
                            {comp.year}
                          </span>
                          {hasLink && (
                            <span className="text-slate-400 group-hover:text-white transition-colors">
                              <ExternalIcon />
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 truncate">
                        {comp.org}
                      </p>
                      <span
                        className={`inline-block mt-2 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${style.badge}`}
                      >
                        {comp.rank}
                      </span>
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
