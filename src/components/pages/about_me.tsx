import { Typography } from "@mui/material";

const AboutMe = () => {
  const myCareer = `
  I am Felix Liu. I am currently studying at The University of Waterloo for a bachelor degree in computer science. I am currently on my 3rd year and have had three coops interleaved in my study. 
  
  As a computer science student, I have had my fair share of banging my head against the table unable to produce the expected behavior onto the screen. After my first coop, I have come to accept that frustration is an unavoidable part of being a programmer. Just as they say, the greater the suffering, the greater the mental break- Wait... That's not it. The greater the frustration, the greater the elation you feel when you solve that pesky bug. By the end of my third coop, I had developed advanced emotional intelligence in the form of nihilism to combat the approaching storm of mental breakdowns. More than that, I felt comfortable doing what I do. I felt competent and confident (stop it, Dunning-Kruger).
  
  Now I am looking to challenge myself in a, you know, challenging position. Any area of software is fine, I'm open to learning new areas of expertise. Heck, throw in arts or sciences if you like, I'd love to give it a try.`;

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
