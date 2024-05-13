import { useState } from "react";
import Gallery from "../gallery";
import { FaGithub } from 'react-icons/fa';

const projects_info = [
  {
    "name": "RippleJs",
    "description": "Ripple is a sandbox that emulates the rippling of colors on a 2D grids.",
    "demos": require("../../assets/ripple_demo.gif"),
    "link": "https://github.com/BigFlexLiu/RippleJs",
  },
  {
    "name": "Wordle With Friends",
    "description": "Wordle but you can also choose the word and generate a link for it.",
    "demos": [require("../../assets/wordle_with_friends/empty.jpg"), require("../../assets/wordle_with_friends/game.jpg"), require("../../assets/wordle_with_friends/generate.jpg"), require("../../assets/wordle_with_friends/make.jpg"), require("../../assets/wordle_with_friends/new_game.jpg")],
    "link": "https://github.com/BigFlexLiu/wordle_with_friends",
  }
];

const Projects = () => {
  const rippleDescription = `
  Ripple is a sandbox that emulates the rippling of droplets on the surface of water. The colors from droplets interact with each other to form fabulous images. With clever usage of the colors, block, and fade options, the possibility is limitless.
  `;
  const wordleWithFriendsDescription = `Wordle With Friends is a simple wordle game built with react. In addition to generating random five-letter words for the player to guess. There is also options for the number of guesses allowed and even allows user to generate a wordle game with the name of their choosing. Send it to a friend, share the joy.`;
  const asmrRemixerDescription = `ASMR Remixer is an app built using Flutter/Dart. It contains a few dozen of sounds which can be used to construct remixes. Remixes play sounds in random order. The overlay mode even plays sounds at random interval following exponential distribution. There are also light and dark mode to maximize visual comfort of the users.`;
  const connectFiveDescription = `Connect 5 is a single player game where orbs are generated on a 2D board. The player must rearrange the orbs to form a group of five or more to remove them from the board. The game ends when the board is completely filled.`;
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (project: number) => {
    setSelectedTab(project);
  };

  const project = projects_info[selectedTab];

  return <div>
    <h1>#Projects</h1>
    <div style={{ display: "flex" }}>
      <div style={{ background: "white", width: "70%" }}>
        {(<div>
          {
            (typeof project["demos"] === 'string') &&
            <img style={{ width: "100%" }} src={projects_info[0]["demos"]} alt="Ripple Demo" />
          }
          {
            (typeof project["demos"] === 'object') &&
            <div>
              <Gallery children={(projects_info[1]["demos"] as string[]).map((x) => <img style={{ maxHeight: "50vh" }} src={x} />)}></Gallery>
            </div>
          }
        </div>)}
      </div>
      <div style={{ width: "30%", border: "1px solid white", height: "100%" }}>
        <ul style={{ height: "100%", listStyle: "none", margin: 0, padding: 0 }}>
          {
            projects_info.map((project, index) => <li
              style={
                index === selectedTab ? { cursor: "pointer", fontSize: "2em", padding: "0.5em 1em", border: "white 1px solid", "background": "white" } :
                  { color: "white", cursor: "pointer", fontSize: "2em", padding: "0.5em 1em", border: "white 1px solid", }}
              onClick={() => handleTabClick(index)}
            >
              {project["name"]}
              {
                index === selectedTab &&
                <div>
                  <p style={{ fontSize: "0.7em", color: "black" }}>{project["description"]}</p>
                  <button onClick={() => window.open(project["link"], "_blank")} style={{ fontSize: "0.7em", color: "orange", background: "black", padding: "0.5em" }} >
                    <FaGithub style={{ marginRight: "0.5em" }}/>
                    Github 
                  </button>
                </div>
              }
            </li>)
          }
        </ul>
      </div>
    </div>


  </div>

  //   return (
  //     <div className="tab-container">
  //       <h1># Projects</h1>
  //       <div className="tab-buttons">
  //         <button
  //           className={selectedTab === 'tab1' ? 'active' : ''}
  //           onClick={() => handleTabClick('tab1')}
  //         >
  //           Tab 1
  //         </button>
  //         <button
  //           className={selectedTab === 'tab2' ? 'active' : ''}
  //           onClick={() => handleTabClick('tab2')}
  //         >
  //           Tab 2
  //         </button>
  //         <button
  //           className={selectedTab === 'tab3' ? 'active' : ''}
  //           onClick={() => handleTabClick('tab3')}
  //         >
  //           Tab 3
  //         </button>
  //       </div>
  //       <div className="tab-content">
  //         {selectedTab === 'tab1' && <p>tab1</p>}
  //         {selectedTab === 'tab2' && <p>tab2</p>}
  //         {selectedTab === 'tab3' && <p>tab3</p>}
  //       </div>
  //     </div>
  //   );
  // };

  // return<div className="page" style={{ display: "flex", flexDirection: "column" }}>
  //   <div style={{ display: "flex" }}>
  //     <div style={{ width: "45%", display: "flex", flexDirection: "column" }}>
  //       <img
  //         src={require("../../assets/ripple.png")}
  //         alt="Ripple game board displaying a smiley face."
  //         style={{ width: "100%" }}
  //       ></img>
  //       <p>{rippleDescription}</p>
  //       <div style={{ flexGrow: "1" }}></div>
  //     </div>
  //     <div style={{ width: "10%" }}></div>
  //     <div style={{ width: "45%" }}>
  //       <img
  //         src={require("../../assets/connect_five.png")}
  //         alt="A single player board game."
  //         style={{ maxWidth: "40%", objectFit: "contain", float: "right" }}
  //       ></img>
  //       <div
  //         style={{
  //           marginLeft: "1em",
  //         }}
  //       >
  //         <p>{connectFiveDescription}</p>
  //       </div>
  //     </div>
  //   </div>
  //   <div style={{display: "flex"}}>
  //   <Button
  //       href="https://github.com/BigFlexLiu/ripplejs"
  //       variant="outlined"
  //       target="_blank"
  //       style={{
  //         color: "white",
  //         margin: "2em",
  //       }}
  //     >
  //       <Typography style={{ bottom: "0", fontSize: "1.5em" }}>
  //         Source&nbsp; <AiFillGithub style={{ verticalAlign: "text-top" }} />
  //       </Typography>
  //     </Button>
  //     <Button
  //       href="https://brave-sand-0a701a510.3.azurestaticapps.net"
  //       variant="outlined"
  //       target="_blank"
  //       style={{
  //         color: "white",
  //         margin: "2em",
  //       }}
  //     >
  //       <Typography style={{ bottom: "0", fontSize: "1.5em" }}>
  //         View demo&nbsp; <img
  //         src={require("../../assets/ripple.ico")}
  //         alt="A sound remixing app"
  //         style={{ maxWidth: "1em", objectFit: "contain", verticalAlign: "text-top" }}
  //       ></img>
  //       </Typography>
  //     </Button>
  //     <div style={{flexGrow: 1}}></div>
  //     <Button
  //       href="https://play.google.com/store/apps/details?id=apps.cfast.connect_five&hl=en-US"
  //       variant="outlined"
  //       target="_blank"
  //       style={{
  //         color: "white",
  //         margin: "2em",
  //       }}
  //     >
  //       <Typography style={{ bottom: "0", fontSize: "1.5em" }}>
  //         View on Google Play&nbsp;{" "}
  //         <FaGooglePlay style={{ verticalAlign: "text-top" }} />
  //       </Typography>
  //     </Button>
  //     <Button
  //       href="https://github.com/BigFlexLiu/connect-five"
  //       variant="outlined"
  //       target="_blank"
  //       style={{
  //         color: "white",
  //         margin: "2em",
  //       }}
  //     >
  //       <Typography style={{ bottom: "0", fontSize: "1.5em" }}>
  //         Source&nbsp; <AiFillGithub style={{ verticalAlign: "text-top" }} />
  //       </Typography>
  //     </Button>
  //   </div>
  // </div>
};
export default Projects;
