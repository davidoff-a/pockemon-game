import { PokemonContext } from "../../../../context/PokemonContext";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../../../components/pokemonCard";

import s from "./style.module.css";
import { useState } from "react";

const BoardPage = () => {
  const [board, setBoard] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const { pokemon } = useContext(PokemonContext);
  const history = useHistory();
console.log("####: player2", player2);
  // if (Object.keys(pokemon).length===0) {
  //   history.replace('/game');
  // }
  useEffect(async () => {
    const boardRequest = await fetch(
      "https://reactmarathon-api.netlify.app/api/board"
    );
    const boardResponse = await boardRequest.json();
    setBoard(boardResponse.data);
    const player2Request = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
    const player2Response = await player2Request.json();
    setPlayer2(player2Response.data);
  }, []);

  const handleClickBoardPlate = (position) => {
    console.log("####: position", position);
  };

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {Object.values(pokemon).map(
          ({ id, name, img, type, values, selected }) => (
            <PokemonCard
              className={s.card}
              key={id}
              // dataKey={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              minimize
              isActive={true}
              isSelected={selected}
            />
          )
        )}
      </div>
      <div className={s.board}>
        {board.map((boardPlate) => (
          <div
            key={boardPlate.position}
            className={s.boardPlate}
            onClick={() =>
              !boardPlate.card && handleClickBoardPlate(boardPlate.position)
            }
          >
            {boardPlate.card && <PokemonCard {...board} minimize />}
          </div>
        ))}
      </div>
      <div className={s.playerTwo}>
        {player2.map(
          ({ id, name, img, key, type, values, selected }) => (
            <PokemonCard
              className={s.card}
              key={id}
              // dataKey={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              minimize
              isActive={true}
              isSelected={selected}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BoardPage;
