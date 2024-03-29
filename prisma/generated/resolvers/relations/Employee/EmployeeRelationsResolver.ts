import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Department } from "../../../models/Department";
import { Employee } from "../../../models/Employee";
import { Salary } from "../../../models/Salary";
import { EmployeeSalaryArgs } from "./args/EmployeeSalaryArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Employee)
export class EmployeeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Department, {
    nullable: false
  })
  async department(@TypeGraphQL.Root() employee: Employee, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Department> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).employee.findUniqueOrThrow({
      where: {
        id: employee.id,
      },
    }).department({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Salary, {
    nullable: true
  })
  async salary(@TypeGraphQL.Root() employee: Employee, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EmployeeSalaryArgs): Promise<Salary | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).employee.findUniqueOrThrow({
      where: {
        id: employee.id,
      },
    }).salary({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
