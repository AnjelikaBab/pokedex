// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonTable from './components/PokemonTable/PokemonTable';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PokemonTable />} />
        <Route path="/:id" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
};

export default App;
