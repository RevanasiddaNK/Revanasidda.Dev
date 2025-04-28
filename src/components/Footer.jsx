import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

/**
 * Responsive footer with dynamic content, newsletter signup, and social links.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Hook this up to your mailing service endpoint
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold">Revanasidda N Karigoudar</h3>
            <p className="text-gray-400 mt-2">Full-Stack Developer & AI/ML Enthusiast based in Bengaluru, India.</p>
          </div>

          {/* Newsletter Signup */}
          <div>
            <form onSubmit={handleSubscribe} className="flex">
              <label htmlFor="subscribeEmail" className="sr-only">Email address</label>
              <input
                id="subscribeEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-black font-medium rounded-r-lg hover:scale-105 transform transition-transform disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Subscribe"}
              </button>
            </form>
            {status === "success" && <p className="text-green-300 mt-2">Thanks for subscribing!</p>}
            {status === "error" && <p className="text-red-400 mt-2">Something went wrong. Please try again.</p>}
          </div>

          {/* Social & Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Me</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com/yourprofile" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400 transform hover:scale-110 transition-transform">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com/RevanasiddaNK" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400 transform hover:scale-110 transition-transform">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com/in/revanasidda" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400 transform hover:scale-110 transition-transform">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/RevanasiddaNK" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400 transform hover:scale-110 transition-transform">
                <FaGithub size={20} />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-6 text-gray-500 text-sm">
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
              <a href="/terms" className="hover:underline mt-2 sm:mt-0">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {currentYear} Revanasidda N Karigoudar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
