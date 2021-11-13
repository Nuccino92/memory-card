import React from "react";

const Card = (props) => {
  return (
    <div
      className="card"
      onClick={(e) => props.handleClick(props.pokemon.name)}
    >
      <div className="card-inner" id={props.pokemon.type}>
        <img src={props.pokemon.image} alt="pokemon" />
        <h3>{props.pokemon.name}</h3>
        <h4>{props.pokemon.type}</h4>
      </div>
    </div>
  );
};

export default Card;
