import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { personDatas, PersonData,studentsDatas,StudentData} from "../data";
import Person from "../schema/Person";
import Student from "../schema/Student";

    @Resolver(of => Person)
    export default class {

      @Query(returns => [Person])
      fetchTasks(): PersonData[] {
        return personDatas;
      }

      @Query(returns => Person, { nullable: true })
      personByName(@Arg("name") name: string): PersonData | undefined {
        return personDatas.find(person => (person.firstName === name || person.lastName == name)  );
      }

      @Query(returns => Student, { nullable: true })
      getStudents(@Arg("id") id: number): StudentData | undefined {
        return studentsDatas.find(student => student.person_id === id);
      }

    //   @FieldResolver()
    //   student(@Root() personData: PersonData) {
    //     return studentsDatas.find(student => {
    //       return student.person.id === personData.id;
    //     });
    //   }

    }