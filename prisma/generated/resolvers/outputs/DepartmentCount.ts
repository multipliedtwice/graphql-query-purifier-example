import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DepartmentCountEmployeesArgs } from "./args/DepartmentCountEmployeesArgs";

@TypeGraphQL.ObjectType("DepartmentCount", {})
export class DepartmentCount {
  employees!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "employees",
    nullable: false
  })
  getEmployees(@TypeGraphQL.Root() root: DepartmentCount, @TypeGraphQL.Args() args: DepartmentCountEmployeesArgs): number {
    return root.employees;
  }
}
