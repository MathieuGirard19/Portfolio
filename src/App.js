import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/NavBar.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Work from './components/Work.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="work" element={<Work />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
