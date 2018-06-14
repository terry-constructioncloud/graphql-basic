const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const port = 3000;
const schema = {};
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
