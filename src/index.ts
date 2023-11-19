import "reflect-metadata";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { GraphQLQueryPurifier } from "graphql-query-purifier";
import { resolvers } from "../prisma/generated";
import { PrismaClient } from "@prisma/client";

import cors from "cors";
import path from "path";
import { json, urlencoded } from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import { buildSchema } from "type-graphql";

const startServer = async () => {
  const app = express();
  const prisma = new PrismaClient();

  app.use(cors(), json(), urlencoded({ extended: true }));

  const gqlPath = path.resolve(__dirname, "../frontend");
  const queryPurifier = new GraphQLQueryPurifier({
    gqlPath,
    allowStudio: true,
    // allowAll: false,
  });
  app.use(queryPurifier.filter);

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers,
      validate: false,
    }),
  });

  await server.start();

  const context = expressMiddleware(server, {
    context: async (_ctx) => ({
      prisma,
    }),
  });

  app.use("/graphql", context);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/graphql`);
  });
};

startServer();
