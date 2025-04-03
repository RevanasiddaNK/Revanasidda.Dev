import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "VoteTune Collaborative Music Player (SaaS Platform)",
    category: "web",
    description:
      "A real-time collaborative music player allowing users to vote on songs and sync playback using YouTube videos.",
    image: "../assets/project01.jpeg",
    tags: ["Next.js", "TypeScript", "ShadCN UI", "Prisma", "MySQL", "Tailwind CSS"],
    githubLink: "https://github.com/RevanasiddaNK/VoteTune",
    demoLink: "https://votetunez.vercel.app/",
  },
  {
    id: 2,
    title: "EquityTrack - Stock Portfolio Paper Trading App",
    category: "web",
    description:
      "A web app designed for users to track and manage stock investments in real-time.",
    image: "../assets/project02.jpg",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    githubLink: "https://github.com/RevanasiddaNK/EquityTrack",
    demoLink: "https://equitytrack.onrender.com",
  },
  {
    id: 3,
    title: "TweetUp | Mini X (Twitter Clone)",
    category: "web",
    description:
      "A social media platform with JWT authentication, post creation, commenting, and profile management.",
    image: "../assets/project03.jpeg",
    tags: ["MongoDB", "Node.js", "Express.js", "React.js", "Tailwind CSS"],
    githubLink: "https://github.com/RevanasiddaNK/TweetUp",
    demoLink: "https://tweetup.onrender.com/",
  },
];

const FilterButton = ({ category, active, onClick }) => (
  <button
    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
      active ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white"
    }`}
    onClick={onClick}
  >
    {category === "all" ? "All" : category.toUpperCase()}
  </button>
);

const ProjectCard = ({ project }) => {
  const { image, title, description, tags, githubLink, demoLink } = project;
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-56">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="GitHub Repository">
            <FaGithub size={20} />
          </a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label="Live Demo">
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const filteredProjects = useMemo(() => (filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter)), [filter]);

  return (
    <section id="projects" className="py-24 px-8 bg-gray-100 dark:bg-gray-900 transition-all">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          My Projects
        </motion.h2>
        <motion.p className="text-xl max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
          Check out some of my recent work
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "web", "ai"].map((category) => (
            <FilterButton key={category} category={category} active={filter === category} onClick={() => setFilter(category)} />
          ))}
        </div>
        {filteredProjects.length > 0 ? (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No projects found for this category.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
