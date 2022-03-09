import { useState, useEffect, useContext } from "react";

import { fireBaseContext } from "../../context/firebaseContext";

import PokemonCard from "../../components/pokemonCard/pokemonCard";
import Layout from "../../components/layout/layout";

import s from "./style.module.css";

const DATA = {
  abilities: ["keen-eye", "tangled-feet", "big-pecks"],
  base_experience: 122,
  height: 11,
  weight: 300,
  id: 17,
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
  name: "pidgeotto",
  stats: {
    hp: 63,
    attack: 60,
    defense: 55,
    "special-attack": 50,
    "special-defense": 50,
    speed: 71,
  },
  type: "normal",
  values: {
    top: 7,
    right: 5,
    bottom: 1,
    left: 2,
  },
};

const GamePage = () => {
  const firebase = useContext(fireBaseContext);
  console.log("#### firebase =>", firebase);
  const [pokemons, setPokemons] = useState({});

  // const getPokemons = async () => {
  //   const response = await firebase.getPokemonsOnce();
    
  // };

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);

  const handleAddPokemon = () => {
    const pokemonData = DATA;
    firebase.addPokemon(pokemonData);
  };

  const handleCardClick = (key) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemonProps = { ...item[1] };
        if (item[0] === key) {
          pokemonProps.active = !pokemonProps.active;
          firebase.postPokemon(item[0], pokemonProps);
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
              key={key}
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
