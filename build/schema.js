"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
  type Item {
    id: ID!
    name: String!
    description: String
  }

  type Query {
    items: [Item!]!
  }
`;
exports.resolvers = {
    Query: {
        items: () => {
            // Mock data for now
            return [
                { id: '1', name: 'Item 1', description: 'Description for Item 1' },
                { id: '2', name: 'Item 2', description: 'Description for Item 2' },
            ];
        },
    },
};
