import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import img2 from '../images/3d.jpg'
import { FaLinkedin, FaInstagram, FaSuitcase, FaGithub } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
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
       
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={img2}
        alt="Hero"
        className="w-full h-full object-cover object-right md:object-center absolute top-0 left-0"
      />

      {/* Centered Purple Shade Overlay with Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 md:w-1/2 bg-purple-900 bg-opacity-70 p-6 md:p-10 rounded-lg flex flex-col items-center text-center">
          <h2 className="text-lg md:text-xl font-semibold tracking-widest uppercase animate-pulse text-white font-poppins">
            I'M
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg animate-fade-in font-poppins">
            V.Sarulatha
          </h1>
          <p className="text-lg md:text-xl italic tracking-wide animate-slide-up text-white font-poppins">
            Frontend Developer
          </p>
        </div>
      </div>
    </div>
    <div className="relative w-full pt-[3vh]  overflow-hidden bg-gray-900 py-10">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20"></div>
      
      {/* Animated Text Wrapper */}
      <div className="flex space-x-6 animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, index) => (
          <h1
            key={index}
            className="text-6xl md:text-8xl  pt-[5vh] font-extrabold tracking-wider font-serif  italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg"
          >
            PORTFOLIO
          </h1>
        ))}
      </div>
    </div>

    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Two-column grid: stacks on mobile, side-by-side on md and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Animated Text */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold animate-fadeInUp delay-100 font-poppins bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-600 animate-fadeInUp delay-200 font-poppins">
              I am a passionate developer with a love for creating innovative solutions.
              With a strong background in full-stack development, I strive to build projects
              that merge design and functionality. Let’s explore my journey together!
            </p>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="flex justify-end">
            <div
              className={`w-48 h-48 md:w-64 md:h-64 rounded-xl shadow-lg transition-all duration-500 cursor-pointer
                ${hover ? "bg-gradient-to-r from-purple-600 to-blue-500 scale-125 shadow-2xl" : "bg-gray-800 scale-100"}
                ${scrolled ? "rotate-6" : ""}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => navigate("/about-us")}
            >
              <div className="flex items-center justify-center h-full text-center text-white font-bold text-lg md:text-xl p-4">
                {hover ? "Explore About Me" : "About Me"}
              </div>
            </div>
          </div>
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

export default Header;
