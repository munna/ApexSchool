import { Field, Int, ObjectType } from "type-graphql";
import Person from './Person';
@ObjectType()
export default class Class {
    @Field(type => Int)
    id!: number;

    @Field()
    userName!: string;
    @Field()
    password!: string;
    @Field()
    person!: Person;
}