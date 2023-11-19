import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryCreateWithoutEmployeeInput } from "../inputs/SalaryCreateWithoutEmployeeInput";
import { SalaryWhereUniqueInput } from "../inputs/SalaryWhereUniqueInput";

@TypeGraphQL.InputType("SalaryCreateOrConnectWithoutEmployeeInput", {})
export class SalaryCreateOrConnectWithoutEmployeeInput {
  @TypeGraphQL.Field(_type => SalaryWhereUniqueInput, {
    nullable: false
  })
  where!: SalaryWhereUniqueInput;

  @TypeGraphQL.Field(_type => SalaryCreateWithoutEmployeeInput, {
    nullable: false
  })
  create!: SalaryCreateWithoutEmployeeInput;
}
