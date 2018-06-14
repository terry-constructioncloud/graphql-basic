const Product = require('./models/product');

const products = [
  {_id: 1, name: 'foo', qty: 2},
  {_id: 21, name: 'bar', qty: 3}

];
const resolvers = {
  Query: {
    async allProducts() {
      return await Product.find();
    }
  },
  Mutation: {
    async createProduct(_, {input}) {
      return await Product.create(input);
    }
  }
};
module.exports = resolvers;

