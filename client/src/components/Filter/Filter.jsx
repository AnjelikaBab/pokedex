import React from 'react';
import './filter.css';  // Import the CSS file

const types = ['All', 'Grass', 'Poison', 'Fire', 'Water', 'Electric', 'Psychic']; // Add more types as needed

function Filter({ selectedType, setSelectedType }) {
  return (
    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
      {types.map((type) => (
        <option key={type} value={type} > {type} </option>
      ))}
    </select>
  );
}

export default Filter;
