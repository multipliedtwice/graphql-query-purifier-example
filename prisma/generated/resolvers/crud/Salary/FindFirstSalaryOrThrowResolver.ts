import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSalaryOrThrowArgs } from "./args/FindFirstSalaryOrThrowArgs";
import { Salary } from "../../../models/Salary";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Salary)
export class FindFirstSalaryOrThrowResolver {
  @TypeGraphQL.Query(_returns => Salary, {
    nullable: true
  })
  async findFirstSalaryOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSalaryOrThrowArgs): Promise<Salary | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).salary.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
