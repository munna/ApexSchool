import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class Person {
    @Field(type => Int)
    id: number;

    @Field()
    firstName: string;
    @Field()
    lastName: string;
    @Field()
    address: string;
    @Field()
    mobileNo: string;
    @Field()
    phonoNo: string;
}