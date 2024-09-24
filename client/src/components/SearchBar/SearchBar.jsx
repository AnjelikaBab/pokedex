import React from 'react';
import './searchBar.css'; 

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
      <input
        type="text" 
        placeholder="Search Pokémon..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

  );
}

export default SearchBar;
