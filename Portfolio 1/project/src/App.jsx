import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import { useState, useEffect } from "react";
import Loader from "./Components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className=" overflow-x-hidden  text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className=" fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className=" container mx-auto px-8 overflow-hidden">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
