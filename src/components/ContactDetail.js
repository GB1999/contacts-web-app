import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaPhone,
  FaMailBulk,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openModal, setModalContact, setModalType } from "../features/modal/modalSlice";

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

  const showDeleteModal = () => {
    let type = "DELETE"
    dispatch(setModalType(type));
    dispatch(setModalContact(contact))
    dispatch(openModal());
  };

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
          <div className="contact-detail__section">
            <FaPhone></FaPhone>
            {contact.phone}
          </div>
          <div className="contact-detail__divider"></div>
          <div className="contact-detail__section">
            <FaMailBulk></FaMailBulk>
            {contact.email}
          </div>
          <div className="contact-detail__divider"></div>

          <div className="contact-detail__spacer"></div>

          <div className="contact-detail__section edit">
            <FaEdit />
            <Link to={`/contacts/edit_contact/`} state={{ contact: contact }}>
              Edit Contact
            </Link>
          </div>
          <div
            className="contact-detail__section delete"
            onClick={() => {
              showDeleteModal();
            }}
          >
            <FaTrash />

            {"Delete Contact"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
