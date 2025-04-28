import React from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        src={HeroImage}
        alt="Revanasidda N Karigoudar"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover shadow-lg transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Revanasidda N Karigoudar
        </span>
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        Full-stack developer & AI enthusiast with a knack for solving problems, optimizing code, and collaborating on impactful projects.
      </p>
      <p className='mt-2 text-md text-gray-400 max-w-md mx-auto'>
        Passionate about leveraging technology to create innovative solutions and improve user experiences. Always eager to learn and grow in the ever-evolving tech landscape.
      </p>
      <div className='mt-8 space-x-4'>
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full shadow-md'
        >
          Contact Me
        </button>

        <button
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full shadow-md'
        >
          Resume
        </button>
      </div>
      <div className='mt-8'>
        <a
          href="#project"
          className='text-gray-300 hover:text-white transition duration-300'
        >
          View My Projects
        </a>
      </div>
    </div>
  );
}

export default Hero;