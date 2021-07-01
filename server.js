require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const database = require('./src/models');
const typeDefs = require('./src/graphql/typeDefs');
const resolvers = require('./src/graphql/resolvers');


// Initial express applicattion server
const app = express();


// Apply CORS to server
app.use(cors());


// Parse requests of content-type - application/json
app.use(express.json());


// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// Add logger to server
app.use(morgan('dev'));

// Connect to database
database.mongoose
    .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connect to database successfully!!!');
    })
    .catch(err => {
        console.log('Cannot connect to database!!!', err);
        process.exit();
    })


// Get models
const { Product } = database;


// Create apollo, then apply it to express server
const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: {
        Product
    },
});
server.start();
server.applyMiddleware({ app });


// Set server port, then start listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
