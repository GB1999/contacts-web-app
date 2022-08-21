import React from "react";
import { FaUserCircle, FaPhone, FaMailBulk, FaEdit, FaTrash } from "react-icons/fa";
const ContactDetail = ({ firstName, lastName, phone }) => {
  return (
    <div className="contact-detail">
      <div className="contact-detail__card">
        <div className="contact-detail__body">
          <div className="contact-detail__header">
            <div className="contact-detail__header__icon">
              <FaUserCircle/>
            </div>
            <div className="contact-detail__header__name">{firstName}</div>
          </div>
          <div className="contact-detail__divider"></div>
          <div className="contact-detail__section">
            <FaPhone></FaPhone>
            {"9567152614"}
          </div>
          <div className="contact-detail__divider"></div>
          <div className="contact-detail__section">
            
            <FaMailBulk></FaMailBulk>
            {"gagebenham@live.com"}
          </div>
          <div className="contact-detail__divider"></div>

          <div className="contact-detail__spacer"></div>

          <div className="contact-detail__section edit">
            
            <FaEdit/>
            {"Edit Contact"}
            <p>{}</p>
          </div>
          <div className="contact-detail__section delete">
            
            <FaTrash/>
            {"Delete Contact"}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
