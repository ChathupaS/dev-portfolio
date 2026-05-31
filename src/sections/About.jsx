import { motion } from "framer-motion";

const TECH = [
  "Java",
  "Spring Boot",
  "React.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Python",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "AWS",
  "Tailwind CSS",
  "Nativewind CSS",
  "LangChain",
  "LangSmith",
  "RAG",
  "Vector Databases",
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay },
  };
}

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp()}>
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            About Me
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-2 mb-1"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Who I Am
          </h2>
          <div className="w-14 h-1 bg-linear-to-r from-cyan-500 to-violet-500 rounded-full mt-3 mb-12" />
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="space-y-5 text-slate-400 leading-relaxed text-[15px]"
        >
          <p>
            Hi! I'm Chathupa, an IT undergraduate at the University of Moratuwa
            with a strong foundation in Java and Object-Oriented Programming. I
            build robust, scalable applications used in real production
            environments.
          </p>

          <p>
            On the backend I work with
            <strong className="text-slate-200"> Java / Spring Boot</strong> and
            <strong className="text-slate-200"> Node.js / NestJS</strong>,
            designing RESTful APIs. On the frontend I craft responsive
            interfaces with
            <strong className="text-slate-200"> React.js</strong> and Tailwind
            CSS, while also developing cross-platform mobile applications using
            <strong className="text-slate-200"> React Native</strong>. My work
            is backed by PostgreSQL, MySQL, and MongoDB.
          </p>

          <p>
            I've led teams in hackathons, winning three championships, and I'm
            currently co-developing an FPGA deep learning accelerator for IoT
            edge devices as an ongoing research project.
          </p>

          <div className="flex flex-wrap gap-2 pt-3">
            {TECH.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <motion.a
            href="#contact"
            {...fadeUp(0.4)}
            className="inline-block mt-2 px-6 py-2.5 rounded-full border border-white/20 text-sm text-white hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-200"
          >
            Let's connect →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
