import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeWhereInput } from "../inputs/EmployeeWhereInput";

@TypeGraphQL.InputType("EmployeeRelationFilter", {})
export class EmployeeRelationFilter {
  @TypeGraphQL.Field(_type => EmployeeWhereInput, {
    nullable: true
  })
  is?: EmployeeWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeWhereInput, {
    nullable: true
  })
  isNot?: EmployeeWhereInput | undefined;
}
