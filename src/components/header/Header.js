import React from "react";
import { motion } from "framer-motion";

import Navbar from "../Navbar";

import "./Header.css";
import SearchBar from "../SearchBar";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [showSearch, shouldShowSearch] = useState(true);
  const [lastYPos, setLastYPos] = useState(300);

  useEffect(() => {
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
        <motion.div className="header-top__logo" layout>
          <NavLink to="/contacts/create_contact" className="header-top__logo">
            Contact
          </NavLink>
        </motion.div>
        <motion.div className="header-top__navbar" layout>
          <motion.div className="header-top__navigation">
            <Navbar />
          </motion.div>
          <motion.hr className="header-top__seperator" />
        </motion.div>

      </motion.div >
      {showSearch && (
        <motion.div
          layout
          className="header-bottom"
          initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          
        >
          <SearchBar />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;
