import "./App.css";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import ContactMe from "./sections/ContactMe";

function App() {
  return (
    <>
      <main className="containerPortfolio">
        <Home />
        <Projects />
        <Skills />
        <ContactMe />
      </main>
    </>
  );
}

export default App;
