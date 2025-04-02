import { motion } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import profileImage from "../assets/profile_image2.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-8">
      <motion.h2
        className="text-4xl font-bold text-center mb-4 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary after:rounded-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-xl text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Get to know me and my background
      </motion.p>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        <motion.div
          className="flex-none lg:w-2/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src={profileImage}
            alt="Revanasidda N Karigoudar"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Full Stack (MERN) Developer based in Bengaluru</h3>

          <p className="text-base text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I am a third-year AI & ML Engineering student at NMIT Bengaluru with a strong foundation
            in programming languages such as C, C++, JavaScript, and Python. My expertise lies in
            Data Structures and Algorithms, with a primary focus on C++ to develop efficient and optimized solutions
            for complex problems.
            <br />
            <br />
            I believe in writing clean, maintainable code and staying up-to-date with the latest web technologies
            and best practices. My goal is to build applications that not only look great but also provide exceptional
            user experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <strong className="text-primary mr-2">Name:</strong> Revanasidda N Karigoudar
            </div>
            <div className="flex items-center">
              <strong className="text-primary mr-2">Email:</strong> nmrevanasiddarhbk@gmail.com
            </div>
            <div className="flex items-center">
              <strong className="text-primary mr-2">Location:</strong> Bengaluru, India
            </div>
            <div className="flex items-center">
              <strong className="text-primary mr-2">Availability:</strong> Freelance / Full-time
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/Revanasidda_NK_Resume.pdf"
              download="RevanasiddaResume.pdf"
              className="px-6 py-3 rounded-full bg-primary text-white font-bold flex items-center gap-2 hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300"
            >
              <FaDownload /> Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-transparent border-2 border-primary text-primary font-bold flex items-center gap-2 hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/revanasidda-karigoudar-726a35218/"
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:translate-y-[-3px] hover:text-primary dark:hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/RevanasiddaNK"
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:translate-y-[-3px] hover:text-primary dark:hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://x.com/RevanasiddaNK"
              className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:translate-y-[-3px] hover:text-primary dark:hover:text-primary transition-all duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
