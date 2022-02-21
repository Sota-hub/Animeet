const mongoose = require("mongoose");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const ProjectType = require("./project_type");
const UserType = require("./user_type");

const Project = mongoose.model("project");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    projects: {
      type: new GraphQLList(ProjectType),
      args: { category: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(_, { category }) {
        return Project.find({ category });
      },
    },
    project: {
      type: ProjectType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, { _id }) {
        return Project.findById(_id);
      },
    },
    user: {
      type: UserType,
      // args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(_, __, req) {
        return req.user;
      },
    },
  }),
});

module.exports = RootQueryType;
