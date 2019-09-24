import Koa from "koa";
import { ApolloServer } from "apollo-server-koa";
import logger from "koa-logger";
import schema from "./graphql/schema";
import { createConnection } from "typeorm";

// database load
const loadDatabase = async () => {
  await createConnection();
};

loadDatabase();

const PORT = process.env.PORT || 4001;

const server = new ApolloServer({ schema });

const app = new Koa();

app.use(logger());

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server Running ON :${PORT}`);
});
