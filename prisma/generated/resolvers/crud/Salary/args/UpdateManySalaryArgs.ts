import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalaryUpdateManyMutationInput } from "../../../inputs/SalaryUpdateManyMutationInput";
import { SalaryWhereInput } from "../../../inputs/SalaryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySalaryArgs {
  @TypeGraphQL.Field(_type => SalaryUpdateManyMutationInput, {
    nullable: false
  })
  data!: SalaryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SalaryWhereInput, {
    nullable: true
  })
  where?: SalaryWhereInput | undefined;
}
