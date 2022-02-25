import s from "./header.module.css";
const Header = ({ title, descr, onClickButton }) => {
  const headerStyle = { color: "red" };
  const handleClick = () => {
    console.log("####: <Header/>");
    onClickButton && onClickButton();
  };
  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1 style={headerStyle}>{title}</h1>
        <p>{descr}</p>
        <button onClick={handleClick}>Start Game</button>
      </div>
    </header>
  );
};

export default Header;
