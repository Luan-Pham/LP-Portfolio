import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Email from './components/Email';

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Projects />
      <Email />
    </div>
  );
}

export default App;
