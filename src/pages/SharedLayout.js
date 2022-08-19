import { Outlet } from "react-router-dom";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../components/Modal";
import Header from "../components/header/Header";
import SearchBar from "../components/SearchBar";
import FAB from "../components/fab/fab";

import contactsSlice from "../features/contacts/contactsSlice";
import modalSlice from "../features/modal/modalSlice";

const SharedLayout = () => {

  const {isOpen} = useSelector((state)=>state.modal);
  const actions = [
    { label: "About", icon: <FcAbout />, onClick: console.log },
    { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
    { label: "Picture", icon: <FcCamera />, onClick: console.log },
    { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
  ];

  return (
    <>
      {isOpen && <Modal/>}
      <Header />
      <FAB actions={actions}></FAB>
      <Outlet />
    </>
  );
};
export default SharedLayout;
