import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalaryWhereUniqueInput } from "../../../inputs/SalaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSalaryArgs {
  @TypeGraphQL.Field(_type => SalaryWhereUniqueInput, {
    nullable: false
  })
  where!: SalaryWhereUniqueInput;
}
