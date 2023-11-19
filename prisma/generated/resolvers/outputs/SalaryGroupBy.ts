import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryAvgAggregate } from "../outputs/SalaryAvgAggregate";
import { SalaryCountAggregate } from "../outputs/SalaryCountAggregate";
import { SalaryMaxAggregate } from "../outputs/SalaryMaxAggregate";
import { SalaryMinAggregate } from "../outputs/SalaryMinAggregate";
import { SalarySumAggregate } from "../outputs/SalarySumAggregate";

@TypeGraphQL.ObjectType("SalaryGroupBy", {})
export class SalaryGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  employeeId!: number;

  @TypeGraphQL.Field(_type => SalaryCountAggregate, {
    nullable: true
  })
  _count!: SalaryCountAggregate | null;

  @TypeGraphQL.Field(_type => SalaryAvgAggregate, {
    nullable: true
  })
  _avg!: SalaryAvgAggregate | null;

  @TypeGraphQL.Field(_type => SalarySumAggregate, {
    nullable: true
  })
  _sum!: SalarySumAggregate | null;

  @TypeGraphQL.Field(_type => SalaryMinAggregate, {
    nullable: true
  })
  _min!: SalaryMinAggregate | null;

  @TypeGraphQL.Field(_type => SalaryMaxAggregate, {
    nullable: true
  })
  _max!: SalaryMaxAggregate | null;
}
