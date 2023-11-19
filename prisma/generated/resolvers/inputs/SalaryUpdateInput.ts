import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeUpdateOneRequiredWithoutSalaryNestedInput } from "../inputs/EmployeeUpdateOneRequiredWithoutSalaryNestedInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SalaryUpdateInput", {})
export class SalaryUpdateInput {
  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  amount?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeUpdateOneRequiredWithoutSalaryNestedInput, {
    nullable: true
  })
  employee?: EmployeeUpdateOneRequiredWithoutSalaryNestedInput | undefined;
}
