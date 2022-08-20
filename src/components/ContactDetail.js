import React from "react";
import { FaUserCircle, FaPhone } from "react-icons/fa";
const ContactDetail = () => {
  return (
    <div className="contact-detail">
      <div className="contact-detail__card">
        <div className="contact-detail__body">
          <div className="contact-detail__header">
            <FaUserCircle></FaUserCircle>
          </div>
          <div className="contact-detail__section">
           
            <FaPhone></FaPhone>
            <p>{}</p>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default ContactDetail;
