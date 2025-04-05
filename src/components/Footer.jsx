import { memo, useMemo } from "react";
import { Link } from "react-scroll";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/revanasidda-karigoudar-726a35218/",
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/RevanasiddaNK",
      icon: <FaGithub size={18} />,
      label: "GitHub",
    },
    {
      href: "https://x.com/RevanasiddaNK",
      icon: <FaTwitter size={18} />,
      label: "Twitter",
    },
  ];

  const quickLinks = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "blog", label: "Blog" },
    { to: "contact", label: "Contact" },
  ];

  const services = [
    "Full-Stack Web Development (MERN)",
    "AI/ML Integration",
    "Scalable REST API Development",
    "Database Management (MongoDB, MySQL)",
    "Performance Optimization",
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope size={16} />,
      value: "nmrevanasiddarhbk@gmail.com",
    },
    {
      icon: <FaPhone size={16} />,
      value: "+91 9108158109",
    },
    {
      icon: <FaMapMarkerAlt size={16} />,
      value: "Bengaluru, Karnataka",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-4 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="text-2xl font-bold mb-4">DevPortfolio</div>
            <p className="text-gray-400 leading-relaxed mb-6">
              A full-stack developer with expertise in MERN stack, AI/ML, and competitive programming.
              Passionate about building scalable web applications, solving complex problems with DSA, and exploring AI innovations.
              Let's collaborate to create impactful solutions!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary hover:transform hover:-translate-y-1 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Services
            </h3>
            <div className="flex flex-col gap-3">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span className="text-gray-400">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-800 mb-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-center md:text-left">
            &copy; {currentYear} DevPortfolio. All rights reserved.
            <br />
            Designed and developed by Revanasidda
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
