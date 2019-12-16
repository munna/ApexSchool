import { MiddlewareFn ,} from "type-graphql";
import { verify } from "jsonwebtoken";
import { Request } from 'express'
import { HttpQueryRequest, Context } from "apollo-server-core";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";
import { User } from "../schema/User";

export interface MyContext {
    expressContext: ExpressContext;
    user: any;
}
export interface CustomContext {
  req:Request,
  user: User
}
export const isAuth: MiddlewareFn<CustomContext> = ({ context }, next) => {
  const authorization = context.req.headers["authorization"];
  if (!authorization) {
    throw new Error("Not authenticated");
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = verify(token, "MySecretKey");
    console.log(payload);
    context.user = payload as any;
  } catch (err) {
    console.log(err);
    throw new Error("Not authenticated");
  }
  return next();
};