import s from "./menu.module.css";
import cn from "classnames";
const menuItems = [
  { title: "HOME", to: "#welcome" },
  { title: "GAME", to: "#game" },
  { title: "ABOUT", to: "#about" },
  { title: "CONTACT", to: "#contact" },
];
const Menu = ({ statusMenu }) => {
  console.log("#####: status of menu", statusMenu);
  return (
    <div className={cn(s.menuContainer, s[statusMenu])}>
      <div className={cn(s.overlay)} />
      <div className={cn(s.menuItems)}>
        <ul>
          {menuItems.map(({title, to}, index) =>
          (
            <li key = {index}>
              <a href={to}>{title}</a>
            </li>
          )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
