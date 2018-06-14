const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/gql_db');

const express = require('express');
const schema = require('./schema');
const app = express();
const graphqlHTTP = require('express-graphql');
const port = 3000;
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
}));

app.get('/', (req, res) => {
  return res.send({});
});
app.listen(port, () => {
  console.log(`server started on ${port}`)
});
