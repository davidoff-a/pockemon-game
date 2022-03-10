import { useState, useEffect, useContext } from "react";

import { useHistory } from "react-router-dom";
import { fireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/PokemonContext";

import PokemonCard from "../../../../components/pokemonCard";
import s from "./style.module.css";

const StartPage = () => {
  const firebase = useContext(fireBaseContext);
  const pokemonContext = useContext(PokemonContext);
  const history = useHistory();
  const [pokemons, setPokemons] = useState({});
  console.log("####: pokemonContext =>", pokemonContext);

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
    return () => firebase.offPokemonSoket();
  }, []);

  const handleChangeSelected = (key) => {
    const pokemon = { ...pokemons[key] };
    pokemonContext.onSelectedPokemons(key, pokemon);
    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }));
  };
  const handleStartGameClick = () => {
    history.push("/game/board");
  };
  return (
    <>
      <div className={s.buttonWrap}>
        <button
          onClick={handleStartGameClick}
          disabled={Object.keys(pokemonContext.pokemon).length < 5}
        > 
          start game
        </button>
      </div>

      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, selected }]) => (
            <PokemonCard
              className={s.card}
              key={key}
              dataKey={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              onClickCard={() => {
                if (
                  Object.keys(pokemonContext.pokemon).length < 5 ||
                  selected
                ) {
                  handleChangeSelected(key);
                }
              }}
              isActive={true}
              isSelected={selected}
            />
          )
        )}
      </div>
    </>
  );
};

export default StartPage;
