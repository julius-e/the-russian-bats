import { ApolloServer, IResolvers } from "apollo-server";
import { readFileSync } from "fs";
import { join } from "path";
import { Query } from "./resolvers/query";
import { prisma } from "./prisma-client";

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers: IResolvers<any, any> = {
  Query
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs: readFileSync(join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
  context: {
    prisma
  }
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
