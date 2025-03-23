import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Project from "./components/Project";
import "./index.css"; // Tailwind CSS should be imported here

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading spinner for 3 seconds before displaying content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen">
      {loading ? (
        // Loading Content with Animation (No Logo or Welcome Text)
        <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
          {/* Circular Loading Spinner */}
          <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
          <h1
            className="text-lg md:text-2xl font-semibold mt-4 animate-pulse"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            LOADING
          </h1>
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
