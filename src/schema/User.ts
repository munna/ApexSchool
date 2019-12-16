import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Field, Int, ObjectType ,ID} from "type-graphql";
import Person from './Person';
@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(type => ID)
@PrimaryGeneratedColumn()
id!: String;

    @Column("text", { nullable: true })
    @Field(type=>String)
    firstName!: string;
    @Column("text", { nullable: true })
    @Field(type=>String)
    lastName!:String
    @Field(type=>String)
    @Column("text", { nullable: false })
    email!: string;
    @Column("text", { nullable: false })
    @Field(type=>String)
    password!: string;
}
