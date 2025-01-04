// Glimmer.js
import React, { useState } from "react";
import "./../styles/contact.css";

// Initialize counter outside the component
let glimmerIdCounter = 0;

const Glimmer = () => {
  // Determine the number of Glimmers based on screen width
  const getNumGlimmers = () => {
    const width = window.innerWidth;
    if (width < 600) return 500;
    if (width < 900) return 800;
    return 1000;
  };

  // Generate a single set of Glimmers
  const generateGlimmers = () => {
    const num = getNumGlimmers();
    return Array.from({ length: num }).map(() => ({
      id: glimmerIdCounter++, // Unique identifier
      size: Math.random() * 30 + 10,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
  };

  // State to store the Glimmers
  const [glimmers] = useState(generateGlimmers);

  return (
    <div className="glimmer-container">
      <div className="glimmer-set">
        {glimmers.map((glimmer) => (
          <div
            key={glimmer.id}
            className="glimmer"
            style={{
              width: `${glimmer.size}px`,
              height: `${glimmer.size * 0.6}px`,
              top: `${glimmer.top}%`,
              left: `${glimmer.left}%`,
            }}
          >
            ﹏
          </div>
        ))}
      </div>
      <div className="glimmer-set">
        {glimmers.map((glimmer) => (
          <div
            key={`${glimmer.id}-duplicate`} // Ensures unique keys
            className="glimmer"
            style={{
              width: `${glimmer.size}px`,
              height: `${glimmer.size * 0.6}px`,
              top: `${glimmer.top}%`,
              left: `${glimmer.left}%`,
            }}
          >
            ﹏
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glimmer;
