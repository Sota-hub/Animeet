"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ApolloServer } = require('apollo-server');
require('dotenv').config();
const index_1 = require("../../graphql/dist/index");
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
        objectKey: "objectValue"
    };
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    const server = new ApolloServer({
        typeDefs: yield index_1.typeDefs,
        resolvers,
        context
    });
    server.listen({ port: process.env.PORT }).then(() => {
        console.log(`Server ready at ${process.env.PORT}`);
    });
}))();
//# sourceMappingURL=index.js.map