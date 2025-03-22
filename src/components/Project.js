import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaSuitcase, FaGithub } from 'react-icons/fa';
const Project = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 200) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <div>
      <nav className="bg-gray-800 animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center animate-bounce">
                <span className="text-white text-xl font-bold">S</span>
              </div>
            </div>
            <div className="ml-3">
              <span className="text-white text-lg font-serif font-extrabold tracking-wider italic animate-pulse">
                V. Sarulatha
              </span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => navigate("/about-us")}
              className="relative group text-white text-sm font-medium cursor-pointer animate-fadeInDown delay-100"
            >
              AboutUs
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="relative group text-white text-sm font-medium cursor-pointer animate-fadeInDown delay-200"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => navigate("/contact-us")}
              className="relative group text-white text-sm font-medium cursor-pointer animate-fadeInDown delay-300"
            >
              ContactUs
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none transition transform duration-300"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6 rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-16 6h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu with Slide-Down and Fade-In Animation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/about-us");
              }}
              className="block text-white font-medium px-3 py-2 rounded-md hover:bg-gray-600 transition duration-300 animate-fadeIn"
            >
              AboutUs
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/projects");
              }}
              className="block text-white font-medium px-3 py-2 rounded-md hover:bg-gray-600 transition duration-300 animate-fadeIn delay-100"
            >
              Projects
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/contact-us");
              }}
              className="block text-white font-medium px-3 py-2 rounded-md hover:bg-gray-600 transition duration-300 animate-fadeIn delay-200"
            >
              ContactUs
            </button>
          </div>
        </div>
      )}
    </nav>
       
    <section id="projects" className="py-16 bg-white animate-fadeInUp font-poppins">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fadeInUp delay-100">
          Projects
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed animate-fadeInUp delay-200">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 animate-fadeInUp delay-100">
        Customer Review and Sentiment Analysis</h2>
      a customer reviews sentiment analysis project using Python, where I leveraged natural language processing to derive actionable insights; 
Customer Review and Sentiment Analysis.Built a system to analyze customer feedback using NLP techniques
Used Python libraries and sentiment analysis algorithms to extract insights from unstructured data
<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 animate-fadeInUp delay-100">
A Real time chat and communication app </h2>
a Chat Connect app built with Java that enables real-time user communication; 
Designed and implemented a cross-platform real-time messaging application with advanced features like group chats, file sharing, and presence indicators.
Integrated WebSocket protocols to ensure seamless communication and low-latency performance.
<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 animate-fadeInUp delay-100">
Personal Portfolio Website
</h2>
Developed a fully responsive portfolio using React, featuring animated sections, a modern UI with Tailwind CSS, and interactive elements.
        </p>
      </div>

      <section id="activities" className="py-16 bg-gray-100 animate-slideUp">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fadeInUp delay-100">
            Activities & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Workshop Card */}
            <div className="p-6 bg-white rounded-lg shadow-md transition transform hover:scale-105 animate-fadeIn delay-200">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Workshop a
              </h3>
              <p className="text-gray-600">
                Attended an intensive workshop at Kongu that honed my technical skilerstanding of emerging technologies.
              </p>
            </div>
            {/* Symposium Card */}
            <div className="p-6 bg-white rounded-lg shadow-md transition transform hover:scale-105 animate-fadeIn delay-300">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Symposium in Hindustan
              </h3>
              <p className="text-gray-600">
                Participated in a national symposium in Hindustan  in paper presentation Big data Analysis, engaging with industry experts and exploring cutting-edge innovations.
              </p>
            </div>
            {/* Cyber Security Certificate Card */}
            <div className="p-6 bg-white rounded-lg shadow-md transition transform hover:scale-105 animate-fadeIn delay-400">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Cyber Security Certificate
              </h3>
              <p className="text-gray-600">
                Earned a Cyber Security certification from Great Learning, equipping me with vital skills to protect digital assets.
              </p>
            </div>
            {/* Data Analysis Certificate Card */}
            <div className="p-6 bg-white rounded-lg shadow-md transition transform hover:scale-105 animate-fadeIn delay-500">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Artificial intelligence Certificate
              </h3>
              <p className="text-gray-600">
                Completed a  Artificial intelligence certification with Novitach, enhancing my ability to extract meaningful insights from complex datasets.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transition transform hover:scale-105 animate-fadeIn delay-500">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Microsoft office Essentials
              </h3>
              <p className="text-gray-600">
               Completed course on Microsoft office Essentials in Microsoft

              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
     <footer className="bg-gray-900 text-white pt-[2vh] pb-8 animate-slideUp">
          <div className="container mx-auto px-4">
            {/* Main Row: Contact Info and Social Icons */}
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-[2vh]">
              {/* Contact/Content Section */}
              <div className="text-center md:text-left animate-fadeIn delay-100">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  My Portfolio
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  © {new Date().getFullYear()} My Name. All rights reserved.
                </p>
                <p className="text-gray-400 text-sm md:text-base">
                  Email: your.email@example.com
                </p>
                <p className="text-gray-400 text-sm md:text-base">
                  Location: Your City, Country
                </p>
              </div>
              {/* Social Icons */}
              <div className="flex items-center space-x-[1vh] animate-fadeIn delay-200">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500 transition duration-300"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500 transition duration-300"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://www.naukri.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-500 transition duration-300"
                >
                  <FaSuitcase size={28} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </div>
            {/* Additional Information Section */}
            <div className="mt-[2vh] text-center animate-fadeIn delay-300">
              <p className="text-gray-300 text-base md:text-lg">
                Building innovative solutions for a digital world.
              </p>
              <p className="text-gray-300 text-base md:text-lg mt-2">
                Let's connect and create something amazing!
              </p>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Project;
