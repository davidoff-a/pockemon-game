import s from "./header.module.css";
import cn from "classnames";

const Header = ({ title, descr, onClickButton }) => {
  const headerStyle = { color: "red" };
  const handleClick = () => {
    console.log("####: <Header/>");
    onClickButton && onClickButton();
  };
  return (
    <header className={cn(s.root)}>
      <div className={cn(s.forest)}></div>
      <div className={cn(s.container)}>
        <h1 style={headerStyle}>{title}</h1>
        <p>{descr}</p>
        <button onClick={handleClick}>Start Game</button>
      </div>
    </header>
  );
};

export default Header;
