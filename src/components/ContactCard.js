import React from 'react'
import { NavLink } from "react-router-dom";
const ContactCard = ({id, firstName, lastName, phone}) => {
  return (
    <div className='contact-card'>
        <div className='contact-card__body'>
            <h2 className='contact-card__name'>{firstName + " " + lastName}</h2>
            <p className='contact-card__phone'>{phone}</p>

        </div>
        <div className='contact-card__body'><NavLink to={`/contacts/edit_contact/:id${id}`} className="contact-card__btn">Edit Contact</NavLink></div>
        
    </div>
  )
}
export default ContactCard;