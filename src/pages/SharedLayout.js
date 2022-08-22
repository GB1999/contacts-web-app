import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../components/modal/Modal";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";


import contactsSlice from "../features/contacts/contactsSlice";
import modalSlice from "../features/modal/modalSlice";

const SharedLayout = () => {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <>
      {isOpen && <Modal />}
      <Header />
      <Outlet />
    </>
  );
};
export default SharedLayout;
