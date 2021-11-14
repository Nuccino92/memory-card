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

  const handleClick = (name) => {
    const gameOver = selected.find((val) => val === name);
    if (gameOver) {
      shuffle(pokemon);
      setRound(0);
      setScore(0);

      return setSelected([]);
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
    }
  }, [score]);

  useEffect(() => {
    setLoading(true);
    const getCards = async () => {
      setPokemon(await fetchPokemon(round, gen));
    };
    getCards();
    setLoading(false);
  }, [round, gen]);

  return (
    <div className="gameboard">
      {loading ? (
        <ClipLoader size={100} color={"white"} loading={loading} />
      ) : (
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
      )}
      <button onClick={() => setGen(1)}>Gen 1</button>
      <button onClick={() => setGen(2)}>Gen 2</button>
    </div>
  );
};

export default GameBoard;
