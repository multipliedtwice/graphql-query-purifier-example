import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Employee: crudResolvers.EmployeeCrudResolver,
  Department: crudResolvers.DepartmentCrudResolver,
  Salary: crudResolvers.SalaryCrudResolver
};
const actionResolversMap = {
  Employee: {
    aggregateEmployee: actionResolvers.AggregateEmployeeResolver,
    createOneEmployee: actionResolvers.CreateOneEmployeeResolver,
    deleteManyEmployee: actionResolvers.DeleteManyEmployeeResolver,
    deleteOneEmployee: actionResolvers.DeleteOneEmployeeResolver,
    findFirstEmployee: actionResolvers.FindFirstEmployeeResolver,
    findFirstEmployeeOrThrow: actionResolvers.FindFirstEmployeeOrThrowResolver,
    employees: actionResolvers.FindManyEmployeeResolver,
    employee: actionResolvers.FindUniqueEmployeeResolver,
    getEmployee: actionResolvers.FindUniqueEmployeeOrThrowResolver,
    groupByEmployee: actionResolvers.GroupByEmployeeResolver,
    updateManyEmployee: actionResolvers.UpdateManyEmployeeResolver,
    updateOneEmployee: actionResolvers.UpdateOneEmployeeResolver,
    upsertOneEmployee: actionResolvers.UpsertOneEmployeeResolver
  },
  Department: {
    aggregateDepartment: actionResolvers.AggregateDepartmentResolver,
    createOneDepartment: actionResolvers.CreateOneDepartmentResolver,
    deleteManyDepartment: actionResolvers.DeleteManyDepartmentResolver,
    deleteOneDepartment: actionResolvers.DeleteOneDepartmentResolver,
    findFirstDepartment: actionResolvers.FindFirstDepartmentResolver,
    findFirstDepartmentOrThrow: actionResolvers.FindFirstDepartmentOrThrowResolver,
    departments: actionResolvers.FindManyDepartmentResolver,
    department: actionResolvers.FindUniqueDepartmentResolver,
    getDepartment: actionResolvers.FindUniqueDepartmentOrThrowResolver,
    groupByDepartment: actionResolvers.GroupByDepartmentResolver,
    updateManyDepartment: actionResolvers.UpdateManyDepartmentResolver,
    updateOneDepartment: actionResolvers.UpdateOneDepartmentResolver,
    upsertOneDepartment: actionResolvers.UpsertOneDepartmentResolver
  },
  Salary: {
    aggregateSalary: actionResolvers.AggregateSalaryResolver,
    createOneSalary: actionResolvers.CreateOneSalaryResolver,
    deleteManySalary: actionResolvers.DeleteManySalaryResolver,
    deleteOneSalary: actionResolvers.DeleteOneSalaryResolver,
    findFirstSalary: actionResolvers.FindFirstSalaryResolver,
    findFirstSalaryOrThrow: actionResolvers.FindFirstSalaryOrThrowResolver,
    salaries: actionResolvers.FindManySalaryResolver,
    salary: actionResolvers.FindUniqueSalaryResolver,
    getSalary: actionResolvers.FindUniqueSalaryOrThrowResolver,
    groupBySalary: actionResolvers.GroupBySalaryResolver,
    updateManySalary: actionResolvers.UpdateManySalaryResolver,
    updateOneSalary: actionResolvers.UpdateOneSalaryResolver,
    upsertOneSalary: actionResolvers.UpsertOneSalaryResolver
  }
};
const crudResolversInfo = {
  Employee: ["aggregateEmployee", "createOneEmployee", "deleteManyEmployee", "deleteOneEmployee", "findFirstEmployee", "findFirstEmployeeOrThrow", "employees", "employee", "getEmployee", "groupByEmployee", "updateManyEmployee", "updateOneEmployee", "upsertOneEmployee"],
  Department: ["aggregateDepartment", "createOneDepartment", "deleteManyDepartment", "deleteOneDepartment", "findFirstDepartment", "findFirstDepartmentOrThrow", "departments", "department", "getDepartment", "groupByDepartment", "updateManyDepartment", "updateOneDepartment", "upsertOneDepartment"],
  Salary: ["aggregateSalary", "createOneSalary", "deleteManySalary", "deleteOneSalary", "findFirstSalary", "findFirstSalaryOrThrow", "salaries", "salary", "getSalary", "groupBySalary", "updateManySalary", "updateOneSalary", "upsertOneSalary"]
};
const argsInfo = {
  AggregateEmployeeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneEmployeeArgs: ["data"],
  DeleteManyEmployeeArgs: ["where"],
  DeleteOneEmployeeArgs: ["where"],
  FindFirstEmployeeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstEmployeeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEmployeeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEmployeeArgs: ["where"],
  FindUniqueEmployeeOrThrowArgs: ["where"],
  GroupByEmployeeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEmployeeArgs: ["data", "where"],
  UpdateOneEmployeeArgs: ["data", "where"],
  UpsertOneEmployeeArgs: ["where", "create", "update"],
  AggregateDepartmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneDepartmentArgs: ["data"],
  DeleteManyDepartmentArgs: ["where"],
  DeleteOneDepartmentArgs: ["where"],
  FindFirstDepartmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstDepartmentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDepartmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueDepartmentArgs: ["where"],
  FindUniqueDepartmentOrThrowArgs: ["where"],
  GroupByDepartmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyDepartmentArgs: ["data", "where"],
  UpdateOneDepartmentArgs: ["data", "where"],
  UpsertOneDepartmentArgs: ["where", "create", "update"],
  AggregateSalaryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateOneSalaryArgs: ["data"],
  DeleteManySalaryArgs: ["where"],
  DeleteOneSalaryArgs: ["where"],
  FindFirstSalaryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSalaryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySalaryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSalaryArgs: ["where"],
  FindUniqueSalaryOrThrowArgs: ["where"],
  GroupBySalaryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySalaryArgs: ["data", "where"],
  UpdateOneSalaryArgs: ["data", "where"],
  UpsertOneSalaryArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Employee: relationResolvers.EmployeeRelationsResolver,
  Department: relationResolvers.DepartmentRelationsResolver,
  Salary: relationResolvers.SalaryRelationsResolver
};
const relationResolversInfo = {
  Employee: ["department", "salary"],
  Department: ["employees"],
  Salary: ["employee"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Employee: ["id", "name", "departmentId", "salaryId"],
  Department: ["id", "name"],
  Salary: ["id", "amount", "employeeId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateEmployee: ["_count", "_avg", "_sum", "_min", "_max"],
  EmployeeGroupBy: ["id", "name", "departmentId", "salaryId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateDepartment: ["_count", "_avg", "_sum", "_min", "_max"],
  DepartmentGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSalary: ["_count", "_avg", "_sum", "_min", "_max"],
  SalaryGroupBy: ["id", "amount", "employeeId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  EmployeeCountAggregate: ["id", "name", "departmentId", "salaryId", "_all"],
  EmployeeAvgAggregate: ["id", "departmentId", "salaryId"],
  EmployeeSumAggregate: ["id", "departmentId", "salaryId"],
  EmployeeMinAggregate: ["id", "name", "departmentId", "salaryId"],
  EmployeeMaxAggregate: ["id", "name", "departmentId", "salaryId"],
  DepartmentCount: ["employees"],
  DepartmentCountAggregate: ["id", "name", "_all"],
  DepartmentAvgAggregate: ["id"],
  DepartmentSumAggregate: ["id"],
  DepartmentMinAggregate: ["id", "name"],
  DepartmentMaxAggregate: ["id", "name"],
  SalaryCountAggregate: ["id", "amount", "employeeId", "_all"],
  SalaryAvgAggregate: ["id", "amount", "employeeId"],
  SalarySumAggregate: ["id", "amount", "employeeId"],
  SalaryMinAggregate: ["id", "amount", "employeeId"],
  SalaryMaxAggregate: ["id", "amount", "employeeId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  EmployeeWhereInput: ["AND", "OR", "NOT", "id", "name", "departmentId", "salaryId", "department", "salary"],
  EmployeeOrderByWithRelationInput: ["id", "name", "departmentId", "salaryId", "department", "salary"],
  EmployeeWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "departmentId", "salaryId", "department", "salary"],
  EmployeeOrderByWithAggregationInput: ["id", "name", "departmentId", "salaryId", "_count", "_avg", "_max", "_min", "_sum"],
  EmployeeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "departmentId", "salaryId"],
  DepartmentWhereInput: ["AND", "OR", "NOT", "id", "name", "employees"],
  DepartmentOrderByWithRelationInput: ["id", "name", "employees"],
  DepartmentWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "employees"],
  DepartmentOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  DepartmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  SalaryWhereInput: ["AND", "OR", "NOT", "id", "amount", "employeeId", "employee"],
  SalaryOrderByWithRelationInput: ["id", "amount", "employeeId", "employee"],
  SalaryWhereUniqueInput: ["id", "employeeId", "AND", "OR", "NOT", "amount", "employee"],
  SalaryOrderByWithAggregationInput: ["id", "amount", "employeeId", "_count", "_avg", "_max", "_min", "_sum"],
  SalaryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "amount", "employeeId"],
  EmployeeCreateInput: ["name", "salaryId", "department", "salary"],
  EmployeeUpdateInput: ["name", "salaryId", "department", "salary"],
  EmployeeUpdateManyMutationInput: ["name", "salaryId"],
  DepartmentCreateInput: ["name", "employees"],
  DepartmentUpdateInput: ["name", "employees"],
  DepartmentUpdateManyMutationInput: ["name"],
  SalaryCreateInput: ["amount", "employee"],
  SalaryUpdateInput: ["amount", "employee"],
  SalaryUpdateManyMutationInput: ["amount"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DepartmentRelationFilter: ["is", "isNot"],
  SalaryNullableRelationFilter: ["is", "isNot"],
  SortOrderInput: ["sort", "nulls"],
  EmployeeCountOrderByAggregateInput: ["id", "name", "departmentId", "salaryId"],
  EmployeeAvgOrderByAggregateInput: ["id", "departmentId", "salaryId"],
  EmployeeMaxOrderByAggregateInput: ["id", "name", "departmentId", "salaryId"],
  EmployeeMinOrderByAggregateInput: ["id", "name", "departmentId", "salaryId"],
  EmployeeSumOrderByAggregateInput: ["id", "departmentId", "salaryId"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EmployeeListRelationFilter: ["every", "some", "none"],
  EmployeeOrderByRelationAggregateInput: ["_count"],
  DepartmentCountOrderByAggregateInput: ["id", "name"],
  DepartmentAvgOrderByAggregateInput: ["id"],
  DepartmentMaxOrderByAggregateInput: ["id", "name"],
  DepartmentMinOrderByAggregateInput: ["id", "name"],
  DepartmentSumOrderByAggregateInput: ["id"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EmployeeRelationFilter: ["is", "isNot"],
  SalaryCountOrderByAggregateInput: ["id", "amount", "employeeId"],
  SalaryAvgOrderByAggregateInput: ["id", "amount", "employeeId"],
  SalaryMaxOrderByAggregateInput: ["id", "amount", "employeeId"],
  SalaryMinOrderByAggregateInput: ["id", "amount", "employeeId"],
  SalarySumOrderByAggregateInput: ["id", "amount", "employeeId"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DepartmentCreateNestedOneWithoutEmployeesInput: ["create", "connectOrCreate", "connect"],
  SalaryCreateNestedOneWithoutEmployeeInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DepartmentUpdateOneRequiredWithoutEmployeesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SalaryUpdateOneWithoutEmployeeNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EmployeeCreateNestedManyWithoutDepartmentInput: ["create", "connectOrCreate", "connect"],
  EmployeeUpdateManyWithoutDepartmentNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EmployeeCreateNestedOneWithoutSalaryInput: ["create", "connectOrCreate", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EmployeeUpdateOneRequiredWithoutSalaryNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DepartmentCreateWithoutEmployeesInput: ["name"],
  DepartmentCreateOrConnectWithoutEmployeesInput: ["where", "create"],
  SalaryCreateWithoutEmployeeInput: ["amount"],
  SalaryCreateOrConnectWithoutEmployeeInput: ["where", "create"],
  DepartmentUpsertWithoutEmployeesInput: ["update", "create", "where"],
  DepartmentUpdateToOneWithWhereWithoutEmployeesInput: ["where", "data"],
  DepartmentUpdateWithoutEmployeesInput: ["name"],
  SalaryUpsertWithoutEmployeeInput: ["update", "create", "where"],
  SalaryUpdateToOneWithWhereWithoutEmployeeInput: ["where", "data"],
  SalaryUpdateWithoutEmployeeInput: ["amount"],
  EmployeeCreateWithoutDepartmentInput: ["name", "salaryId", "salary"],
  EmployeeCreateOrConnectWithoutDepartmentInput: ["where", "create"],
  EmployeeUpsertWithWhereUniqueWithoutDepartmentInput: ["where", "update", "create"],
  EmployeeUpdateWithWhereUniqueWithoutDepartmentInput: ["where", "data"],
  EmployeeUpdateManyWithWhereWithoutDepartmentInput: ["where", "data"],
  EmployeeScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "departmentId", "salaryId"],
  EmployeeCreateWithoutSalaryInput: ["name", "salaryId", "department"],
  EmployeeCreateOrConnectWithoutSalaryInput: ["where", "create"],
  EmployeeUpsertWithoutSalaryInput: ["update", "create", "where"],
  EmployeeUpdateToOneWithWhereWithoutSalaryInput: ["where", "data"],
  EmployeeUpdateWithoutSalaryInput: ["name", "salaryId", "department"],
  EmployeeUpdateWithoutDepartmentInput: ["name", "salaryId", "salary"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

