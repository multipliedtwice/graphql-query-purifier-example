import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryCreateWithoutEmployeeInput } from "../inputs/SalaryCreateWithoutEmployeeInput";
import { SalaryUpdateWithoutEmployeeInput } from "../inputs/SalaryUpdateWithoutEmployeeInput";
import { SalaryWhereInput } from "../inputs/SalaryWhereInput";

@TypeGraphQL.InputType("SalaryUpsertWithoutEmployeeInput", {})
export class SalaryUpsertWithoutEmployeeInput {
  @TypeGraphQL.Field(_type => SalaryUpdateWithoutEmployeeInput, {
    nullable: false
  })
  update!: SalaryUpdateWithoutEmployeeInput;

  @TypeGraphQL.Field(_type => SalaryCreateWithoutEmployeeInput, {
    nullable: false
  })
  create!: SalaryCreateWithoutEmployeeInput;

  @TypeGraphQL.Field(_type => SalaryWhereInput, {
    nullable: true
  })
  where?: SalaryWhereInput | undefined;
}
