import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalaryWhereInput } from "../../../inputs/SalaryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySalaryArgs {
  @TypeGraphQL.Field(_type => SalaryWhereInput, {
    nullable: true
  })
  where?: SalaryWhereInput | undefined;
}
