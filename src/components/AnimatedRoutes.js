import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Contacts from "../pages/Contacts";
import SharedLayout from "../pages/SharedLayout";
import EditContact from "../pages/EditContact";
import CreateContact from "../pages/CreateContact";
import Error from "../pages/Error";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/contacts" element={<SharedLayout />}>
          <Route index element={<Contacts />} />
          <Route path="create_contact" element={<CreateContact />} />
          <Route path="edit_contact/:contact_id" element={<EditContact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
