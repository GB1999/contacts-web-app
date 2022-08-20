import { motion, AnimateSharedLayout } from "framer-motion";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";

import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import ContactCard from "../components/ContactCard";
import ContactDetail from "../components/ContactDetail";
import FAB from "../components/fab/fab";

const Contacts = () => {
  const { contactEntries, searchResults, isSearching } = useSelector(
    (state) => state.contacts
  );

  const [isExpanded, setExpanded] = useState(false);
  const [expandedID, setExpandedID] = useState(null);
  const [selectedContact, setSelectedContact] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const actions = [
    { label: "About", icon: <FcAbout />, onClick: console.log },
    { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
    { label: "Picture", icon: <FcCamera />, onClick: console.log },
    { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
  ];


  const detailView = useRef(null);

  const expandContact = (id) => {
    console.log(id);
    //if contact is already expanded
    if (expandedID == id) {
      detailView.current.classList.remove("expanded");
      setExpandedID(null);
      setSelectedContact(
        contactEntries.find(function (e) {
          return e.id == expandedID;
        })
      );
    } else {
      // if no contact expanded
      if (expandedID == null) {
        // console.log("Collapsing current expanded view");
        detailView.current.classList.add("expanded");
      } else {
        // console.log("Replacing Current expanded view");
      }
      setExpandedID(id);
      setSelectedContact(
        contactEntries.find(function (e) {
          return e.id == expandedID;
        })
      );
    }
    console.log(selectedContact);
    console.log(`Expanding: ${isExpanded}`);
  };

  return (
    <>
      <div className="header-spacer"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="contacts"
      >
        <div className="contacts__list">
        <FAB actions={actions}></FAB>
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
        </div>
        <div ref={detailView} className="contacts__detail-view">
          <ContactDetail contact={selectedContact}></ContactDetail>
        </div>
      </motion.div>
    </>
  );
};

export default Contacts;
