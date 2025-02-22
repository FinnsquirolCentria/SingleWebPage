import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const MainContent = () => {
  return (
    <main>
      <Section id="Home" title="Welcome to My Website">
        <p>Welcome to my personal website.</p>
        </Section>

      <Section id="About" title="About Me">
        <p>This section is about me.</p>
        <ul>
          <li>
            Born in{" "}
            <a href="https://en.wikipedia.org/wiki/Managua" target="_blank" rel="noopener noreferrer">
              Managua
            </a>
            , Nicaragua (03.03.2002)
          </li>
          <li>Finished High School in Nicaraguan German School</li>
          <li>Moved to Finland in 2022</li>
          <li>Enjoy playing video games and programming</li>
        </ul>
      </Section>

      <Section id="Contact" title="Contact">
        <p>You can contact me through email or social media.</p>
      </Section>
    </main>
  );
};

const Section = ({ id, title, children }) => {
  return (
    <section id={id}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default App;
