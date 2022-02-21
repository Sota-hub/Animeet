const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const AnnounceType = new GraphQLObjectType({
  name: "AnnounceType",
  fields: () => ({
    _id: { type: GraphQLID },
    project_id: { type: GraphQLID },
    announce_text: { type: GraphQLString },
    time_stamp: { type: GraphQLString },
  }),
});

module.exports = AnnounceType;
