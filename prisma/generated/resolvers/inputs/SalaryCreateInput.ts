import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeCreateNestedOneWithoutSalaryInput } from "../inputs/EmployeeCreateNestedOneWithoutSalaryInput";

@TypeGraphQL.InputType("SalaryCreateInput", {})
export class SalaryCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => EmployeeCreateNestedOneWithoutSalaryInput, {
    nullable: false
  })
  employee!: EmployeeCreateNestedOneWithoutSalaryInput;
}
