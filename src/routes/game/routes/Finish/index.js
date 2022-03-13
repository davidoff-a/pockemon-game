import { PokemonContext } from "../../../../context/PokemonContext";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import PokemonCard from "../../../../components/pokemonCard";

const FinishPage = () => {
  const history = useHistory();
  const { cardsForFinal } = useContext(PokemonContext);

  const handleEndGame = () => {
    history.push("/game");
  };
  console.log("####: finish cardsForFinal =>", cardsForFinal);

  return (
    <>
      <div className='wrap'>
        {cardsForFinal}
      </div>
      <div className='buttonWrap'>
        <button onClick={handleEndGame}>End Game</button>
      </div>
    </>
  );
};

export default FinishPage;
