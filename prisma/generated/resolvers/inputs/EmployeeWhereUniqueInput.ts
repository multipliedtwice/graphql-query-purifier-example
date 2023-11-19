import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DepartmentRelationFilter } from "../inputs/DepartmentRelationFilter";
import { EmployeeWhereInput } from "../inputs/EmployeeWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SalaryNullableRelationFilter } from "../inputs/SalaryNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EmployeeWhereUniqueInput", {})
export class EmployeeWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [EmployeeWhereInput], {
    nullable: true
  })
  AND?: EmployeeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeWhereInput], {
    nullable: true
  })
  OR?: EmployeeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeWhereInput], {
    nullable: true
  })
  NOT?: EmployeeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  departmentId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  salaryId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DepartmentRelationFilter, {
    nullable: true
  })
  department?: DepartmentRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SalaryNullableRelationFilter, {
    nullable: true
  })
  salary?: SalaryNullableRelationFilter | undefined;
}
