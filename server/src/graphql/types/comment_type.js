const mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

// Don't need below type(schema)↓, since user_name only has name(string).
// const UserType = require("./user_type");

const User = mongoose.model("user");

const CommentType = new GraphQLObjectType({
  name: "CommentType",
  fields: () => ({
    _id: { type: GraphQLID },
    project_id: { type: GraphQLID },
    comment_text: { type: GraphQLString },
    time_stamp: { type: GraphQLString },
    user_id: { type: GraphQLID },
    user_name: {
      type: GraphQLString,
      resolve({ user_id }) {
        return User.find({ _id: user_id });
      },
    },
  }),
});

module.exports = CommentType;
