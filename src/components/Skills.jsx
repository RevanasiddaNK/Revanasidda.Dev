import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skillsData = [
  { name: "HTML5", icon: FaHtml5, level: 95, desc: "Semantic markup, accessibility, SEO optimization" },
  { name: "CSS3", icon: FaCss3Alt, level: 90, desc: "Responsive design, animations, CSS Grid & Flexbox" },
  { name: "JavaScript", icon: FaJs, level: 90, desc: "ES6+, DOM manipulation, async programming" },
  { name: "TypeScript", icon: SiTypescript, level: 85, desc: "Type safety, interfaces, generics" },
  { name: "React", icon: FaReact, level: 90, desc: "Hooks, Context API, Redux, React Router" },
  { name: "Next.js", icon: SiNextdotjs, level: 85, desc: "SSR, SSG, API routes, image optimization" },
  { name: "Node.js", icon: FaNodeJs, level: 80, desc: "Express, RESTful APIs, authentication" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, desc: "Utility-first CSS, responsive design" },
  { name: "Git", icon: FaGitAlt, level: 85, desc: "Version control, branching, collaboration" },
];

// 🔹 Extracted Skill Card Component for Reusability
const SkillCard = ({ skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <skill.icon className="text-5xl text-primary mb-4" />
      <h3 className="text-xl font-semibold">{skill.name}</h3>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full mt-3 relative">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">{skill.desc}</p>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  // 🔹 useMemo to prevent unnecessary re-renders
  const skillCards = useMemo(() => {
    return skillsData.map((skill, index) => <SkillCard key={index} skill={skill} />);
  }, []);

  return (
    <section id="skills" className="py-24 px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 relative after:w-20 after:h-1 after:bg-primary after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-10px]"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <motion.p
          className="text-xl text-gray-600 dark:text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Technologies and tools I work with
        </motion.p>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {skillCards}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
