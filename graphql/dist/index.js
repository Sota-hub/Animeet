"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const load_1 = require("@graphql-tools/load");
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const path_1 = require("path");
exports.typeDefs = (0, load_1.loadSchema)((0, path_1.resolve)(__dirname, "..", "schemas", "**/*.graphql"), {
    loaders: [new graphql_file_loader_1.GraphQLFileLoader()]
});
//# sourceMappingURL=index.js.map