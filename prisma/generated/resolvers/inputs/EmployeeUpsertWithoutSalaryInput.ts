import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeCreateWithoutSalaryInput } from "../inputs/EmployeeCreateWithoutSalaryInput";
import { EmployeeUpdateWithoutSalaryInput } from "../inputs/EmployeeUpdateWithoutSalaryInput";
import { EmployeeWhereInput } from "../inputs/EmployeeWhereInput";

@TypeGraphQL.InputType("EmployeeUpsertWithoutSalaryInput", {})
export class EmployeeUpsertWithoutSalaryInput {
  @TypeGraphQL.Field(_type => EmployeeUpdateWithoutSalaryInput, {
    nullable: false
  })
  update!: EmployeeUpdateWithoutSalaryInput;

  @TypeGraphQL.Field(_type => EmployeeCreateWithoutSalaryInput, {
    nullable: false
  })
  create!: EmployeeCreateWithoutSalaryInput;

  @TypeGraphQL.Field(_type => EmployeeWhereInput, {
    nullable: true
  })
  where?: EmployeeWhereInput | undefined;
}
