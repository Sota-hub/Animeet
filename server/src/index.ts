const { ApolloServer } = require('apollo-server');
require('dotenv').config();

import { typeDefs } from "../../graphql/dist/index"

// DUMMY FOR NOW ===============================
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
const resolvers = {
  Query: {
    books: () => books,
  },
};
const context = () => {
  return {
    objectKey : "objectValue"
  }
} 
// =============================================

(async() => {  
  const server = new ApolloServer({ 
    typeDefs: await typeDefs, 
    resolvers, 
    context });

  // console.log(server);
    
    
    server.listen({port: process.env.PORT}).then(() => {
      console.log(`Server ready at ${process.env.PORT}`);
    });
})()

export {}