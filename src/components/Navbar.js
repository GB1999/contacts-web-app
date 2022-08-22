import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          
          <NavLink to="/contacts/create_contact" className="navbar__btn">
            Create Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
