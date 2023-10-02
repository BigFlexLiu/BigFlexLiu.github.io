import { Typography } from "@mui/material";

const AboutMe = () => {
  const description = `
  Hello, my name is Felix and I am thrilled to welcome you to my personal webpage!

  I am a computer science student studying at University of Waterloo, with 1 year of work experience in the field. Throughout my career, I have developed a passion for developing solutions and transfering ideas to the screen and have gained extensive knowledge and skills in this area.

  Aside from my professional pursuits, I also enjoy working out and reading to fulfill my curiosities. I find that engaging in these activities helps me to maintain a healthy work-life balance and provides me with a creative outlet.

  I hope that this webpage gives you a better understanding of who I am, and what I have to offer. Thank you for taking the time to visit, and I look forward to connecting with you soon!
  `;

  const description2 = `This... is a goose, a very fat goose. It just so happens that he knows English, Manderin and Python 🐍.
    Mr. Goose is full of fight, but also full of love. He learned Python because he saw all as friends.
    Now pythons and geese have an aliance against the humans.
    Mr. Goose is based in waterloo and is also incredibly based.
    Mr. Goose is socialable: able to make friends with pythons, curious: willing to learn the language of his predator, and responsible: always contributing to his community.
    Mr. Goose is looking for a job, would you kindly offer one.
  `

  return (
    <div className="page" style={{minWidth: "100%"}}>
      <figure style={{float: "right"}}>
        <img src={require("../../assets/fat_goose.jpeg")} alt="Seagul" style={{maxWidth: "30vw", minWidth: "30vw"}}></img>
        <figcaption style={{ color: "white", fontSize: "1.5em" }}>
          A biblically accurate image of Felix Liu
        </figcaption>
      </figure>
      <Typography
        style={{
          whiteSpace: "pre-wrap",
          textAlign: "left",
          wordWrap: "break-word",
          fontSize: "2em",
        }}
      >
        {description2}
      </Typography>
    </div>
  );
};

export default AboutMe;
