const fetchPokemon = async (round, gen) => {
  let amount = 4;
  let duplicates = [];
  const pokeArray = [];

  if (round === 0) {
    amount = 4;
  } else {
    amount = round * 2 + amount;
  }

  for (let i = 1; i <= amount; i += 1) {
    let number;
    if (gen === 1) {
      number = Math.round(Math.random() * (152 - 1) + 1);
    } else {
      number = Math.round(Math.random() * (252 - 152) + 152);
    }

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${number}`;

    const response = await fetch(pokemonUrl);
    const pokemon = await response.json();

    let rarity = Math.round(Math.random() * (100 - 1) + 1);
    rarity > 10
      ? (rarity = pokemon.sprites.front_default)
      : (rarity = pokemon.sprites.front_shiny);

    const name = pokemon.name;
    const image = rarity;
    const type = pokemon.types[0].type.name;

    // if random pulls duplicates it recalls the funtion to avoid having same cards on board
    if (duplicates.includes(name)) {
      return fetchPokemon(round, gen);
    }

    pokeArray.push({ name, image, type });
    duplicates.push(name);
  }

  return pokeArray;
};

export default fetchPokemon;
