import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalaryOrderByWithAggregationInput } from "../../../inputs/SalaryOrderByWithAggregationInput";
import { SalaryScalarWhereWithAggregatesInput } from "../../../inputs/SalaryScalarWhereWithAggregatesInput";
import { SalaryWhereInput } from "../../../inputs/SalaryWhereInput";
import { SalaryScalarFieldEnum } from "../../../../enums/SalaryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySalaryArgs {
  @TypeGraphQL.Field(_type => SalaryWhereInput, {
    nullable: true
  })
  where?: SalaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SalaryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SalaryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalaryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "amount" | "employeeId">;

  @TypeGraphQL.Field(_type => SalaryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SalaryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
