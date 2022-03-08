import { useState } from "react";
import Navbar from "../navbar/navbar";
import Menu from "../menu/menu";

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const handleClickHamburger = () => {
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
