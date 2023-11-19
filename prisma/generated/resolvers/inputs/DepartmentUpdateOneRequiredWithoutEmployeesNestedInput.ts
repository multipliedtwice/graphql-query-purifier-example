import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DepartmentCreateOrConnectWithoutEmployeesInput } from "../inputs/DepartmentCreateOrConnectWithoutEmployeesInput";
import { DepartmentCreateWithoutEmployeesInput } from "../inputs/DepartmentCreateWithoutEmployeesInput";
import { DepartmentUpdateToOneWithWhereWithoutEmployeesInput } from "../inputs/DepartmentUpdateToOneWithWhereWithoutEmployeesInput";
import { DepartmentUpsertWithoutEmployeesInput } from "../inputs/DepartmentUpsertWithoutEmployeesInput";
import { DepartmentWhereUniqueInput } from "../inputs/DepartmentWhereUniqueInput";

@TypeGraphQL.InputType("DepartmentUpdateOneRequiredWithoutEmployeesNestedInput", {})
export class DepartmentUpdateOneRequiredWithoutEmployeesNestedInput {
  @TypeGraphQL.Field(_type => DepartmentCreateWithoutEmployeesInput, {
    nullable: true
  })
  create?: DepartmentCreateWithoutEmployeesInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentCreateOrConnectWithoutEmployeesInput, {
    nullable: true
  })
  connectOrCreate?: DepartmentCreateOrConnectWithoutEmployeesInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentUpsertWithoutEmployeesInput, {
    nullable: true
  })
  upsert?: DepartmentUpsertWithoutEmployeesInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentWhereUniqueInput, {
    nullable: true
  })
  connect?: DepartmentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentUpdateToOneWithWhereWithoutEmployeesInput, {
    nullable: true
  })
  update?: DepartmentUpdateToOneWithWhereWithoutEmployeesInput | undefined;
}
