import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaPhone,
  FaMailBulk,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useDispatch } from "react-redux";

import {
  openModal,
  setModalContact,
  setModalType,
} from "../../features/modal/modalSlice";

import { setIsExpanded, setIsSearching, setSearchPrefix } from "../../features/contacts/contactsSlice";
import "./ContactDetail.css";

const ContactDetail = ({
  contact = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
}) => {
  const dispatch = useDispatch();
  const prevContactRef = useRef();

  const showDeleteModal = () => {
    let type = "DELETE";
    dispatch(setModalType(type));
    dispatch(setModalContact(contact));
    dispatch(openModal());
  };

  useEffect(() => {
    console.log(prevContactRef.current);

    prevContactRef.current = contact;
  }, [contact]);

  return (
    <div className="contact-detail">
      <div className="contact-detail__card">
        <div className="contact-detail__body">
          <div className="contact-detail__header">
            <div className="contact-detail__header__icon">
              <FaUserCircle />
            </div>
            <div className="contact-detail__header__name">
              {contact.firstName + " " + contact.lastName}
            </div>
          </div>
          <div className="contact-detail__divider"></div>

          <div key={contact.id} className="contact-detail__section">
            <div className="contact-detail__section__icon">
              <FaPhone></FaPhone>
              </div>
            {contact.phone}
          </div>

          <div className="contact-detail__divider"></div>
          <div className="contact-detail__section">
          <div className="contact-detail__section__icon">
              <FaMailBulk></FaMailBulk>
              </div>
            {contact.email}
          </div>
          <div className="contact-detail__divider"></div>

          <div className="contact-detail__spacer"></div>

          <Link to={`/contacts/edit_contact/`} state={{ contact: contact }}
            className="contact-detail__section edit"
            onClick={() => {
              dispatch(setIsExpanded(false));
              dispatch(setIsSearching(false));
              dispatch(setSearchPrefix(""));
            }}
          >
            <div className="contact-detail__section__icon">
              <FaEdit></FaEdit>
              </div>
            
              Edit Contact
            </Link>
          
          <div
            className="contact-detail__section delete"
            onClick={() => {
              showDeleteModal();
            }}
          >
            <div className="contact-detail__section__icon">
              <FaTrash></FaTrash>
              </div>

            {"Delete Contact"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
