import React from "react";
import { motion } from "framer-motion";

import Navbar from "../Navbar";

import "./Header.css";
import SearchBar from "../SearchBar";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const [showSearch, shouldShowSearch] = useState(true);
  const [lastYPos, setLastYPos] = useState(300);
  const location = useLocation();

  let isEditing = location.pathname.includes("edit_contact");

  useEffect(() => {
    if (isEditing) {
      shouldShowSearch(false);
    }
    function handleScroll() {
      console.log("scrolled");
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      shouldShowSearch(isScrollingUp);
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <motion.div
      className="header"
      layout
      transition={{ layout: { duration: 1, type: "spring" } }}
    >
      <motion.div className="header-top" layout>
       
          <NavLink to="/contacts" className="header-top__logo" >
          <img src="https://i.imgur.com/JdzBcpm.png" alt="HOME"  width="180" height="65"/> 
          CONTACTS
          </NavLink>

       
          <motion.div className="header-top__navigation">
          <NavLink to="/contacts/create_contact" className="header-top__navigation-btn">
            Create Contact
          </NavLink>
          </motion.div>

        </motion.div>
     
      {showSearch && <SearchBar />}
    </motion.div>
  );
};

export default Header;
