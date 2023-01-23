import { Typography } from "@mui/material";

const AboutMe = () => {
  const myCareer = `
  I am Felix Liu, a 3rd year computer science student at the university of Waterloo. I have some experience with OOP through python and C++, some full-stack experience with Typescript/React and Go, some app dev experience with Flutter. 
  
  As a computer science student, I have had my fair share of banging my head against the table unable to produce the expected behavior onto the screen. After my first coop, I have come to accept that frustration is an unavoidable part of being a programmer. Just as they say, the greater the suffering, the greater the mental break- Wait... That's not it. The greater the frustration, the greater the elation you feel when you solve that pesky bug. By the end of my third coop, I had developed advanced emotional regulation skills. Now I can deal with issues rationally instead of getting frustrated. More than that, I felt comfortable doing what I do. I felt competent and confident (stop it, Dunning-Kruger).
  
  I always look for ways to challenge myself, that's how I keep myself entertained. I learn fast too, I picked up Flutter, React, Go, in three separate position, each one quicker than the previous. At this point, I'm pretty confident about learning unfamiliar technologies. I'm calm and easy to work with, and have no problem communicating my thoughts or ask for clarifications.
  `;

  return (
    <div className="page" style={{display: "flex"}}>
      <figure>
        <img src={require("../../assets/fat_goose.jpeg")} alt="Seagul"></img>
        <figcaption style={{ color: "white" }}>
          A biblically accurate image of Felix Liu
        </figcaption>
      </figure>
      <Typography
        style={{ whiteSpace: "pre-wrap", textAlign: "left", overflow: "hidden", wordWrap: "break-word"}}
      >
        {myCareer}
      </Typography>
    </div>
  );
};

export default AboutMe;
