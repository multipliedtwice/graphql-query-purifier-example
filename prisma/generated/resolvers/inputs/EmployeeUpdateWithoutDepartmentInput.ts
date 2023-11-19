import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { SalaryUpdateOneWithoutEmployeeNestedInput } from "../inputs/SalaryUpdateOneWithoutEmployeeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EmployeeUpdateWithoutDepartmentInput", {})
export class EmployeeUpdateWithoutDepartmentInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  salaryId?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SalaryUpdateOneWithoutEmployeeNestedInput, {
    nullable: true
  })
  salary?: SalaryUpdateOneWithoutEmployeeNestedInput | undefined;
}
