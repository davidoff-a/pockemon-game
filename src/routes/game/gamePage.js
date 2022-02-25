const GamePage = ({ onClickButton }) => {
  const handleClick = (page) => {
    onClickButton && onClickButton('app');
  };
  return (
    <div>
      <button onClick={handleClick}>back to Home Page</button>
    </div>
  );
};

export default GamePage;
