import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import HorizontalScroll from "./components/horizontal_scroll_view";

function App() {
  const email = "Felixliu135@gmail.com";
  const phoneNumber = "+1 (905) 805-5437";

  return (
    <div className="App">
      <div
        className="header"
        style={{ display: "flex", marginLeft: "20vw", padding: "1em" }}
      >
        <Typography>
          {email}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;{phoneNumber}
        </Typography>
      </div>
      <div className="Main-content">
        <HorizontalScroll></HorizontalScroll>
      </div>
      <div
        className="Bottom-bar"
        style={{
          marginLeft: "20vw",
          justifyContent: "left",
          bottom: "5vw",
          position: "relative",
          display: "flex",
        }}
      >
        <Button
          href="FelixLiuResume.pdf"
          download="FelixLiuResume.pdf"
          target="_blank"
          style={{ color: "white", backgroundColor: "#cc5500", padding: "1em" }}
        >
          <Typography>
            Download Resume &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faArrowDown} />
          </Typography>
        </Button>
      </div>
    </div>
  );
}

export default App;
