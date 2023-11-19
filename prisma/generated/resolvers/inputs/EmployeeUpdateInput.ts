import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DepartmentUpdateOneRequiredWithoutEmployeesNestedInput } from "../inputs/DepartmentUpdateOneRequiredWithoutEmployeesNestedInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { SalaryUpdateOneWithoutEmployeeNestedInput } from "../inputs/SalaryUpdateOneWithoutEmployeeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EmployeeUpdateInput", {})
export class EmployeeUpdateInput {
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

  @TypeGraphQL.Field(_type => SalaryUpdateOneWithoutEmployeeNestedInput, {
    nullable: true
  })
  salary?: SalaryUpdateOneWithoutEmployeeNestedInput | undefined;
}
