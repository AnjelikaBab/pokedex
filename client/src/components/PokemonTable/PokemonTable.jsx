import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../../graphql/queries';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import Filter from '../Filter/Filter';

import './pokemonTable.css';

function PokemonTable() {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 25;
  const [selectedType, setSelectedType] = useState('All');

  const [sortedField, setSortedField] = React.useState(null);

 

  // Reset current page when the selected type or search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, searchTerm]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredPokemons = data.pokemons.filter(pokemon => {
    const matchesType = selectedType === 'All' || pokemon.type.includes(selectedType);
    const matchesSearch = pokemon.name.english.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Pagination logic
  const totalPokemons = filteredPokemons.length;
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  const pageNumbers = Math.ceil(totalPokemons / pokemonsPerPage);

  let sortedProducts = [...filteredPokemons];
  if (sortedField !== null) {
    sortedProducts.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div>
      <h1>Pokédex</h1>
      <div className="input-container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter selectedType={selectedType} setSelectedType={setSelectedType} />
      </div>
      <table className="sortable">
        <thead>
          <tr>
          <th>#</th>
            <th> 
                Name
            </th>
            <th>HP</th>
            <th>Attack</th>
            <th>Special Attack</th>
            <th>Defense</th>
            <th>Special Defense</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {currentPokemons.map((pokemon) => (
            <tr key={pokemon.id}>
              <td>{pokemon.id}</td>
              <td className ="poke-name">
                <Link to={`/${pokemon.id}`}>{pokemon.name.english}</Link>
              </td>
              <td>{pokemon.base.HP}</td>
              <td>{pokemon.base.Attack}</td>
              <td>{pokemon.base.SpAttack}</td>
              <td>{pokemon.base.Defense}</td>
              <td>{pokemon.base.SpDefense}</td>
              <td>{pokemon.type.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} 
      />
    </div>
  );
}

export default PokemonTable;
