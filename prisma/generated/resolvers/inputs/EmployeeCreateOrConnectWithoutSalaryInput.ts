import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeCreateWithoutSalaryInput } from "../inputs/EmployeeCreateWithoutSalaryInput";
import { EmployeeWhereUniqueInput } from "../inputs/EmployeeWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeCreateOrConnectWithoutSalaryInput", {})
export class EmployeeCreateOrConnectWithoutSalaryInput {
  @TypeGraphQL.Field(_type => EmployeeWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeeWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeeCreateWithoutSalaryInput, {
    nullable: false
  })
  create!: EmployeeCreateWithoutSalaryInput;
}
