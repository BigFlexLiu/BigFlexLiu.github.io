import React, { useState, useRef, useEffect } from "react";
import "./../styles/timeline.css";

const experiences = [
  {
    year: "2021 - 2022", title: "Flutter Developer @ Uncaught Exception",
    techStack: ["Flutter/Dart", "Javascript", "React"],
    description: 
      "Contributed to a Figma-to-Flutter code generation tool and a construction calculator app. I focused on speeding up dev workflows, automating boilerplate, and improving UI component performance.",
      highlight: "Architected Figma API data processing logic, enabling 60% faster code generation.",
  },
  {
    year: "2022 Sep - Dec",
    title: "Full-Stack Develop @ University of Waterloo",
    techStack: ["TypeScript", "Go", "React", "SQLite", "Containers"],
    description: "Led development of a collaborative research platform used by faculty and students. I introduced caching and pagination for handling large datasets, and built microservices to reduce duplicate work for researchers.",
    highlight: "Launched an autofill microservice that cut researcher input time by 90%."
  },
  {
    year: "2023 Apr - Aug",
    title: "Software Engineer @ Spurry",
    techStack: ["Flutter/Dart", "Javascript", "React", "Node.js"],
    description: 
      "Helped build and scale an AI-powered resume tool from prototype to production. My work spanned backend performance tuning, onboarding flow improvements, and release automation.",
      highlight: "Refined AI prompt handling and infrastructure, contributing to a 61% increase in paid conversion rate.",
  },
  {
    year: "2024 Sep - Dec",
    title: "Android Developer @ Accedo",
    techStack: ["Kotlin"],
    description: "Worked on Android features for large-scale streaming apps, focusing on stability and user experience. I refactored core codebases to simplify maintenance, solved UI inconsistencies across platforms, and ensured release deadlines were met for a large user base.",
    highlight: "Built a URL fallback system that prevented a release delay for 500k+ users.",
  },
].reverse();

const Timeline = () => {
  const [selectedExperience, setSelectedExperience] = useState(0); // Default to first experience
  const timelineRef = useRef(null);
  const timelineLineRef = useRef(null);

  const handleCardClick = (index) => {
    setSelectedExperience(index);
  };

  // Effect to calculate and set the timeline line height
  useEffect(() => {
    const updateTimelineHeight = () => {
      if (timelineRef.current && timelineLineRef.current) {
        const timelineItems = timelineRef.current.querySelectorAll('.timeline-item-compact');
        if (timelineItems.length > 0) {
          const lastItem = timelineItems[timelineItems.length - 1];
          const lastItemRect = lastItem.getBoundingClientRect();
          const timelineRect = timelineRef.current.getBoundingClientRect();
          
          // Calculate the height from the top of the timeline to the center of the last item
          const lastItemCenter = lastItemRect.top - timelineRect.top + (lastItemRect.height / 2);
          const adjustedHeight = lastItemCenter - 24; // 1.5rem (24px) offset from top
          
          timelineLineRef.current.style.height = `${adjustedHeight}px`;
        }
      }
    };

    // Update height after component mounts and when window resizes
    updateTimelineHeight();
    window.addEventListener('resize', updateTimelineHeight);
    
    // Small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(updateTimelineHeight, 100);

    return () => {
      window.removeEventListener('resize', updateTimelineHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="timeline-container">
      <Cloud />
      <h2>My Professional Journey</h2>
      
      <div className="timeline-layout">
        <div className="timeline-sidebar">
          <div ref={timelineLineRef} className="timeline-line-compact"></div>
          <div ref={timelineRef} className="timeline-items-compact">
            {experiences.map((exp, index) => {
              const isSelected = selectedExperience === index;

              return (
                <div 
                  key={index} 
                  className={`timeline-item-compact ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="timeline-dot-compact">
                    <div className="timeline-year-compact">{exp.year.split(' - ')[0]}</div>
                  </div>
                  
                  <div className="timeline-card-compact">
                    <div className="timeline-period-compact">{exp.year}</div>
                    <h4 className="timeline-title-compact">{exp.title}</h4>
                    <div className="timeline-tech-compact">
                      {exp.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge-compact">{tech}</span>
                      ))}
                      {exp.techStack.length > 3 && <span className="tech-more-compact">+{exp.techStack.length - 3}</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="timeline-details-panel">
          {selectedExperience !== null && (
            <div className="details-content">
              <div className="details-header">
                <div className="details-period">{experiences[selectedExperience].year}</div>
                <h3 className="details-title">{experiences[selectedExperience].title}</h3>
              </div>

              <div className="details-body">
                <div className="tech-stack-full">
                  <span className="tech-label">Technologies & Tools</span>
                  <div className="tech-tags-grid">
                    {experiences[selectedExperience].techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="description-section">
                  <h4 className="section-title">Role & Responsibilities</h4>
                  <p className="details-description">{experiences[selectedExperience].description}</p>
                </div>
                
                <div className="highlight-section">
                  <h4 className="section-title">Key Achievement</h4>
                  <div className="details-highlight">
                    <div className="highlight-icon">🏆</div>
                    <p className="highlight-text">{experiences[selectedExperience].highlight}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
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
