import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DepartmentUpdateOneRequiredWithoutEmployeesNestedInput } from "../inputs/DepartmentUpdateOneRequiredWithoutEmployeesNestedInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EmployeeUpdateWithoutSalaryInput", {})
export class EmployeeUpdateWithoutSalaryInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  salaryId?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DepartmentUpdateOneRequiredWithoutEmployeesNestedInput, {
    nullable: true
  })
  department?: DepartmentUpdateOneRequiredWithoutEmployeesNestedInput | undefined;
}
