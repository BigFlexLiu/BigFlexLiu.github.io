import React, { useState, useRef, useEffect } from "react";
import "./../styles/timeline.css";

const experiences = [
  {
    year: "2021 - 2022", title: "Flutter Developer @ Uncaught Exception",
    techStack: ["Flutter/Dart", "Javascript", "React"],
    details: [
      "Developed interactive diagrams in a construction calculator app.",
      "Optimized code generation algorithm, cutting complexity from O(n²) to O(n).",
      "Built a Figma plugin, providing a clean and intuitive interface for the users."],
    testimony: "[Felix] delivered a set of features that originally had been planned to take two-three developers, all the while coordinating development with coworkers, making improvements with new innovative ways of doing things, and navigating shifting requirements.",
    source: "Felix Liu - Performance Evaluation-1.pdf"
  },
  {
    year: "2022 Sep - Dec",
    title: "Full-Stack Develop @ University of Waterloo",
    techStack: ["TypeScript", "Go", "React", "SQLite", "Containers"],
    details: [
      "Implemented caching and pagination, boosting API response time by 60%",
      "Synchronized database, enabling seamless researcher collaboration",
      "Implemented a research collaboration platform, cutting citation time by 80%"
    ],
    testimony: "Felix was very responsive to the challenges of the project and demonstrated both a high degree of technical proficiency and initiative.",
    source: "Felix Liu - Performance Evaluation-3.pdf"
  },
  {
    year: "2023 Apr - Aug",
    title: "Software Engineer @ Spurry",
    techStack: ["Flutter/Dart", "Javascript", "React", "Node.js"],
    details: [
      "Integrated Stripe api, ensuring a smooth and secure payment experience",
      "Implemented Continuous Integration, cutting down deployment overhead",
      "Integrated a chatbot into website, enabling immediate customer support",
      "Implemented hash-based deduplication to optimize data transfer efficiency"
    ],
    testimony: "[Felix] was a critical member of the team in getting the product to the quality that it currently is, and would be more than happy to have him return to the team if he chooses.",
    source: "Felix Liu - Performance Evaluation-4.pdf"
  },
  {
    year: "2024 Sep - Dec",
    title: "Android Developer @ Accedo",
    techStack: ["Kotlin"],
    details: [
      "Rated as one of the top three most impactful new hires in the past three years",
      "Resolved 10+ major-severity issues to deliver the launch candidate on schedule",
    ],
    testimony: "Despite being a co-op, Felix has joined Accedo with a tremendous amount of technical knowledge that he's showcased in a short period of time at Accedo. Whenever Felix is assigned a ticket, he completes it within minutes.",
    source: "Champion-award-nomination.PDF"
  },
].reverse();

const Timeline = () => {
  const isSmallScreen = window.innerWidth < 900 || window.innerHeight < 600;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="timeline-container">
      {/* <CloudAnimation /> */}
      <Cloud />
      <h2>My Work</h2>
      <div className="timeline-items">
        {experiences.map((exp, index) => {
          const isExpanded = expandedIndex === index;
          const showCard = expandedIndex == null || isExpanded;
          const isVisible = !isExpanded && expandedIndex

          return (
            <div key={index} className={`timeline-item ${showCard ? 'active' : 'hidden'}`}>
              {showCard &&
                <div className={`timeline-header ${isExpanded ? 'expanded' : 'collapsed'}`}  onClick={() => handleToggle(index)}>
                  <span className="timeline-year">{exp.year}</span>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <button className={`toggle-button ${isExpanded ? 'expanded' : ''}`}>
                    {"▲"}
                  </button>
                </div>
              }

              {isExpanded && (
                <div className="timeline-details">
                  <h4 className="tech-stack">{exp.techStack.join(", ")}</h4>
                  {exp.details.map((detail, index) => {
                    return <p key={index}>- {detail}</p>
                  })}
                  <p className="note-from-supervisor">Note from Supervisor: </p>
                  <br></br>
                  <span className="testimony">{exp.testimony}</span>
                  <a href={exp.source} target="_blank" rel="noopener noreferrer">
                    <p className="source">Source</p></a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Cloud = () => {
  const timeoutRef = useRef(null); // Ref to store timeout ID
  // Function to determine the number of clouds based on screen width
  const getNumClouds = () => {
    const width = window.innerWidth;
    if (width < 600) return 5;
    if (width < 900) return 8;
    return 10;
  };

  // State to store the currently displayed clouds
  const [clouds, setClouds] = useState([]);

  // Function to generate a single cloud with randomized properties
  const generateCloud = () => {
    const size = Math.random() * 100 + 100; // Size between 100px and 200px
    const speed = Math.random() * 20 + 20; // Speed between 20s and 40s
    const opacity = Math.random() * 0.5 + 0.3; // Opacity between 0.3 and 0.8
    const top = Math.random() * 100; // Top position between 0% and 70%
    const layer = Math.random() < 0.5 ? "layer1" : "layer2"; // Assign to a layer
    const sizeClass = size > 150 ? "large" : "small"; // Assign size-based class

    return {
      id: Date.now() + Math.random(), // Unique identifier
      size,
      speed,
      opacity,
      top,
      layer,
      sizeClass,
    };
  };

  // Effect to dynamically add clouds at random intervals
  useEffect(() => {
    const addCloud = () => {
      setClouds((prevClouds) => {
        if (prevClouds.length >= 2 * getNumClouds()) {
          return prevClouds; // Prevent too many clouds from being added
        }
        return [...prevClouds, generateCloud()];
      });

      const interval = 30 * 1000 * Math.random() / getNumClouds();
      timeoutRef.current = setTimeout(addCloud, interval);
    };

    addCloud(); // Start adding clouds

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="cloud-container">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={`cloud ${cloud.layer} ${cloud.sizeClass}`}
          style={{
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
            top: `${cloud.top}%`,
            opacity: cloud.opacity,
            animationDuration: `${cloud.speed}s`,
          }}
          onAnimationEnd={() => {
            setClouds((prevClouds) => prevClouds.filter((c) => c.id !== cloud.id));
          }}
        ></div>
      ))}
    </div>
  );
};

export default Timeline;