import { Route, useRouteMatch, Switch } from "react-router-dom";
import { useState } from "react";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import { PokemonContext } from "../../context/PokemonContext";

const GamePage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [finalCards, setFinalCards] = useState({});
  const match = useRouteMatch();
  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];
        return copyState;
      }
      return {
        ...prevState,
        [key]: pokemon,
      };
    });
  };
  const handlePlayerCards = (playerName, playerCards) => {
    setFinalCards((prevState) => {
      return {
        ...prevState,
        [playerName]: {...playerCards},
      };
    });
  };
  console.log("####: final Cards =>", finalCards)
  return (
    <PokemonContext.Provider
      value={{
        pokemon: selectedPokemons,
        onSelectedPokemons: handleSelectedPokemons,
        onFinishRound: handlePlayerCards,
        cardsForFinal: finalCards,
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
