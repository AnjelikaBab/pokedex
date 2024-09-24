import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_POKEMON } from '../../graphql/queries';
import './pokemonDetail.css'; // Still keeping general styles like layout and margins

function PokemonDetail() {
  const { id } = useParams(); // Get the ID from the URL params
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { id: parseInt(id) }, // Ensure ID is passed as an integer
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemon = data?.pokemon;

  if (!pokemon) return <p>No Pokémon found.</p>;

  // Max stat value for calculating percentage (for demonstration purposes)
  const maxStatValue = 255;

  const getStatPercentage = (stat) => (stat / maxStatValue) * 100;

  return (
    <div className="pokemon-detail-container">
      <h1>{pokemon.name.english}</h1>
      <img src={`https://img.pokemondb.net/artwork/${pokemon.name.english.toLowerCase()}.jpg`} alt={pokemon.name.english} />
      <h2>Base Stats:</h2>
      <ul>


        <li>
          <div className="stat-bar">
            <span className="stat-label">HP: {pokemon.base.HP}</span>
            <div
              className="stat-bar-fill"
              style={{ width: `${getStatPercentage(pokemon.base.HP)}%`, backgroundColor: '#caffbf' }} // Green for HP
            ></div>
          </div>
        </li>


        <li>
          <div className="stat-bar">
            <span className="stat-label">Attack: {pokemon.base.Attack}</span>
            <div
              className="stat-bar-fill"
              style={{ width: `${getStatPercentage(pokemon.base.Attack)}%`, backgroundColor: '#ffadad' }} // Red for Attack
            ></div>
          </div>
        </li>


        <li>
          <div className="stat-bar">
            <span className="stat-label">Defense: {pokemon.base.Defense}</span>
            <div
              className="stat-bar-fill"
              style={{ width: `${getStatPercentage(pokemon.base.Defense)}%`, backgroundColor: '#ffd6a5' }} // Blue for Defense
            ></div>
          </div>
        </li>


        <li>
          <div className="stat-bar">
            <span className="stat-label">Special Attack: {pokemon.base.SpAttack}</span>
            <div
              className="stat-bar-fill"
              style={{ width: `${getStatPercentage(pokemon.base.SpAttack)}%`, backgroundColor: '#fdffb6' }} // Yellow for Sp. Attack
            ></div>
          </div>
        </li>


        <li>
          <div className="stat-bar">
            <span className="stat-label">Special Defense: {pokemon.base.SpDefense}</span>
            <div
              className="stat-bar-fill"
              style={{ width: `${getStatPercentage(pokemon.base.SpDefense)}%`, backgroundColor: '#bde0fe' }} // Pink for Sp. Defense
            ></div>
          </div>
        </li>


        <li>
          <div className="stat-bar">
            <span className="stat-label">Speed: {pokemon.base.Speed}</span>
            <div
              className="stat-bar-fill"
              style={{ width: `${getStatPercentage(pokemon.base.Speed)}%`, backgroundColor: '#bdb2ff' }} // Teal for Speed
            ></div>
          </div>
        </li>


      </ul>
      <h2>Types:</h2>
      <p>{pokemon.type.join(', ')}</p>
    </div>
  );
}

export default PokemonDetail;
