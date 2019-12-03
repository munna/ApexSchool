"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const data_1 = require("../data");
const Person_1 = require("../schema/Person");
const Student_1 = require("../schema/Student");
let default_1 = class default_1 {
    fetchTasks() {
        return data_1.personDatas;
    }
    personByName(name) {
        return data_1.personDatas.find(person => (person.firstName === name || person.lastName == name));
    }
    getStudents(id) {
        return data_1.studentsDatas.find(student => student.person_id === id);
    }
};
__decorate([
    type_graphql_1.Query(returns => [Person_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], default_1.prototype, "fetchTasks", null);
__decorate([
    type_graphql_1.Query(returns => Person_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], default_1.prototype, "personByName", null);
__decorate([
    type_graphql_1.Query(returns => Student_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], default_1.prototype, "getStudents", null);
default_1 = __decorate([
    type_graphql_1.Resolver(of => Person_1.default)
], default_1);
exports.default = default_1;
//# sourceMappingURL=PersonResolver.js.map