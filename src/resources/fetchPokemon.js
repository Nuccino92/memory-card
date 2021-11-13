const fetchPokemon = async (round, gen) => {
  let amount = 4;
  const pokeArray = [];

  if (round === 0) {
    amount = 4;
  } else {
    amount = round * 2 + amount;
  }
  for (let i = 1; i <= amount; i += 1) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;

    const response = await fetch(pokemonUrl);
    const pokemon = await response.json();
    const name = pokemon.name;
    const image = pokemon.sprites.front_default;
    const type = pokemon.types[0].type.name;
    pokeArray.push({ name, image, type });
  }

  return pokeArray;
};

export default fetchPokemon;
