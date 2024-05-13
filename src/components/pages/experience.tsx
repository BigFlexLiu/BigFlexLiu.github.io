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
      "Built a code converter plugin for Figma",
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
      "Redesign and optimize a citation manager",
      [
        "Employ caching and pagination techniques to improve loading time",
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
      "Finalize and Deploy a mobile app",
      [
        "Synced user subscription with Stripe to automate payment process",
        "Automated deployment using Github Actions",
        "Integrated VertexAI into API to handle user inquiries",
      ],
      "Used Flutter/Dart to create precise diagrams to help users visualize the dimensions of the materials."
    ),
  ];
  return (
    <div>
      <h1># Experience</h1>
      <div style={{ display: "flex" }}>
        <table style={{ overflow: "hidden" }}>
          <tbody>
            {rows.map((row) => (
              <tr>
                <td style={{ width: "30%", verticalAlign: "top" }}>
                  <p style={{ fontWeight: "bold", fontSize: "1.5em" }}>{row.position}</p>
                  <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>{row.organization}</p>
                  <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>{row.startDate} - {row.endDate}</p>
                </td>
                <td style={{ width: "70%" }}>
                  <p style={{ fontWeight: "bold", fontSize: "1.5em" }}>{row.goal}</p>
                  {row.accomplishment.map((value) => (
                    <p style={{ color: "white", fontSize: "1.2em" }}>{value}
                    </p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experience;
