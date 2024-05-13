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
function Gallery({
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
      <div style={{ display: "flex", flexDirection: "row", maxHeight: "100%", minWidth: "100%", background: "black" }}>
        <div
          className="carousel-display"
          style={{ display: "flex", justifyContent: "space-between", width: "100%", overflow: "auto" }}
        >
          {children.map((child, index) => (
            <div style={{margin: "0 1em"}} key={index} >
              {child}
            </div>
          ))}
        </div>
      </div>
    </Carousel>
  );
}

export default Gallery;
