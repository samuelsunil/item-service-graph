import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    description: String
  }

  type Query {
    items: [Item!]!
  }
`;

export const resolvers = {
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
