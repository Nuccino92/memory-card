import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import { shuffle } from "../resources/shuffle";
import fetchPokemon from "../resources/fetchPokemon";
import Card from "./Card";
import { checkRound } from "../helpers/checkRound";
import ClipLoader from "react-spinners/ClipLoader";

const GameBoard = () => {
  const [pokemon, setPokemon] = useState([]);
  const [round, setRound] = useState(0);
  const [gen, setGen] = useState(1);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState();
  const [levelUp, setLevelUp] = useState();

  const handleClick = (name) => {
    const findName = selected.find((val) => val === name);
    if (findName) {
      setGameOver(true);
      return resetGame(gen);
    }
    shuffle(pokemon);
    setScore((prev) => prev + 1);

    // add name to the end of the array
    setSelected((prev) => [...prev, name]);
  };

  useEffect(() => {
    if (checkRound(round, score)) {
      setRound((prev) => prev + 1);
      setSelected([]);
      setLoading(true);
      setLevelUp(true);
    }
  }, [round, score]);

  useEffect(() => {
    setLoading(true);
    const getCards = async () => {
      setPokemon(await fetchPokemon(round, gen));
    };
    getCards();
    setLoading(false);
  }, [round, gen]);

  const resetGame = (gen) => {
    setGen(gen);
    shuffle(pokemon);
    setRound(0);
    setScore(0);
    return setSelected([]);
  };

  useEffect(() => {
    setTimeout(() => setGameOver(false), 300);
  }, [gameOver]);

  useEffect(() => {
    setTimeout(() => setLevelUp(false), 700);
  }, [levelUp]);

  return (
    <div
      className={
        gameOver
          ? "gameboardContainer redFlash"
          : levelUp
          ? "gameboardContainer level-up"
          : " gameboardContainer"
      }
    >
      {loading ? (
        <ClipLoader size={100} color={"white"} loading={loading} />
      ) : (
        <div className={"gameboard"}>
          <div className="gameboard-card-container">
            {pokemon.map((each, index) => {
              return (
                <Card
                  id={index}
                  pokemon={each}
                  key={uniqid()}
                  handleClick={handleClick}
                />
              );
            })}
          </div>

          <div className="scoreboard">
            <button className="genBtn1" onClick={() => resetGame(1)}>
              Gen 1
            </button>
            <div className="score">{score}</div>
            <button className="genBtn2" onClick={() => resetGame(2)}>
              Gen 2
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
