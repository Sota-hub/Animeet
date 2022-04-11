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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ApolloServer } = require('apollo-server');
require('dotenv').config();
const index_1 = __importDefault(require("../../graphql/dist/index"));
const index_2 = __importDefault(require("./resolvers/index"));
const context = () => {
    return {
        objectKey: "objectValue"
    };
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    const server = new ApolloServer({
        typeDefs: yield index_1.default,
        resolvers: index_2.default,
        context
    });
    server.listen({ port: process.env.PORT }).then(() => {
        console.log(`Server ready at ${process.env.PORT}`);
    });
}))();
//# sourceMappingURL=index.js.map