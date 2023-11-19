import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryWhereInput } from "../inputs/SalaryWhereInput";

@TypeGraphQL.InputType("SalaryNullableRelationFilter", {})
export class SalaryNullableRelationFilter {
  @TypeGraphQL.Field(_type => SalaryWhereInput, {
    nullable: true
  })
  is?: SalaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalaryWhereInput, {
    nullable: true
  })
  isNot?: SalaryWhereInput | undefined;
}
