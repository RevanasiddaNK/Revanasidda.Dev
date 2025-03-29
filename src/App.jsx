"use client"

import { useState, useEffect } from "react"
import { FaMoon, FaSun, FaArrowUp } from "react-icons/fa"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import Footer from "./components/Footer"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)

  // Load Theme from Local Storage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }
  }, [])

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    setDarkMode(!darkMode)
  }

  // Scroll Button Visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* 🔥 Dark Mode Button (Placed ABOVE Header) */}
      <button
        className="fixed top-5 right-5 z-[1000] w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md hover:scale-110 transition-all duration-300"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>

      {/* 🌍 Main Content */}
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
        <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-all duration-300">
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
      </div>

      {/* 🔼 Scroll-to-Top Button */}
      <button
        className={`fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-primary text-white shadow-md hover:scale-110 transition-all duration-300 ${
          showScrollButton ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    </>
  )
}

export default App