import { Typography } from "@mui/material";

const AboutMe = () => {
  const description = `
  Hello, my name is Felix and I am thrilled to welcome you to my personal webpage!

  I am a computer science student studying at University of Waterloo, with 1 year of work experience in the field. Throughout my career, I have developed a passion for developing solutions and transfering ideas to the screen and have gained extensive knowledge and skills in this area.

  Aside from my professional pursuits, I also enjoy working out and reading to fulfill my curiosities. I find that engaging in these activities helps me to maintain a healthy work-life balance and provides me with a creative outlet.

  I hope that this webpage gives you a better understanding of who I am, and what I have to offer. Thank you for taking the time to visit, and I look forward to connecting with you soon!
  `;

  return (
    <div className="page">
      <figure style={{float: "right"}}>
        <img src={require("../../assets/fat_goose.jpeg")} alt="Seagul" style={{maxWidth: "30vw"}}></img>
        <figcaption style={{ color: "white" }}>
          A biblically accurate image of Felix Liu
        </figcaption>
      </figure>
      <Typography
        style={{
          whiteSpace: "pre-wrap",
          textAlign: "left",
          wordWrap: "break-word",
        }}
      >
        {description}
      </Typography>
    </div>
  );
};

export default AboutMe;
