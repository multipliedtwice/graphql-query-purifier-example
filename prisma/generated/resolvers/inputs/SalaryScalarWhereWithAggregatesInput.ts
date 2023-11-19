import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SalaryScalarWhereWithAggregatesInput", {})
export class SalaryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SalaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SalaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SalaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SalaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  amount?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  employeeId?: IntWithAggregatesFilter | undefined;
}
