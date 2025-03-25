import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import img2 from '../images/3d.jpg'
import { FaLinkedin, FaInstagram, FaSuitcase, FaGithub, FaEnvelope } from 'react-icons/fa';
const skillsData = [
  { name: "HTML", value: 70 },
  { name: "CSS", value: 70 },
  { name: "JavaScript", value: 65 },
  { name: "Java", value: 50 },
  { name: "React", value: 45 },
  { name: "C", value: 50 },
  { name: "Python", value: 75 },
];
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Detect scroll to change card design
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
  const [visible, setVisible] = useState(false);
  // Check if the skills section is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const skillsRef = useRef(null);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error(`Element with id "${id}" not found!`);
    }
  };
  
  

  // Intersection Observer to detect scroll visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const educationData = [
    {
      degree: "B.E - Computer Science Engineering ",
      institution: "Angel College Of Engineering And Technology",
      year: "2022 - 2026",
      description:"Specializing in software developmentand ,Full Stack Development",
      CGPA: "8.55%",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Carmel girls higher secondary School",
      year: "2020 - 2022",
      description: "Focused on mathematics, physics, and computer science.",
      percentage: "79.5%",
    },
    {
      degree:"Secondary School Education " ,
      institution: "Carmel girls higher secondary School  ",
      year: "2019 - 2020",
      description: "Developed a strong foundation and mathematics,",
    },
  ];
  useEffect(() => {
    if (menuOpen) {
      setVisible(false); // Reset progress
      setTimeout(() => setVisible(true), 100); // Re-trigger animation with delay
    } else {
      setVisible(false);
    }
  }, [menuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills-education");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [progress, setProgress] = useState(Array(skillsData.length).fill(0));

  useEffect(() => {
    const intervals = skillsData.map((skill, index) => {
      return setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = [...prevProgress];
          if (newProgress[index] < skill.value) {
            newProgress[index] += 1;
          } else {
            clearInterval(intervals[index]);
          }
          return newProgress;
        });
      }, 20); // Speed of animation
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

    return (
    <div id="header">
      <nav className="bg-gray-800 animate-slideDown sticky top-0 z-50">
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
          className="relative group text-white text-sm font-medium cursor-pointer animate-fadeInDown delay-100"
        >
          Home
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
          onClick={() => scrollToSection("skills-education")}
          className="relative group text-white text-sm font-medium cursor-pointer animate-fadeInDown delay-200"
        >
          About Me
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
          Home
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
            scrollToSection("skills-education");
          }}
          className="block text-white font-medium px-3 py-2 rounded-md hover:bg-gray-600 transition duration-300 animate-fadeIn"
        >
          About Me
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
  <div className="w-3/4 md:w-1/2 bg-blue-900 bg-opacity-90 p-6 md:p-10 rounded-lg flex flex-col items-center text-center shadow-2xl">
    {/* Animated "I'M" Text Appearing Smoothly */}
    <h2
      className="text-lg md:text-xl font-semibold tracking-widest uppercase text-white font-poppins reveal-text-im"
    >
      I'M
    </h2>

    {/* Animated Name with New High Contrast Color Gradient */}
    <h1
      className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg font-poppins reveal-text-name"
    >
      V. Sarulatha
    </h1>

    {/* Animated Role Appearing Smoothly */}
    <p
      className="text-lg md:text-xl italic tracking-wide text-yellow-200 font-poppins reveal-text-role"
    >
      Frontend Developer
    </p>
  </div>
</div>

    </div>  
    
    <section
      id="skills-education"
      className="relative py-16  text-white overflow-hidden" style={{
        background: "linear-gradient(135deg, #e6e6fa, #d8bfd8)"
      }}
    >
      {/* White Overlay Effect */}
      <div className="absolute inset-0 bg-white opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Technical Skills Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-poppins bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent animate-zoomFade">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="py-10 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-5xl mx-auto p-4 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-2xl shadow-2xl p-6 transition-transform transform hover:scale-105"
            style={{
              background: `linear-gradient(135deg, #1a2980, #26d0ce)`,
              transition: "background 0.4s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, #26d0ce, #1a2980)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, #1a2980, #26d0ce)`;
            }}
          >
            {/* Circle with Progress */}
            <div className="relative w-24 h-24 md:w-28 md:h-28">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                {/* Background Circle */}
                <circle
                  className="text-gray-300 stroke-current"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeWidth="8"
                />
                {/* Animated Progress Circle */}
                <circle
                  className="stroke-current"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  strokeWidth="8"
                  strokeDasharray="251" // 2 * PI * r (40)
                  strokeDashoffset={`${251 - (251 * progress[index]) / 100}`}
                  strokeLinecap="round"
                  style={{
                    transition: "stroke-dashoffset 0.3s ease-out",
                    stroke: `url(#gradient-${index})`,
                  }}
                />
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id={`gradient-${index}`} gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#1a2980" />
                    <stop offset="100%" stopColor="#26d0ce" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Percentage Inside Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg md:text-xl font-bold text-gray-100">
                  {progress[index]}%
                </span>
              </div>
            </div>

            {/* Skill Name */}
            <p className="mt-4 text-sm md:text-base font-semibold text-black">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
        {/* Education Title */}
        <h2 className="pt-4 text-4xl md:text-5xl font-bold text-center mb-12 font-poppins bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 bg-clip-text text-transparent animate-zoomFade">
  Education
</h2>


       {/* Education Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {educationData.map((edu, index) => (
    <div
      key={index}
      className="relative bg-gradient-to-r from-purple-800 to-purple-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden flex flex-col justify-between h-full min-h-[300px]"
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500"></div>

      {/* Year at Top-Right */}
      <span className="absolute top-2 right-2 text-sm text-gray-400">{edu.year}</span>

      {/* Card Content */}
      <div className="mb-3 flex-grow">
        <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
        <p className="text-lg mt-4 text-gray-300">{edu.institution}</p>
        <p className={`mt-5 text-gray-300 ${index > 0 ? 'lg:pt-3' : ''}`}>{edu.description}</p>
      </div>

      {/* Conditional Rendering for CGPA and Percentage */}
      {index === 0 ? (
        // First Card: CGPA at Bottom-Right
        <div className="mt-auto text-gray-300">
          <p className="text-right">CGPA: {edu.CGPA}</p>
        </div>
      ) : index === 1 ? (
        // Second Card: Percentage at Bottom-Right
        <div className="mt-auto text-gray-300">
          <p className="text-right">Percentage: {edu.percentage}</p>
        </div>
      ) : (
        <div className="mt-auto"></div> // Maintain same height for third card
      )}
    </div>
  ))}
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
         Portfolio
        </h3>
        <p className="text-gray-400 text-sm md:text-base">
          © {new Date().getFullYear()} Sarulatha. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm md:text-base">
          Email: Sarulatha@gmail.com
        </p>
        <p className="text-gray-400 text-sm md:text-base">
          Location: Kangayam, Tiruppur
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
        {/* Email Icon */}
        <a
          href="mailto:Sarulatha@gmail.com?subject=Hello%20Sarulatha&body=I%20would%20like%20to%20connect%20with%20you."
          className="text-white hover:text-red-500 transition duration-300"
        >
          <FaEnvelope size={28} />
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
