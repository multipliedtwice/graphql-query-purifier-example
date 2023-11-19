import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DepartmentOrderByWithRelationInput } from "../inputs/DepartmentOrderByWithRelationInput";
import { SalaryOrderByWithRelationInput } from "../inputs/SalaryOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmployeeOrderByWithRelationInput", {})
export class EmployeeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  departmentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  salaryId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentOrderByWithRelationInput, {
    nullable: true
  })
  department?: DepartmentOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SalaryOrderByWithRelationInput, {
    nullable: true
  })
  salary?: SalaryOrderByWithRelationInput | undefined;
}
