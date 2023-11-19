import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalaryOrderByWithRelationInput } from "../../../inputs/SalaryOrderByWithRelationInput";
import { SalaryWhereInput } from "../../../inputs/SalaryWhereInput";
import { SalaryWhereUniqueInput } from "../../../inputs/SalaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSalaryArgs {
  @TypeGraphQL.Field(_type => SalaryWhereInput, {
    nullable: true
  })
  where?: SalaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SalaryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SalaryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SalaryWhereUniqueInput, {
    nullable: true
  })
  cursor?: SalaryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
