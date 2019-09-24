import { gql, IResolvers, ApolloError } from "apollo-server-koa";
import { User } from "../entity/UserEntity";

export const typeDef = gql`
  type User {
    _id: ID!
    username: String
  }
  type Query {
    user(username: String): User
    findOneUserByUsername(username: String!): User
  }
  type Mutation {
    addUser(input: AddUserInput): User
  }
  input AddUserInput {
    username: String
  }
`;

export const resolvers: IResolvers<any, any> = {
  Query: {
    user: (_: any, args) => {
      return {
        id: "asdfassf",
        username: args.username
      };
    },
    findOneUserByUsername: async (_: any, args): Promise<User> => {
      const user = await User.findOne({ username: args.username });
      return user;
    }
  },
  Mutation: {
    addUser: async (parent, { input: { username } }): Promise<User> => {
      const user = new User();
      user.username = username;
      const findUser = await User.find({ username });
      if (findUser.length > 0) {
        throw new ApolloError("Aleady is User " + username, "400", {});
      }
      const saveUser = await user.save();
      return saveUser;
    }
  }
};
