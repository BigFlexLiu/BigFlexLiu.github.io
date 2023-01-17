import React from "react";
import { useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import AboutMe from "./pages/about_me";
import Experience from "./pages/experience";
import Projects from "./pages/projects";
import ScrollHeader from "./scroll_header";

const HorizontalScroll = () => {
  const headers = ["About Me", "Experience", "Projects"];

  // Overrides inline style to let content fill the full height
  useEffect(() => {
    var container = document
      .getElementsByClassName("scroll-container")
      .item(0) as HTMLElement;
    container.style.height = "auto";
  }, []);

  return (
    <ScrollMenu
      Header={<ScrollHeader headerNames={headers}></ScrollHeader>}
      scrollContainerClassName="scroll-container"
    >
      {[<AboutMe></AboutMe>, <Experience></Experience>, <Projects></Projects>]}
    </ScrollMenu>
  );
};

export default HorizontalScroll;
