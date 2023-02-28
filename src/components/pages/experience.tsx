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
      "Dec 2022",
      "Software Engineer",
      "Uncaught Exception Inc",
      "Build a construction calculator",
      [
        "Applied 3D geometry to accurately display rafters in 3D view",
        "Constructed neat simple diagrams of triangles, circles, and rafters",
        "Calculated angles and lengths of parameters of models for the user",
      ],
      "Used Flutter/Dart to create precise diagrams to help users visualize the dimensions of the materials."
    ),
    createRow(
      "Jan 2022",
      "Apri 2022",
      "Software Engineer",
      "Uncaught Exception Inc",
      "Build a figma plugin to convert a design document into flutter code",
      [
        "Implemented a data structure to enhance the flexibility and efficiency of code generation",
        "Applied separation of concerns to create clean, clear code design",
        "Rated by the employer as the most productive member in the team",
      ],
      "Designed a data structure to efficiently store and manipulate the content of the code generation. Using React/Typescript to design an elegant and intuitive user interface."
    ),
    createRow(
      "Sep 2022",
      "Dec 2022",
      "Full-Stack Developer",
      "University of Waterloo",
      "Redesign GoFigure, a source management website and manage database consistency.",
      [
        "Redesigned barebone webpage to be informative and intuitive",
        "Set up Container to pull citation data of websites, books, articles, etc",
        "Created endpoints to auto-complete citations for the users",
        "Synced data to Zotero, minimizing api calls and hasten data retrieval",
      ],
      "Completely redesigned the external facing webpages to be informative, aesthetic, and responsive. Opened up new endpoints for saving and updating information in the database. Synchronized local database to zotero database."
    ),
  ];
  return (
    <div className="page">
      <table style={{borderSpacing: "1em"}}>
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
                <p>{row.highlight}</p>
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
