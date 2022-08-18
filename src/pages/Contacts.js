import { Link } from "react-router-dom";

import contacts from "../data/contactData";
import ContactCard from "../components/ContactCard";
const Contacts = () => {
  return (
    
      <div>
        {contacts.map((contact) => {
          return (
            <ContactCard
              id={contact.id}
              firstName={contact.firstName}
              lastName={contact.lastName}
              phone={contact.phone}
              email={contact.email}
            ></ContactCard>
          );
        })}
      </div>

  );
};

export default Contacts;
