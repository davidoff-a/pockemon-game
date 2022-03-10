import { useState, useEffect, useContext } from "react";

import { fireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/PokemonContext";

import PokemonCard from "../../../../components/pokemonCard";
import s from "./style.module.css";

const StartPage = () => {
  const firebase = useContext(fireBaseContext);
  const pokemonContext = useContext(PokemonContext);
  console.log("####: PokemonContext =>", pokemonContext);
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
    return () => firebase.offPokemonSoket();
  }, []);

  const handleChangeSelected = (key) => {
    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }));
  };

  return (
    // <PokemonContext.Provider>
    <>
      <div className={s.buttonWrap}>
        <button>start game</button>
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
              onClickCard={() => handleChangeSelected(key)}
              isActive={true}
              isSelected={selected}
            />
          )
        )}
      </div>
    </>
    // </PokemonContext.Provider>
  );
};

export default StartPage;
