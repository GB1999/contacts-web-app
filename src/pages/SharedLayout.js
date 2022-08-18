import { Outlet } from "react-router-dom";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";

import Header from "../components/header/Header";
import SearchBar from "../components/SearchBar";
import FAB from "../components/fab/fab";
const SharedLayout = () => {

  const actions = [
    { label: "About", icon: <FcAbout />, onClick: console.log },
    { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
    { label: "Picture", icon: <FcCamera />, onClick: console.log },
    { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
  ];

  return (
    <>

      <Header />
      <FAB actions={actions}></FAB>
      <Outlet />
    </>
  );
};
export default SharedLayout;
