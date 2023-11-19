import * as TypeGraphQL from "type-graphql";

export enum EmployeeScalarFieldEnum {
  id = "id",
  name = "name",
  departmentId = "departmentId",
  salaryId = "salaryId"
}
TypeGraphQL.registerEnumType(EmployeeScalarFieldEnum, {
  name: "EmployeeScalarFieldEnum",
  description: undefined,
});
