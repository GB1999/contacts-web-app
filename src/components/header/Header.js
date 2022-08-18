import React from "react";
import { motion } from "framer-motion";

import Navbar from "../Navbar";

import "./Header.css";
import SearchBar from "../SearchBar";
import { useState, useEffect } from "react";

const Header = () => {
  const [showSearch, shouldShowSearch] = useState(false);
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
    <motion.div className="header">
      <div className="header-top">
        <div className="header-top__logo">
          <a href="/" className="header-logo">
            Contacts
          </a>
        </div>
        <div className="header-top__navbar">
          <div className="header-top__navigation">
            <Navbar />
          </div>
          <hr className="header-top__seperator" />
        </div>
      </div>
      <motion.div
        className="header-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: showSearch? 1 : 0 }}
        transition={{ opacity: { duration: 0.2 } }}
      >
        <SearchBar />
      </motion.div>
    </motion.div>
  );
};

export default Header;
