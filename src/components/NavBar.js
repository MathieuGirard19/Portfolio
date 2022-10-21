import './styles/NavBar.css';
import { Outlet, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="projects">Projects</NavLink>
                <NavLink to="work">Work</NavLink>
            </nav>
            <Outlet />
        </>   
    );
  }
  
  export default NavBar;
  