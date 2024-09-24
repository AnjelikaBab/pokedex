import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query GetPokemons {
    pokemons {
      id
      name {
        english
        japanese
        chinese
        french
      }
      type
      base {
        HP
        Attack
        Defense
        SpAttack  
        SpDefense  
        Speed
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query GetPokemon($id: Int!) {
    pokemon(id: $id) {
      id
      name {
        english
        japanese
        chinese
        french
      }
      type
      base {
        HP
        Attack
        Defense
        SpAttack 
        SpDefense 
        Speed
      }
    }
  }
`;
