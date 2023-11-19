import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalaryCreateInput } from "../../../inputs/SalaryCreateInput";
import { SalaryUpdateInput } from "../../../inputs/SalaryUpdateInput";
import { SalaryWhereUniqueInput } from "../../../inputs/SalaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSalaryArgs {
  @TypeGraphQL.Field(_type => SalaryWhereUniqueInput, {
    nullable: false
  })
  where!: SalaryWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalaryCreateInput, {
    nullable: false
  })
  create!: SalaryCreateInput;

  @TypeGraphQL.Field(_type => SalaryUpdateInput, {
    nullable: false
  })
  update!: SalaryUpdateInput;
}
