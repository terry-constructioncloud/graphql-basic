const Product = require('./models/product');

const resolvers = {
  Query: {
    async allProducts() {
      return await Product.find();
    },
    async getProduct(_, {_id}) {
      return await Product.findById(_id);
    }
  },
  Mutation: {
    async createProduct(_, {input}) {
      return await Product.create(input);
    }
  }
};
module.exports = resolvers;

