import { Field, Int, ObjectType } from "type-graphql";
import Section from './Section';
@ObjectType()
export default class Class {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;
    @Field()
    section: Section;
}