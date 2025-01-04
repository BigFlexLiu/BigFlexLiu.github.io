// src/components/Intro.jsx
import React, { useMemo, useState, useEffect } from "react";
import "./../styles/intro.css";

const Intro = () => {
  const [numStars, setNumStars] = useState(100);

  useEffect(() => {
    const updateStarCount = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setNumStars(50);
      } else if (width < 1200) {
        setNumStars(100);
      } else {
        setNumStars(150);
      }
    };

    updateStarCount();
    window.addEventListener("resize", updateStarCount);
    return () => window.removeEventListener("resize", updateStarCount);
  }, []);

  // Define a color palette for stars
  const STAR_COLORS = [
    "#ADD8E6", // Light Blue
    "#87CEFA", // Sky Blue
    "#00BFFF", // Deep Sky Blue
    "#FFFFFF", // Pure White
    "#F0F8FF", // Alice Blue
    "#FFFFE0", // Light Yellow
    "#FFFACD", // Lemon Chiffon
    "#FFD700", // Gold
    "#FFA500", // Orange
    "#FF8C00", // Dark Orange
    "#FF4500", // Orange Red
    "#FF6347", // Tomato
    "#DC143C", // Crimson
  ];

  // Generate star data only once using useMemo for performance optimization
  const stars = useMemo(() => {
    const starsArray = [];
    for (let i = 0; i < numStars; i++) {
      const star = {
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
        glow: Math.random() * 2 + 1,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      };
      starsArray.push(star);
    }
    return starsArray;
  }, [numStars, STAR_COLORS]);

  return (
    <div className="intro-container">
      {/* Render stars */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`, 
          }}
        ></span>
      ))}

      {/* Main content */}
      <div className="intro-content">
        <h1>Hello, I’m Felix!</h1>
        <p>I write code.</p>
      </div>
    </div>
  );
};

export default Intro;
