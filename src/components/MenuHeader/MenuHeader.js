import { useState } from "react";
import Navbar from "../navbar/navbar";
import Menu from "../menu/menu";

const MenuHeader = () => {
  const [menuStatus, setStatus] = useState("deactive");
  const handleClickMenuBtn = (menuStatus) => {
    console.log(
      "#####: menu button has been clicked and status is",
      menuStatus
    );
    setStatus(menuStatus);
  };
  return (
    <>
      <Menu statusMenu={menuStatus} />
      <Navbar onClickMenuBtn={handleClickMenuBtn} />
    </>
  );
};

export default MenuHeader;
