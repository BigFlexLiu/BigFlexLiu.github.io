import React, { useState, useEffect, useRef } from "react";
import "./../styles/contact.css";

const Contact = () => {
  const [waves, setWaves] = useState([]);
  const maxActiveWaves = 100;

  // Event handler for mouse movement
  const handleMouseMove = (event) => {
    const x = event.clientX;
    const newWave = {
      id: Date.now() + Math.random(), 
      x,
    };

    setWaves((prevWaves) => {
      if (prevWaves.length >= maxActiveWaves) {
        return prevWaves; // Prevent adding more waves than the maximum allowed
      }
      return [...prevWaves, newWave];
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle removal of waves after animation completes
  const handleAnimationEnd = (id) => {
    setWaves((prevWaves) => prevWaves.filter((wave) => wave.id !== id));
  };

  return (
    <div className="contact-container">
      <Glimmer />
      <h2>Get in touch</h2>
      <ul>
        <li>Email: felixliu135@gmail.com</li>
        <li>LinkedIn: linkedin.com/in/felixliu135</li>
        <li>GitHub: github.com/BigFlexLiu</li>
      </ul>
      <a href="Felix-Liu.pdf" target="_blank" rel="noopener noreferrer">
        <button className="resume-button">Resume</button>
      </a>

      {/* Render active waves */}
      {waves.map((wave) => (
        <div
          key={wave.id}
          className="wave"
          style={{ left: `${wave.x}px` }}
          onAnimationEnd={() => handleAnimationEnd(wave.id)}
        ></div>
      ))}
    </div>
  );
};

const Glimmer = () => {
  const [animationDuration, setAnimationDuration] = useState("60");

  useEffect(() => {
    const updateAnimationDuration = () => {
      const screenWidth = window.innerWidth;
      const duration = screenWidth / 20;
      console.log(duration);
      setAnimationDuration(`${duration}`);
    };

    updateAnimationDuration();

    window.addEventListener("resize", updateAnimationDuration);

    return () => window.removeEventListener("resize", updateAnimationDuration);
  }, []);

  useEffect(() => {
    console.log(animationDuration);
  }, [animationDuration]);

  const getNumGlimmers = () => {
    const area = window.innerWidth * window.innerHeight;
    return Math.round(Math.sqrt(area) / 4);
  };

  const generateGlimmers = () => {
    const num = getNumGlimmers();
    return Array.from({ length: num }).map(() => ({
      numGlimmers: Math.round(Math.random() * 2) + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
  };

  const [glimmers] = useState(generateGlimmers);

  const glimmerSet = (
  <div className="glimmer-set">
    {glimmers.map((glimmer) => (
      <div
        className="glimmer"
        style={{
          fontSize: `${12 * glimmer.top / 100}px`,
          width: `${glimmer.size}px`,
          height: `${glimmer.size * 0.6}px`,
          top: `${glimmer.top}%`,
          left: `${glimmer.left}%`,
        }}
      >
        {"﹏".repeat(glimmer.numGlimmers)}
      </div>
    ))}
  </div>)

  return (
    <div className="glimmer-container" style={{ 
      animationDuration: `${animationDuration}s` }}>
      {glimmerSet}
      {glimmerSet}
    </div>
  );
};

export default Contact;
