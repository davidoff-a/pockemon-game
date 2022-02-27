import s from "./menu.module.css";
import cn from "classnames";

const Menu = ({ statusMenu }) => {
  console.log("#####: status of menu", statusMenu);
  return (
    <div className={cn(s.menuContainer, s[statusMenu])}>
      <div className={cn(s.overlay)} />
      <div className={cn(s.menuItems)}>
        <ul>
          <li>
            <a href='#welcome'>HOME</a>
          </li>
          <li>
            <a href='#game'>GAME</a>
          </li>
          <li>
            <a href='#about'>ABOUT</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
