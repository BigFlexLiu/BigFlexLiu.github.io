import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Button } from "@mui/material";
import HorizontalCarousel from "./components/horizontal_carousel";
import AboutMe from "./components/pages/about_me";
import Experience from "./components/pages/experience";
import Projects from "./components/pages/projects";
import "./App.css";


const Homepage = () => {
  const email = "Felixliu135@gmail.com";
  const phoneNumber = "+1 (905) 805-5437";
  const resume = 
  <Button
    href="resume.pdf"
    target="_blank"
    style={{
      color: "white",
      backgroundColor: "#cc5500",
      padding: "1em",

      maxHeight: "3em",
    }}
  >
    <Typography>
      View Resume &nbsp;&nbsp;&nbsp;
      <FontAwesomeIcon icon={faArrowDown} />
    </Typography>
  </Button>

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="header"
        style={{ display: "flex", marginLeft: "20vw", padding: "1em", justifyContent: "space-between" }}
      >
        <Typography>
          {email}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
          {phoneNumber}
        </Typography>

        {resume}
      </div>
      <HorizontalCarousel titles={["About me", "Experiences", "Projects"]}>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Projects></Projects>
      </HorizontalCarousel>
      <div
        className="Bottom-bar"
        style={{
          flexGrow: 1,
        }}
      ></div>
      <div
        style={{
          display: "flex",
          marginLeft: "20vw",
          marginBottom: "2em",
        }}
      >
      </div>
    </div>
  );
};

export default Homepage;
