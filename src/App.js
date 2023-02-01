import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
