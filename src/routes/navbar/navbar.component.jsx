import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./navbar.styles.css";
function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <span className="nav-title">
          <Link to="/">Card List App</Link>
        </span>
        <span className="nav-content">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About us</NavLink>
        </span>
      </div>
      <Outlet />
    </React.Fragment>
  );
}

export default Navbar;
