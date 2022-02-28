import { useState } from "react";
import Navbar from "../navbar/navbar";
import Menu from "../menu/menu";

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const handleClickHamburger = (isOpen) => {
    console.log("#####: menu button has been clicked and status is", isOpen);
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <Menu isOpen={isOpen} onClickHamburg={handleClickHamburger} />
      <Navbar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHamburg={handleClickHamburger}
      />
    </>
  );
};

export default MenuHeader;
