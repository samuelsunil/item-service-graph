import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';
import mockServer from './mocks/node'

mockServer.listen();

const app = express() as Application; // Cast to Application
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
    await server.start();

    const app: Application = express(); // Explicitly cast to Application

    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
}

startServer().catch(error => console.error(error));