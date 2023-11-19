import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryAvgOrderByAggregateInput } from "../inputs/SalaryAvgOrderByAggregateInput";
import { SalaryCountOrderByAggregateInput } from "../inputs/SalaryCountOrderByAggregateInput";
import { SalaryMaxOrderByAggregateInput } from "../inputs/SalaryMaxOrderByAggregateInput";
import { SalaryMinOrderByAggregateInput } from "../inputs/SalaryMinOrderByAggregateInput";
import { SalarySumOrderByAggregateInput } from "../inputs/SalarySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SalaryOrderByWithAggregationInput", {})
export class SalaryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  employeeId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SalaryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SalaryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SalaryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SalaryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SalaryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SalaryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SalaryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SalaryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SalarySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SalarySumOrderByAggregateInput | undefined;
}
