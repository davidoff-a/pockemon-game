import { Link } from "react-router-dom";

import s from "./menu.module.css";
import cn from "classnames";
const menuItems = [
  { title: "HOME", to: "#welcome" },
  { title: "GAME", to: "#game" },
  { title: "ABOUT", to: "#about" },
  { title: "CONTACT", to: "#contact" },
];
const Menu = ({ isOpen }) => {
  console.log("#####: status of menu", isOpen);

  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isOpen === true,
        [s.deactive]: isOpen === false,
      })}
    >
      <div className={s.overlay} />
      <div>
        <ul>
          {menuItems.map(({ title, to }, index) => (
            <li key={index}>
              <Link to={to}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
