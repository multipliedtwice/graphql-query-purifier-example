import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeAvgOrderByAggregateInput } from "../inputs/EmployeeAvgOrderByAggregateInput";
import { EmployeeCountOrderByAggregateInput } from "../inputs/EmployeeCountOrderByAggregateInput";
import { EmployeeMaxOrderByAggregateInput } from "../inputs/EmployeeMaxOrderByAggregateInput";
import { EmployeeMinOrderByAggregateInput } from "../inputs/EmployeeMinOrderByAggregateInput";
import { EmployeeSumOrderByAggregateInput } from "../inputs/EmployeeSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmployeeOrderByWithAggregationInput", {})
export class EmployeeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  departmentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  salaryId?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EmployeeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EmployeeAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EmployeeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EmployeeMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EmployeeSumOrderByAggregateInput | undefined;
}
