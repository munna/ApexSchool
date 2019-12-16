import {
    Resolver,
    Query,
    Mutation,
    Arg,
    ObjectType,
    Field,
    UseMiddleware,
    Ctx,Authorized
  } from "type-graphql";
  import {getRepository} from 'typeorm';
  import { hash, compare } from "bcryptjs";
  import { User } from "../schema/User";
import { sign } from "jsonwebtoken";
  import { CustomContext } from '../middleware/Authorize'
  @ObjectType()
  class LoginResponse {
    @Field(type => String)
    accessToken!: string;
    @Field(type => String)
    name!: String;
    @Field(type => String)
    email!: String;
  }
  
  @Resolver()
  export default class UserResolver {
    @Query(() => String)
    async hello() {
      return "Hello World";
    }
  
    @Query(() => [User])
    async getUsers() {
      return await User.find();
    }
    @Authorized()
    @Query(returns => User, { nullable: true })
    async Me(@Ctx() { user }: CustomContext) {
        const id = user!.id
        const userObj = User.findOne({ where: { id } });
        console.log(userObj)
        return userObj
    }
  
    @Mutation(() => Boolean)
    async Register(
      @Arg("firstName") firstName: string,
      @Arg("lastName") lastName: string,
      @Arg("email") email: string,
      @Arg("password") password: string
    ) {
      const hashedPassword = await hash(password, 13);
      // let user = null;
      try {
        await User.insert({
          firstName:firstName,
          lastName:lastName,
          email:email,
          password:hashedPassword
        });
      } catch (err) {
        console.log(err);
        return false;
      }
  
      return true;
    }
    
    @Mutation(() => LoginResponse)
    async Login(@Arg("email") email: string, @Arg("password") password: string) {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        throw new Error("Could not find user");
      }
  
      const verify = compare(password, user.password);
      if (!verify) {
        throw new Error("Bad password");
      }
      const signobject = Object.assign({},user)
      return {accessToken: sign( signobject, "MySecretKey", {expiresIn: "15m"}),name:`${user.firstName} ${user.lastName}`,email:user.email};
    }
  }