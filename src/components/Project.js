import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaSuitcase, FaGithub, FaEnvelope } from 'react-icons/fa';
const Project = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
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
 useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleAboutMeClick = () => {
    navigate("/", { state: { scrollToSkills: true } });
  };
  return (
    <div className="bg-gradient-to-r from-[#83a4d4] to-[#b6fbff]">
      {/* Navbar */}
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
          onClick={() => navigate("/")}
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
          onClick={handleAboutMeClick}
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
          onClick={() => navigate("/")}
          className="relative group text-white text-sm font-medium cursor-pointer animate-fadeInDown delay-100"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
        </button>
        <button
          onClick={() => {
            setMenuOpen(false);
            navigate("/projects");
          }}
          className="block text-white font-medium px- -1 py-2 rounded-md hover:bg-gray-600 transition duration-300 animate-fadeIn delay-100"
        >
          Projects
        </button>
        <button
          onClick={handleAboutMeClick}
          className="relative group text-white text-sm font-medium cursor-pointer transition-all duration-300 hover:text-blue-400"
        >
          About Me
        </button>
      </div>
    </div>
  )}
</nav>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16  animate-fadeInUp font-poppins bg-gradient-to-r from-[#83a4d4] to-[#b6fbff]"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Review and Sentiment Analysis",
                description:
                  "Built a system to analyze customer feedback using NLP techniques with Python, providing valuable insights from unstructured data.",
              },
              {
                title: "Real-time Chat and Communication App",
                description:
                  "Developed a cross-platform messaging app in Java with features like group chats, file sharing, and real-time messaging using WebSockets.",
              },
              {
                title: "Personal Portfolio Website",
                description:
                  "Built a fully responsive portfolio using React and Tailwind CSS, featuring smooth animations and an elegant design.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105 border border-gray-200"
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Certifications Section */}
      <section
        id="activities"
        className="py-16 bg-gradient-to-r from-[#83a4d4] to-[#b6fbff] animate-slideUp"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Activities & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Workshop at Kongu",
                description:
                  "Attended an intensive workshop that enhanced my understanding of emerging technologies.",
              },
              {
                title: "Symposium in Hindusthan",
                description:
                  "Participated in a symposium at Hindusthan focusing on Big Data Analysis and explored industry insights.",
              },
              {
                title: "Cyber Security Certification",
                description:
                  "Earned a Cyber Security certification from Great Learning, mastering essential skills for digital protection.",
              },
              {
                title: "AI Certification",
                description:
                  "Completed AI certification from Novitach, gaining expertise in advanced data processing and analysis.",
              },
              {
                title: "Microsoft Office Essentials",
                description:
                  "Completed a course on Microsoft Office Essentials, enhancing my professional document handling skills.",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      
      
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

export default Project;
