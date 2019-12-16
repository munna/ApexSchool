// schema.ts
import 'graphql-import-node';
import * as typeDefs from './schema/schema.graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import 'reflect-metadata';
import { buildSchema } from "type-graphql";
import PersonResolver from "./resolvers/PersonResolver";
import StudentResolver from "./resolvers/StudentResolver";
import UserResolver from "./resolvers/UserResolver";
import { customAuthChecker } from './middleware/CustomAuthChecker';

export async function prepareSchema() {
const schema = await buildSchema({
    resolvers: [PersonResolver, StudentResolver,UserResolver],
    emitSchemaFile: true, authChecker: customAuthChecker
  });
  return schema;
}