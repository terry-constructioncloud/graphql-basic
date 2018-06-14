const resolvers = {
  Query: {
    hello(root, args, context, info){
      return 'welcome';
    }
  }
};
module.exports = resolvers;

