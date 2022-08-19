import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactCard = ({ id, firstName, lastName, phone, email }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="contact-card"
    >
      <motion.div layout className="contact-card__body">
        <motion.h2 layout className="contact-card__name">
          {firstName + " " + lastName}
        </motion.h2>
        <motion.p layout className="contact-card__phone">
          {phone}
        </motion.p>
        {isExpanded && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="contact-card__phone"
          >
            {email}
          </motion.p>
        )}
      </motion.div>
      <motion.div layout className="contact-card__body">
        <Link
          to={`/contacts/edit_contact/:id${id}`}
          state={{
            id: id,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
          }}
          className="contact-card__btn"
        >
          Edit Contact
        </Link>
      </motion.div>
    </motion.div>
  );
};
export default ContactCard;
