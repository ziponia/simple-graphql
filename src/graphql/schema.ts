import { makeExecutableSchema } from "graphql-tools";
import * as user from "./User";

const schema = makeExecutableSchema({
  typeDefs: [user.typeDef],
  resolvers: [user.resolvers]
});

export default schema;
