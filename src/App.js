import Intro from "./components/intro";
import Timeline from "./components/timeline";
import Contact from "./components/contact";

import PageScroller from "./components/page-scroller";

function App() {
  return (
    <PageScroller>
      <section className="scroll-section" id="intro">
        <Intro />
      </section>
      <section className="scroll-section" id="timeline">
        <Timeline />
      </section>
      <section className="scroll-section" id="contact">
        <Contact />
      </section>
    </PageScroller>
  );
}

export default App;
