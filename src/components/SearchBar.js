import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchContacts, setSearch } from "../features/contacts/contactsSlice";
import { FaSearch, FaSort } from "react-icons/fa";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useForm } from "react-hook-form";

const SearchBar = ({ placeholder, data }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isFocused, setFocused] = useState(false);

  const onSubmit = (data, event) => {
    event.preventDefault();
  };

  const onError = () => {
    console.log("Submission Error");
  };

  const focusVarients = {
    notFocused: {
      borderColor: "#000",
      outerWidth: 0,
    },
    focused: {
      borderColor: "#111",
      outerWidth: 2,
    },
  };

  return (
    <motion.div
      className="search-bar"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="search-bar__container" layout>
        <FaSearch className="search-bar__icon" />
        <motion.input
          layout
          className="search-bar__input"
          whileHover={{ scale: 1.02 }}
          type="text"
          onFocus={() => {
            let toggle = true;
            dispatch(setSearch(toggle));
          }}
          onChange={(event) => {
            dispatch(searchContacts(event.target.value));
          }}
          placeholder="Search for Contacts..."
        />
      </motion.div>
      <motion.div layout className="search-bar__filter">
        <btn className="search-bar__sort-btn">
          <FaSort />
        </btn>
        <btn className="search-bar__sort-btn">
          Sort By:
        </btn>
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
