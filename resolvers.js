const products = [
  {_id: 1, name: 'foo', qty: 2},
  {_id: 21, name: 'bar', qty: 3}

]
const resolvers = {
  Query: {
    allProducts() {
      return products;
    }
  }
};
module.exports = resolvers;

