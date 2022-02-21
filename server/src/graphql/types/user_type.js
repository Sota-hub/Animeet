const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    _id: { type: GraphQLID },
    user_name: { type: GraphQLString },
    email: { type: GraphQLString },
    position: { type: GraphQLString },
    // password shouldn't be exposed, so it's not needed
    // password: { type: GraphQLString },
  }),
});

module.exports = UserType;
