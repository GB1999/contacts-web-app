// const EditContact = () => {
//
//     return (
//       <section className='section'>
//         <h2>Edit Contact: {contact_id}</h2>
//       </section>
//     );
//   };
//   export default EditContact;

import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useDispatch } from "react-redux";
import { editContact } from "../features/contacts/contactsSlice";

const EditContact = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  let location = useLocation();
  let props = location.state;
  console.log(location);
  const [isFocused, setFocused] = useState(false);
  const [firstName_text, setFirstName] = useState(props.firstName);
  const [lastName_text, setLastName] = useState(props.lastName);
  const [email_text, setEmail] = useState(props.email);
  const [phone_text, setPhone] = useState(props.phone);

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    const editedContact = {
      id: props.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    };
    dispatch(editContact({ editedContact }));
  };

  const onError = () => {
    console.log("ERROR");
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      className="edit-contact"
    >
      <div className="header-spacer"></div>
      <motion.div className="edit-contact__card" layout>
        <AnimateSharedLayout>
          <motion.div className="edit-contact__form" layout>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <p className="form-label"> First Name</p>
              <motion.input
                whileHover={{ scale: 1.02 }}
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                className="text-input"
                {...register("firstName", {
                  required: "name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Format is not correct",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimum Name is 2",
                  },
                })}
                value={firstName_text}
                onChange={(event) => setFirstName(event.target.value)}
              />

              {errors.firstName && (
                <motion.p
                  className="form-alert"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  {errors.firstName.message}
                </motion.p>
              )}

              <p className="form-label"> Last Name</p>
              <motion.input
                whileHover={{ scale: 1.02 }}
                transition={{ layout: { duration: 1, type: "spring" } }}
                className="text-input"
                {...register("lastName", {
                  required: "Last name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Format is not correct",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimum length is 2",
                  },
                })}
                value={lastName_text}
                onChange={(event) => setLastName(event.target.value)}
              />

              {errors.lastName && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="form-alert"
                >
                  {errors.lastName.message}
                </motion.p>
              )}

              <p className="form-label"> Phone Number</p>
              <motion.input
                whileHover={{ scale: 1.02 }}
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                className="text-input"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i,
                    message: "Format is not correct",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimum Name is 2",
                  },
                })}
                value={phone_text}
                onChange={(event) => setPhone(event.target.value)}
              />

              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="form-alert"
                >
                  {errors.phone.message}
                </motion.p>
              )}

              <p className="form-label"> Email</p>
              <motion.input
                whileHover={{ scale: 1.02 }}
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                className="text-input"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+/i,
                    message: "Format is not correct",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimum Name is 2",
                  },
                })}
                value={email_text}
                onChange={(event) => setEmail(event.target.value)}
              />

              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="form-alert"
                >
                  {errors.email.message}
                </motion.p>
              )}

              <input
                type="submit"
                value="Save Contact"
                className="submit-btn"
              />
            </form>
          </motion.div>
        </AnimateSharedLayout>
      </motion.div>
    </motion.div>
  );
};
export default EditContact;
