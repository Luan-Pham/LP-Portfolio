import './App.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';

function App() {
  return (
    <div>
      <NavBar />
      <About />
    </div>
  );
}

export default App;
