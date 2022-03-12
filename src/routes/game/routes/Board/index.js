import { PokemonContext } from "../../../../context/PokemonContext";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from "../../../../components/pokemonCard";
import PlayerBoard from "../Board/component/playerBoard";

import s from "./style.module.css";
import { useState } from "react";

const counterWin = (board, player1, player2) => {
  let player1Count = player1.length;
  let player2Count = player2.length;
  board.forEach((boardPlate) => {
    if (boardPlate.card.possession === "red") {
      player2Count++;
    }
    if (boardPlate.card.possession === "blue") {
      player1Count++;
    }
  });
  return [player1Count, player2Count];
};

const BoardPage = () => {
  const { pokemon } = useContext(PokemonContext);
  const [board, setBoard] = useState([]);
  const [player1, setPlayer1] = useState(() => {
    return Object.values(pokemon).map((item) => ({
      ...item,
      possession: "blue",
    }));
  });
  const [player2, setPlayer2] = useState([]);
  const [choosenCard, setChoosenCard] = useState(null);
  const [steps, setSteps] = useState(0);
  const [endGame, setEndGame] = useState(false);

  const history = useHistory();
  console.log("####: player2", player2);
  if (Object.keys(pokemon).length === 0) {
    history.replace("/game");
  }

  useEffect(() => {
    async function fetchData() {
      const boardRequest = await fetch(
        "https://reactmarathon-api.netlify.app/api/board"
      );
      const boardResponse = await boardRequest.json();
      setBoard(boardResponse.data);
      const player2Request = await fetch(
        "https://reactmarathon-api.netlify.app/api/create-player"
      );
      const player2Response = await player2Request.json();
      setPlayer2(() => {
        return player2Response.data.map((item) => ({
          ...item,
          possession: "red",
        }));
      });
    }
    fetchData();
  }, []);

  const handleClickBoardPlate = async (position) => {
    // console.log("####: position", position);
    // console.log("####: choosenCard", choosenCard);
    if (choosenCard) {
      const params = { position, card: choosenCard, board };

      const res = await fetch(
        "https://reactmarathon-api.netlify.app/api/players-turn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        }
      );

      const request = await res.json();

      console.log("####: request", request);
      if (choosenCard.player === 1) {
        setPlayer1((prevSate) =>
          prevSate.filter((pokemon) => pokemon.id !== choosenCard.id)
        );
      }
      if (choosenCard.player === 2) {
        setPlayer2((prevSate) =>
          prevSate.filter((pokemon) => pokemon.id !== choosenCard.id)
        );
      }
      setBoard(request.data);
      setSteps((prevSate) => {
        const count = prevSate + 1;
        return count;
      });
    }
  };

  useEffect(() => {
    if (steps === 9) {
      const [count1, count2] = counterWin(board, player1, player2);
      if (count1 > count2) {
        alert("WIN!");
      } else if (count1 < count2) {
        alert("LOSE!");
      } else {
        alert("DRAW!");
      }
      setEndGame(true);
    }
  }, [steps]);

  if (endGame) {
    history.replace("/game/finish");
  }

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        <PlayerBoard
          player={1}
          cards={player1}
          onClickCard={(card) => setChoosenCard(card)}
        />
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
            {boardPlate.card && (
              <PokemonCard {...boardPlate.card} isActive minimize />
            )}
          </div>
        ))}
      </div>
      <div className={s.playerTwo}>
        <PlayerBoard
          player={2}
          cards={player2}
          onClickCard={(card) => setChoosenCard(card)}
        />
      </div>
    </div>
  );
};

export default BoardPage;
