import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryUpdateWithoutEmployeeInput } from "../inputs/SalaryUpdateWithoutEmployeeInput";
import { SalaryWhereInput } from "../inputs/SalaryWhereInput";

@TypeGraphQL.InputType("SalaryUpdateToOneWithWhereWithoutEmployeeInput", {})
export class SalaryUpdateToOneWithWhereWithoutEmployeeInput {
  @TypeGraphQL.Field(_type => SalaryWhereInput, {
    nullable: true
  })
  where?: SalaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalaryUpdateWithoutEmployeeInput, {
    nullable: false
  })
  data!: SalaryUpdateWithoutEmployeeInput;
}
