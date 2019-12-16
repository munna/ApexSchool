import { Field, Int, ObjectType } from "type-graphql";
import Section from './Section';
@ObjectType()
export default class Class {
    @Field(type => Int)
    id!: number;

    @Field(type => String)
    name!: string;
    @Field(type => Section)
    section!: Section;
}