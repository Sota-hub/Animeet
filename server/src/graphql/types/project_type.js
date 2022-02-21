const mongoose = require("mongoose");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const UserType = require("./user_type");
const CommentType = require("./comment_type");
const AnnounceType = require("./announce_type");

const User = mongoose.model("user");
const Comment = mongoose.model("comment");
const Announce = mongoose.model("announce");

const ProjectType = new GraphQLObjectType({
  name: "ProjectType",
  fields: () => ({
    _id: { type: GraphQLID },
    project_image_path: { type: GraphQLString },
    project_name: { type: GraphQLString },
    project_description: { type: GraphQLString },
    support_current: { type: GraphQLInt },
    support_target: { type: GraphQLInt },
    reminded_users_id: { type: new GraphQLList(GraphQLID) },
    expire_date: { type: GraphQLString },
    category: { type: GraphQLString },
    story: { type: GraphQLString },
    character_design_path: { type: new GraphQLList(GraphQLString) },
    original_picture_path: { type: new GraphQLList(GraphQLString) },
    voice_path: { type: GraphQLString },
    sound_effect_path: { type: GraphQLString },
    creators_id: { type: new GraphQLList(GraphQLID) },
    creators: {
      type: new GraphQLList(UserType),
      resolve({ creators_id }) {
        return User.find({ _id: { $in: creators_id } }); // loop creators_id array in find
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve({ _id }) {
        return Comment.find({ project_id: _id });
      },
    },
    announces: {
      type: new GraphQLList(AnnounceType),
      resolve({ _id }) {
        return Announce.find({ project_id: _id });
      },
    },
  }),
});

module.exports = ProjectType;
