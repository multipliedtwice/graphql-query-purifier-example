import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EmployeeScalarWhereWithAggregatesInput", {})
export class EmployeeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EmployeeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EmployeeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EmployeeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EmployeeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  departmentId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  salaryId?: IntNullableWithAggregatesFilter | undefined;
}
