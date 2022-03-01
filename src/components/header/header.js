import { useHistory } from "react-router-dom";
import cn from "classnames";

import s from "./header.module.css";

const Header = ({ title, children, onClickButton }) => {
  const history = useHistory();
  const headerStyle = { color: "red" };
  const handleClick = () => {
    history.push('/game');
    console.log("####: <Header/>");
    onClickButton && onClickButton();
  };
  return (
    <header className={cn(s.root)}>
      <div className={cn(s.forest)}></div>
      <div className={s.silhouette}></div>
      <div className={s.moon}></div>
      <div className={cn(s.container)}>
        <h1 style={headerStyle}>{title}</h1>
        {children}
        <button onClick={handleClick}>Start Game</button>
      </div>
    </header>
  );
};

export default Header;
