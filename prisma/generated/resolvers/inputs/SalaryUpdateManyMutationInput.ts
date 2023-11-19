import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SalaryUpdateManyMutationInput", {})
export class SalaryUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  amount?: FloatFieldUpdateOperationsInput | undefined;
}
