const { buildSchema } = require('graphql');

// Define the GraphQL schema for Pokémon
const schema = buildSchema(`
  type BaseStats {
    HP: Int
    Attack: Int
    Defense: Int
    SpAttack: Int
    SpDefense: Int
    Speed: Int
  }

  type Name {
    english: String
    japanese: String
    chinese: String
    french: String
  }

  type Pokemon {
    id: Int
    name: Name
    type: [String]
    base: BaseStats
  }

  type Query {
    pokemons: [Pokemon]
    pokemon(id: Int!): Pokemon
  }
`);

module.exports = schema;
