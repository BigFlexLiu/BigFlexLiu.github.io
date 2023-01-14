import { Typography } from "@mui/material";
import React from "react";
import "./App.css";
import HorizontalScroll from "./components/horizontal_scroll_view";

function App() {
  const name = "Felix Liu (Yujun Liu)";
  const email = "Felixliu135@gmail.com";
  const phoneNumber = "(905) 805-5437";
  return (
    <div className="App">
      <div className="header" style={{ display: "flex", justifyContent: "space-around" }}>
        <Typography className="contact">{name}</Typography>
        <Typography className="contact">{email}</Typography>
        <Typography className="contact">{phoneNumber}</Typography>
      </div>
      <div className="Main-content">
        <HorizontalScroll></HorizontalScroll>
      </div>
      <div className="Bottom-bar">
        <text>Hello there</text>
      </div>
    </div>
  );
}

export default App;
