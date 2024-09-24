const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');  // Import the GraphQL schema
const resolvers = require('./graphql/resolvers');  // Import the GraphQL resolvers
const dotenv = require('dotenv');
const cors = require('cors');

const pokemonRoutes = require('./routes/pokemonRoutes'); // Import your routes


// Load environment variables from .env
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());


// Set up GraphQL middleware
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
}));


app.listen(port, () => console.log(`Server running on port ${port}`));

