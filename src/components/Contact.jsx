import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

/**
 * A responsive contact section with form handling and social links.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Replace with your API endpoint or email service integration
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <h2 className="text-4xl font-extrabold text-center mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Let's Collaborate</h3>
            <p className="leading-relaxed">
              I'm Revanasidda N Karigoudar, a Full-Stack Developer specializing in React, Node.js, and AI/ML. Whether you've got a project idea, partnership inquiry, or just want to say hello, I'd love to hear from you!
            </p>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-green-400" />
              <a href="mailto:43.revanasidda@gmail.com" className="hover:underline">nmrevanasiddarhbk@gmail.com</a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-green-400" />
              <span>+91 91081 58109</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkedAlt className="text-green-400" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/revanasidda-karigoudar-726a35218/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                <FaLinkedin size={24} className="text-gray-300 hover:text-white" />
              </a>
              <a href="https://github.com/RevanasiddaNK" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                <FaGithub size={24} className="text-gray-300 hover:text-white" />
              </a>
              <a href="https://x.com/RevanasiddaNK" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
                <FaTwitter size={24} className="text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Form Column */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-2xl shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full text-center bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold py-3 rounded-full hover:scale-105 transform transition-transform disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-green-300 mt-2">Thank you! Your message has been sent.</p>}
            {status === 'error' && <p className="text-red-400 mt-2">Oops! Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
