import { motion, AnimateSharedLayout } from "framer-motion";
import { useSelector } from "react-redux";
import ContactCard from "../components/ContactCard";

const Contacts = () => {
  const {contacts} = useSelector((state)=>state.contacts);
  return (
    <>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contacts"
    >
      <AnimateSharedLayout>
        {contacts.map((contact) => {
          return (
            <ContactCard
            key={contact.id}
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
          </>
  );
};




export default Contacts;
