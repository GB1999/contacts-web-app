import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar-container">
          <NavLink
            to="/contacts"
            className={({isActive}) => (isActive ? 'link active': 'link')}
          >
            Home
          </NavLink>
          <NavLink to="/create_contact" className="btn">Create Contact</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
