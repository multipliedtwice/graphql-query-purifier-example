import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EmployeeScalarWhereInput", {})
export class EmployeeScalarWhereInput {
  @TypeGraphQL.Field(_type => [EmployeeScalarWhereInput], {
    nullable: true
  })
  AND?: EmployeeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeScalarWhereInput], {
    nullable: true
  })
  OR?: EmployeeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeScalarWhereInput], {
    nullable: true
  })
  NOT?: EmployeeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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
}
