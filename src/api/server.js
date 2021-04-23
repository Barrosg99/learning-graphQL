import express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import typeDefs from '../graphql/schemas';
import resolvers  from '../graphql/resolvers';
import context from '../graphql/context';

const app = express();

app.use(cors());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
  playground: {
    settings: {
      'schema.polling.enable': false,
    },
  },
});

apolloServer.applyMiddleware({ app, path: '/api' });

const server = createServer(app);

export default server

