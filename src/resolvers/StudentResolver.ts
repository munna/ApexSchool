import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { personDatas, PersonData,studentsDatas,StudentData,classes,ClassData} from "../data";
import Person from "../schema/Person";
import Student from "../schema/Student";

    @Resolver(of => Student)
    export default class {

      @Query(returns => [Student])
      fetchStudents(): StudentData[] {
        return studentsDatas;
      }

    //   @Query(returns => Student, { nullable: true })
    //   studentByName(@Arg("name") name: string): StudentData | undefined {
    //     return studentsDatas.find(student => (student.person.firstName === name || person.lastName == name)  );
    //   }

      @Query(returns => Student, { nullable: true })
      getStudentsByPersonId(@Arg("id") id: number): StudentData | undefined {
        return studentsDatas.find(student => student.person_id === id);
      }
      @Query(returns => [Student], { nullable: true })
      getStudentsByClassId(@Arg("id") id: number): StudentData[] | undefined {
        return studentsDatas.filter(student => student.class_id === id);
      }
    //   @Mutation(returns => Student)
    //   markAsCompleted(@Arg("taskId") taskId: number): TaskData {
    //     const task = tasks.find(task => {
    //       return task.id === taskId;
    //     });
    //     if (!task) {
    //       throw new Error(`Couldn't find the task with id ${taskId}`);
    //     }
    //     if (task.completed === true) {
    //       throw new Error(`Task with id ${taskId} is already completed`);
    //     }
    //     task.completed = true;
    //     return task;
    //   }

      @FieldResolver()
      person(@Root() student: StudentData) {
        return personDatas.find(person => {
          return person.id === student.person_id;
        });
      }
      @FieldResolver()
      class(@Root() student: StudentData) {
        return classes.find(c => {
          return c.id === student.class_id;
        });
      }

    }