import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeAvgAggregate } from "../outputs/EmployeeAvgAggregate";
import { EmployeeCountAggregate } from "../outputs/EmployeeCountAggregate";
import { EmployeeMaxAggregate } from "../outputs/EmployeeMaxAggregate";
import { EmployeeMinAggregate } from "../outputs/EmployeeMinAggregate";
import { EmployeeSumAggregate } from "../outputs/EmployeeSumAggregate";

@TypeGraphQL.ObjectType("EmployeeGroupBy", {})
export class EmployeeGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  departmentId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  salaryId!: number | null;

  @TypeGraphQL.Field(_type => EmployeeCountAggregate, {
    nullable: true
  })
  _count!: EmployeeCountAggregate | null;

  @TypeGraphQL.Field(_type => EmployeeAvgAggregate, {
    nullable: true
  })
  _avg!: EmployeeAvgAggregate | null;

  @TypeGraphQL.Field(_type => EmployeeSumAggregate, {
    nullable: true
  })
  _sum!: EmployeeSumAggregate | null;

  @TypeGraphQL.Field(_type => EmployeeMinAggregate, {
    nullable: true
  })
  _min!: EmployeeMinAggregate | null;

  @TypeGraphQL.Field(_type => EmployeeMaxAggregate, {
    nullable: true
  })
  _max!: EmployeeMaxAggregate | null;
}
