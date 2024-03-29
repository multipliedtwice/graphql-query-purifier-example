import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeCreateNestedManyWithoutDepartmentInput } from "../inputs/EmployeeCreateNestedManyWithoutDepartmentInput";

@TypeGraphQL.InputType("DepartmentCreateInput", {})
export class DepartmentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => EmployeeCreateNestedManyWithoutDepartmentInput, {
    nullable: true
  })
  employees?: EmployeeCreateNestedManyWithoutDepartmentInput | undefined;
}
