import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header-section">
        <text>gmail/phone number</text>
      </div>
      <div className="Main-content">
        <div className="Main-content-nav-bar">
          <div className="Main-content-nav-bar-name"><text>Section name</text></div>
          <div className="Main-content-nav-bar-spacing"></div>
          <div className="Main-content-nav-bar-page">
            <text>Button left</text>
            <text>Page number</text>
            <text>Button right</text>
          </div>
        </div>
      </div>
      <div className="Bottom-bar">
        <text>Hello there</text>
      </div>
    </div>
  );
}

export default App;
