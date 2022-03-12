const { GraphQLObjectType } = require("graphql");

const mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: () => ({}),
});

module.exports = mutations;
