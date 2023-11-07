import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="container2">
        <div className="logo">OPEN TRIVIA JULY 2023</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/nothing">Nothing</Link>
          </li>
          <li>
            <Link to="/results">Results</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
