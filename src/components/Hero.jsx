"use client";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import profileImage from "../assets/profile_image.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl w-full flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={profileImage}
            alt="Revanasidda N Karigoudar's Profile"
            className="w-44 h-44 rounded-full object-cover border-4 border-primary shadow-lg mb-8 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <motion.p
          className="text-xl text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Revanasidda N Karigoudar
        </motion.h1>

        <motion.h2
          className="text-2xl mb-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Full-Stack Developer | AI/ML Enthusiast | Problem Solver (DSA in C++)
        </motion.h2>

        <motion.p
          className="text-lg max-w-2xl mb-10 text-gray-600 dark:text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Passionate about building scalable web applications and AI-driven solutions.
          Experienced in MERN stack development, data structures & algorithms (C++), and
          solving real-world problems through technology.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <button
              className="px-8 py-3 rounded-full bg-primary text-white font-bold hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300"
              aria-label="View My Work"
            >
              View My Work
            </button>
          </Link>

          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <button
              className="px-8 py-3 rounded-full bg-transparent border-2 border-primary text-primary font-bold hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300"
              aria-label="Contact Me"
            >
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;