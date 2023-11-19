import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalaryCreateInput } from "../../../inputs/SalaryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSalaryArgs {
  @TypeGraphQL.Field(_type => SalaryCreateInput, {
    nullable: false
  })
  data!: SalaryCreateInput;
}
