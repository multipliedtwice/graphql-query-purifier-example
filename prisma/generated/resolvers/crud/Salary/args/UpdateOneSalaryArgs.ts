import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalaryUpdateInput } from "../../../inputs/SalaryUpdateInput";
import { SalaryWhereUniqueInput } from "../../../inputs/SalaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSalaryArgs {
  @TypeGraphQL.Field(_type => SalaryUpdateInput, {
    nullable: false
  })
  data!: SalaryUpdateInput;

  @TypeGraphQL.Field(_type => SalaryWhereUniqueInput, {
    nullable: false
  })
  where!: SalaryWhereUniqueInput;
}
