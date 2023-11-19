import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSalaryArgs } from "./args/AggregateSalaryArgs";
import { Salary } from "../../../models/Salary";
import { AggregateSalary } from "../../outputs/AggregateSalary";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Salary)
export class AggregateSalaryResolver {
  @TypeGraphQL.Query(_returns => AggregateSalary, {
    nullable: false
  })
  async aggregateSalary(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSalaryArgs): Promise<AggregateSalary> {
    return getPrismaFromContext(ctx).salary.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
