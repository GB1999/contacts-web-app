import { motion, AnimateSharedLayout } from "framer-motion";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";

import { useSelector, useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import ContactCard from "../components/ContactCard";
import ContactDetail from "../components/contactDetail/ContactDetail";
import {
  setIsExpanded,
  sortContacts,
  sortSearchResults,
} from "../features/contacts/contactsSlice";
import classNames from "classnames";

const Contacts = () => {
  const { contactEntries, searchResults, isSearching, isExpanded } =
    useSelector((state) => state.contacts);

  const [expandedID, setExpandedID] = useState(null);
  const [selectedContact, setSelectedContact] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const detailView = useRef(null);
  const dispatch = useDispatch();

  // expand contact callback for each card
  const expandContact = (id) => {
    setSelectedContact(
      contactEntries.find(function (e) {
        return e.id == id;
      })
    );
    console.log(id);
    //if contact is already expanded
    if (expandedID == id) {
      // collapse currently expanded conta
      dispatch(setIsExpanded(false));
      setExpandedID(null);
    } else {
      // if no contact expanded
      dispatch(setIsExpanded(true));
      setExpandedID(id);
    }

    console.log(selectedContact);
    console.log(`Expanding: ${isExpanded}`);
  };

  var detailClass = classNames({
    "contacts__detail-view ": true,
    expanded: isExpanded,
  });

  useEffect(() => {
     dispatch(sortContacts());
  });

  return (
    <>
      <motion.div className="header-spacer"></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="contacts"
      >
        <motion.div layout className="contacts__list">
          <AnimateSharedLayout>
            {isSearching
              ? searchResults.map((contact) => {
                  return (
                    <ContactCard
                      key={contact.id}
                      id={contact.id}
                      firstName={contact.firstName}
                      lastName={contact.lastName}
                      phone={contact.phone}
                      expandContact={expandContact}
                      selected={expandedID == contact.id ? true : false}
                    ></ContactCard>
                  );
                })
              : contactEntries.map((contact) => {
                  return (
                    
                    <ContactCard
                      key={contact.id}
                      id={contact.id}
                      firstName={contact.firstName}
                      lastName={contact.lastName}
                      phone={contact.phone}
                      email={contact.email}
                      expandContact={expandContact}
                      selected={expandedID == contact.id ? true : false}
                    ></ContactCard>
                  );
                })}
          </AnimateSharedLayout>
        </motion.div>
        <motion.div ref={detailView} className={detailClass}>
          <ContactDetail contact={selectedContact}></ContactDetail>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contacts;
