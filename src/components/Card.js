import React from "react";

const Card = (props) => {
  return (
    <div
      className="card"
      onClick={(e) => props.handleClick(props.pokemon.name)}
    >
      <div
        className={
          props.pokemon.image.includes("shiny")
            ? "card-inner shiny-style"
            : "card-inner"
        }
        id={props.pokemon.type}
      >
        <img src={props.pokemon.image} alt="pokemon" />
        <h3
          style={props.pokemon.image.includes("shiny") ? shinyStyle : undefined}
        >
          {props.pokemon.name}
        </h3>
        <h4>{props.pokemon.type} type</h4>
      </div>
    </div>
  );
};

const shinyStyle = {
  color: "gold",
};

export default Card;
