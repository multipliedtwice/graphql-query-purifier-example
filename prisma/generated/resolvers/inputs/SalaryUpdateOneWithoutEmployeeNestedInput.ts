import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SalaryCreateOrConnectWithoutEmployeeInput } from "../inputs/SalaryCreateOrConnectWithoutEmployeeInput";
import { SalaryCreateWithoutEmployeeInput } from "../inputs/SalaryCreateWithoutEmployeeInput";
import { SalaryUpdateToOneWithWhereWithoutEmployeeInput } from "../inputs/SalaryUpdateToOneWithWhereWithoutEmployeeInput";
import { SalaryUpsertWithoutEmployeeInput } from "../inputs/SalaryUpsertWithoutEmployeeInput";
import { SalaryWhereInput } from "../inputs/SalaryWhereInput";
import { SalaryWhereUniqueInput } from "../inputs/SalaryWhereUniqueInput";

@TypeGraphQL.InputType("SalaryUpdateOneWithoutEmployeeNestedInput", {})
export class SalaryUpdateOneWithoutEmployeeNestedInput {
  @TypeGraphQL.Field(_type => SalaryCreateWithoutEmployeeInput, {
    nullable: true
  })
  create?: SalaryCreateWithoutEmployeeInput | undefined;

  @TypeGraphQL.Field(_type => SalaryCreateOrConnectWithoutEmployeeInput, {
    nullable: true
  })
  connectOrCreate?: SalaryCreateOrConnectWithoutEmployeeInput | undefined;

  @TypeGraphQL.Field(_type => SalaryUpsertWithoutEmployeeInput, {
    nullable: true
  })
  upsert?: SalaryUpsertWithoutEmployeeInput | undefined;

  @TypeGraphQL.Field(_type => SalaryWhereInput, {
    nullable: true
  })
  disconnect?: SalaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalaryWhereInput, {
    nullable: true
  })
  delete?: SalaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => SalaryWhereUniqueInput, {
    nullable: true
  })
  connect?: SalaryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SalaryUpdateToOneWithWhereWithoutEmployeeInput, {
    nullable: true
  })
  update?: SalaryUpdateToOneWithWhereWithoutEmployeeInput | undefined;
}
