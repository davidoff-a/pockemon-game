import cn from "classnames";
import { useState } from "react";
import s from "./navbar.module.css";


const Navbar = ({onClickMenuBtn}) => {
  const [isBtnMenuActive, setBtnMenuActive] = useState(false);
  const handleClickBtnMenu = () => {
    console.log("#### isActive - ", isBtnMenuActive);
    setBtnMenuActive(isBtnMenuActive ? false : true);
    onClickMenuBtn && onClickMenuBtn(isBtnMenuActive ? 'deactive' : 'active');
  };
  return (
    <nav className={cn(s.root)}>
      <div className={cn(s.navWrapper)}>
        <p className={cn(s.brand)}>LOGO</p>
        <a
          className={cn(s.menuButton, { [s.active]: isBtnMenuActive })}
          onClick={handleClickBtnMenu}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
