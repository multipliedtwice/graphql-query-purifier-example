import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeRelationFilter } from "../inputs/EmployeeRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("SalaryWhereInput", {})
export class SalaryWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  amount?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  employeeId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EmployeeRelationFilter, {
    nullable: true
  })
  employee?: EmployeeRelationFilter | undefined;
}
