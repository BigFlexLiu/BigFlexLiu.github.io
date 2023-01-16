import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ScrollHeader from "./scroll_header";

const HorizontalScroll = () => {
  // Overrides inline style to let content fill the full height
  useEffect(() => {
    var container = document
      .getElementsByClassName("scroll-container")
      .item(0) as HTMLElement;
    container.style.height = "auto";
  }, []);

  const headers = ["About Me", "My Experience", "My Projects"]

  return (
    <ScrollMenu
      Header={
        <ScrollHeader headerNames={headers}></ScrollHeader>
      }
      scrollContainerClassName="scroll-container"
    >
      {["Hello", "World", "Is"].map((value) => (
        <FakeView value={value}></FakeView>
      ))}
    </ScrollMenu>
  );
};

const FakeView = (props: any) => {
  return (
    <div className="Horizontal-scroll-content">
      <Typography>{props.value}</Typography>
    </div>
  );
};

export default HorizontalScroll;
