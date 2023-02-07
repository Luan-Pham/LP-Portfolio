import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Email from "./components/Email";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Email />
    </div>
  );
}

export default App;
