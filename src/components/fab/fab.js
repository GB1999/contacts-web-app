import { useState } from "react";

import { MdDelete } from "react-icons/md";
import {  setDelete } from "../../features/contacts/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

import "./fab.css";

const FAB = ({ actions }) => {
    
    const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const mouseEnter = () => setOpen(true);

  const mouseLeave = () => setOpen(false);

  return (
    <ul
      className={"fab-container"}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <li
        className="fab-button"
        onClick={() => {
          console.log("DELETE CONTACTS");
          dispatch(setDelete(true));
        }}
      >
        <MdDelete />
        Delete Contact
      </li>
      {actions.map((action, index) => (
        <li
          style={{ transitionDelay: `${index * 25}ms` }}
          className={"fab-action"}
          key={action.label}
          onClick={action.onClick}
        >
          {action.icon}
          <span className="tooltip">{action.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default FAB;
