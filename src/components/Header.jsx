import { useState, useEffect, useCallback } from "react"
import { Link } from "react-scroll"
import { FaBars, FaTimes } from "react-icons/fa"
import classNames from "classnames"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle Menu
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  // Close Menu
  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    // { name: "Testimonials", to: "testimonials" },
    // { name: "Blog", to: "blog" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <>
      {/* Header */}
      <header
        className={classNames(
          "fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center transition-all duration-300",
          {
            "bg-white dark:bg-gray-900 shadow-md backdrop-blur-md": scrolled,
            "bg-transparent": !scrolled,
          }
        )}
      >
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold text-primary cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          DevPortfolio
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-800 dark:text-gray-200 z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Menu */}
        <nav
          id="mobile-menu"
          className={classNames(
            "fixed md:relative top-0 right-0 h-screen md:h-auto w-4/5 md:w-auto bg-white dark:bg-gray-900 md:bg-transparent flex flex-col md:flex-row items-center justify-center md:justify-end shadow-2xl md:shadow-none transition-transform duration-300 z-40",
            {
              "translate-x-0": isOpen,
              "translate-x-full md:translate-x-0": !isOpen,
            }
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="my-4 md:my-0 mx-0 md:mx-4 text-gray-800 dark:text-gray-200 relative cursor-pointer hover:text-primary dark:hover:text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  )
}

export default Header
