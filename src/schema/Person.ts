import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class Person {
    @Field(type => Int)
    id!: number;

    @Field(type => String)
    firstName!: string;
    @Field(type => String)
    lastName!: string;
    @Field(type => String)
    address!: string;
    @Field(type => String)
    mobileNo!: string;
    @Field(type => String)
    phonoNo!: string;
    @Field(type => String)
    email!: string;
}