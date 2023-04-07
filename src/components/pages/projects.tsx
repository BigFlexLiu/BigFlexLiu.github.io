import { Button, Typography } from "@mui/material";
import { AiFillGithub } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

const Projects = () => {
  const rippleDescription = `
  Ripple is a sandbox that emulates the rippling of droplets on the surface of water. The colors from droplets interact with each other to form fabulous images. With clever usage of the colors, block, and fade options, the possibility is limitless.
  `;
  const wordleWithFriendsDescription = `Wordle With Friends is a simple wordle game built with react. In addition to generating random five-letter words for the player to guess. There is also options for the number of guesses allowed and even allows user to generate a wordle game with the name of their choosing. Send it to a friend, share the joy.`;
  const asmrRemixerDescription = `ASMR Remixer is an app built using Flutter/Dart. It contains a few dozen of sounds which can be used to construct remixes. Remixes play sounds in random order. The overlay mode even plays sounds at random interval following exponential distribution. There are also light and dark mode to maximize visual comfort of the users.`;

  return (
    <div className="page" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "45%", display: "flex", flexDirection: "column" }}>
          <img
            src={require("../../assets/ripple.png")}
            alt="Ripple game board displaying a smiley face."
            style={{ width: "100%" }}
          ></img>
          <p>{rippleDescription}</p>
          <div style={{ flexGrow: "1" }}></div>
        </div>
        <div style={{ width: "10%" }}></div>
        <div style={{ width: "45%" }}>
          <img
            src={require("../../assets/asmr_remixer.jpg")}
            alt="A sound remixing app"
            style={{ maxWidth: "40%", objectFit: "contain", float: "right" }}
          ></img>
          <div
            style={{
              marginLeft: "1em",
            }}
          >
            <p>{wordleWithFriendsDescription}</p>
          </div>
        </div>
      </div>
      <div style={{display: "flex"}}>
      <Button
          href="https://github.com/BigFlexLiu/ripplejs"
          variant="outlined"
          target="_blank"
          style={{
            color: "white",
            margin: "2em",
          }}
        >
          <Typography style={{ bottom: "0", fontSize: "1.5em" }}>
            Source&nbsp; <AiFillGithub style={{ verticalAlign: "text-top" }} />
          </Typography>
        </Button>
        <Button
          href="https://brave-sand-0a701a510.3.azurestaticapps.net"
          variant="outlined"
          target="_blank"
          style={{
            color: "white",
            margin: "2em",
          }}
        >
          <Typography style={{ bottom: "0", fontSize: "1.5em" }}>
            View demo&nbsp; <img
            src={require("../../assets/ripple.ico")}
            alt="A sound remixing app"
            style={{ maxWidth: "1em", objectFit: "contain", verticalAlign: "text-top" }}
          ></img>
          </Typography>
        </Button>
        <div style={{flexGrow: 1}}></div>
        <Button
          href="https://play.google.com/store/apps/details?id=com.cfast.asmrremixer.app&hl=en-US&ah=o4bJdzUYyMdth2WBmC6uwiV4oKc"
          variant="outlined"
          target="_blank"
          style={{
            color: "white",
            margin: "2em",
          }}
        >
          <Typography style={{ bottom: "0", fontSize: "1.5em" }}>
            View on Google Play&nbsp;{" "}
            <FaGooglePlay style={{ verticalAlign: "text-top" }} />
          </Typography>
        </Button>
        <Button
          href="https://github.com/BigFlexLiu/ASMR-remixer"
          variant="outlined"
          target="_blank"
          style={{
            color: "white",
            margin: "2em",
          }}
        >
          <Typography style={{ bottom: "0", fontSize: "1.5em" }}>
            Source&nbsp; <AiFillGithub style={{ verticalAlign: "text-top" }} />
          </Typography>
        </Button>
      </div>
      {/* <div
        style={{
          width: "40vw",
          borderRight: "1px solid white",
          display: "flex",
          padding: "2vw",
        }}
      >
        <figure>
          <img
            src={require("../../assets/wordle_with_friends/game.jpg")}
            alt="A Wordle game"
            style={{ width: "100%", maxHeight: "auto", float: "left" }}
          ></img>
          <figcaption style={{ color: "white" }}>
            Wordle With Friends
          </figcaption>
        </figure>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              whiteSpace: "pre-wrap",
              textAlign: "left",
              overflow: "hidden",
              wordWrap: "break-word",
            }}
          >
            {wordleWithFriendsDescription}
          </Typography>
          <Button
            variant="outlined"
            href="https://github.com/BigFlexLiu/wordle_with_friends"
            target="_blank"
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography style={{ bottom: "0", fontSize: "1.5em" }}>
              Visit github page &nbsp;{" "}
              <AiFillGithub style={{ verticalAlign: "text-top" }} />
            </Typography>
          </Button>
        </div>
      </div>
      <div
        style={{
          width: "40vw",
          display: "flex",
          padding: "2vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            style={{
              whiteSpace: "pre-wrap",
              textAlign: "left",
              overflow: "hidden",
              wordWrap: "break-word",
            }}
          >
            {asmrRemixerDescription}
          </Typography>
          <Button
            href="https://play.google.com/store/apps/details?id=com.cfast.asmrremixer.app&hl=en-US&ah=o4bJdzUYyMdth2WBmC6uwiV4oKc"
            variant="outlined"
            target="_blank"
            style={{
              color: "white",
            }}
          >
            <Typography style={{ bottom: "0", fontSize: "1.5em"}}>
              Visit Google Play&nbsp; <FaGooglePlay style={{verticalAlign: "text-top" }}/> 
            </Typography>
          </Button>
          <Button
            href="https://github.com/BigFlexLiu/ASMR-remixer"
            variant="outlined"
            target="_blank"
            style={{
              color: "white",
            }}
          >
            <Typography style={{ bottom: "0", fontSize: "1.5em"}}>
              Visit github page&nbsp; <AiFillGithub style={{verticalAlign: "text-top" }}/> 
            </Typography>
          </Button>
        </div>

        <figure>
          <img
            src={require("../../assets/asmr_remixer/remixes_view.png")}
            alt="A Wordle game"
            style={{ width: "100%", maxHeight: "auto", float: "left" }}
          ></img>
          <figcaption style={{ color: "white" }}>ASMR Remixer</figcaption>
        </figure>
      </div> */}
    </div>
  );
};

export default Projects;
