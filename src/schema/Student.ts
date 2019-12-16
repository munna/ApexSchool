import { Field, Int, ObjectType } from "type-graphql";
import Person from './Person';
import Class from './Class';
@ObjectType()
export default class Student {
    @Field(type => Int)
    id!: number;

    @Field(type => Class)
    class!: Class;
    @Field(type => Person)
    person!: Person;
}