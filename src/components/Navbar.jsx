import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 shadow-md'>
      <div className='container py-4 flex justify-between items-center'>
        <div className="text-2xl font-bold">
          <span>Revanasidda</span>
        </div>

        <div className='space-x-6 hidden md:flex'>
          <a href="#home" className='hover:text-gray-400 transition duration-200'>Home</a>
          <a href="#about" className='hover:text-gray-400 transition duration-200'>About Me</a>
          <a href="#service" className='hover:text-gray-400 transition duration-200'>Services</a>
          <a href="#project" className='hover:text-gray-400 transition duration-200'>Projects</a>
          <a href="#contact" className='hover:text-gray-400 transition duration-200'>Contact</a>
        </div>

        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden p-2 text-2xl'
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden flex flex-col space-y-4 mt-4 bg-black text-white p-4 rounded-lg shadow-lg'>
          <a href="#home" className='hover:text-gray-400 transition duration-200'>Home</a>
          <a href="#about" className='hover:text-gray-400 transition duration-200'>About Me</a>
          <a href="#service" className='hover:text-gray-400 transition duration-200'>Services</a>
          <a href="#project" className='hover:text-gray-400 transition duration-200'>Projects</a>
          <a href="#contact" className='hover:text-gray-400 transition duration-200'>Contact</a>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
  
};

export default Navbar;