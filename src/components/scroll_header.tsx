import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Arrows from "./arrows";

const ScrollHeader = ({headerNames} : {headerNames: string[]}) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        width: "80vw",
        justifyContent: "space-between",
      }}
    >
      <Typography style={{ whiteSpace: "nowrap", marginLeft: "1em" }}>
        {headerNames[currentPage]}
      </Typography>
      <Arrows currentPage={currentPage} setCurrentPage={setCurrentPage}></Arrows>
    </div>
  );
};

export default ScrollHeader;
