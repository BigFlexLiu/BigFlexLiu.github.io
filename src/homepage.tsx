import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Button } from "@mui/material";
import AboutMe from "./components/pages/about_me";
import Experience from "./components/pages/experience";
import Projects from "./components/pages/projects";
import "./App.css";
import { FaGithub } from 'react-icons/fa';


const Homepage = () => {
  const email = "Felixliu135@gmail.com";
  const phoneNumber = "+1 (905) 805-5437";
  const resume =
    <Button
      href="felix_liu.pdf"
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
  const github =
    <Button
      href="https://github.com/BigFlexLiu"
      target="_blank"
      style={{
        color: "white",
        backgroundColor: "#cc5500",
        padding: "1em",

        maxHeight: "3em",
      }}
    >
      <Typography>
        Github &nbsp;&nbsp;&nbsp;
        <FaGithub />
      </Typography>
    </Button>

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="header"
        style={{ display: "flex", padding: "1em", justifyContent: "space-between" }}
      >
        <Typography>
          {email}&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
          {phoneNumber}
        </Typography>

        {resume}

        {github}
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ display: "flex", }}>
          <div style={{ width: "70%"}}
          >
          <Experience></Experience>

          </div>
          <aside style={{ maxWidth: "30%" }}>
            <AboutMe></AboutMe>
          </aside>
        </div>
        <Projects></Projects>
      </div>
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
