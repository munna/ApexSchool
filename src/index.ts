// import { GraphQLServer } from "graphql-yoga";
//     import "reflect-metadata";
//     import { buildSchema } from "type-graphql";
//     import PersonResolver from "./resolvers/PersonResolver";
//     import StudentResolver from "./resolvers/StudentResolver";

//     async function bootstrap() {
//       const schema = await buildSchema({
//         resolvers: [PersonResolver, StudentResolver],
//         emitSchemaFile: true,
//       });

//       const server = new GraphQLServer({
//         schema,
//       });

//       server.start(() => console.log("Server is running on http://localhost:4000"));
//     }

//     bootstrap();