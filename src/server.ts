import * as express from 'express';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import * as depthLimit from 'graphql-depth-limit';
import * as jwt from "express-jwt";
import { createServer } from 'http';
import {createConnection} from "typeorm";
import * as compression from 'compression';
import * as cors from 'cors';
import {prepareSchema} from './schema';
import { CustomContext } from './middleware/Authorize';
const app = express();
prepareSchema().then(schema=>{
    console.log(schema);
    const server = new ApolloServer({
        schema,
        validationRules: [depthLimit(7)],
        context:({req})=>{
          const token = req.headers.authorization || '';
          const context :CustomContext = {
            req,
            user: req.user, // `req.user` comes from `express-jwt`
          };
          return context;
          // try to retrieve a user with the token
          //const user = getUser(token);
         
          // optionally block the user
          // we could also check user roles/permissions here
          //if (!user) throw new AuthenticationError('you must be logged in'); 
         
          // add the user to the context
          //return req.user;
        }
      });
       // Mount a jwt or other authentication middleware that is run before the GraphQL execution
      app.use(
        '/graphql',
        jwt({
          secret: "MySecretKey",
          credentialsRequired: false,
        }),
      );
      app.use('*', cors());
      app.use(compression());
      server.applyMiddleware({ app, path: '/graphql'});
      const httpServer = createServer(app);
      createConnection().then(async connection => {
      httpServer.listen(
        { port: 3000 },
        (): void => console.log(`\n🚀      GraphQL is now running on http://localhost:3000/graphql`));
      })
}).catch(err=>{
  console.log("Error while fetching schema");
  console.log(err);
});
