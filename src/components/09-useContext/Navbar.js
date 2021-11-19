import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Use Context
      </NavLink>
      <div
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="nav-item nav-link"
          >
            Home
          </NavLink>

          <NavLink
            exact
            to="./about"
            activeClassName="active"
            className="nav-item nav-link"
          >
            About
          </NavLink>

          <NavLink
            exact
            to="./login"
            activeClassName="active"
            className="nav-item nav-link"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
