import { Link } from "react-router-dom";
import { Menu, GitHub, LinkedIn, Email } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fs-4 fw-bold" to="/">
          S.AGATHIYAN
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <Menu />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#experience">Experience</Link>
            </li>
            <li className="nav-item">
              <a 
                href="https://github.com/agathi02" 
                target="_blank" 
                className="nav-link"
              >
                <GitHub className="me-1" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;