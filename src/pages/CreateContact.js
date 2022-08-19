// const CreateContact = () => {
//
//     return (
//       <section className='section'>
//         <h2>Edit Contact: {contact_id}</h2>
//       </section>
//     );
//   };
//   export default CreateContact;

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contacts/contactsSlice";

const CreateContact = () => {
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
    const newContact = {
      id: 1,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    };
    dispatch(addContact({newContact }));
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
      <motion.div className="edit-contact__card" layout>
        <AnimateSharedLayout>
          <motion.div className="edit-contact__form" layout>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <p className="form-label"> First Name</p>
              <motion.input
                whileHover={{ scale: 1.02 }}
                transition={{ layout: { duration: 1, type: "spring" } }}
                animate={!isFocused ? "notFocused" : "focused"}
                variants={focusVarients}
                layout
                onFocus={(focus) => {
                  setFocused(focus);
                  console.log(isFocused);
                }}
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
                placeholder="john"
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
                whileFocus={{ borderColor: "#FFF" }}
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
                placeholder="doe"
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
                placeholder="1321"
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
                placeholder="jd@gmail.com"
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
                value="Create Contact"
                className="submit-btn"
              />
            </form>
          </motion.div>
        </AnimateSharedLayout>
      </motion.div>
    </motion.div>
  );
};
export default CreateContact;
