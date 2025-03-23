import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Project from "./components/Project";
import logo from "../src/images/online-resume (1).png"; // Update path if needed

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show "Loading..." for 1.5 seconds, then show logo for 1.5 seconds
    const loadingTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 1500);

    const welcomeTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      {loading ? (
        // Loading Content with Animation
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#b2fefa] to-[#0ed2f7] text-white">
          {!showWelcome ? (
            <>
              <h1 className="text-2xl md:text-4xl font-semibold animate-pulse mb-4 animate-fade-in-scale">
                Loading...
              </h1>
              {/* Loading Spinner */}
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin-fast"></div>
            </>
          ) : (
            // Display Logo or Welcome Message
            <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-[#fc00ff] to-[#00dbde] animate-fade-in-scale">
             <h1 className="font-poppins text-3xl md:text-6xl font-bold mb-4 text-white animate-bounce">
  Welcome to Sarulatha Portfolio
</h1>

              
              
            </div>
          )}
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
