import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import database from "../../services/firebase";

import PokemonCard from "../../components/pokemonCard/pokemonCard";

import s from "./style.module.css";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);
  console.log("####: pokemons =>", Object.entries(pokemons));
  const backHistory = useHistory();
  const handleClick = () => {
    backHistory.push("/");
  };
  const handleCardClick = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemonProps = { ...item[1] };
        if (pokemonProps.id === id) {
          pokemonProps.active = !pokemonProps.active;
          database.ref("pokemons/" + item[0]).set({ ...pokemonProps });
        }
        acc[item[0]] = pokemonProps;
        return acc;
      }, {});
    });
  };

  return (
    <>
      <button onClick={handleClick}>back to Home Page</button>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, active }]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              onCardClick={handleCardClick}
              isActive={active}
            />
          )
        )}
      </div>
    </>
  );
};

export default GamePage;
