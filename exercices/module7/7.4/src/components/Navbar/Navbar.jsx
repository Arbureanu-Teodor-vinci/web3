import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/cinemas">Cinemas</Link>
    <Link to="/movies">My favorite movies</Link>
    <Link to="/movies/add">Add a movie</Link>
  </nav>
);

export default NavBar;
