import { motion, AnimateSharedLayout } from "framer-motion";

import contacts from "../data/contactData";
import ContactCard from "../components/ContactCard";
const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimateSharedLayout>
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
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default Contacts;
