import React, { useState } from "react";
import styled from "styled-components";

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;

const ChildContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

// Displays children horizontally one by one
// Only one child is in the screen at once
function HorizontalCarousel({
  children,
  titles,
}: {
  children: JSX.Element[];
  titles?: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const titleStyle = {
    fontSize: "2em"
  };

  return (
    <Carousel>
      <div style={{ display: "flex", flexDirection: "column", maxHeight: "100%" }}>
        <div
          className="top-bar"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{flexGrow: 1, justifyContent: "left", display: "flex"}}>
          <p style={titleStyle}>{titles && titles[currentIndex]}</p>
          </div>
          <div style={{flexGrow: 1, justifyContent: "right", display: "flex"}}>
            <p className="unselectable" style={titleStyle} onClick={() => setCurrentIndex((currentIndex - 1 + children.length) % children.length)}>{"<--"}</p>
            <p className="unselectable" style={{fontSize: "2em", width: "4em", textAlign: "center"}} onClick={() => console.log("hello")}>{currentIndex + 1}/{children.length}</p>
            <p className="unselectable" style={titleStyle} onClick={() => setCurrentIndex((currentIndex + 1) % children.length)}>{"-->"}</p>
          </div>
        </div>
        {children.map((child, index) => (
          <div key={index}>
            {index === currentIndex && child}
          </div>
        ))}
      </div>
    </Carousel>
  );
}

export default HorizontalCarousel;
