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
  accomplishment: string[]
) {
  return { startDate, endDate, position, organization, goal, accomplishment };
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
      ]
    ),
    createRow(
      "Jan 2022",
      "Apri 2022",
      "Software Engineer",
      "Uncaught Exception Inc",
      "Build a no-code platform as a Figma plugin",
      [
        "Implemented a data structure to enhance the flexibility and efficiency of code generation",
        "Applied separation of concerns to create clean, clear code design",
        "Rated by the employer as the most productive member in the team",
      ]
    ),
    createRow(
      "Sep 2022",
      "Dec 2022",
      "Full-Stack Developer",
      "University of Waterloo",
      "Complete all major features of GoFigure, a source management site",
      [
        "Redesigned barebone webpage to be informative and intuitive",
        "Set up Container to pull citation data of websites, books, articles, etc",
        "Created endpoints to auto-complete citations for the users",
        "Synced data to Zotero, minimizing api calls and hasten data retrieval",
      ]
    ),
  ];
  return (
    <div className="page">
    <Table>
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
    </Table></div>
  );
};

export default Experience;
