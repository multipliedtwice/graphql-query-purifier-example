import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DepartmentCreateNestedOneWithoutEmployeesInput } from "../inputs/DepartmentCreateNestedOneWithoutEmployeesInput";
import { SalaryCreateNestedOneWithoutEmployeeInput } from "../inputs/SalaryCreateNestedOneWithoutEmployeeInput";

@TypeGraphQL.InputType("EmployeeCreateInput", {})
export class EmployeeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  salaryId?: number | undefined;

  @TypeGraphQL.Field(_type => DepartmentCreateNestedOneWithoutEmployeesInput, {
    nullable: false
  })
  department!: DepartmentCreateNestedOneWithoutEmployeesInput;

  @TypeGraphQL.Field(_type => SalaryCreateNestedOneWithoutEmployeeInput, {
    nullable: true
  })
  salary?: SalaryCreateNestedOneWithoutEmployeeInput | undefined;
}
