import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setSearchPrefix,
  setIsSearching,
  setAscending,
  setSortBy,
  sortContacts,
  sortSearchResults,
} from "../../features/contacts/contactsSlice";
import { FaSearch, FaSort } from "react-icons/fa";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useForm } from "react-hook-form";
import cn from "classnames";
import "./SearchBar.css";
import classNames from "classnames";

const SearchBar = ({ placeholder, data }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
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

  var cancelClass = classNames({
    "search-bar__cancel": true,
    show: isFocused,
  });

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
          ref={inputRef}
          onFocus={() => {
            setFocused(true);
            dispatch(setIsSearching(true));
          }}
          onBlur={() => {
            setFocused(false);
          }}
          onChange={(event) => {
            dispatch(setSearchPrefix(event.target.value));
            dispatch(sortSearchResults());
          }}
          placeholder="Search for Contacts..."

        />
        <div
          className={cancelClass}
          onClick={() => {
            dispatch(setIsSearching(false));
            dispatch(setSearchPrefix(""));
            inputRef.current.value = "";
            dispatch(sortSearchResults());
          }}
        >
          Cancel
        </div>
      </motion.div>
      <motion.div layout className="search-bar__filter">
        <motion.div className="search-bar__sort-btn">
          <FaSort />
        </motion.div>
        <motion.div className="search-bar__sort-btn">Sort By:</motion.div>
        <DropDown />
      </motion.div>
    </motion.div>
  );
};

const DropDown = () => {
  const { isSearching } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const options = [
    { label: "First Name", value: "FIRST_NAME" },
    { label: "Last Name", value: "LAST_NAME" },
    { label: "Email", value: "EMAIL" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option) => () => {
    setSelectedOption(option.label);
    setIsOpen(false);

    dispatch(setSortBy(option.value));

    isSearching ? dispatch(sortSearchResults()) : dispatch(sortContacts());
  };

  return (
    <motion.div
      className="drop-down__container"
      layout
      transition={{ layout: { duration: 1, type: "spring" } }}
    >
      <motion.div className="drop-down__header" onClick={toggling}>
        {selectedOption || "Last Name"}
      </motion.div>
      {isOpen && (
        <motion.div className="drop-down__list__container" layout>
          <motion.div layout className="drop-down__list">
            {options.map((option) => (
              <li
                className="drop-down__list__item"
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                {option.label}
              </li>
            ))}
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchBar;
