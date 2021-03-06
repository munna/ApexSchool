import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class Section {
    @Field(type => Int)
    id!: number;

    @Field(type => String)
    name!: string;
}