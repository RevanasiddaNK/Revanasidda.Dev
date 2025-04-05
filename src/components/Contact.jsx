import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "your_service_id"; // Replace with actual EmailJS Service ID
const EMAILJS_TEMPLATE_ID = "your_template_id"; // Replace with actual EmailJS Template ID
const EMAILJS_PUBLIC_KEY = "your_public_key"; // Replace with actual EmailJS Public Key

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const timeoutRef = useRef(null);

  // Memoized change handler to update form data state
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Async submission handler using try/catch for error handling
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
        setFormStatus({
          submitted: true,
          success: true,
          message: "Your message has been sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        // Clear status after 5 seconds
        timeoutRef.current = setTimeout(() => {
          setFormStatus({ submitted: false, success: false, message: "" });
        }, 5000);
      } catch (error) {
        console.error("EmailJS Error:", error);
        setFormStatus({
          submitted: true,
          success: false,
          message: "Failed to send message. Please try again later.",
        });
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary after:rounded-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-xl text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Get in touch with me for collaborations or inquiries
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md flex items-center gap-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  nmrevanasiddarhbk@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md flex items-center gap-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FaPhone size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+91 9108158109</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md flex items-center gap-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bengaluru, Karnataka
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/revanasidda-karigoudar-726a35218/"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:-translate-y-1 hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/RevanasiddaNK"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:-translate-y-1 hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://x.com/RevanasiddaNK"
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:-translate-y-1 hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {formStatus.submitted && (
              <div
                aria-live="assertive"
                className={`p-4 rounded-lg mb-6 font-bold ${
                  formStatus.success
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {formStatus.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-30 transition-all duration-300"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-30 transition-all duration-300"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-bold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-30 transition-all duration-300"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-30 transition-all duration-300 min-h-[150px] resize-y"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 rounded-full bg-primary text-white font-bold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
