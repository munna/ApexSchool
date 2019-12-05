// schema.ts
import 'graphql-import-node';
import * as typeDefs from './schema/schema.graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

import { buildSchema } from "type-graphql";
import PersonResolver from "./resolvers/PersonResolver";
import StudentResolver from "./resolvers/StudentResolver";

export async function prepareSchema() {
const schema = await buildSchema({
    resolvers: [PersonResolver, StudentResolver],
    emitSchemaFile: true,
  });
  return schema;
}