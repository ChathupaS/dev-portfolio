import { motion } from "framer-motion";
import SpotlightCard from "../components/ui/SpotlightCard";

const CATEGORIES = [
  {
    title: "Frontend",
    color: "from-cyan-500 to-sky-500",
    skills: [
      { name: "React.js / Next.js", level: 88 },
      { name: "TypeScript", level: 78 },
      { name: "Tailwind CSS / Bootstrap", level: 85 },
      { name: "React Native", level: 70 },
    ],
  },
  {
    title: "Backend",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "Java / Spring Boot", level: 85 },
      { name: "Node.js / Express.js", level: 82 },
      { name: "NestJS", level: 70 },
      { name: "Python / FastAPI", level: 70 },
    ],
  },
  {
    title: "Databases & Cloud",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "PostgreSQL / MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "AWS (S3, EC2)", level: 72 },
      { name: "CI/CD (Git / GitHub)", level: 78 },
    ],
  },
  {
    title: "AI & LLM",
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "LangChain", level: 65 },
      { name: "RAG Pipelines", level: 60 },
      { name: "Vector Databases", level: 60 },
      { name: "LangSmith", level: 65 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/1.5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            Expertise
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Skills & Technologies
          </h2>
          <div className="w-14 h-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full mt-3 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <SpotlightCard className="p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-2.5 h-2.5 rounded-full bg-linear-to-br ${cat.color}`}
                  />
                  <h3 className="font-semibold text-white text-sm tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {cat.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-500 tabular-nums">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: ci * 0.1 + si * 0.08,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-linear-to-r ${cat.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
