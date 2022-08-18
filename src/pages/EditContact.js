// const EditContact = () => {
//
//     return (
//       <section className='section'>
//         <h2>Edit Contact: {contact_id}</h2>
//       </section>
//     );
//   };
//   export default EditContact;

import React from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion, AnimateSharedLayout } from "framer-motion";

const EditContact = () => {
  const { contact_id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //const [lastNameValid, setIsExpanded] = useState(false);

  const onSubmit = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="edit-contact"
      layout
    >
      <AnimateSharedLayout>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            layout
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

          {errors.phone && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {errors.phone.message}
            </motion.p>
          )}

          <input type="submit" value="Save Contact" className="submit-btn" />
        </form>
      </AnimateSharedLayout>
    </motion.div>
  );
};
export default EditContact;
