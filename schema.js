const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');
const typeDefs = `
  type Product {
    _id: ID
    name: String!
    qty: Int
  }
  
  type Query {
    allProducts: [Product]
  }
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
