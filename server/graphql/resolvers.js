const pokedex = require('../data/pokedex.json');  // Load the Pokémon data

//Resolvers tell Apollo Server how to fetch the data associated with a particular type.

const resolvers = {
  pokemons: () => pokedex,  // return all pokemon 
  pokemon: ({ id }) => pokedex.find(pokemon => pokemon.id === id),  // return a pokemon from its ID
};

module.exports = resolvers;
