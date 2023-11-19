import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DepartmentWhereInput } from "../inputs/DepartmentWhereInput";

@TypeGraphQL.InputType("DepartmentRelationFilter", {})
export class DepartmentRelationFilter {
  @TypeGraphQL.Field(_type => DepartmentWhereInput, {
    nullable: true
  })
  is?: DepartmentWhereInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentWhereInput, {
    nullable: true
  })
  isNot?: DepartmentWhereInput | undefined;
}
