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
      "Build a figma plugin to convert a design document into flutter code",
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
      "Redesigned GoFigure, a source management website and managed database consistency.",
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
      "Build a figma plugin to convert a design document into flutter code",
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
      <table style={{overflow: "hidden"}}>
        <tbody>
          {rows.map((row) => (
            <tr>
              <td style={{width: "10%"}}>
                <p style={{fontWeight: "bold", fontSize: "1.2em"}}>{row.startDate} - {row.endDate}</p>
              </td>
              <td style={{width: "20%"}}>
                <p style={{fontWeight: "bold", fontSize: "1.5em"}}>{row.position}</p>
                <p style={{fontWeight: "bold", fontSize: "1.2em"}}>{row.organization}</p>
              </td>
              <td>
                <p style={{fontWeight: "bold", fontSize: "1.5em"}}>{row.goal}</p>
                {/* <p>{row.highlight}</p> */}
                {row.accomplishment.map((value) => (
                  <p style={{ color: "white" }}>
                    <Typography>{value}</Typography>
                  </p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell>
                <Typography style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                  {row.startDate} -
                </Typography>
                <Typography style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                  {row.endDate}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                  {row.position}
                </Typography>
                <Typography style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                  {row.organization}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                  {row.goal}
                </Typography>
                <p>{row.highlight}</p>
                <ul>
                  {row.accomplishment.map((value) => (
                    <li style={{ color: "white" }}>
                      <Typography>{value}</Typography>
                    </li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </div>
  );
};

export default Experience;
