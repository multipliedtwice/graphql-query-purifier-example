import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryCreateOrConnectWithoutEmployeeInput } from "../inputs/SalaryCreateOrConnectWithoutEmployeeInput";
import { SalaryCreateWithoutEmployeeInput } from "../inputs/SalaryCreateWithoutEmployeeInput";
import { SalaryWhereUniqueInput } from "../inputs/SalaryWhereUniqueInput";

@TypeGraphQL.InputType("SalaryCreateNestedOneWithoutEmployeeInput", {})
export class SalaryCreateNestedOneWithoutEmployeeInput {
  @TypeGraphQL.Field(_type => SalaryCreateWithoutEmployeeInput, {
    nullable: true
  })
  create?: SalaryCreateWithoutEmployeeInput | undefined;

  @TypeGraphQL.Field(_type => SalaryCreateOrConnectWithoutEmployeeInput, {
    nullable: true
  })
  connectOrCreate?: SalaryCreateOrConnectWithoutEmployeeInput | undefined;

  @TypeGraphQL.Field(_type => SalaryWhereUniqueInput, {
    nullable: true
  })
  connect?: SalaryWhereUniqueInput | undefined;
}
