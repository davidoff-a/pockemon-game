import { Route, useRouteMatch, Switch } from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import { PokemonContext } from "../../context/PokemonContext";

const GamePage = () => {
  const match = useRouteMatch();
  return (
    <PokemonContext.Provider value={{pokemon:[]}}>
    <Switch>
      <Route path={`${match.path}/`} exact component={StartPage} />
      <Route path={`${match.path}/board`} component={BoardPage} />
      <Route path={`${match.path}/finish`} component={FinishPage} />
    </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;