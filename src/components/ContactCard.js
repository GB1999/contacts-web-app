import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaEdit, FaPhone, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdOpacity } from "react-icons/md";
import { useSelector } from "react-redux";
import cn from "classnames";

const ContactCard = ({
  id,
  firstName,
  lastName,
  phone,
  expandContact,
  selected,
}) => {
  const { isDeleting } = useSelector((state) => state.contacts);
  if (selected) console.log(`id ${id} is selected`);
  return (
    <div className={"contact-card"}>
      <div
        //   whileHover={{ scale: 1.02 }}
        //   transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => {
          expandContact(id);
        }}
        className={cn("contact-card__container", { selected:  selected  })}
      >
        <div layout className="contact-card__body">
          <div layout className="contact-card__section">
            <FaUserCircle className="contact-card__section__icon" />
            <div layout className="contact-card__section__information">
              <div layout className="contact-card__section__title">
                Name
              </div>
              <div layout className="contact-card__section__value">
                {firstName + " " + lastName}
              </div>
            </div>
          </div>
          <div className="contact-card__divider"></div>
          <div layout className="contact-card__section">
            <FaPhone className="contact-card__section__icon" />
            <div layout className="contact-card__section__information">
              <div layout className="contact-card__section__title">
                Phone
              </div>
              <div layout className="contact-card__section__value">
                {phone}
              </div>
            </div>
          </div>
        </div>
        <FaEdit layout className="contact-card__body__icon"></FaEdit>
      </div>
    </div>
  );
};
export default ContactCard;
