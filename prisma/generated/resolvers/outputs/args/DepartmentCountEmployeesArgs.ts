import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeeWhereInput } from "../../inputs/EmployeeWhereInput";

@TypeGraphQL.ArgsType()
export class DepartmentCountEmployeesArgs {
  @TypeGraphQL.Field(_type => EmployeeWhereInput, {
    nullable: true
  })
  where?: EmployeeWhereInput | undefined;
}
