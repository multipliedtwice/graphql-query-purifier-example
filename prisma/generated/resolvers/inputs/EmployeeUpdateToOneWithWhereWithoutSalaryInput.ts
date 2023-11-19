import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeUpdateWithoutSalaryInput } from "../inputs/EmployeeUpdateWithoutSalaryInput";
import { EmployeeWhereInput } from "../inputs/EmployeeWhereInput";

@TypeGraphQL.InputType("EmployeeUpdateToOneWithWhereWithoutSalaryInput", {})
export class EmployeeUpdateToOneWithWhereWithoutSalaryInput {
  @TypeGraphQL.Field(_type => EmployeeWhereInput, {
    nullable: true
  })
  where?: EmployeeWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeUpdateWithoutSalaryInput, {
    nullable: false
  })
  data!: EmployeeUpdateWithoutSalaryInput;
}
