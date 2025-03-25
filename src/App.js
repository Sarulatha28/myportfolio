import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Project from "./components/Project";
import "./index.css"; // Tailwind CSS should be imported here

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress bar filling up in 3 seconds
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 50);

    // Hide loading after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      {loading ? (
        // Loading Content with Progress Bar
        <div className="flex flex-col justify-center items-center h-screen  bg-gradient-to-r from-[#c33764] to-[#1d2671] text-white">
          <h1
            className="text-2xl md:text-4xl font-semibold mb-6 tracking-widest"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            LOADING
          </h1>
          {/* Progress Bar */}
          <div className="w-64 md:w-96 h-4 bg-gradient-to-r from-[#c33764] to-[#1d2671] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gray-300 to-gray-100 transition-all ease-in-out duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      ) : (
        // Main Content after loading (Routing Setup)
        <div className="w-full h-screen">
          
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/projects" element={<Project />} />
            </Routes>
        
        </div>
      )}
    </div>
  );
};

export default App;
