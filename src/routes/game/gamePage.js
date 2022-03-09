import { useState, useEffect } from "react";

import database from "../../services/firebase";

import PokemonCard from "../../components/pokemonCard/pokemonCard";
import Layout from "../../components/layout/layout";

import s from "./style.module.css";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  const getPokemons = () => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }

  useEffect(() => {
    getPokemons();
  }, []);

  const handleAddPokemon = () => {
    const newKey = database.ref().child("pokemons").push().key;
    database.ref("pokemons/" + newKey).set(JSON.parse(JSON.stringify(Object.entries(pokemons)[0][1]))).then(()=>getPokemons());
  };
  const handleCardClick = (key) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemonProps = { ...item[1] };
        if (item[0] === key) {
          pokemonProps.active = !pokemonProps.active;
          database.ref("pokemons/" + item[0]).set(pokemonProps);
        }
        acc[item[0]] = pokemonProps;
        return acc;
      }, {});
    });
  };

  return (
    <Layout id={"game"} title={"Pokemon Game"}>
      <button onClick={handleAddPokemon}>add new pokemon</button>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, active }]) => (
            <PokemonCard
              dataKey={key}
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
    </Layout>
  );
};

export default GamePage;
