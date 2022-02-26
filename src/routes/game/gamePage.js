const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage("app");
  };
  return (
    <div>
      <button onClick={handleClick}>back to Home Page</button>
    </div>
  );
};

export default GamePage;
