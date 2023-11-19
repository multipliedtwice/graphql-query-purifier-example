import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DepartmentUpdateWithoutEmployeesInput } from "../inputs/DepartmentUpdateWithoutEmployeesInput";
import { DepartmentWhereInput } from "../inputs/DepartmentWhereInput";

@TypeGraphQL.InputType("DepartmentUpdateToOneWithWhereWithoutEmployeesInput", {})
export class DepartmentUpdateToOneWithWhereWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => DepartmentWhereInput, {
    nullable: true
  })
  where?: DepartmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentUpdateWithoutEmployeesInput, {
    nullable: false
  })
  data!: DepartmentUpdateWithoutEmployeesInput;
}
