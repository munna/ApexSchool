import e = require("express");

export interface SectionData {
    id: number;
    name: string;
  }
  export interface StudentData {
    id: number;
    class_id: Number;
    person_id: Number;
  }
  export interface ClassData {
    id: number;
    name: string;
    section_id:Number;
  }

  export interface PersonData {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    mobileNo: string;
    phoneNo: string;
  }

  export const sections: SectionData[] = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ];
  export const classes: ClassData[] = [
    { id: 1, name: "Nursary",section_id:sections[0].id },
    { id: 2, name: "KG",section_id:sections[1].id },
  ];
  export const personDatas: PersonData[] =[
      {id:1,firstName:'Munna',lastName:'Bhakta',mobileNo:'9268310732',phoneNo:'8002256490',address:'New Delhi,Malviya Nagar'},
      {id:2,firstName:'Saanvi',lastName:'Bhakta',mobileNo:'9268310732',phoneNo:'8002256490',address:'New Delhi,Malviya Nagar'},
      {id:3,firstName:'Naitik Raj',lastName:'Bhakta',mobileNo:'9999999999',phoneNo:'8002256490',address:'New Delhi,Malviya Nagar'}
  ]
  
  export const studentsDatas: StudentData[] =[
 {id:1,class_id:classes[0].id,person_id:personDatas[1].id},
 {id:2,class_id:classes[0].id,person_id:personDatas[2].id},
 {id:3,class_id:classes[1].id,person_id:personDatas[0].id},
  ];