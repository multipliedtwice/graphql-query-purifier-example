import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeRelationFilter } from "../inputs/EmployeeRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { SalaryWhereInput } from "../inputs/SalaryWhereInput";

@TypeGraphQL.InputType("SalaryWhereUniqueInput", {})
export class SalaryWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  employeeId?: number | undefined;

  @TypeGraphQL.Field(_type => [SalaryWhereInput], {
    nullable: true
  })
  AND?: SalaryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalaryWhereInput], {
    nullable: true
  })
  OR?: SalaryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalaryWhereInput], {
    nullable: true
  })
  NOT?: SalaryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  amount?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => EmployeeRelationFilter, {
    nullable: true
  })
  employee?: EmployeeRelationFilter | undefined;
}
