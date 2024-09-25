const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema'); 
const resolvers = require('./graphql/resolvers');  
const dotenv = require('dotenv');
const cors = require('cors');




dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
}));


app.listen(port, () => console.log(`Server running on port ${port}`));

