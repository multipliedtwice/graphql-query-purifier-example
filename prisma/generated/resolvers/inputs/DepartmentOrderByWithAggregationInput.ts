import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DepartmentAvgOrderByAggregateInput } from "../inputs/DepartmentAvgOrderByAggregateInput";
import { DepartmentCountOrderByAggregateInput } from "../inputs/DepartmentCountOrderByAggregateInput";
import { DepartmentMaxOrderByAggregateInput } from "../inputs/DepartmentMaxOrderByAggregateInput";
import { DepartmentMinOrderByAggregateInput } from "../inputs/DepartmentMinOrderByAggregateInput";
import { DepartmentSumOrderByAggregateInput } from "../inputs/DepartmentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DepartmentOrderByWithAggregationInput", {})
export class DepartmentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => DepartmentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: DepartmentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: DepartmentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: DepartmentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: DepartmentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: DepartmentSumOrderByAggregateInput | undefined;
}
