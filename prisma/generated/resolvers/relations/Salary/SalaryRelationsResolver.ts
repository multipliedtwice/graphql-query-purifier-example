import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Employee } from "../../../models/Employee";
import { Salary } from "../../../models/Salary";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Salary)
export class SalaryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Employee, {
    nullable: false
  })
  async employee(@TypeGraphQL.Root() salary: Salary, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Employee> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salary.findUniqueOrThrow({
      where: {
        id: salary.id,
      },
    }).employee({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
