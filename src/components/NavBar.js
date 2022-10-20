import './styles/NavBar.css';
import { Outlet, Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="projects">Projects</Link>
            </nav>
            <Outlet />
        </>   
    );
  }
  
  export default NavBar;
  