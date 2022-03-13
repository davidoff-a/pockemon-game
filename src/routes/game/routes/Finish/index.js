import { PokemonContext } from "../../../../context/PokemonContext";
import { useHistory } from "react-router-dom";


const FinishPage = () => {
  const history = useHistory();

  const handleEndGame = () => {
    history.push("/game");
  };
  return (
    <>
      <div className='buttonWrap'>
        <button onClick={handleEndGame}>End Game</button>
      </div>
    </>
  );
};

export default FinishPage;
