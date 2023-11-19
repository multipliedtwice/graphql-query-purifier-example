import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeCreateOrConnectWithoutSalaryInput } from "../inputs/EmployeeCreateOrConnectWithoutSalaryInput";
import { EmployeeCreateWithoutSalaryInput } from "../inputs/EmployeeCreateWithoutSalaryInput";
import { EmployeeWhereUniqueInput } from "../inputs/EmployeeWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeCreateNestedOneWithoutSalaryInput", {})
export class EmployeeCreateNestedOneWithoutSalaryInput {
  @TypeGraphQL.Field(_type => EmployeeCreateWithoutSalaryInput, {
    nullable: true
  })
  create?: EmployeeCreateWithoutSalaryInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeCreateOrConnectWithoutSalaryInput, {
    nullable: true
  })
  connectOrCreate?: EmployeeCreateOrConnectWithoutSalaryInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeWhereUniqueInput, {
    nullable: true
  })
  connect?: EmployeeWhereUniqueInput | undefined;
}
