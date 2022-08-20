import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../components/Modal";
import Header from "../components/header/Header";
import SearchBar from "../components/SearchBar";
import FAB from "../components/fab/fab";

import contactsSlice from "../features/contacts/contactsSlice";
import modalSlice from "../features/modal/modalSlice";

const SharedLayout = () => {

  const {isOpen} = useSelector((state)=>state.modal);

  return (
    <>
      {isOpen && <Modal/>}
      <Header />
      <Outlet />
    </>
  );
};
export default SharedLayout;
