import "./App.css";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import ContactMe from "./sections/ContactMe";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <main className="containerPortfolio">
        <div className="navBar">
          <NavBar />
        </div>
        <Home />
        <Projects />
        <Skills />
        <ContactMe />
      </main>
    </>
  );
}

export default App;
