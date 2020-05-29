import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
        <li className="nav-item">
             <Link
              to="/about"
              className= {window.location.pathname === "/" ? "nav-link active" : "nav-link" }
            >
            </Link>
            <Link
              to="/"
              className= {window.location.pathname === "/about" ? "nav-link active" : "nav-link" }
            >
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/react-portfolio"
              className= {window.location.pathname === "/about" ? "nav-link active" : "nav-link" }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/discover"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
             Portfolio
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
