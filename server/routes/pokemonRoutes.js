const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Load Pokémon data from the JSON file
const pokemonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/pokedex.json'), 'utf-8'));

// Route to get all Pokémon
router.get('/', (req, res) => {
  res.json(pokemonData); // Send the Pokémon data as JSON response
});

// Route to get a specific Pokémon by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const pokemon = pokemonData.find(p => p.id === parseInt(id));
  
  if (!pokemon) {
    return res.status(404).json({ message: 'Pokémon not found' });
  }
  
  res.json(pokemon);
});


// Export the router
module.exports = router;
