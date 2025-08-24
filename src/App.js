import Intro from "./components/intro";
import Timeline from "./components/timeline";
import Contact from "./components/contact";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <section className="section intro-section" id="intro">
        <Intro />
      </section>
      <section className="section timeline-section" id="timeline">
        <Timeline />
      </section>
      <section className="section contact-section" id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
