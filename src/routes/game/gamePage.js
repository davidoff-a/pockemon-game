import MenuHeader from "../../components/MenuHeader/MenuHeader";

const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage("app");
  };
  return (
    <>
      <MenuHeader bgActive={true}/>
      <button onClick={handleClick}>back to Home Page</button>
    </>
  );
};

export default GamePage;
