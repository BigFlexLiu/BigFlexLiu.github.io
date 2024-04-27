import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

function createRow(
  startDate: string,
  endDate: string,
  position: string,
  organization: string,
  goal: string,
  accomplishment: string[],
  highlight: string
) {
  return {
    startDate,
    endDate,
    position,
    organization,
    goal,
    accomplishment,
    highlight,
  };
}

const Experience = () => {
  const rows = [
    createRow(
      "Sep 2021",
      "Apr 2022",
      "Software Engineer",
      "Uncaught Exception Inc",
      "Built a figma plugin to convert design into code",
      [
        "Sped up code generation algorithm from quadratic to linear time",
        "Created clean intuitive plugin interface",
        "Reorganized thousands lines of code using OOP principles",
      ],
      "Used Flutter/Dart to create precise diagrams to help users visualize the dimensions of the materials."
    ),
    createRow(
      "Sep 2022",
      "Dec 2022",
      "Full-Stack Developer",
      "University of Waterloo",
      "Redesign and optimize the citation manager website",
      [
        "Employ caching and pagination techniques to reduce run time by a factor of 16",
        "Synchronized database with zotero to eliminate collision problems",
        "Automated citation generation to speed up citation process by 5 times",
      ],
      "Completely redesigned the external facing webpages to be informative, aesthetic, and responsive. Opened up new endpoints for saving and updating information in the database. Synchronized local database to zotero database and used caching to minimize loading time."
    ),
    createRow(
      "Apr 2023",
      "Aug 2023",
      "Software Engineer",
      "Spurry Inc",
      "Prepare and deploy a mobile app for a startup company",
      [
        "Synced user subscription with Stripe to automate payment process",
        "Automated deployment using Github Actions",
        "Integrated VertexAI into API to handle user inquiries",
      ],
      "Used Flutter/Dart to create precise diagrams to help users visualize the dimensions of the materials."
    ),
  ];
  return (
    <div className="page">
      <div >
        <h1># Experience</h1></div>
        <div style={{display: "flex", justifyContent: "center"}}>
      <table style={{overflow: "hidden"}}>
        <tbody>
          {rows.map((row) => (
            <tr>
              <td style={{width: "20%"}}>
                <p style={{fontWeight: "bold", fontSize: "1.2em"}}>{row.startDate} - {row.endDate}</p>
              </td>
              <td style={{width: "20%"}}>
                <p style={{fontWeight: "bold", fontSize: "1.5em"}}>{row.position}</p>
                <p style={{fontWeight: "bold", fontSize: "1.2em"}}>{row.organization}</p>
              </td>
              <td>
                <p style={{fontWeight: "bold", fontSize: "2em"}}>{row.goal}</p>
                {/* <p>{row.highlight}</p> */}
                {row.accomplishment.map((value) => (
                  <p style={{ color: "white", fontSize: "1.5em" }}>{value}
                    {/* <Typography >{value}</Typography> */}
                  </p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table></div>
    </div>
  );
};

export default Experience;
