import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/NavBar.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Home />
      <Projects /> */}
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
