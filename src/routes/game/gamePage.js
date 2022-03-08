import { useState, useEffect } from "react";

import database from "../../services/firebase";

import PokemonCard from "../../components/pokemonCard/pokemonCard";
import Layout from "../../components/layout/layout";

import s from "./style.module.css";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);
    base_experience: 122,
    height: 11,
    id: 17,
    values: {
      top: "A",
      right: 2,
      bottom: 7,
      left: 5,
    },
  },
  {
    abilities: ["intimidate", "shed-skin", "unnerve"],
    stats: {
      hp: 60,
      attack: 95,
      defense: 69,
      "special-attack": 65,
      "special-defense": 79,
      speed: 80,
    },
    type: "poison",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    name: "arbok",
    base_experience: 157,
    height: 35,
    id: 24,
    values: {
      top: 5,
      right: 9,
      bottom: "A",
      left: "A",
    },
  },
  {
    abilities: ["static", "lightning-rod"],
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      "special-attack": 50,
      "special-defense": 50,
      speed: 90,
    },
    type: "electric",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    name: "pikachu",
    base_experience: 112,
    height: 4,
    id: 25,
    values: {
      top: 8,
      right: "A",
      bottom: 9,
      left: 6,
    },
  },
  {
    abilities: ["overgrow", "chlorophyll"],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      "special-attack": 65,
      "special-defense": 65,
      speed: 45,
    },
    type: "grass",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    name: "bulbasaur",
    base_experience: 64,
    height: 7,
    id: 1,
    values: {
      top: 8,
      right: 4,
      bottom: 2,
      left: 7,
    },
  },
  {
    abilities: ["blaze", "solar-power"],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      "special-attack": 60,
      "special-defense": 50,
      speed: 65,
    },
    type: "fire",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    name: "charmander",
    base_experience: 62,
    height: 6,
    id: 4,
    values: {
      top: 7,
      right: 6,
      bottom: 1,
      left: 4,
    },
  },
];
  const handleClick = () => {
    const newKey = database.ref().child("pokemons").push().key;
    database.ref("pokemons/" + newKey).set(JSON.parse(JSON.stringify(Object.entries(pokemons)[0][1])));
  };
  const handleCardClick = (key) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemonProps = { ...item[1] };
        if (item[0] === key) {
          pokemonProps.active = !pokemonProps.active;
          database.ref("pokemons/" + item[0]).set({ ...pokemonProps });
        }
        acc[item[0]] = pokemonProps;
        return acc;
      }, {});
    });
  };

  return (
    <Layout id={'game'} title={"Pokemon Game"} >
      <button onClick={handleClick}>add new pokemon</button>
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
          ))}
        </div>
      </Layout>
  );
};

export default GamePage;
