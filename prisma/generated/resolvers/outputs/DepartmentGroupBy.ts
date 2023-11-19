import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DepartmentAvgAggregate } from "../outputs/DepartmentAvgAggregate";
import { DepartmentCountAggregate } from "../outputs/DepartmentCountAggregate";
import { DepartmentMaxAggregate } from "../outputs/DepartmentMaxAggregate";
import { DepartmentMinAggregate } from "../outputs/DepartmentMinAggregate";
import { DepartmentSumAggregate } from "../outputs/DepartmentSumAggregate";

@TypeGraphQL.ObjectType("DepartmentGroupBy", {})
export class DepartmentGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => DepartmentCountAggregate, {
    nullable: true
  })
  _count!: DepartmentCountAggregate | null;

  @TypeGraphQL.Field(_type => DepartmentAvgAggregate, {
    nullable: true
  })
  _avg!: DepartmentAvgAggregate | null;

  @TypeGraphQL.Field(_type => DepartmentSumAggregate, {
    nullable: true
  })
  _sum!: DepartmentSumAggregate | null;

  @TypeGraphQL.Field(_type => DepartmentMinAggregate, {
    nullable: true
  })
  _min!: DepartmentMinAggregate | null;

  @TypeGraphQL.Field(_type => DepartmentMaxAggregate, {
    nullable: true
  })
  _max!: DepartmentMaxAggregate | null;
}
