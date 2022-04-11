const { ApolloServer } = require('apollo-server');
require('dotenv').config();

import typeDefs from "../../graphql/dist/index"
import resolvers from "./resolvers/index"

// DUMMY FOR NOW ===============================
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
    
    server.listen({port: process.env.PORT}).then(() => {
      console.log(`Server ready at ${process.env.PORT}`);
    });
})()

export {}