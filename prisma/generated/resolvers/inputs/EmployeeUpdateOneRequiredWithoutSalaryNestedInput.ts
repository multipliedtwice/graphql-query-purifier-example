import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeCreateOrConnectWithoutSalaryInput } from "../inputs/EmployeeCreateOrConnectWithoutSalaryInput";
import { EmployeeCreateWithoutSalaryInput } from "../inputs/EmployeeCreateWithoutSalaryInput";
import { EmployeeUpdateToOneWithWhereWithoutSalaryInput } from "../inputs/EmployeeUpdateToOneWithWhereWithoutSalaryInput";
import { EmployeeUpsertWithoutSalaryInput } from "../inputs/EmployeeUpsertWithoutSalaryInput";
import { EmployeeWhereUniqueInput } from "../inputs/EmployeeWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeUpdateOneRequiredWithoutSalaryNestedInput", {})
export class EmployeeUpdateOneRequiredWithoutSalaryNestedInput {
  @TypeGraphQL.Field(_type => EmployeeCreateWithoutSalaryInput, {
    nullable: true
  })
  create?: EmployeeCreateWithoutSalaryInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeCreateOrConnectWithoutSalaryInput, {
    nullable: true
  })
  connectOrCreate?: EmployeeCreateOrConnectWithoutSalaryInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeUpsertWithoutSalaryInput, {
    nullable: true
  })
  upsert?: EmployeeUpsertWithoutSalaryInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeWhereUniqueInput, {
    nullable: true
  })
  connect?: EmployeeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeUpdateToOneWithWhereWithoutSalaryInput, {
    nullable: true
  })
  update?: EmployeeUpdateToOneWithWhereWithoutSalaryInput | undefined;
}
