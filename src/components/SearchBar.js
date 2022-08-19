import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchContacts, setSearch } from "../features/contacts/contactsSlice";

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
    <div className="search-bar">
      <div>
        <motion.input
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


        <div className="searchIcon"></div>
      </div>
    </div>
  );
};

export default SearchBar;
