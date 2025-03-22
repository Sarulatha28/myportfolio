import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaSuitcase, FaGithub } from 'react-icons/fa';
const AboutUs = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  // Detect scroll to change card design
  // Detect scroll position to optionally change card design
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
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-100">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-8 space-y-12">
        
        {/* Personal Information Section */}
        <div className="animate-fadeInUp delay-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Personal Information
          </h2>
          <ul className="text-gray-600 leading-relaxed font-poppins">
            <li><strong>Name:</strong>V.Sarulatha</li>
            <li><strong>Email:</strong>sarulathav05@gmail.com</li>
            <li><strong>Address:</strong> Sivenmalai,Kanagayam,Tirupur</li>
          </ul>
        </div>

        {/* Profile Summary Section */}
        <div className="animate-fadeInUp delay-200">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Profile Summary
          </h2>
          <p className="text-gray-600 leading-relaxed font-poppins">
            Passionate software engineer skilled in building responsive and user-friendly applications.
            Experienced in modern web technologies and always eager to learn new concepts.
          </p>
        </div>

        {/* Skills Section */}
        <div className="animate-fadeInUp delay-300">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Skills
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 font-poppins">
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            
          </ul>
        </div>

        {/* Technical Skills Section */}
        <div className="animate-fadeInUp delay-400">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Technical Skills
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 font-poppins">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Database Management</li>
            <li>Cyber Security</li>
            <li>Cloud Computing</li>
            <li>AI & ML Basics</li>
          </ul>
        </div>

        {/* Education Details Section */}
        <div className="animate-fadeInUp delay-500">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-poppins">
            Education Details
          </h2>
          <ul className="text-gray-600 leading-relaxed font-poppins">
            <li><strong>School:</strong> Carmel Girls Higher Sec.School</li>
            <li><strong>College:</strong> Angel College Of Engineering  And technology</li>
            <li><strong>Passed Out Year:</strong> 2022-2026</li>
            <li><strong>CGPA:</strong>8.11%</li>
          </ul>
        </div>
      </div>
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

export default AboutUs;
