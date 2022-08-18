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
            Contacts
          </NavLink>
          <NavLink to="/contacts/create_contact" className="btn">Create Contact</NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
