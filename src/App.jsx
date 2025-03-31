"use client"

import { useState, useEffect, useLayoutEffect, useCallback } from "react";
import { FaMoon, FaSun, FaArrowUp } from "react-icons/fa";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Load Theme Efficiently
  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    setDarkMode(isDark);
  }, []);

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  }, []);

  // Scroll Button Visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Theme Toggle Button */}
      <button
        className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md hover:scale-110 transition-all"
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>

      {/* Main Content */}
      <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-all">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Blog />
        <Footer />
      </div>

      {/* Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-primary text-white shadow-md hover:scale-110 transition-all"
          onClick={scrollToTop}
          aria-label="Scroll to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default App;
