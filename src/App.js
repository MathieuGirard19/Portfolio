import './App.css';
import './components/NavBar.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
