import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeOrderByWithRelationInput } from "../inputs/EmployeeOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SalaryOrderByWithRelationInput", {})
export class SalaryOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  employeeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EmployeeOrderByWithRelationInput, {
    nullable: true
  })
  employee?: EmployeeOrderByWithRelationInput | undefined;
}
