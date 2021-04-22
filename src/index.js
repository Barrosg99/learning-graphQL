require('dotenv').config();
import mongoose from 'mongoose';

import server from './api/server';

const port = process.env.PORT || 4000;

process.on('uncaughtException', (err) => {
  console.error(`${(new Date()).toUTCString()} uncaughtException:`, err);
  process.exit(0);
});

process.on('unhandledRejection', (err) => {
  console.error(`${(new Date()).toUTCString()} unhandledRejection:`, err);
});

const startServer = async () => {
  await mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  server.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}/api`)
  );
}

startServer();