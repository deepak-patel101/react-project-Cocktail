import React from "react";
import { Link } from "react-router-dom";

const Nevbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/home">
          <h2>logo</h2>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nevbar;
