import * as TypeGraphQL from "type-graphql";

export enum SalaryScalarFieldEnum {
  id = "id",
  amount = "amount",
  employeeId = "employeeId"
}
TypeGraphQL.registerEnumType(SalaryScalarFieldEnum, {
  name: "SalaryScalarFieldEnum",
  description: undefined,
});
