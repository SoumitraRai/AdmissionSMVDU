
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model StudentApplication
 * 
 */
export type StudentApplication = $Result.DefaultSelection<Prisma.$StudentApplicationPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model SeatMatrix
 * 
 */
export type SeatMatrix = $Result.DefaultSelection<Prisma.$SeatMatrixPayload>
/**
 * Model AllocatedSeat
 * 
 */
export type AllocatedSeat = $Result.DefaultSelection<Prisma.$AllocatedSeatPayload>
/**
 * Model OriginalSeatMatrix
 * 
 */
export type OriginalSeatMatrix = $Result.DefaultSelection<Prisma.$OriginalSeatMatrixPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more StudentApplications
 * const studentApplications = await prisma.studentApplication.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more StudentApplications
   * const studentApplications = await prisma.studentApplication.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.studentApplication`: Exposes CRUD operations for the **StudentApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentApplications
    * const studentApplications = await prisma.studentApplication.findMany()
    * ```
    */
  get studentApplication(): Prisma.StudentApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seatMatrix`: Exposes CRUD operations for the **SeatMatrix** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeatMatrices
    * const seatMatrices = await prisma.seatMatrix.findMany()
    * ```
    */
  get seatMatrix(): Prisma.SeatMatrixDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allocatedSeat`: Exposes CRUD operations for the **AllocatedSeat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AllocatedSeats
    * const allocatedSeats = await prisma.allocatedSeat.findMany()
    * ```
    */
  get allocatedSeat(): Prisma.AllocatedSeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.originalSeatMatrix`: Exposes CRUD operations for the **OriginalSeatMatrix** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OriginalSeatMatrices
    * const originalSeatMatrices = await prisma.originalSeatMatrix.findMany()
    * ```
    */
  get originalSeatMatrix(): Prisma.OriginalSeatMatrixDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    StudentApplication: 'StudentApplication',
    Department: 'Department',
    SeatMatrix: 'SeatMatrix',
    AllocatedSeat: 'AllocatedSeat',
    OriginalSeatMatrix: 'OriginalSeatMatrix'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "studentApplication" | "department" | "seatMatrix" | "allocatedSeat" | "originalSeatMatrix"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      StudentApplication: {
        payload: Prisma.$StudentApplicationPayload<ExtArgs>
        fields: Prisma.StudentApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          findFirst: {
            args: Prisma.StudentApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          findMany: {
            args: Prisma.StudentApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>[]
          }
          create: {
            args: Prisma.StudentApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          createMany: {
            args: Prisma.StudentApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>[]
          }
          delete: {
            args: Prisma.StudentApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          update: {
            args: Prisma.StudentApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          deleteMany: {
            args: Prisma.StudentApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>[]
          }
          upsert: {
            args: Prisma.StudentApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          aggregate: {
            args: Prisma.StudentApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentApplication>
          }
          groupBy: {
            args: Prisma.StudentApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<StudentApplicationCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      SeatMatrix: {
        payload: Prisma.$SeatMatrixPayload<ExtArgs>
        fields: Prisma.SeatMatrixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatMatrixFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatMatrixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatMatrixFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatMatrixPayload>
          }
          findFirst: {
            args: Prisma.SeatMatrixFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatMatrixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatMatrixFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatMatrixPayload>
          }
          findMany: {
            args: Prisma.SeatMatrixFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatMatrixPayload>[]
          }
          create: {
            args: Prisma.SeatMatrixCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatMatrixPayload>
          }
          createMany: {
            args: Prisma.SeatMatrixCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeatMatrixCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatMatrixPayload>[]
          }
          delete: {
            args: Prisma.SeatMatrixDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatMatrixPayload>
          }
          update: {
            args: Prisma.SeatMatrixUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatMatrixPayload>
          }
          deleteMany: {
            args: Prisma.SeatMatrixDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatMatrixUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeatMatrixUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatMatrixPayload>[]
          }
          upsert: {
            args: Prisma.SeatMatrixUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatMatrixPayload>
          }
          aggregate: {
            args: Prisma.SeatMatrixAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeatMatrix>
          }
          groupBy: {
            args: Prisma.SeatMatrixGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatMatrixGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatMatrixCountArgs<ExtArgs>
            result: $Utils.Optional<SeatMatrixCountAggregateOutputType> | number
          }
        }
      }
      AllocatedSeat: {
        payload: Prisma.$AllocatedSeatPayload<ExtArgs>
        fields: Prisma.AllocatedSeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllocatedSeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedSeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllocatedSeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedSeatPayload>
          }
          findFirst: {
            args: Prisma.AllocatedSeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedSeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllocatedSeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedSeatPayload>
          }
          findMany: {
            args: Prisma.AllocatedSeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedSeatPayload>[]
          }
          create: {
            args: Prisma.AllocatedSeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedSeatPayload>
          }
          createMany: {
            args: Prisma.AllocatedSeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllocatedSeatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedSeatPayload>[]
          }
          delete: {
            args: Prisma.AllocatedSeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedSeatPayload>
          }
          update: {
            args: Prisma.AllocatedSeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedSeatPayload>
          }
          deleteMany: {
            args: Prisma.AllocatedSeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllocatedSeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllocatedSeatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedSeatPayload>[]
          }
          upsert: {
            args: Prisma.AllocatedSeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocatedSeatPayload>
          }
          aggregate: {
            args: Prisma.AllocatedSeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllocatedSeat>
          }
          groupBy: {
            args: Prisma.AllocatedSeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllocatedSeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllocatedSeatCountArgs<ExtArgs>
            result: $Utils.Optional<AllocatedSeatCountAggregateOutputType> | number
          }
        }
      }
      OriginalSeatMatrix: {
        payload: Prisma.$OriginalSeatMatrixPayload<ExtArgs>
        fields: Prisma.OriginalSeatMatrixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OriginalSeatMatrixFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalSeatMatrixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OriginalSeatMatrixFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalSeatMatrixPayload>
          }
          findFirst: {
            args: Prisma.OriginalSeatMatrixFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalSeatMatrixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OriginalSeatMatrixFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalSeatMatrixPayload>
          }
          findMany: {
            args: Prisma.OriginalSeatMatrixFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalSeatMatrixPayload>[]
          }
          create: {
            args: Prisma.OriginalSeatMatrixCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalSeatMatrixPayload>
          }
          createMany: {
            args: Prisma.OriginalSeatMatrixCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OriginalSeatMatrixCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalSeatMatrixPayload>[]
          }
          delete: {
            args: Prisma.OriginalSeatMatrixDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalSeatMatrixPayload>
          }
          update: {
            args: Prisma.OriginalSeatMatrixUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalSeatMatrixPayload>
          }
          deleteMany: {
            args: Prisma.OriginalSeatMatrixDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OriginalSeatMatrixUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OriginalSeatMatrixUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalSeatMatrixPayload>[]
          }
          upsert: {
            args: Prisma.OriginalSeatMatrixUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OriginalSeatMatrixPayload>
          }
          aggregate: {
            args: Prisma.OriginalSeatMatrixAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOriginalSeatMatrix>
          }
          groupBy: {
            args: Prisma.OriginalSeatMatrixGroupByArgs<ExtArgs>
            result: $Utils.Optional<OriginalSeatMatrixGroupByOutputType>[]
          }
          count: {
            args: Prisma.OriginalSeatMatrixCountArgs<ExtArgs>
            result: $Utils.Optional<OriginalSeatMatrixCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    studentApplication?: StudentApplicationOmit
    department?: DepartmentOmit
    seatMatrix?: SeatMatrixOmit
    allocatedSeat?: AllocatedSeatOmit
    originalSeatMatrix?: OriginalSeatMatrixOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentApplicationCountOutputType
   */

  export type StudentApplicationCountOutputType = {
    allocations: number
  }

  export type StudentApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allocations?: boolean | StudentApplicationCountOutputTypeCountAllocationsArgs
  }

  // Custom InputTypes
  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationCountOutputType
     */
    select?: StudentApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeCountAllocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllocatedSeatWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    seatMatrix: number
    originalSeatMatrix: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seatMatrix?: boolean | DepartmentCountOutputTypeCountSeatMatrixArgs
    originalSeatMatrix?: boolean | DepartmentCountOutputTypeCountOriginalSeatMatrixArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountSeatMatrixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatMatrixWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountOriginalSeatMatrixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginalSeatMatrixWhereInput
  }


  /**
   * Models
   */

  /**
   * Model StudentApplication
   */

  export type AggregateStudentApplication = {
    _count: StudentApplicationCountAggregateOutputType | null
    _avg: StudentApplicationAvgAggregateOutputType | null
    _sum: StudentApplicationSumAggregateOutputType | null
    _min: StudentApplicationMinAggregateOutputType | null
    _max: StudentApplicationMaxAggregateOutputType | null
  }

  export type StudentApplicationAvgAggregateOutputType = {
    jeeCRL: number | null
    categoryRank: number | null
    subCategoryRank: number | null
    sportsMarks: number | null
  }

  export type StudentApplicationSumAggregateOutputType = {
    jeeCRL: number | null
    categoryRank: number | null
    subCategoryRank: number | null
    sportsMarks: number | null
  }

  export type StudentApplicationMinAggregateOutputType = {
    applicationNumber: string | null
    studentName: string | null
    fatherMotherName: string | null
    phoneNumber: string | null
    email: string | null
    jeeCRL: number | null
    category: string | null
    categoryRank: number | null
    subCategory: string | null
    subCategoryRank: number | null
    courseChoice1: string | null
    courseChoice2: string | null
    courseChoice3: string | null
    courseChoice4: string | null
    courseChoice5: string | null
    courseChoice6: string | null
    courseChoice7: string | null
    sportsMarks: number | null
    createdAt: Date | null
  }

  export type StudentApplicationMaxAggregateOutputType = {
    applicationNumber: string | null
    studentName: string | null
    fatherMotherName: string | null
    phoneNumber: string | null
    email: string | null
    jeeCRL: number | null
    category: string | null
    categoryRank: number | null
    subCategory: string | null
    subCategoryRank: number | null
    courseChoice1: string | null
    courseChoice2: string | null
    courseChoice3: string | null
    courseChoice4: string | null
    courseChoice5: string | null
    courseChoice6: string | null
    courseChoice7: string | null
    sportsMarks: number | null
    createdAt: Date | null
  }

  export type StudentApplicationCountAggregateOutputType = {
    applicationNumber: number
    studentName: number
    fatherMotherName: number
    phoneNumber: number
    email: number
    jeeCRL: number
    category: number
    categoryRank: number
    subCategory: number
    subCategoryRank: number
    courseChoice1: number
    courseChoice2: number
    courseChoice3: number
    courseChoice4: number
    courseChoice5: number
    courseChoice6: number
    courseChoice7: number
    sportsMarks: number
    createdAt: number
    _all: number
  }


  export type StudentApplicationAvgAggregateInputType = {
    jeeCRL?: true
    categoryRank?: true
    subCategoryRank?: true
    sportsMarks?: true
  }

  export type StudentApplicationSumAggregateInputType = {
    jeeCRL?: true
    categoryRank?: true
    subCategoryRank?: true
    sportsMarks?: true
  }

  export type StudentApplicationMinAggregateInputType = {
    applicationNumber?: true
    studentName?: true
    fatherMotherName?: true
    phoneNumber?: true
    email?: true
    jeeCRL?: true
    category?: true
    categoryRank?: true
    subCategory?: true
    subCategoryRank?: true
    courseChoice1?: true
    courseChoice2?: true
    courseChoice3?: true
    courseChoice4?: true
    courseChoice5?: true
    courseChoice6?: true
    courseChoice7?: true
    sportsMarks?: true
    createdAt?: true
  }

  export type StudentApplicationMaxAggregateInputType = {
    applicationNumber?: true
    studentName?: true
    fatherMotherName?: true
    phoneNumber?: true
    email?: true
    jeeCRL?: true
    category?: true
    categoryRank?: true
    subCategory?: true
    subCategoryRank?: true
    courseChoice1?: true
    courseChoice2?: true
    courseChoice3?: true
    courseChoice4?: true
    courseChoice5?: true
    courseChoice6?: true
    courseChoice7?: true
    sportsMarks?: true
    createdAt?: true
  }

  export type StudentApplicationCountAggregateInputType = {
    applicationNumber?: true
    studentName?: true
    fatherMotherName?: true
    phoneNumber?: true
    email?: true
    jeeCRL?: true
    category?: true
    categoryRank?: true
    subCategory?: true
    subCategoryRank?: true
    courseChoice1?: true
    courseChoice2?: true
    courseChoice3?: true
    courseChoice4?: true
    courseChoice5?: true
    courseChoice6?: true
    courseChoice7?: true
    sportsMarks?: true
    createdAt?: true
    _all?: true
  }

  export type StudentApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentApplication to aggregate.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentApplications
    **/
    _count?: true | StudentApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentApplicationMaxAggregateInputType
  }

  export type GetStudentApplicationAggregateType<T extends StudentApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentApplication[P]>
      : GetScalarType<T[P], AggregateStudentApplication[P]>
  }




  export type StudentApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentApplicationWhereInput
    orderBy?: StudentApplicationOrderByWithAggregationInput | StudentApplicationOrderByWithAggregationInput[]
    by: StudentApplicationScalarFieldEnum[] | StudentApplicationScalarFieldEnum
    having?: StudentApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentApplicationCountAggregateInputType | true
    _avg?: StudentApplicationAvgAggregateInputType
    _sum?: StudentApplicationSumAggregateInputType
    _min?: StudentApplicationMinAggregateInputType
    _max?: StudentApplicationMaxAggregateInputType
  }

  export type StudentApplicationGroupByOutputType = {
    applicationNumber: string
    studentName: string
    fatherMotherName: string
    phoneNumber: string
    email: string
    jeeCRL: number
    category: string
    categoryRank: number | null
    subCategory: string | null
    subCategoryRank: number | null
    courseChoice1: string
    courseChoice2: string | null
    courseChoice3: string | null
    courseChoice4: string | null
    courseChoice5: string | null
    courseChoice6: string | null
    courseChoice7: string | null
    sportsMarks: number | null
    createdAt: Date
    _count: StudentApplicationCountAggregateOutputType | null
    _avg: StudentApplicationAvgAggregateOutputType | null
    _sum: StudentApplicationSumAggregateOutputType | null
    _min: StudentApplicationMinAggregateOutputType | null
    _max: StudentApplicationMaxAggregateOutputType | null
  }

  type GetStudentApplicationGroupByPayload<T extends StudentApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], StudentApplicationGroupByOutputType[P]>
        }
      >
    >


  export type StudentApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applicationNumber?: boolean
    studentName?: boolean
    fatherMotherName?: boolean
    phoneNumber?: boolean
    email?: boolean
    jeeCRL?: boolean
    category?: boolean
    categoryRank?: boolean
    subCategory?: boolean
    subCategoryRank?: boolean
    courseChoice1?: boolean
    courseChoice2?: boolean
    courseChoice3?: boolean
    courseChoice4?: boolean
    courseChoice5?: boolean
    courseChoice6?: boolean
    courseChoice7?: boolean
    sportsMarks?: boolean
    createdAt?: boolean
    allocations?: boolean | StudentApplication$allocationsArgs<ExtArgs>
    _count?: boolean | StudentApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentApplication"]>

  export type StudentApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applicationNumber?: boolean
    studentName?: boolean
    fatherMotherName?: boolean
    phoneNumber?: boolean
    email?: boolean
    jeeCRL?: boolean
    category?: boolean
    categoryRank?: boolean
    subCategory?: boolean
    subCategoryRank?: boolean
    courseChoice1?: boolean
    courseChoice2?: boolean
    courseChoice3?: boolean
    courseChoice4?: boolean
    courseChoice5?: boolean
    courseChoice6?: boolean
    courseChoice7?: boolean
    sportsMarks?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["studentApplication"]>

  export type StudentApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    applicationNumber?: boolean
    studentName?: boolean
    fatherMotherName?: boolean
    phoneNumber?: boolean
    email?: boolean
    jeeCRL?: boolean
    category?: boolean
    categoryRank?: boolean
    subCategory?: boolean
    subCategoryRank?: boolean
    courseChoice1?: boolean
    courseChoice2?: boolean
    courseChoice3?: boolean
    courseChoice4?: boolean
    courseChoice5?: boolean
    courseChoice6?: boolean
    courseChoice7?: boolean
    sportsMarks?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["studentApplication"]>

  export type StudentApplicationSelectScalar = {
    applicationNumber?: boolean
    studentName?: boolean
    fatherMotherName?: boolean
    phoneNumber?: boolean
    email?: boolean
    jeeCRL?: boolean
    category?: boolean
    categoryRank?: boolean
    subCategory?: boolean
    subCategoryRank?: boolean
    courseChoice1?: boolean
    courseChoice2?: boolean
    courseChoice3?: boolean
    courseChoice4?: boolean
    courseChoice5?: boolean
    courseChoice6?: boolean
    courseChoice7?: boolean
    sportsMarks?: boolean
    createdAt?: boolean
  }

  export type StudentApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"applicationNumber" | "studentName" | "fatherMotherName" | "phoneNumber" | "email" | "jeeCRL" | "category" | "categoryRank" | "subCategory" | "subCategoryRank" | "courseChoice1" | "courseChoice2" | "courseChoice3" | "courseChoice4" | "courseChoice5" | "courseChoice6" | "courseChoice7" | "sportsMarks" | "createdAt", ExtArgs["result"]["studentApplication"]>
  export type StudentApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allocations?: boolean | StudentApplication$allocationsArgs<ExtArgs>
    _count?: boolean | StudentApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentApplication"
    objects: {
      allocations: Prisma.$AllocatedSeatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      applicationNumber: string
      studentName: string
      fatherMotherName: string
      phoneNumber: string
      email: string
      jeeCRL: number
      category: string
      categoryRank: number | null
      subCategory: string | null
      subCategoryRank: number | null
      courseChoice1: string
      courseChoice2: string | null
      courseChoice3: string | null
      courseChoice4: string | null
      courseChoice5: string | null
      courseChoice6: string | null
      courseChoice7: string | null
      sportsMarks: number | null
      createdAt: Date
    }, ExtArgs["result"]["studentApplication"]>
    composites: {}
  }

  type StudentApplicationGetPayload<S extends boolean | null | undefined | StudentApplicationDefaultArgs> = $Result.GetResult<Prisma.$StudentApplicationPayload, S>

  type StudentApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentApplicationCountAggregateInputType | true
    }

  export interface StudentApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentApplication'], meta: { name: 'StudentApplication' } }
    /**
     * Find zero or one StudentApplication that matches the filter.
     * @param {StudentApplicationFindUniqueArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentApplicationFindUniqueArgs>(args: SelectSubset<T, StudentApplicationFindUniqueArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentApplicationFindUniqueOrThrowArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindFirstArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentApplicationFindFirstArgs>(args?: SelectSubset<T, StudentApplicationFindFirstArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindFirstOrThrowArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentApplications
     * const studentApplications = await prisma.studentApplication.findMany()
     * 
     * // Get first 10 StudentApplications
     * const studentApplications = await prisma.studentApplication.findMany({ take: 10 })
     * 
     * // Only select the `applicationNumber`
     * const studentApplicationWithApplicationNumberOnly = await prisma.studentApplication.findMany({ select: { applicationNumber: true } })
     * 
     */
    findMany<T extends StudentApplicationFindManyArgs>(args?: SelectSubset<T, StudentApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentApplication.
     * @param {StudentApplicationCreateArgs} args - Arguments to create a StudentApplication.
     * @example
     * // Create one StudentApplication
     * const StudentApplication = await prisma.studentApplication.create({
     *   data: {
     *     // ... data to create a StudentApplication
     *   }
     * })
     * 
     */
    create<T extends StudentApplicationCreateArgs>(args: SelectSubset<T, StudentApplicationCreateArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentApplications.
     * @param {StudentApplicationCreateManyArgs} args - Arguments to create many StudentApplications.
     * @example
     * // Create many StudentApplications
     * const studentApplication = await prisma.studentApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentApplicationCreateManyArgs>(args?: SelectSubset<T, StudentApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentApplications and returns the data saved in the database.
     * @param {StudentApplicationCreateManyAndReturnArgs} args - Arguments to create many StudentApplications.
     * @example
     * // Create many StudentApplications
     * const studentApplication = await prisma.studentApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentApplications and only return the `applicationNumber`
     * const studentApplicationWithApplicationNumberOnly = await prisma.studentApplication.createManyAndReturn({
     *   select: { applicationNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentApplication.
     * @param {StudentApplicationDeleteArgs} args - Arguments to delete one StudentApplication.
     * @example
     * // Delete one StudentApplication
     * const StudentApplication = await prisma.studentApplication.delete({
     *   where: {
     *     // ... filter to delete one StudentApplication
     *   }
     * })
     * 
     */
    delete<T extends StudentApplicationDeleteArgs>(args: SelectSubset<T, StudentApplicationDeleteArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentApplication.
     * @param {StudentApplicationUpdateArgs} args - Arguments to update one StudentApplication.
     * @example
     * // Update one StudentApplication
     * const studentApplication = await prisma.studentApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentApplicationUpdateArgs>(args: SelectSubset<T, StudentApplicationUpdateArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentApplications.
     * @param {StudentApplicationDeleteManyArgs} args - Arguments to filter StudentApplications to delete.
     * @example
     * // Delete a few StudentApplications
     * const { count } = await prisma.studentApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentApplicationDeleteManyArgs>(args?: SelectSubset<T, StudentApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentApplications
     * const studentApplication = await prisma.studentApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentApplicationUpdateManyArgs>(args: SelectSubset<T, StudentApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentApplications and returns the data updated in the database.
     * @param {StudentApplicationUpdateManyAndReturnArgs} args - Arguments to update many StudentApplications.
     * @example
     * // Update many StudentApplications
     * const studentApplication = await prisma.studentApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentApplications and only return the `applicationNumber`
     * const studentApplicationWithApplicationNumberOnly = await prisma.studentApplication.updateManyAndReturn({
     *   select: { applicationNumber: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentApplication.
     * @param {StudentApplicationUpsertArgs} args - Arguments to update or create a StudentApplication.
     * @example
     * // Update or create a StudentApplication
     * const studentApplication = await prisma.studentApplication.upsert({
     *   create: {
     *     // ... data to create a StudentApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentApplication we want to update
     *   }
     * })
     */
    upsert<T extends StudentApplicationUpsertArgs>(args: SelectSubset<T, StudentApplicationUpsertArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationCountArgs} args - Arguments to filter StudentApplications to count.
     * @example
     * // Count the number of StudentApplications
     * const count = await prisma.studentApplication.count({
     *   where: {
     *     // ... the filter for the StudentApplications we want to count
     *   }
     * })
    **/
    count<T extends StudentApplicationCountArgs>(
      args?: Subset<T, StudentApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentApplicationAggregateArgs>(args: Subset<T, StudentApplicationAggregateArgs>): Prisma.PrismaPromise<GetStudentApplicationAggregateType<T>>

    /**
     * Group by StudentApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentApplicationGroupByArgs['orderBy'] }
        : { orderBy?: StudentApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentApplication model
   */
  readonly fields: StudentApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    allocations<T extends StudentApplication$allocationsArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$allocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentApplication model
   */
  interface StudentApplicationFieldRefs {
    readonly applicationNumber: FieldRef<"StudentApplication", 'String'>
    readonly studentName: FieldRef<"StudentApplication", 'String'>
    readonly fatherMotherName: FieldRef<"StudentApplication", 'String'>
    readonly phoneNumber: FieldRef<"StudentApplication", 'String'>
    readonly email: FieldRef<"StudentApplication", 'String'>
    readonly jeeCRL: FieldRef<"StudentApplication", 'Int'>
    readonly category: FieldRef<"StudentApplication", 'String'>
    readonly categoryRank: FieldRef<"StudentApplication", 'Int'>
    readonly subCategory: FieldRef<"StudentApplication", 'String'>
    readonly subCategoryRank: FieldRef<"StudentApplication", 'Int'>
    readonly courseChoice1: FieldRef<"StudentApplication", 'String'>
    readonly courseChoice2: FieldRef<"StudentApplication", 'String'>
    readonly courseChoice3: FieldRef<"StudentApplication", 'String'>
    readonly courseChoice4: FieldRef<"StudentApplication", 'String'>
    readonly courseChoice5: FieldRef<"StudentApplication", 'String'>
    readonly courseChoice6: FieldRef<"StudentApplication", 'String'>
    readonly courseChoice7: FieldRef<"StudentApplication", 'String'>
    readonly sportsMarks: FieldRef<"StudentApplication", 'Float'>
    readonly createdAt: FieldRef<"StudentApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentApplication findUnique
   */
  export type StudentApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication findUniqueOrThrow
   */
  export type StudentApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication findFirst
   */
  export type StudentApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentApplications.
     */
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication findFirstOrThrow
   */
  export type StudentApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentApplications.
     */
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication findMany
   */
  export type StudentApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplications to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication create
   */
  export type StudentApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentApplication.
     */
    data: XOR<StudentApplicationCreateInput, StudentApplicationUncheckedCreateInput>
  }

  /**
   * StudentApplication createMany
   */
  export type StudentApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentApplications.
     */
    data: StudentApplicationCreateManyInput | StudentApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentApplication createManyAndReturn
   */
  export type StudentApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many StudentApplications.
     */
    data: StudentApplicationCreateManyInput | StudentApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentApplication update
   */
  export type StudentApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentApplication.
     */
    data: XOR<StudentApplicationUpdateInput, StudentApplicationUncheckedUpdateInput>
    /**
     * Choose, which StudentApplication to update.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication updateMany
   */
  export type StudentApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentApplications.
     */
    data: XOR<StudentApplicationUpdateManyMutationInput, StudentApplicationUncheckedUpdateManyInput>
    /**
     * Filter which StudentApplications to update
     */
    where?: StudentApplicationWhereInput
    /**
     * Limit how many StudentApplications to update.
     */
    limit?: number
  }

  /**
   * StudentApplication updateManyAndReturn
   */
  export type StudentApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * The data used to update StudentApplications.
     */
    data: XOR<StudentApplicationUpdateManyMutationInput, StudentApplicationUncheckedUpdateManyInput>
    /**
     * Filter which StudentApplications to update
     */
    where?: StudentApplicationWhereInput
    /**
     * Limit how many StudentApplications to update.
     */
    limit?: number
  }

  /**
   * StudentApplication upsert
   */
  export type StudentApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentApplication to update in case it exists.
     */
    where: StudentApplicationWhereUniqueInput
    /**
     * In case the StudentApplication found by the `where` argument doesn't exist, create a new StudentApplication with this data.
     */
    create: XOR<StudentApplicationCreateInput, StudentApplicationUncheckedCreateInput>
    /**
     * In case the StudentApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentApplicationUpdateInput, StudentApplicationUncheckedUpdateInput>
  }

  /**
   * StudentApplication delete
   */
  export type StudentApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter which StudentApplication to delete.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication deleteMany
   */
  export type StudentApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentApplications to delete
     */
    where?: StudentApplicationWhereInput
    /**
     * Limit how many StudentApplications to delete.
     */
    limit?: number
  }

  /**
   * StudentApplication.allocations
   */
  export type StudentApplication$allocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatInclude<ExtArgs> | null
    where?: AllocatedSeatWhereInput
    orderBy?: AllocatedSeatOrderByWithRelationInput | AllocatedSeatOrderByWithRelationInput[]
    cursor?: AllocatedSeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AllocatedSeatScalarFieldEnum | AllocatedSeatScalarFieldEnum[]
  }

  /**
   * StudentApplication without action
   */
  export type StudentApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seatMatrix?: boolean | Department$seatMatrixArgs<ExtArgs>
    originalSeatMatrix?: boolean | Department$originalSeatMatrixArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seatMatrix?: boolean | Department$seatMatrixArgs<ExtArgs>
    originalSeatMatrix?: boolean | Department$originalSeatMatrixArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      seatMatrix: Prisma.$SeatMatrixPayload<ExtArgs>[]
      originalSeatMatrix: Prisma.$OriginalSeatMatrixPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seatMatrix<T extends Department$seatMatrixArgs<ExtArgs> = {}>(args?: Subset<T, Department$seatMatrixArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    originalSeatMatrix<T extends Department$originalSeatMatrixArgs<ExtArgs> = {}>(args?: Subset<T, Department$originalSeatMatrixArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.seatMatrix
   */
  export type Department$seatMatrixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixInclude<ExtArgs> | null
    where?: SeatMatrixWhereInput
    orderBy?: SeatMatrixOrderByWithRelationInput | SeatMatrixOrderByWithRelationInput[]
    cursor?: SeatMatrixWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatMatrixScalarFieldEnum | SeatMatrixScalarFieldEnum[]
  }

  /**
   * Department.originalSeatMatrix
   */
  export type Department$originalSeatMatrixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixInclude<ExtArgs> | null
    where?: OriginalSeatMatrixWhereInput
    orderBy?: OriginalSeatMatrixOrderByWithRelationInput | OriginalSeatMatrixOrderByWithRelationInput[]
    cursor?: OriginalSeatMatrixWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OriginalSeatMatrixScalarFieldEnum | OriginalSeatMatrixScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model SeatMatrix
   */

  export type AggregateSeatMatrix = {
    _count: SeatMatrixCountAggregateOutputType | null
    _avg: SeatMatrixAvgAggregateOutputType | null
    _sum: SeatMatrixSumAggregateOutputType | null
    _min: SeatMatrixMinAggregateOutputType | null
    _max: SeatMatrixMaxAggregateOutputType | null
  }

  export type SeatMatrixAvgAggregateOutputType = {
    id: number | null
    totalSeats: number | null
  }

  export type SeatMatrixSumAggregateOutputType = {
    id: number | null
    totalSeats: number | null
  }

  export type SeatMatrixMinAggregateOutputType = {
    id: number | null
    departmentId: string | null
    category: string | null
    subCategory: string | null
    totalSeats: number | null
  }

  export type SeatMatrixMaxAggregateOutputType = {
    id: number | null
    departmentId: string | null
    category: string | null
    subCategory: string | null
    totalSeats: number | null
  }

  export type SeatMatrixCountAggregateOutputType = {
    id: number
    departmentId: number
    category: number
    subCategory: number
    totalSeats: number
    _all: number
  }


  export type SeatMatrixAvgAggregateInputType = {
    id?: true
    totalSeats?: true
  }

  export type SeatMatrixSumAggregateInputType = {
    id?: true
    totalSeats?: true
  }

  export type SeatMatrixMinAggregateInputType = {
    id?: true
    departmentId?: true
    category?: true
    subCategory?: true
    totalSeats?: true
  }

  export type SeatMatrixMaxAggregateInputType = {
    id?: true
    departmentId?: true
    category?: true
    subCategory?: true
    totalSeats?: true
  }

  export type SeatMatrixCountAggregateInputType = {
    id?: true
    departmentId?: true
    category?: true
    subCategory?: true
    totalSeats?: true
    _all?: true
  }

  export type SeatMatrixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeatMatrix to aggregate.
     */
    where?: SeatMatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatMatrices to fetch.
     */
    orderBy?: SeatMatrixOrderByWithRelationInput | SeatMatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatMatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatMatrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatMatrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeatMatrices
    **/
    _count?: true | SeatMatrixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatMatrixAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatMatrixSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMatrixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMatrixMaxAggregateInputType
  }

  export type GetSeatMatrixAggregateType<T extends SeatMatrixAggregateArgs> = {
        [P in keyof T & keyof AggregateSeatMatrix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeatMatrix[P]>
      : GetScalarType<T[P], AggregateSeatMatrix[P]>
  }




  export type SeatMatrixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatMatrixWhereInput
    orderBy?: SeatMatrixOrderByWithAggregationInput | SeatMatrixOrderByWithAggregationInput[]
    by: SeatMatrixScalarFieldEnum[] | SeatMatrixScalarFieldEnum
    having?: SeatMatrixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatMatrixCountAggregateInputType | true
    _avg?: SeatMatrixAvgAggregateInputType
    _sum?: SeatMatrixSumAggregateInputType
    _min?: SeatMatrixMinAggregateInputType
    _max?: SeatMatrixMaxAggregateInputType
  }

  export type SeatMatrixGroupByOutputType = {
    id: number
    departmentId: string
    category: string
    subCategory: string
    totalSeats: number
    _count: SeatMatrixCountAggregateOutputType | null
    _avg: SeatMatrixAvgAggregateOutputType | null
    _sum: SeatMatrixSumAggregateOutputType | null
    _min: SeatMatrixMinAggregateOutputType | null
    _max: SeatMatrixMaxAggregateOutputType | null
  }

  type GetSeatMatrixGroupByPayload<T extends SeatMatrixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatMatrixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatMatrixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatMatrixGroupByOutputType[P]>
            : GetScalarType<T[P], SeatMatrixGroupByOutputType[P]>
        }
      >
    >


  export type SeatMatrixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentId?: boolean
    category?: boolean
    subCategory?: boolean
    totalSeats?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seatMatrix"]>

  export type SeatMatrixSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentId?: boolean
    category?: boolean
    subCategory?: boolean
    totalSeats?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seatMatrix"]>

  export type SeatMatrixSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentId?: boolean
    category?: boolean
    subCategory?: boolean
    totalSeats?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seatMatrix"]>

  export type SeatMatrixSelectScalar = {
    id?: boolean
    departmentId?: boolean
    category?: boolean
    subCategory?: boolean
    totalSeats?: boolean
  }

  export type SeatMatrixOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "departmentId" | "category" | "subCategory" | "totalSeats", ExtArgs["result"]["seatMatrix"]>
  export type SeatMatrixInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type SeatMatrixIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type SeatMatrixIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $SeatMatrixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeatMatrix"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      departmentId: string
      category: string
      subCategory: string
      totalSeats: number
    }, ExtArgs["result"]["seatMatrix"]>
    composites: {}
  }

  type SeatMatrixGetPayload<S extends boolean | null | undefined | SeatMatrixDefaultArgs> = $Result.GetResult<Prisma.$SeatMatrixPayload, S>

  type SeatMatrixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeatMatrixFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeatMatrixCountAggregateInputType | true
    }

  export interface SeatMatrixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeatMatrix'], meta: { name: 'SeatMatrix' } }
    /**
     * Find zero or one SeatMatrix that matches the filter.
     * @param {SeatMatrixFindUniqueArgs} args - Arguments to find a SeatMatrix
     * @example
     * // Get one SeatMatrix
     * const seatMatrix = await prisma.seatMatrix.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatMatrixFindUniqueArgs>(args: SelectSubset<T, SeatMatrixFindUniqueArgs<ExtArgs>>): Prisma__SeatMatrixClient<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeatMatrix that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeatMatrixFindUniqueOrThrowArgs} args - Arguments to find a SeatMatrix
     * @example
     * // Get one SeatMatrix
     * const seatMatrix = await prisma.seatMatrix.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatMatrixFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatMatrixFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatMatrixClient<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeatMatrix that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatMatrixFindFirstArgs} args - Arguments to find a SeatMatrix
     * @example
     * // Get one SeatMatrix
     * const seatMatrix = await prisma.seatMatrix.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatMatrixFindFirstArgs>(args?: SelectSubset<T, SeatMatrixFindFirstArgs<ExtArgs>>): Prisma__SeatMatrixClient<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeatMatrix that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatMatrixFindFirstOrThrowArgs} args - Arguments to find a SeatMatrix
     * @example
     * // Get one SeatMatrix
     * const seatMatrix = await prisma.seatMatrix.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatMatrixFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatMatrixFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatMatrixClient<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeatMatrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatMatrixFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeatMatrices
     * const seatMatrices = await prisma.seatMatrix.findMany()
     * 
     * // Get first 10 SeatMatrices
     * const seatMatrices = await prisma.seatMatrix.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatMatrixWithIdOnly = await prisma.seatMatrix.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeatMatrixFindManyArgs>(args?: SelectSubset<T, SeatMatrixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeatMatrix.
     * @param {SeatMatrixCreateArgs} args - Arguments to create a SeatMatrix.
     * @example
     * // Create one SeatMatrix
     * const SeatMatrix = await prisma.seatMatrix.create({
     *   data: {
     *     // ... data to create a SeatMatrix
     *   }
     * })
     * 
     */
    create<T extends SeatMatrixCreateArgs>(args: SelectSubset<T, SeatMatrixCreateArgs<ExtArgs>>): Prisma__SeatMatrixClient<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeatMatrices.
     * @param {SeatMatrixCreateManyArgs} args - Arguments to create many SeatMatrices.
     * @example
     * // Create many SeatMatrices
     * const seatMatrix = await prisma.seatMatrix.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatMatrixCreateManyArgs>(args?: SelectSubset<T, SeatMatrixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeatMatrices and returns the data saved in the database.
     * @param {SeatMatrixCreateManyAndReturnArgs} args - Arguments to create many SeatMatrices.
     * @example
     * // Create many SeatMatrices
     * const seatMatrix = await prisma.seatMatrix.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeatMatrices and only return the `id`
     * const seatMatrixWithIdOnly = await prisma.seatMatrix.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeatMatrixCreateManyAndReturnArgs>(args?: SelectSubset<T, SeatMatrixCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeatMatrix.
     * @param {SeatMatrixDeleteArgs} args - Arguments to delete one SeatMatrix.
     * @example
     * // Delete one SeatMatrix
     * const SeatMatrix = await prisma.seatMatrix.delete({
     *   where: {
     *     // ... filter to delete one SeatMatrix
     *   }
     * })
     * 
     */
    delete<T extends SeatMatrixDeleteArgs>(args: SelectSubset<T, SeatMatrixDeleteArgs<ExtArgs>>): Prisma__SeatMatrixClient<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeatMatrix.
     * @param {SeatMatrixUpdateArgs} args - Arguments to update one SeatMatrix.
     * @example
     * // Update one SeatMatrix
     * const seatMatrix = await prisma.seatMatrix.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatMatrixUpdateArgs>(args: SelectSubset<T, SeatMatrixUpdateArgs<ExtArgs>>): Prisma__SeatMatrixClient<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeatMatrices.
     * @param {SeatMatrixDeleteManyArgs} args - Arguments to filter SeatMatrices to delete.
     * @example
     * // Delete a few SeatMatrices
     * const { count } = await prisma.seatMatrix.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatMatrixDeleteManyArgs>(args?: SelectSubset<T, SeatMatrixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeatMatrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatMatrixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeatMatrices
     * const seatMatrix = await prisma.seatMatrix.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatMatrixUpdateManyArgs>(args: SelectSubset<T, SeatMatrixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeatMatrices and returns the data updated in the database.
     * @param {SeatMatrixUpdateManyAndReturnArgs} args - Arguments to update many SeatMatrices.
     * @example
     * // Update many SeatMatrices
     * const seatMatrix = await prisma.seatMatrix.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeatMatrices and only return the `id`
     * const seatMatrixWithIdOnly = await prisma.seatMatrix.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeatMatrixUpdateManyAndReturnArgs>(args: SelectSubset<T, SeatMatrixUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeatMatrix.
     * @param {SeatMatrixUpsertArgs} args - Arguments to update or create a SeatMatrix.
     * @example
     * // Update or create a SeatMatrix
     * const seatMatrix = await prisma.seatMatrix.upsert({
     *   create: {
     *     // ... data to create a SeatMatrix
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeatMatrix we want to update
     *   }
     * })
     */
    upsert<T extends SeatMatrixUpsertArgs>(args: SelectSubset<T, SeatMatrixUpsertArgs<ExtArgs>>): Prisma__SeatMatrixClient<$Result.GetResult<Prisma.$SeatMatrixPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeatMatrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatMatrixCountArgs} args - Arguments to filter SeatMatrices to count.
     * @example
     * // Count the number of SeatMatrices
     * const count = await prisma.seatMatrix.count({
     *   where: {
     *     // ... the filter for the SeatMatrices we want to count
     *   }
     * })
    **/
    count<T extends SeatMatrixCountArgs>(
      args?: Subset<T, SeatMatrixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatMatrixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeatMatrix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatMatrixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeatMatrixAggregateArgs>(args: Subset<T, SeatMatrixAggregateArgs>): Prisma.PrismaPromise<GetSeatMatrixAggregateType<T>>

    /**
     * Group by SeatMatrix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatMatrixGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeatMatrixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatMatrixGroupByArgs['orderBy'] }
        : { orderBy?: SeatMatrixGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeatMatrixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatMatrixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeatMatrix model
   */
  readonly fields: SeatMatrixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeatMatrix.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatMatrixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SeatMatrix model
   */
  interface SeatMatrixFieldRefs {
    readonly id: FieldRef<"SeatMatrix", 'Int'>
    readonly departmentId: FieldRef<"SeatMatrix", 'String'>
    readonly category: FieldRef<"SeatMatrix", 'String'>
    readonly subCategory: FieldRef<"SeatMatrix", 'String'>
    readonly totalSeats: FieldRef<"SeatMatrix", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SeatMatrix findUnique
   */
  export type SeatMatrixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixInclude<ExtArgs> | null
    /**
     * Filter, which SeatMatrix to fetch.
     */
    where: SeatMatrixWhereUniqueInput
  }

  /**
   * SeatMatrix findUniqueOrThrow
   */
  export type SeatMatrixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixInclude<ExtArgs> | null
    /**
     * Filter, which SeatMatrix to fetch.
     */
    where: SeatMatrixWhereUniqueInput
  }

  /**
   * SeatMatrix findFirst
   */
  export type SeatMatrixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixInclude<ExtArgs> | null
    /**
     * Filter, which SeatMatrix to fetch.
     */
    where?: SeatMatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatMatrices to fetch.
     */
    orderBy?: SeatMatrixOrderByWithRelationInput | SeatMatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeatMatrices.
     */
    cursor?: SeatMatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatMatrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatMatrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeatMatrices.
     */
    distinct?: SeatMatrixScalarFieldEnum | SeatMatrixScalarFieldEnum[]
  }

  /**
   * SeatMatrix findFirstOrThrow
   */
  export type SeatMatrixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixInclude<ExtArgs> | null
    /**
     * Filter, which SeatMatrix to fetch.
     */
    where?: SeatMatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatMatrices to fetch.
     */
    orderBy?: SeatMatrixOrderByWithRelationInput | SeatMatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeatMatrices.
     */
    cursor?: SeatMatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatMatrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatMatrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeatMatrices.
     */
    distinct?: SeatMatrixScalarFieldEnum | SeatMatrixScalarFieldEnum[]
  }

  /**
   * SeatMatrix findMany
   */
  export type SeatMatrixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixInclude<ExtArgs> | null
    /**
     * Filter, which SeatMatrices to fetch.
     */
    where?: SeatMatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatMatrices to fetch.
     */
    orderBy?: SeatMatrixOrderByWithRelationInput | SeatMatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeatMatrices.
     */
    cursor?: SeatMatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatMatrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatMatrices.
     */
    skip?: number
    distinct?: SeatMatrixScalarFieldEnum | SeatMatrixScalarFieldEnum[]
  }

  /**
   * SeatMatrix create
   */
  export type SeatMatrixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixInclude<ExtArgs> | null
    /**
     * The data needed to create a SeatMatrix.
     */
    data: XOR<SeatMatrixCreateInput, SeatMatrixUncheckedCreateInput>
  }

  /**
   * SeatMatrix createMany
   */
  export type SeatMatrixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeatMatrices.
     */
    data: SeatMatrixCreateManyInput | SeatMatrixCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeatMatrix createManyAndReturn
   */
  export type SeatMatrixCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * The data used to create many SeatMatrices.
     */
    data: SeatMatrixCreateManyInput | SeatMatrixCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeatMatrix update
   */
  export type SeatMatrixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixInclude<ExtArgs> | null
    /**
     * The data needed to update a SeatMatrix.
     */
    data: XOR<SeatMatrixUpdateInput, SeatMatrixUncheckedUpdateInput>
    /**
     * Choose, which SeatMatrix to update.
     */
    where: SeatMatrixWhereUniqueInput
  }

  /**
   * SeatMatrix updateMany
   */
  export type SeatMatrixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeatMatrices.
     */
    data: XOR<SeatMatrixUpdateManyMutationInput, SeatMatrixUncheckedUpdateManyInput>
    /**
     * Filter which SeatMatrices to update
     */
    where?: SeatMatrixWhereInput
    /**
     * Limit how many SeatMatrices to update.
     */
    limit?: number
  }

  /**
   * SeatMatrix updateManyAndReturn
   */
  export type SeatMatrixUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * The data used to update SeatMatrices.
     */
    data: XOR<SeatMatrixUpdateManyMutationInput, SeatMatrixUncheckedUpdateManyInput>
    /**
     * Filter which SeatMatrices to update
     */
    where?: SeatMatrixWhereInput
    /**
     * Limit how many SeatMatrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeatMatrix upsert
   */
  export type SeatMatrixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixInclude<ExtArgs> | null
    /**
     * The filter to search for the SeatMatrix to update in case it exists.
     */
    where: SeatMatrixWhereUniqueInput
    /**
     * In case the SeatMatrix found by the `where` argument doesn't exist, create a new SeatMatrix with this data.
     */
    create: XOR<SeatMatrixCreateInput, SeatMatrixUncheckedCreateInput>
    /**
     * In case the SeatMatrix was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatMatrixUpdateInput, SeatMatrixUncheckedUpdateInput>
  }

  /**
   * SeatMatrix delete
   */
  export type SeatMatrixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixInclude<ExtArgs> | null
    /**
     * Filter which SeatMatrix to delete.
     */
    where: SeatMatrixWhereUniqueInput
  }

  /**
   * SeatMatrix deleteMany
   */
  export type SeatMatrixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeatMatrices to delete
     */
    where?: SeatMatrixWhereInput
    /**
     * Limit how many SeatMatrices to delete.
     */
    limit?: number
  }

  /**
   * SeatMatrix without action
   */
  export type SeatMatrixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatMatrix
     */
    select?: SeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeatMatrix
     */
    omit?: SeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatMatrixInclude<ExtArgs> | null
  }


  /**
   * Model AllocatedSeat
   */

  export type AggregateAllocatedSeat = {
    _count: AllocatedSeatCountAggregateOutputType | null
    _avg: AllocatedSeatAvgAggregateOutputType | null
    _sum: AllocatedSeatSumAggregateOutputType | null
    _min: AllocatedSeatMinAggregateOutputType | null
    _max: AllocatedSeatMaxAggregateOutputType | null
  }

  export type AllocatedSeatAvgAggregateOutputType = {
    id: number | null
    allocationRound: number | null
  }

  export type AllocatedSeatSumAggregateOutputType = {
    id: number | null
    allocationRound: number | null
  }

  export type AllocatedSeatMinAggregateOutputType = {
    id: number | null
    studentId: string | null
    allocatedCourse: string | null
    allocationRound: number | null
    allocatedAt: Date | null
  }

  export type AllocatedSeatMaxAggregateOutputType = {
    id: number | null
    studentId: string | null
    allocatedCourse: string | null
    allocationRound: number | null
    allocatedAt: Date | null
  }

  export type AllocatedSeatCountAggregateOutputType = {
    id: number
    studentId: number
    allocatedCourse: number
    allocationRound: number
    allocatedAt: number
    _all: number
  }


  export type AllocatedSeatAvgAggregateInputType = {
    id?: true
    allocationRound?: true
  }

  export type AllocatedSeatSumAggregateInputType = {
    id?: true
    allocationRound?: true
  }

  export type AllocatedSeatMinAggregateInputType = {
    id?: true
    studentId?: true
    allocatedCourse?: true
    allocationRound?: true
    allocatedAt?: true
  }

  export type AllocatedSeatMaxAggregateInputType = {
    id?: true
    studentId?: true
    allocatedCourse?: true
    allocationRound?: true
    allocatedAt?: true
  }

  export type AllocatedSeatCountAggregateInputType = {
    id?: true
    studentId?: true
    allocatedCourse?: true
    allocationRound?: true
    allocatedAt?: true
    _all?: true
  }

  export type AllocatedSeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllocatedSeat to aggregate.
     */
    where?: AllocatedSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocatedSeats to fetch.
     */
    orderBy?: AllocatedSeatOrderByWithRelationInput | AllocatedSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllocatedSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocatedSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocatedSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AllocatedSeats
    **/
    _count?: true | AllocatedSeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllocatedSeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllocatedSeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllocatedSeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllocatedSeatMaxAggregateInputType
  }

  export type GetAllocatedSeatAggregateType<T extends AllocatedSeatAggregateArgs> = {
        [P in keyof T & keyof AggregateAllocatedSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllocatedSeat[P]>
      : GetScalarType<T[P], AggregateAllocatedSeat[P]>
  }




  export type AllocatedSeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllocatedSeatWhereInput
    orderBy?: AllocatedSeatOrderByWithAggregationInput | AllocatedSeatOrderByWithAggregationInput[]
    by: AllocatedSeatScalarFieldEnum[] | AllocatedSeatScalarFieldEnum
    having?: AllocatedSeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllocatedSeatCountAggregateInputType | true
    _avg?: AllocatedSeatAvgAggregateInputType
    _sum?: AllocatedSeatSumAggregateInputType
    _min?: AllocatedSeatMinAggregateInputType
    _max?: AllocatedSeatMaxAggregateInputType
  }

  export type AllocatedSeatGroupByOutputType = {
    id: number
    studentId: string
    allocatedCourse: string
    allocationRound: number
    allocatedAt: Date
    _count: AllocatedSeatCountAggregateOutputType | null
    _avg: AllocatedSeatAvgAggregateOutputType | null
    _sum: AllocatedSeatSumAggregateOutputType | null
    _min: AllocatedSeatMinAggregateOutputType | null
    _max: AllocatedSeatMaxAggregateOutputType | null
  }

  type GetAllocatedSeatGroupByPayload<T extends AllocatedSeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllocatedSeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllocatedSeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllocatedSeatGroupByOutputType[P]>
            : GetScalarType<T[P], AllocatedSeatGroupByOutputType[P]>
        }
      >
    >


  export type AllocatedSeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    allocatedCourse?: boolean
    allocationRound?: boolean
    allocatedAt?: boolean
    student?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allocatedSeat"]>

  export type AllocatedSeatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    allocatedCourse?: boolean
    allocationRound?: boolean
    allocatedAt?: boolean
    student?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allocatedSeat"]>

  export type AllocatedSeatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    allocatedCourse?: boolean
    allocationRound?: boolean
    allocatedAt?: boolean
    student?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allocatedSeat"]>

  export type AllocatedSeatSelectScalar = {
    id?: boolean
    studentId?: boolean
    allocatedCourse?: boolean
    allocationRound?: boolean
    allocatedAt?: boolean
  }

  export type AllocatedSeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "allocatedCourse" | "allocationRound" | "allocatedAt", ExtArgs["result"]["allocatedSeat"]>
  export type AllocatedSeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type AllocatedSeatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type AllocatedSeatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }

  export type $AllocatedSeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AllocatedSeat"
    objects: {
      student: Prisma.$StudentApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: string
      allocatedCourse: string
      allocationRound: number
      allocatedAt: Date
    }, ExtArgs["result"]["allocatedSeat"]>
    composites: {}
  }

  type AllocatedSeatGetPayload<S extends boolean | null | undefined | AllocatedSeatDefaultArgs> = $Result.GetResult<Prisma.$AllocatedSeatPayload, S>

  type AllocatedSeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllocatedSeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllocatedSeatCountAggregateInputType | true
    }

  export interface AllocatedSeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AllocatedSeat'], meta: { name: 'AllocatedSeat' } }
    /**
     * Find zero or one AllocatedSeat that matches the filter.
     * @param {AllocatedSeatFindUniqueArgs} args - Arguments to find a AllocatedSeat
     * @example
     * // Get one AllocatedSeat
     * const allocatedSeat = await prisma.allocatedSeat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllocatedSeatFindUniqueArgs>(args: SelectSubset<T, AllocatedSeatFindUniqueArgs<ExtArgs>>): Prisma__AllocatedSeatClient<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AllocatedSeat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllocatedSeatFindUniqueOrThrowArgs} args - Arguments to find a AllocatedSeat
     * @example
     * // Get one AllocatedSeat
     * const allocatedSeat = await prisma.allocatedSeat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllocatedSeatFindUniqueOrThrowArgs>(args: SelectSubset<T, AllocatedSeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllocatedSeatClient<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllocatedSeat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedSeatFindFirstArgs} args - Arguments to find a AllocatedSeat
     * @example
     * // Get one AllocatedSeat
     * const allocatedSeat = await prisma.allocatedSeat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllocatedSeatFindFirstArgs>(args?: SelectSubset<T, AllocatedSeatFindFirstArgs<ExtArgs>>): Prisma__AllocatedSeatClient<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllocatedSeat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedSeatFindFirstOrThrowArgs} args - Arguments to find a AllocatedSeat
     * @example
     * // Get one AllocatedSeat
     * const allocatedSeat = await prisma.allocatedSeat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllocatedSeatFindFirstOrThrowArgs>(args?: SelectSubset<T, AllocatedSeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllocatedSeatClient<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AllocatedSeats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedSeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AllocatedSeats
     * const allocatedSeats = await prisma.allocatedSeat.findMany()
     * 
     * // Get first 10 AllocatedSeats
     * const allocatedSeats = await prisma.allocatedSeat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allocatedSeatWithIdOnly = await prisma.allocatedSeat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AllocatedSeatFindManyArgs>(args?: SelectSubset<T, AllocatedSeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AllocatedSeat.
     * @param {AllocatedSeatCreateArgs} args - Arguments to create a AllocatedSeat.
     * @example
     * // Create one AllocatedSeat
     * const AllocatedSeat = await prisma.allocatedSeat.create({
     *   data: {
     *     // ... data to create a AllocatedSeat
     *   }
     * })
     * 
     */
    create<T extends AllocatedSeatCreateArgs>(args: SelectSubset<T, AllocatedSeatCreateArgs<ExtArgs>>): Prisma__AllocatedSeatClient<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AllocatedSeats.
     * @param {AllocatedSeatCreateManyArgs} args - Arguments to create many AllocatedSeats.
     * @example
     * // Create many AllocatedSeats
     * const allocatedSeat = await prisma.allocatedSeat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllocatedSeatCreateManyArgs>(args?: SelectSubset<T, AllocatedSeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AllocatedSeats and returns the data saved in the database.
     * @param {AllocatedSeatCreateManyAndReturnArgs} args - Arguments to create many AllocatedSeats.
     * @example
     * // Create many AllocatedSeats
     * const allocatedSeat = await prisma.allocatedSeat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AllocatedSeats and only return the `id`
     * const allocatedSeatWithIdOnly = await prisma.allocatedSeat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllocatedSeatCreateManyAndReturnArgs>(args?: SelectSubset<T, AllocatedSeatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AllocatedSeat.
     * @param {AllocatedSeatDeleteArgs} args - Arguments to delete one AllocatedSeat.
     * @example
     * // Delete one AllocatedSeat
     * const AllocatedSeat = await prisma.allocatedSeat.delete({
     *   where: {
     *     // ... filter to delete one AllocatedSeat
     *   }
     * })
     * 
     */
    delete<T extends AllocatedSeatDeleteArgs>(args: SelectSubset<T, AllocatedSeatDeleteArgs<ExtArgs>>): Prisma__AllocatedSeatClient<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AllocatedSeat.
     * @param {AllocatedSeatUpdateArgs} args - Arguments to update one AllocatedSeat.
     * @example
     * // Update one AllocatedSeat
     * const allocatedSeat = await prisma.allocatedSeat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllocatedSeatUpdateArgs>(args: SelectSubset<T, AllocatedSeatUpdateArgs<ExtArgs>>): Prisma__AllocatedSeatClient<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AllocatedSeats.
     * @param {AllocatedSeatDeleteManyArgs} args - Arguments to filter AllocatedSeats to delete.
     * @example
     * // Delete a few AllocatedSeats
     * const { count } = await prisma.allocatedSeat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllocatedSeatDeleteManyArgs>(args?: SelectSubset<T, AllocatedSeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllocatedSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedSeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AllocatedSeats
     * const allocatedSeat = await prisma.allocatedSeat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllocatedSeatUpdateManyArgs>(args: SelectSubset<T, AllocatedSeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllocatedSeats and returns the data updated in the database.
     * @param {AllocatedSeatUpdateManyAndReturnArgs} args - Arguments to update many AllocatedSeats.
     * @example
     * // Update many AllocatedSeats
     * const allocatedSeat = await prisma.allocatedSeat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AllocatedSeats and only return the `id`
     * const allocatedSeatWithIdOnly = await prisma.allocatedSeat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AllocatedSeatUpdateManyAndReturnArgs>(args: SelectSubset<T, AllocatedSeatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AllocatedSeat.
     * @param {AllocatedSeatUpsertArgs} args - Arguments to update or create a AllocatedSeat.
     * @example
     * // Update or create a AllocatedSeat
     * const allocatedSeat = await prisma.allocatedSeat.upsert({
     *   create: {
     *     // ... data to create a AllocatedSeat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AllocatedSeat we want to update
     *   }
     * })
     */
    upsert<T extends AllocatedSeatUpsertArgs>(args: SelectSubset<T, AllocatedSeatUpsertArgs<ExtArgs>>): Prisma__AllocatedSeatClient<$Result.GetResult<Prisma.$AllocatedSeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AllocatedSeats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedSeatCountArgs} args - Arguments to filter AllocatedSeats to count.
     * @example
     * // Count the number of AllocatedSeats
     * const count = await prisma.allocatedSeat.count({
     *   where: {
     *     // ... the filter for the AllocatedSeats we want to count
     *   }
     * })
    **/
    count<T extends AllocatedSeatCountArgs>(
      args?: Subset<T, AllocatedSeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllocatedSeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AllocatedSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedSeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllocatedSeatAggregateArgs>(args: Subset<T, AllocatedSeatAggregateArgs>): Prisma.PrismaPromise<GetAllocatedSeatAggregateType<T>>

    /**
     * Group by AllocatedSeat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocatedSeatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllocatedSeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllocatedSeatGroupByArgs['orderBy'] }
        : { orderBy?: AllocatedSeatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllocatedSeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllocatedSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AllocatedSeat model
   */
  readonly fields: AllocatedSeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AllocatedSeat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllocatedSeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AllocatedSeat model
   */
  interface AllocatedSeatFieldRefs {
    readonly id: FieldRef<"AllocatedSeat", 'Int'>
    readonly studentId: FieldRef<"AllocatedSeat", 'String'>
    readonly allocatedCourse: FieldRef<"AllocatedSeat", 'String'>
    readonly allocationRound: FieldRef<"AllocatedSeat", 'Int'>
    readonly allocatedAt: FieldRef<"AllocatedSeat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AllocatedSeat findUnique
   */
  export type AllocatedSeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatInclude<ExtArgs> | null
    /**
     * Filter, which AllocatedSeat to fetch.
     */
    where: AllocatedSeatWhereUniqueInput
  }

  /**
   * AllocatedSeat findUniqueOrThrow
   */
  export type AllocatedSeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatInclude<ExtArgs> | null
    /**
     * Filter, which AllocatedSeat to fetch.
     */
    where: AllocatedSeatWhereUniqueInput
  }

  /**
   * AllocatedSeat findFirst
   */
  export type AllocatedSeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatInclude<ExtArgs> | null
    /**
     * Filter, which AllocatedSeat to fetch.
     */
    where?: AllocatedSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocatedSeats to fetch.
     */
    orderBy?: AllocatedSeatOrderByWithRelationInput | AllocatedSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllocatedSeats.
     */
    cursor?: AllocatedSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocatedSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocatedSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllocatedSeats.
     */
    distinct?: AllocatedSeatScalarFieldEnum | AllocatedSeatScalarFieldEnum[]
  }

  /**
   * AllocatedSeat findFirstOrThrow
   */
  export type AllocatedSeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatInclude<ExtArgs> | null
    /**
     * Filter, which AllocatedSeat to fetch.
     */
    where?: AllocatedSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocatedSeats to fetch.
     */
    orderBy?: AllocatedSeatOrderByWithRelationInput | AllocatedSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllocatedSeats.
     */
    cursor?: AllocatedSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocatedSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocatedSeats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllocatedSeats.
     */
    distinct?: AllocatedSeatScalarFieldEnum | AllocatedSeatScalarFieldEnum[]
  }

  /**
   * AllocatedSeat findMany
   */
  export type AllocatedSeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatInclude<ExtArgs> | null
    /**
     * Filter, which AllocatedSeats to fetch.
     */
    where?: AllocatedSeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocatedSeats to fetch.
     */
    orderBy?: AllocatedSeatOrderByWithRelationInput | AllocatedSeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AllocatedSeats.
     */
    cursor?: AllocatedSeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocatedSeats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocatedSeats.
     */
    skip?: number
    distinct?: AllocatedSeatScalarFieldEnum | AllocatedSeatScalarFieldEnum[]
  }

  /**
   * AllocatedSeat create
   */
  export type AllocatedSeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatInclude<ExtArgs> | null
    /**
     * The data needed to create a AllocatedSeat.
     */
    data: XOR<AllocatedSeatCreateInput, AllocatedSeatUncheckedCreateInput>
  }

  /**
   * AllocatedSeat createMany
   */
  export type AllocatedSeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AllocatedSeats.
     */
    data: AllocatedSeatCreateManyInput | AllocatedSeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllocatedSeat createManyAndReturn
   */
  export type AllocatedSeatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * The data used to create many AllocatedSeats.
     */
    data: AllocatedSeatCreateManyInput | AllocatedSeatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AllocatedSeat update
   */
  export type AllocatedSeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatInclude<ExtArgs> | null
    /**
     * The data needed to update a AllocatedSeat.
     */
    data: XOR<AllocatedSeatUpdateInput, AllocatedSeatUncheckedUpdateInput>
    /**
     * Choose, which AllocatedSeat to update.
     */
    where: AllocatedSeatWhereUniqueInput
  }

  /**
   * AllocatedSeat updateMany
   */
  export type AllocatedSeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AllocatedSeats.
     */
    data: XOR<AllocatedSeatUpdateManyMutationInput, AllocatedSeatUncheckedUpdateManyInput>
    /**
     * Filter which AllocatedSeats to update
     */
    where?: AllocatedSeatWhereInput
    /**
     * Limit how many AllocatedSeats to update.
     */
    limit?: number
  }

  /**
   * AllocatedSeat updateManyAndReturn
   */
  export type AllocatedSeatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * The data used to update AllocatedSeats.
     */
    data: XOR<AllocatedSeatUpdateManyMutationInput, AllocatedSeatUncheckedUpdateManyInput>
    /**
     * Filter which AllocatedSeats to update
     */
    where?: AllocatedSeatWhereInput
    /**
     * Limit how many AllocatedSeats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AllocatedSeat upsert
   */
  export type AllocatedSeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatInclude<ExtArgs> | null
    /**
     * The filter to search for the AllocatedSeat to update in case it exists.
     */
    where: AllocatedSeatWhereUniqueInput
    /**
     * In case the AllocatedSeat found by the `where` argument doesn't exist, create a new AllocatedSeat with this data.
     */
    create: XOR<AllocatedSeatCreateInput, AllocatedSeatUncheckedCreateInput>
    /**
     * In case the AllocatedSeat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllocatedSeatUpdateInput, AllocatedSeatUncheckedUpdateInput>
  }

  /**
   * AllocatedSeat delete
   */
  export type AllocatedSeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatInclude<ExtArgs> | null
    /**
     * Filter which AllocatedSeat to delete.
     */
    where: AllocatedSeatWhereUniqueInput
  }

  /**
   * AllocatedSeat deleteMany
   */
  export type AllocatedSeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllocatedSeats to delete
     */
    where?: AllocatedSeatWhereInput
    /**
     * Limit how many AllocatedSeats to delete.
     */
    limit?: number
  }

  /**
   * AllocatedSeat without action
   */
  export type AllocatedSeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocatedSeat
     */
    select?: AllocatedSeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllocatedSeat
     */
    omit?: AllocatedSeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllocatedSeatInclude<ExtArgs> | null
  }


  /**
   * Model OriginalSeatMatrix
   */

  export type AggregateOriginalSeatMatrix = {
    _count: OriginalSeatMatrixCountAggregateOutputType | null
    _avg: OriginalSeatMatrixAvgAggregateOutputType | null
    _sum: OriginalSeatMatrixSumAggregateOutputType | null
    _min: OriginalSeatMatrixMinAggregateOutputType | null
    _max: OriginalSeatMatrixMaxAggregateOutputType | null
  }

  export type OriginalSeatMatrixAvgAggregateOutputType = {
    id: number | null
    totalSeats: number | null
  }

  export type OriginalSeatMatrixSumAggregateOutputType = {
    id: number | null
    totalSeats: number | null
  }

  export type OriginalSeatMatrixMinAggregateOutputType = {
    id: number | null
    departmentId: string | null
    category: string | null
    subCategory: string | null
    totalSeats: number | null
  }

  export type OriginalSeatMatrixMaxAggregateOutputType = {
    id: number | null
    departmentId: string | null
    category: string | null
    subCategory: string | null
    totalSeats: number | null
  }

  export type OriginalSeatMatrixCountAggregateOutputType = {
    id: number
    departmentId: number
    category: number
    subCategory: number
    totalSeats: number
    _all: number
  }


  export type OriginalSeatMatrixAvgAggregateInputType = {
    id?: true
    totalSeats?: true
  }

  export type OriginalSeatMatrixSumAggregateInputType = {
    id?: true
    totalSeats?: true
  }

  export type OriginalSeatMatrixMinAggregateInputType = {
    id?: true
    departmentId?: true
    category?: true
    subCategory?: true
    totalSeats?: true
  }

  export type OriginalSeatMatrixMaxAggregateInputType = {
    id?: true
    departmentId?: true
    category?: true
    subCategory?: true
    totalSeats?: true
  }

  export type OriginalSeatMatrixCountAggregateInputType = {
    id?: true
    departmentId?: true
    category?: true
    subCategory?: true
    totalSeats?: true
    _all?: true
  }

  export type OriginalSeatMatrixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalSeatMatrix to aggregate.
     */
    where?: OriginalSeatMatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalSeatMatrices to fetch.
     */
    orderBy?: OriginalSeatMatrixOrderByWithRelationInput | OriginalSeatMatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OriginalSeatMatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalSeatMatrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalSeatMatrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OriginalSeatMatrices
    **/
    _count?: true | OriginalSeatMatrixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OriginalSeatMatrixAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OriginalSeatMatrixSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OriginalSeatMatrixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OriginalSeatMatrixMaxAggregateInputType
  }

  export type GetOriginalSeatMatrixAggregateType<T extends OriginalSeatMatrixAggregateArgs> = {
        [P in keyof T & keyof AggregateOriginalSeatMatrix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOriginalSeatMatrix[P]>
      : GetScalarType<T[P], AggregateOriginalSeatMatrix[P]>
  }




  export type OriginalSeatMatrixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OriginalSeatMatrixWhereInput
    orderBy?: OriginalSeatMatrixOrderByWithAggregationInput | OriginalSeatMatrixOrderByWithAggregationInput[]
    by: OriginalSeatMatrixScalarFieldEnum[] | OriginalSeatMatrixScalarFieldEnum
    having?: OriginalSeatMatrixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OriginalSeatMatrixCountAggregateInputType | true
    _avg?: OriginalSeatMatrixAvgAggregateInputType
    _sum?: OriginalSeatMatrixSumAggregateInputType
    _min?: OriginalSeatMatrixMinAggregateInputType
    _max?: OriginalSeatMatrixMaxAggregateInputType
  }

  export type OriginalSeatMatrixGroupByOutputType = {
    id: number
    departmentId: string
    category: string
    subCategory: string
    totalSeats: number
    _count: OriginalSeatMatrixCountAggregateOutputType | null
    _avg: OriginalSeatMatrixAvgAggregateOutputType | null
    _sum: OriginalSeatMatrixSumAggregateOutputType | null
    _min: OriginalSeatMatrixMinAggregateOutputType | null
    _max: OriginalSeatMatrixMaxAggregateOutputType | null
  }

  type GetOriginalSeatMatrixGroupByPayload<T extends OriginalSeatMatrixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OriginalSeatMatrixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OriginalSeatMatrixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OriginalSeatMatrixGroupByOutputType[P]>
            : GetScalarType<T[P], OriginalSeatMatrixGroupByOutputType[P]>
        }
      >
    >


  export type OriginalSeatMatrixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentId?: boolean
    category?: boolean
    subCategory?: boolean
    totalSeats?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalSeatMatrix"]>

  export type OriginalSeatMatrixSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentId?: boolean
    category?: boolean
    subCategory?: boolean
    totalSeats?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalSeatMatrix"]>

  export type OriginalSeatMatrixSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentId?: boolean
    category?: boolean
    subCategory?: boolean
    totalSeats?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["originalSeatMatrix"]>

  export type OriginalSeatMatrixSelectScalar = {
    id?: boolean
    departmentId?: boolean
    category?: boolean
    subCategory?: boolean
    totalSeats?: boolean
  }

  export type OriginalSeatMatrixOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "departmentId" | "category" | "subCategory" | "totalSeats", ExtArgs["result"]["originalSeatMatrix"]>
  export type OriginalSeatMatrixInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type OriginalSeatMatrixIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type OriginalSeatMatrixIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $OriginalSeatMatrixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OriginalSeatMatrix"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      departmentId: string
      category: string
      subCategory: string
      totalSeats: number
    }, ExtArgs["result"]["originalSeatMatrix"]>
    composites: {}
  }

  type OriginalSeatMatrixGetPayload<S extends boolean | null | undefined | OriginalSeatMatrixDefaultArgs> = $Result.GetResult<Prisma.$OriginalSeatMatrixPayload, S>

  type OriginalSeatMatrixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OriginalSeatMatrixFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OriginalSeatMatrixCountAggregateInputType | true
    }

  export interface OriginalSeatMatrixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OriginalSeatMatrix'], meta: { name: 'OriginalSeatMatrix' } }
    /**
     * Find zero or one OriginalSeatMatrix that matches the filter.
     * @param {OriginalSeatMatrixFindUniqueArgs} args - Arguments to find a OriginalSeatMatrix
     * @example
     * // Get one OriginalSeatMatrix
     * const originalSeatMatrix = await prisma.originalSeatMatrix.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OriginalSeatMatrixFindUniqueArgs>(args: SelectSubset<T, OriginalSeatMatrixFindUniqueArgs<ExtArgs>>): Prisma__OriginalSeatMatrixClient<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OriginalSeatMatrix that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OriginalSeatMatrixFindUniqueOrThrowArgs} args - Arguments to find a OriginalSeatMatrix
     * @example
     * // Get one OriginalSeatMatrix
     * const originalSeatMatrix = await prisma.originalSeatMatrix.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OriginalSeatMatrixFindUniqueOrThrowArgs>(args: SelectSubset<T, OriginalSeatMatrixFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OriginalSeatMatrixClient<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OriginalSeatMatrix that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalSeatMatrixFindFirstArgs} args - Arguments to find a OriginalSeatMatrix
     * @example
     * // Get one OriginalSeatMatrix
     * const originalSeatMatrix = await prisma.originalSeatMatrix.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OriginalSeatMatrixFindFirstArgs>(args?: SelectSubset<T, OriginalSeatMatrixFindFirstArgs<ExtArgs>>): Prisma__OriginalSeatMatrixClient<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OriginalSeatMatrix that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalSeatMatrixFindFirstOrThrowArgs} args - Arguments to find a OriginalSeatMatrix
     * @example
     * // Get one OriginalSeatMatrix
     * const originalSeatMatrix = await prisma.originalSeatMatrix.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OriginalSeatMatrixFindFirstOrThrowArgs>(args?: SelectSubset<T, OriginalSeatMatrixFindFirstOrThrowArgs<ExtArgs>>): Prisma__OriginalSeatMatrixClient<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OriginalSeatMatrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalSeatMatrixFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OriginalSeatMatrices
     * const originalSeatMatrices = await prisma.originalSeatMatrix.findMany()
     * 
     * // Get first 10 OriginalSeatMatrices
     * const originalSeatMatrices = await prisma.originalSeatMatrix.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const originalSeatMatrixWithIdOnly = await prisma.originalSeatMatrix.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OriginalSeatMatrixFindManyArgs>(args?: SelectSubset<T, OriginalSeatMatrixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OriginalSeatMatrix.
     * @param {OriginalSeatMatrixCreateArgs} args - Arguments to create a OriginalSeatMatrix.
     * @example
     * // Create one OriginalSeatMatrix
     * const OriginalSeatMatrix = await prisma.originalSeatMatrix.create({
     *   data: {
     *     // ... data to create a OriginalSeatMatrix
     *   }
     * })
     * 
     */
    create<T extends OriginalSeatMatrixCreateArgs>(args: SelectSubset<T, OriginalSeatMatrixCreateArgs<ExtArgs>>): Prisma__OriginalSeatMatrixClient<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OriginalSeatMatrices.
     * @param {OriginalSeatMatrixCreateManyArgs} args - Arguments to create many OriginalSeatMatrices.
     * @example
     * // Create many OriginalSeatMatrices
     * const originalSeatMatrix = await prisma.originalSeatMatrix.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OriginalSeatMatrixCreateManyArgs>(args?: SelectSubset<T, OriginalSeatMatrixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OriginalSeatMatrices and returns the data saved in the database.
     * @param {OriginalSeatMatrixCreateManyAndReturnArgs} args - Arguments to create many OriginalSeatMatrices.
     * @example
     * // Create many OriginalSeatMatrices
     * const originalSeatMatrix = await prisma.originalSeatMatrix.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OriginalSeatMatrices and only return the `id`
     * const originalSeatMatrixWithIdOnly = await prisma.originalSeatMatrix.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OriginalSeatMatrixCreateManyAndReturnArgs>(args?: SelectSubset<T, OriginalSeatMatrixCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OriginalSeatMatrix.
     * @param {OriginalSeatMatrixDeleteArgs} args - Arguments to delete one OriginalSeatMatrix.
     * @example
     * // Delete one OriginalSeatMatrix
     * const OriginalSeatMatrix = await prisma.originalSeatMatrix.delete({
     *   where: {
     *     // ... filter to delete one OriginalSeatMatrix
     *   }
     * })
     * 
     */
    delete<T extends OriginalSeatMatrixDeleteArgs>(args: SelectSubset<T, OriginalSeatMatrixDeleteArgs<ExtArgs>>): Prisma__OriginalSeatMatrixClient<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OriginalSeatMatrix.
     * @param {OriginalSeatMatrixUpdateArgs} args - Arguments to update one OriginalSeatMatrix.
     * @example
     * // Update one OriginalSeatMatrix
     * const originalSeatMatrix = await prisma.originalSeatMatrix.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OriginalSeatMatrixUpdateArgs>(args: SelectSubset<T, OriginalSeatMatrixUpdateArgs<ExtArgs>>): Prisma__OriginalSeatMatrixClient<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OriginalSeatMatrices.
     * @param {OriginalSeatMatrixDeleteManyArgs} args - Arguments to filter OriginalSeatMatrices to delete.
     * @example
     * // Delete a few OriginalSeatMatrices
     * const { count } = await prisma.originalSeatMatrix.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OriginalSeatMatrixDeleteManyArgs>(args?: SelectSubset<T, OriginalSeatMatrixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OriginalSeatMatrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalSeatMatrixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OriginalSeatMatrices
     * const originalSeatMatrix = await prisma.originalSeatMatrix.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OriginalSeatMatrixUpdateManyArgs>(args: SelectSubset<T, OriginalSeatMatrixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OriginalSeatMatrices and returns the data updated in the database.
     * @param {OriginalSeatMatrixUpdateManyAndReturnArgs} args - Arguments to update many OriginalSeatMatrices.
     * @example
     * // Update many OriginalSeatMatrices
     * const originalSeatMatrix = await prisma.originalSeatMatrix.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OriginalSeatMatrices and only return the `id`
     * const originalSeatMatrixWithIdOnly = await prisma.originalSeatMatrix.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OriginalSeatMatrixUpdateManyAndReturnArgs>(args: SelectSubset<T, OriginalSeatMatrixUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OriginalSeatMatrix.
     * @param {OriginalSeatMatrixUpsertArgs} args - Arguments to update or create a OriginalSeatMatrix.
     * @example
     * // Update or create a OriginalSeatMatrix
     * const originalSeatMatrix = await prisma.originalSeatMatrix.upsert({
     *   create: {
     *     // ... data to create a OriginalSeatMatrix
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OriginalSeatMatrix we want to update
     *   }
     * })
     */
    upsert<T extends OriginalSeatMatrixUpsertArgs>(args: SelectSubset<T, OriginalSeatMatrixUpsertArgs<ExtArgs>>): Prisma__OriginalSeatMatrixClient<$Result.GetResult<Prisma.$OriginalSeatMatrixPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OriginalSeatMatrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalSeatMatrixCountArgs} args - Arguments to filter OriginalSeatMatrices to count.
     * @example
     * // Count the number of OriginalSeatMatrices
     * const count = await prisma.originalSeatMatrix.count({
     *   where: {
     *     // ... the filter for the OriginalSeatMatrices we want to count
     *   }
     * })
    **/
    count<T extends OriginalSeatMatrixCountArgs>(
      args?: Subset<T, OriginalSeatMatrixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OriginalSeatMatrixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OriginalSeatMatrix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalSeatMatrixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OriginalSeatMatrixAggregateArgs>(args: Subset<T, OriginalSeatMatrixAggregateArgs>): Prisma.PrismaPromise<GetOriginalSeatMatrixAggregateType<T>>

    /**
     * Group by OriginalSeatMatrix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OriginalSeatMatrixGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OriginalSeatMatrixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OriginalSeatMatrixGroupByArgs['orderBy'] }
        : { orderBy?: OriginalSeatMatrixGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OriginalSeatMatrixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOriginalSeatMatrixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OriginalSeatMatrix model
   */
  readonly fields: OriginalSeatMatrixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OriginalSeatMatrix.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OriginalSeatMatrixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OriginalSeatMatrix model
   */
  interface OriginalSeatMatrixFieldRefs {
    readonly id: FieldRef<"OriginalSeatMatrix", 'Int'>
    readonly departmentId: FieldRef<"OriginalSeatMatrix", 'String'>
    readonly category: FieldRef<"OriginalSeatMatrix", 'String'>
    readonly subCategory: FieldRef<"OriginalSeatMatrix", 'String'>
    readonly totalSeats: FieldRef<"OriginalSeatMatrix", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OriginalSeatMatrix findUnique
   */
  export type OriginalSeatMatrixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixInclude<ExtArgs> | null
    /**
     * Filter, which OriginalSeatMatrix to fetch.
     */
    where: OriginalSeatMatrixWhereUniqueInput
  }

  /**
   * OriginalSeatMatrix findUniqueOrThrow
   */
  export type OriginalSeatMatrixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixInclude<ExtArgs> | null
    /**
     * Filter, which OriginalSeatMatrix to fetch.
     */
    where: OriginalSeatMatrixWhereUniqueInput
  }

  /**
   * OriginalSeatMatrix findFirst
   */
  export type OriginalSeatMatrixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixInclude<ExtArgs> | null
    /**
     * Filter, which OriginalSeatMatrix to fetch.
     */
    where?: OriginalSeatMatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalSeatMatrices to fetch.
     */
    orderBy?: OriginalSeatMatrixOrderByWithRelationInput | OriginalSeatMatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalSeatMatrices.
     */
    cursor?: OriginalSeatMatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalSeatMatrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalSeatMatrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalSeatMatrices.
     */
    distinct?: OriginalSeatMatrixScalarFieldEnum | OriginalSeatMatrixScalarFieldEnum[]
  }

  /**
   * OriginalSeatMatrix findFirstOrThrow
   */
  export type OriginalSeatMatrixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixInclude<ExtArgs> | null
    /**
     * Filter, which OriginalSeatMatrix to fetch.
     */
    where?: OriginalSeatMatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalSeatMatrices to fetch.
     */
    orderBy?: OriginalSeatMatrixOrderByWithRelationInput | OriginalSeatMatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OriginalSeatMatrices.
     */
    cursor?: OriginalSeatMatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalSeatMatrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalSeatMatrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OriginalSeatMatrices.
     */
    distinct?: OriginalSeatMatrixScalarFieldEnum | OriginalSeatMatrixScalarFieldEnum[]
  }

  /**
   * OriginalSeatMatrix findMany
   */
  export type OriginalSeatMatrixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixInclude<ExtArgs> | null
    /**
     * Filter, which OriginalSeatMatrices to fetch.
     */
    where?: OriginalSeatMatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OriginalSeatMatrices to fetch.
     */
    orderBy?: OriginalSeatMatrixOrderByWithRelationInput | OriginalSeatMatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OriginalSeatMatrices.
     */
    cursor?: OriginalSeatMatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OriginalSeatMatrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OriginalSeatMatrices.
     */
    skip?: number
    distinct?: OriginalSeatMatrixScalarFieldEnum | OriginalSeatMatrixScalarFieldEnum[]
  }

  /**
   * OriginalSeatMatrix create
   */
  export type OriginalSeatMatrixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixInclude<ExtArgs> | null
    /**
     * The data needed to create a OriginalSeatMatrix.
     */
    data: XOR<OriginalSeatMatrixCreateInput, OriginalSeatMatrixUncheckedCreateInput>
  }

  /**
   * OriginalSeatMatrix createMany
   */
  export type OriginalSeatMatrixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OriginalSeatMatrices.
     */
    data: OriginalSeatMatrixCreateManyInput | OriginalSeatMatrixCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OriginalSeatMatrix createManyAndReturn
   */
  export type OriginalSeatMatrixCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * The data used to create many OriginalSeatMatrices.
     */
    data: OriginalSeatMatrixCreateManyInput | OriginalSeatMatrixCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OriginalSeatMatrix update
   */
  export type OriginalSeatMatrixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixInclude<ExtArgs> | null
    /**
     * The data needed to update a OriginalSeatMatrix.
     */
    data: XOR<OriginalSeatMatrixUpdateInput, OriginalSeatMatrixUncheckedUpdateInput>
    /**
     * Choose, which OriginalSeatMatrix to update.
     */
    where: OriginalSeatMatrixWhereUniqueInput
  }

  /**
   * OriginalSeatMatrix updateMany
   */
  export type OriginalSeatMatrixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OriginalSeatMatrices.
     */
    data: XOR<OriginalSeatMatrixUpdateManyMutationInput, OriginalSeatMatrixUncheckedUpdateManyInput>
    /**
     * Filter which OriginalSeatMatrices to update
     */
    where?: OriginalSeatMatrixWhereInput
    /**
     * Limit how many OriginalSeatMatrices to update.
     */
    limit?: number
  }

  /**
   * OriginalSeatMatrix updateManyAndReturn
   */
  export type OriginalSeatMatrixUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * The data used to update OriginalSeatMatrices.
     */
    data: XOR<OriginalSeatMatrixUpdateManyMutationInput, OriginalSeatMatrixUncheckedUpdateManyInput>
    /**
     * Filter which OriginalSeatMatrices to update
     */
    where?: OriginalSeatMatrixWhereInput
    /**
     * Limit how many OriginalSeatMatrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OriginalSeatMatrix upsert
   */
  export type OriginalSeatMatrixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixInclude<ExtArgs> | null
    /**
     * The filter to search for the OriginalSeatMatrix to update in case it exists.
     */
    where: OriginalSeatMatrixWhereUniqueInput
    /**
     * In case the OriginalSeatMatrix found by the `where` argument doesn't exist, create a new OriginalSeatMatrix with this data.
     */
    create: XOR<OriginalSeatMatrixCreateInput, OriginalSeatMatrixUncheckedCreateInput>
    /**
     * In case the OriginalSeatMatrix was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OriginalSeatMatrixUpdateInput, OriginalSeatMatrixUncheckedUpdateInput>
  }

  /**
   * OriginalSeatMatrix delete
   */
  export type OriginalSeatMatrixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixInclude<ExtArgs> | null
    /**
     * Filter which OriginalSeatMatrix to delete.
     */
    where: OriginalSeatMatrixWhereUniqueInput
  }

  /**
   * OriginalSeatMatrix deleteMany
   */
  export type OriginalSeatMatrixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OriginalSeatMatrices to delete
     */
    where?: OriginalSeatMatrixWhereInput
    /**
     * Limit how many OriginalSeatMatrices to delete.
     */
    limit?: number
  }

  /**
   * OriginalSeatMatrix without action
   */
  export type OriginalSeatMatrixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OriginalSeatMatrix
     */
    select?: OriginalSeatMatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OriginalSeatMatrix
     */
    omit?: OriginalSeatMatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OriginalSeatMatrixInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StudentApplicationScalarFieldEnum: {
    applicationNumber: 'applicationNumber',
    studentName: 'studentName',
    fatherMotherName: 'fatherMotherName',
    phoneNumber: 'phoneNumber',
    email: 'email',
    jeeCRL: 'jeeCRL',
    category: 'category',
    categoryRank: 'categoryRank',
    subCategory: 'subCategory',
    subCategoryRank: 'subCategoryRank',
    courseChoice1: 'courseChoice1',
    courseChoice2: 'courseChoice2',
    courseChoice3: 'courseChoice3',
    courseChoice4: 'courseChoice4',
    courseChoice5: 'courseChoice5',
    courseChoice6: 'courseChoice6',
    courseChoice7: 'courseChoice7',
    sportsMarks: 'sportsMarks',
    createdAt: 'createdAt'
  };

  export type StudentApplicationScalarFieldEnum = (typeof StudentApplicationScalarFieldEnum)[keyof typeof StudentApplicationScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const SeatMatrixScalarFieldEnum: {
    id: 'id',
    departmentId: 'departmentId',
    category: 'category',
    subCategory: 'subCategory',
    totalSeats: 'totalSeats'
  };

  export type SeatMatrixScalarFieldEnum = (typeof SeatMatrixScalarFieldEnum)[keyof typeof SeatMatrixScalarFieldEnum]


  export const AllocatedSeatScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    allocatedCourse: 'allocatedCourse',
    allocationRound: 'allocationRound',
    allocatedAt: 'allocatedAt'
  };

  export type AllocatedSeatScalarFieldEnum = (typeof AllocatedSeatScalarFieldEnum)[keyof typeof AllocatedSeatScalarFieldEnum]


  export const OriginalSeatMatrixScalarFieldEnum: {
    id: 'id',
    departmentId: 'departmentId',
    category: 'category',
    subCategory: 'subCategory',
    totalSeats: 'totalSeats'
  };

  export type OriginalSeatMatrixScalarFieldEnum = (typeof OriginalSeatMatrixScalarFieldEnum)[keyof typeof OriginalSeatMatrixScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentApplicationWhereInput = {
    AND?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    OR?: StudentApplicationWhereInput[]
    NOT?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    applicationNumber?: StringFilter<"StudentApplication"> | string
    studentName?: StringFilter<"StudentApplication"> | string
    fatherMotherName?: StringFilter<"StudentApplication"> | string
    phoneNumber?: StringFilter<"StudentApplication"> | string
    email?: StringFilter<"StudentApplication"> | string
    jeeCRL?: IntFilter<"StudentApplication"> | number
    category?: StringFilter<"StudentApplication"> | string
    categoryRank?: IntNullableFilter<"StudentApplication"> | number | null
    subCategory?: StringNullableFilter<"StudentApplication"> | string | null
    subCategoryRank?: IntNullableFilter<"StudentApplication"> | number | null
    courseChoice1?: StringFilter<"StudentApplication"> | string
    courseChoice2?: StringNullableFilter<"StudentApplication"> | string | null
    courseChoice3?: StringNullableFilter<"StudentApplication"> | string | null
    courseChoice4?: StringNullableFilter<"StudentApplication"> | string | null
    courseChoice5?: StringNullableFilter<"StudentApplication"> | string | null
    courseChoice6?: StringNullableFilter<"StudentApplication"> | string | null
    courseChoice7?: StringNullableFilter<"StudentApplication"> | string | null
    sportsMarks?: FloatNullableFilter<"StudentApplication"> | number | null
    createdAt?: DateTimeFilter<"StudentApplication"> | Date | string
    allocations?: AllocatedSeatListRelationFilter
  }

  export type StudentApplicationOrderByWithRelationInput = {
    applicationNumber?: SortOrder
    studentName?: SortOrder
    fatherMotherName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    jeeCRL?: SortOrder
    category?: SortOrder
    categoryRank?: SortOrderInput | SortOrder
    subCategory?: SortOrderInput | SortOrder
    subCategoryRank?: SortOrderInput | SortOrder
    courseChoice1?: SortOrder
    courseChoice2?: SortOrderInput | SortOrder
    courseChoice3?: SortOrderInput | SortOrder
    courseChoice4?: SortOrderInput | SortOrder
    courseChoice5?: SortOrderInput | SortOrder
    courseChoice6?: SortOrderInput | SortOrder
    courseChoice7?: SortOrderInput | SortOrder
    sportsMarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    allocations?: AllocatedSeatOrderByRelationAggregateInput
  }

  export type StudentApplicationWhereUniqueInput = Prisma.AtLeast<{
    applicationNumber?: string
    AND?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    OR?: StudentApplicationWhereInput[]
    NOT?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    studentName?: StringFilter<"StudentApplication"> | string
    fatherMotherName?: StringFilter<"StudentApplication"> | string
    phoneNumber?: StringFilter<"StudentApplication"> | string
    email?: StringFilter<"StudentApplication"> | string
    jeeCRL?: IntFilter<"StudentApplication"> | number
    category?: StringFilter<"StudentApplication"> | string
    categoryRank?: IntNullableFilter<"StudentApplication"> | number | null
    subCategory?: StringNullableFilter<"StudentApplication"> | string | null
    subCategoryRank?: IntNullableFilter<"StudentApplication"> | number | null
    courseChoice1?: StringFilter<"StudentApplication"> | string
    courseChoice2?: StringNullableFilter<"StudentApplication"> | string | null
    courseChoice3?: StringNullableFilter<"StudentApplication"> | string | null
    courseChoice4?: StringNullableFilter<"StudentApplication"> | string | null
    courseChoice5?: StringNullableFilter<"StudentApplication"> | string | null
    courseChoice6?: StringNullableFilter<"StudentApplication"> | string | null
    courseChoice7?: StringNullableFilter<"StudentApplication"> | string | null
    sportsMarks?: FloatNullableFilter<"StudentApplication"> | number | null
    createdAt?: DateTimeFilter<"StudentApplication"> | Date | string
    allocations?: AllocatedSeatListRelationFilter
  }, "applicationNumber">

  export type StudentApplicationOrderByWithAggregationInput = {
    applicationNumber?: SortOrder
    studentName?: SortOrder
    fatherMotherName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    jeeCRL?: SortOrder
    category?: SortOrder
    categoryRank?: SortOrderInput | SortOrder
    subCategory?: SortOrderInput | SortOrder
    subCategoryRank?: SortOrderInput | SortOrder
    courseChoice1?: SortOrder
    courseChoice2?: SortOrderInput | SortOrder
    courseChoice3?: SortOrderInput | SortOrder
    courseChoice4?: SortOrderInput | SortOrder
    courseChoice5?: SortOrderInput | SortOrder
    courseChoice6?: SortOrderInput | SortOrder
    courseChoice7?: SortOrderInput | SortOrder
    sportsMarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StudentApplicationCountOrderByAggregateInput
    _avg?: StudentApplicationAvgOrderByAggregateInput
    _max?: StudentApplicationMaxOrderByAggregateInput
    _min?: StudentApplicationMinOrderByAggregateInput
    _sum?: StudentApplicationSumOrderByAggregateInput
  }

  export type StudentApplicationScalarWhereWithAggregatesInput = {
    AND?: StudentApplicationScalarWhereWithAggregatesInput | StudentApplicationScalarWhereWithAggregatesInput[]
    OR?: StudentApplicationScalarWhereWithAggregatesInput[]
    NOT?: StudentApplicationScalarWhereWithAggregatesInput | StudentApplicationScalarWhereWithAggregatesInput[]
    applicationNumber?: StringWithAggregatesFilter<"StudentApplication"> | string
    studentName?: StringWithAggregatesFilter<"StudentApplication"> | string
    fatherMotherName?: StringWithAggregatesFilter<"StudentApplication"> | string
    phoneNumber?: StringWithAggregatesFilter<"StudentApplication"> | string
    email?: StringWithAggregatesFilter<"StudentApplication"> | string
    jeeCRL?: IntWithAggregatesFilter<"StudentApplication"> | number
    category?: StringWithAggregatesFilter<"StudentApplication"> | string
    categoryRank?: IntNullableWithAggregatesFilter<"StudentApplication"> | number | null
    subCategory?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    subCategoryRank?: IntNullableWithAggregatesFilter<"StudentApplication"> | number | null
    courseChoice1?: StringWithAggregatesFilter<"StudentApplication"> | string
    courseChoice2?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    courseChoice3?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    courseChoice4?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    courseChoice5?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    courseChoice6?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    courseChoice7?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    sportsMarks?: FloatNullableWithAggregatesFilter<"StudentApplication"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentApplication"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    seatMatrix?: SeatMatrixListRelationFilter
    originalSeatMatrix?: OriginalSeatMatrixListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seatMatrix?: SeatMatrixOrderByRelationAggregateInput
    originalSeatMatrix?: OriginalSeatMatrixOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    seatMatrix?: SeatMatrixListRelationFilter
    originalSeatMatrix?: OriginalSeatMatrixListRelationFilter
  }, "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
  }

  export type SeatMatrixWhereInput = {
    AND?: SeatMatrixWhereInput | SeatMatrixWhereInput[]
    OR?: SeatMatrixWhereInput[]
    NOT?: SeatMatrixWhereInput | SeatMatrixWhereInput[]
    id?: IntFilter<"SeatMatrix"> | number
    departmentId?: StringFilter<"SeatMatrix"> | string
    category?: StringFilter<"SeatMatrix"> | string
    subCategory?: StringFilter<"SeatMatrix"> | string
    totalSeats?: IntFilter<"SeatMatrix"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }

  export type SeatMatrixOrderByWithRelationInput = {
    id?: SortOrder
    departmentId?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    totalSeats?: SortOrder
    department?: DepartmentOrderByWithRelationInput
  }

  export type SeatMatrixWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    departmentId_category_subCategory?: SeatMatrixDepartmentId_category_subCategoryCompoundUniqueInput
    AND?: SeatMatrixWhereInput | SeatMatrixWhereInput[]
    OR?: SeatMatrixWhereInput[]
    NOT?: SeatMatrixWhereInput | SeatMatrixWhereInput[]
    departmentId?: StringFilter<"SeatMatrix"> | string
    category?: StringFilter<"SeatMatrix"> | string
    subCategory?: StringFilter<"SeatMatrix"> | string
    totalSeats?: IntFilter<"SeatMatrix"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }, "id" | "departmentId_category_subCategory">

  export type SeatMatrixOrderByWithAggregationInput = {
    id?: SortOrder
    departmentId?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    totalSeats?: SortOrder
    _count?: SeatMatrixCountOrderByAggregateInput
    _avg?: SeatMatrixAvgOrderByAggregateInput
    _max?: SeatMatrixMaxOrderByAggregateInput
    _min?: SeatMatrixMinOrderByAggregateInput
    _sum?: SeatMatrixSumOrderByAggregateInput
  }

  export type SeatMatrixScalarWhereWithAggregatesInput = {
    AND?: SeatMatrixScalarWhereWithAggregatesInput | SeatMatrixScalarWhereWithAggregatesInput[]
    OR?: SeatMatrixScalarWhereWithAggregatesInput[]
    NOT?: SeatMatrixScalarWhereWithAggregatesInput | SeatMatrixScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SeatMatrix"> | number
    departmentId?: StringWithAggregatesFilter<"SeatMatrix"> | string
    category?: StringWithAggregatesFilter<"SeatMatrix"> | string
    subCategory?: StringWithAggregatesFilter<"SeatMatrix"> | string
    totalSeats?: IntWithAggregatesFilter<"SeatMatrix"> | number
  }

  export type AllocatedSeatWhereInput = {
    AND?: AllocatedSeatWhereInput | AllocatedSeatWhereInput[]
    OR?: AllocatedSeatWhereInput[]
    NOT?: AllocatedSeatWhereInput | AllocatedSeatWhereInput[]
    id?: IntFilter<"AllocatedSeat"> | number
    studentId?: StringFilter<"AllocatedSeat"> | string
    allocatedCourse?: StringFilter<"AllocatedSeat"> | string
    allocationRound?: IntFilter<"AllocatedSeat"> | number
    allocatedAt?: DateTimeFilter<"AllocatedSeat"> | Date | string
    student?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }

  export type AllocatedSeatOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    allocatedCourse?: SortOrder
    allocationRound?: SortOrder
    allocatedAt?: SortOrder
    student?: StudentApplicationOrderByWithRelationInput
  }

  export type AllocatedSeatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AllocatedSeatWhereInput | AllocatedSeatWhereInput[]
    OR?: AllocatedSeatWhereInput[]
    NOT?: AllocatedSeatWhereInput | AllocatedSeatWhereInput[]
    studentId?: StringFilter<"AllocatedSeat"> | string
    allocatedCourse?: StringFilter<"AllocatedSeat"> | string
    allocationRound?: IntFilter<"AllocatedSeat"> | number
    allocatedAt?: DateTimeFilter<"AllocatedSeat"> | Date | string
    student?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }, "id">

  export type AllocatedSeatOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    allocatedCourse?: SortOrder
    allocationRound?: SortOrder
    allocatedAt?: SortOrder
    _count?: AllocatedSeatCountOrderByAggregateInput
    _avg?: AllocatedSeatAvgOrderByAggregateInput
    _max?: AllocatedSeatMaxOrderByAggregateInput
    _min?: AllocatedSeatMinOrderByAggregateInput
    _sum?: AllocatedSeatSumOrderByAggregateInput
  }

  export type AllocatedSeatScalarWhereWithAggregatesInput = {
    AND?: AllocatedSeatScalarWhereWithAggregatesInput | AllocatedSeatScalarWhereWithAggregatesInput[]
    OR?: AllocatedSeatScalarWhereWithAggregatesInput[]
    NOT?: AllocatedSeatScalarWhereWithAggregatesInput | AllocatedSeatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AllocatedSeat"> | number
    studentId?: StringWithAggregatesFilter<"AllocatedSeat"> | string
    allocatedCourse?: StringWithAggregatesFilter<"AllocatedSeat"> | string
    allocationRound?: IntWithAggregatesFilter<"AllocatedSeat"> | number
    allocatedAt?: DateTimeWithAggregatesFilter<"AllocatedSeat"> | Date | string
  }

  export type OriginalSeatMatrixWhereInput = {
    AND?: OriginalSeatMatrixWhereInput | OriginalSeatMatrixWhereInput[]
    OR?: OriginalSeatMatrixWhereInput[]
    NOT?: OriginalSeatMatrixWhereInput | OriginalSeatMatrixWhereInput[]
    id?: IntFilter<"OriginalSeatMatrix"> | number
    departmentId?: StringFilter<"OriginalSeatMatrix"> | string
    category?: StringFilter<"OriginalSeatMatrix"> | string
    subCategory?: StringFilter<"OriginalSeatMatrix"> | string
    totalSeats?: IntFilter<"OriginalSeatMatrix"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }

  export type OriginalSeatMatrixOrderByWithRelationInput = {
    id?: SortOrder
    departmentId?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    totalSeats?: SortOrder
    department?: DepartmentOrderByWithRelationInput
  }

  export type OriginalSeatMatrixWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    original_department_category_subCategory?: OriginalSeatMatrixOriginal_department_category_subCategoryCompoundUniqueInput
    AND?: OriginalSeatMatrixWhereInput | OriginalSeatMatrixWhereInput[]
    OR?: OriginalSeatMatrixWhereInput[]
    NOT?: OriginalSeatMatrixWhereInput | OriginalSeatMatrixWhereInput[]
    departmentId?: StringFilter<"OriginalSeatMatrix"> | string
    category?: StringFilter<"OriginalSeatMatrix"> | string
    subCategory?: StringFilter<"OriginalSeatMatrix"> | string
    totalSeats?: IntFilter<"OriginalSeatMatrix"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }, "id" | "original_department_category_subCategory">

  export type OriginalSeatMatrixOrderByWithAggregationInput = {
    id?: SortOrder
    departmentId?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    totalSeats?: SortOrder
    _count?: OriginalSeatMatrixCountOrderByAggregateInput
    _avg?: OriginalSeatMatrixAvgOrderByAggregateInput
    _max?: OriginalSeatMatrixMaxOrderByAggregateInput
    _min?: OriginalSeatMatrixMinOrderByAggregateInput
    _sum?: OriginalSeatMatrixSumOrderByAggregateInput
  }

  export type OriginalSeatMatrixScalarWhereWithAggregatesInput = {
    AND?: OriginalSeatMatrixScalarWhereWithAggregatesInput | OriginalSeatMatrixScalarWhereWithAggregatesInput[]
    OR?: OriginalSeatMatrixScalarWhereWithAggregatesInput[]
    NOT?: OriginalSeatMatrixScalarWhereWithAggregatesInput | OriginalSeatMatrixScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OriginalSeatMatrix"> | number
    departmentId?: StringWithAggregatesFilter<"OriginalSeatMatrix"> | string
    category?: StringWithAggregatesFilter<"OriginalSeatMatrix"> | string
    subCategory?: StringWithAggregatesFilter<"OriginalSeatMatrix"> | string
    totalSeats?: IntWithAggregatesFilter<"OriginalSeatMatrix"> | number
  }

  export type StudentApplicationCreateInput = {
    applicationNumber: string
    studentName: string
    fatherMotherName: string
    phoneNumber: string
    email: string
    jeeCRL: number
    category: string
    categoryRank?: number | null
    subCategory?: string | null
    subCategoryRank?: number | null
    courseChoice1: string
    courseChoice2?: string | null
    courseChoice3?: string | null
    courseChoice4?: string | null
    courseChoice5?: string | null
    courseChoice6?: string | null
    courseChoice7?: string | null
    sportsMarks?: number | null
    createdAt?: Date | string
    allocations?: AllocatedSeatCreateNestedManyWithoutStudentInput
  }

  export type StudentApplicationUncheckedCreateInput = {
    applicationNumber: string
    studentName: string
    fatherMotherName: string
    phoneNumber: string
    email: string
    jeeCRL: number
    category: string
    categoryRank?: number | null
    subCategory?: string | null
    subCategoryRank?: number | null
    courseChoice1: string
    courseChoice2?: string | null
    courseChoice3?: string | null
    courseChoice4?: string | null
    courseChoice5?: string | null
    courseChoice6?: string | null
    courseChoice7?: string | null
    sportsMarks?: number | null
    createdAt?: Date | string
    allocations?: AllocatedSeatUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentApplicationUpdateInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    fatherMotherName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jeeCRL?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    categoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    courseChoice1?: StringFieldUpdateOperationsInput | string
    courseChoice2?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice3?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice4?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice5?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice6?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice7?: NullableStringFieldUpdateOperationsInput | string | null
    sportsMarks?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocations?: AllocatedSeatUpdateManyWithoutStudentNestedInput
  }

  export type StudentApplicationUncheckedUpdateInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    fatherMotherName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jeeCRL?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    categoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    courseChoice1?: StringFieldUpdateOperationsInput | string
    courseChoice2?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice3?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice4?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice5?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice6?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice7?: NullableStringFieldUpdateOperationsInput | string | null
    sportsMarks?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allocations?: AllocatedSeatUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentApplicationCreateManyInput = {
    applicationNumber: string
    studentName: string
    fatherMotherName: string
    phoneNumber: string
    email: string
    jeeCRL: number
    category: string
    categoryRank?: number | null
    subCategory?: string | null
    subCategoryRank?: number | null
    courseChoice1: string
    courseChoice2?: string | null
    courseChoice3?: string | null
    courseChoice4?: string | null
    courseChoice5?: string | null
    courseChoice6?: string | null
    courseChoice7?: string | null
    sportsMarks?: number | null
    createdAt?: Date | string
  }

  export type StudentApplicationUpdateManyMutationInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    fatherMotherName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jeeCRL?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    categoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    courseChoice1?: StringFieldUpdateOperationsInput | string
    courseChoice2?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice3?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice4?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice5?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice6?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice7?: NullableStringFieldUpdateOperationsInput | string | null
    sportsMarks?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationUncheckedUpdateManyInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    fatherMotherName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jeeCRL?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    categoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    courseChoice1?: StringFieldUpdateOperationsInput | string
    courseChoice2?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice3?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice4?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice5?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice6?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice7?: NullableStringFieldUpdateOperationsInput | string | null
    sportsMarks?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id: string
    name: string
    seatMatrix?: SeatMatrixCreateNestedManyWithoutDepartmentInput
    originalSeatMatrix?: OriginalSeatMatrixCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id: string
    name: string
    seatMatrix?: SeatMatrixUncheckedCreateNestedManyWithoutDepartmentInput
    originalSeatMatrix?: OriginalSeatMatrixUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatMatrix?: SeatMatrixUpdateManyWithoutDepartmentNestedInput
    originalSeatMatrix?: OriginalSeatMatrixUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatMatrix?: SeatMatrixUncheckedUpdateManyWithoutDepartmentNestedInput
    originalSeatMatrix?: OriginalSeatMatrixUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id: string
    name: string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SeatMatrixCreateInput = {
    category: string
    subCategory: string
    totalSeats: number
    department: DepartmentCreateNestedOneWithoutSeatMatrixInput
  }

  export type SeatMatrixUncheckedCreateInput = {
    id?: number
    departmentId: string
    category: string
    subCategory: string
    totalSeats: number
  }

  export type SeatMatrixUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    department?: DepartmentUpdateOneRequiredWithoutSeatMatrixNestedInput
  }

  export type SeatMatrixUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type SeatMatrixCreateManyInput = {
    id?: number
    departmentId: string
    category: string
    subCategory: string
    totalSeats: number
  }

  export type SeatMatrixUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type SeatMatrixUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type AllocatedSeatCreateInput = {
    allocatedCourse: string
    allocationRound: number
    allocatedAt?: Date | string
    student: StudentApplicationCreateNestedOneWithoutAllocationsInput
  }

  export type AllocatedSeatUncheckedCreateInput = {
    id?: number
    studentId: string
    allocatedCourse: string
    allocationRound: number
    allocatedAt?: Date | string
  }

  export type AllocatedSeatUpdateInput = {
    allocatedCourse?: StringFieldUpdateOperationsInput | string
    allocationRound?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentApplicationUpdateOneRequiredWithoutAllocationsNestedInput
  }

  export type AllocatedSeatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    allocatedCourse?: StringFieldUpdateOperationsInput | string
    allocationRound?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllocatedSeatCreateManyInput = {
    id?: number
    studentId: string
    allocatedCourse: string
    allocationRound: number
    allocatedAt?: Date | string
  }

  export type AllocatedSeatUpdateManyMutationInput = {
    allocatedCourse?: StringFieldUpdateOperationsInput | string
    allocationRound?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllocatedSeatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    allocatedCourse?: StringFieldUpdateOperationsInput | string
    allocationRound?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OriginalSeatMatrixCreateInput = {
    category: string
    subCategory: string
    totalSeats: number
    department: DepartmentCreateNestedOneWithoutOriginalSeatMatrixInput
  }

  export type OriginalSeatMatrixUncheckedCreateInput = {
    id?: number
    departmentId: string
    category: string
    subCategory: string
    totalSeats: number
  }

  export type OriginalSeatMatrixUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
    department?: DepartmentUpdateOneRequiredWithoutOriginalSeatMatrixNestedInput
  }

  export type OriginalSeatMatrixUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type OriginalSeatMatrixCreateManyInput = {
    id?: number
    departmentId: string
    category: string
    subCategory: string
    totalSeats: number
  }

  export type OriginalSeatMatrixUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type OriginalSeatMatrixUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AllocatedSeatListRelationFilter = {
    every?: AllocatedSeatWhereInput
    some?: AllocatedSeatWhereInput
    none?: AllocatedSeatWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AllocatedSeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentApplicationCountOrderByAggregateInput = {
    applicationNumber?: SortOrder
    studentName?: SortOrder
    fatherMotherName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    jeeCRL?: SortOrder
    category?: SortOrder
    categoryRank?: SortOrder
    subCategory?: SortOrder
    subCategoryRank?: SortOrder
    courseChoice1?: SortOrder
    courseChoice2?: SortOrder
    courseChoice3?: SortOrder
    courseChoice4?: SortOrder
    courseChoice5?: SortOrder
    courseChoice6?: SortOrder
    courseChoice7?: SortOrder
    sportsMarks?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentApplicationAvgOrderByAggregateInput = {
    jeeCRL?: SortOrder
    categoryRank?: SortOrder
    subCategoryRank?: SortOrder
    sportsMarks?: SortOrder
  }

  export type StudentApplicationMaxOrderByAggregateInput = {
    applicationNumber?: SortOrder
    studentName?: SortOrder
    fatherMotherName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    jeeCRL?: SortOrder
    category?: SortOrder
    categoryRank?: SortOrder
    subCategory?: SortOrder
    subCategoryRank?: SortOrder
    courseChoice1?: SortOrder
    courseChoice2?: SortOrder
    courseChoice3?: SortOrder
    courseChoice4?: SortOrder
    courseChoice5?: SortOrder
    courseChoice6?: SortOrder
    courseChoice7?: SortOrder
    sportsMarks?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentApplicationMinOrderByAggregateInput = {
    applicationNumber?: SortOrder
    studentName?: SortOrder
    fatherMotherName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    jeeCRL?: SortOrder
    category?: SortOrder
    categoryRank?: SortOrder
    subCategory?: SortOrder
    subCategoryRank?: SortOrder
    courseChoice1?: SortOrder
    courseChoice2?: SortOrder
    courseChoice3?: SortOrder
    courseChoice4?: SortOrder
    courseChoice5?: SortOrder
    courseChoice6?: SortOrder
    courseChoice7?: SortOrder
    sportsMarks?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentApplicationSumOrderByAggregateInput = {
    jeeCRL?: SortOrder
    categoryRank?: SortOrder
    subCategoryRank?: SortOrder
    sportsMarks?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SeatMatrixListRelationFilter = {
    every?: SeatMatrixWhereInput
    some?: SeatMatrixWhereInput
    none?: SeatMatrixWhereInput
  }

  export type OriginalSeatMatrixListRelationFilter = {
    every?: OriginalSeatMatrixWhereInput
    some?: OriginalSeatMatrixWhereInput
    none?: OriginalSeatMatrixWhereInput
  }

  export type SeatMatrixOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OriginalSeatMatrixOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type SeatMatrixDepartmentId_category_subCategoryCompoundUniqueInput = {
    departmentId: string
    category: string
    subCategory: string
  }

  export type SeatMatrixCountOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    totalSeats?: SortOrder
  }

  export type SeatMatrixAvgOrderByAggregateInput = {
    id?: SortOrder
    totalSeats?: SortOrder
  }

  export type SeatMatrixMaxOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    totalSeats?: SortOrder
  }

  export type SeatMatrixMinOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    totalSeats?: SortOrder
  }

  export type SeatMatrixSumOrderByAggregateInput = {
    id?: SortOrder
    totalSeats?: SortOrder
  }

  export type StudentApplicationScalarRelationFilter = {
    is?: StudentApplicationWhereInput
    isNot?: StudentApplicationWhereInput
  }

  export type AllocatedSeatCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    allocatedCourse?: SortOrder
    allocationRound?: SortOrder
    allocatedAt?: SortOrder
  }

  export type AllocatedSeatAvgOrderByAggregateInput = {
    id?: SortOrder
    allocationRound?: SortOrder
  }

  export type AllocatedSeatMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    allocatedCourse?: SortOrder
    allocationRound?: SortOrder
    allocatedAt?: SortOrder
  }

  export type AllocatedSeatMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    allocatedCourse?: SortOrder
    allocationRound?: SortOrder
    allocatedAt?: SortOrder
  }

  export type AllocatedSeatSumOrderByAggregateInput = {
    id?: SortOrder
    allocationRound?: SortOrder
  }

  export type OriginalSeatMatrixOriginal_department_category_subCategoryCompoundUniqueInput = {
    departmentId: string
    category: string
    subCategory: string
  }

  export type OriginalSeatMatrixCountOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    totalSeats?: SortOrder
  }

  export type OriginalSeatMatrixAvgOrderByAggregateInput = {
    id?: SortOrder
    totalSeats?: SortOrder
  }

  export type OriginalSeatMatrixMaxOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    totalSeats?: SortOrder
  }

  export type OriginalSeatMatrixMinOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    totalSeats?: SortOrder
  }

  export type OriginalSeatMatrixSumOrderByAggregateInput = {
    id?: SortOrder
    totalSeats?: SortOrder
  }

  export type AllocatedSeatCreateNestedManyWithoutStudentInput = {
    create?: XOR<AllocatedSeatCreateWithoutStudentInput, AllocatedSeatUncheckedCreateWithoutStudentInput> | AllocatedSeatCreateWithoutStudentInput[] | AllocatedSeatUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AllocatedSeatCreateOrConnectWithoutStudentInput | AllocatedSeatCreateOrConnectWithoutStudentInput[]
    createMany?: AllocatedSeatCreateManyStudentInputEnvelope
    connect?: AllocatedSeatWhereUniqueInput | AllocatedSeatWhereUniqueInput[]
  }

  export type AllocatedSeatUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AllocatedSeatCreateWithoutStudentInput, AllocatedSeatUncheckedCreateWithoutStudentInput> | AllocatedSeatCreateWithoutStudentInput[] | AllocatedSeatUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AllocatedSeatCreateOrConnectWithoutStudentInput | AllocatedSeatCreateOrConnectWithoutStudentInput[]
    createMany?: AllocatedSeatCreateManyStudentInputEnvelope
    connect?: AllocatedSeatWhereUniqueInput | AllocatedSeatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AllocatedSeatUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AllocatedSeatCreateWithoutStudentInput, AllocatedSeatUncheckedCreateWithoutStudentInput> | AllocatedSeatCreateWithoutStudentInput[] | AllocatedSeatUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AllocatedSeatCreateOrConnectWithoutStudentInput | AllocatedSeatCreateOrConnectWithoutStudentInput[]
    upsert?: AllocatedSeatUpsertWithWhereUniqueWithoutStudentInput | AllocatedSeatUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AllocatedSeatCreateManyStudentInputEnvelope
    set?: AllocatedSeatWhereUniqueInput | AllocatedSeatWhereUniqueInput[]
    disconnect?: AllocatedSeatWhereUniqueInput | AllocatedSeatWhereUniqueInput[]
    delete?: AllocatedSeatWhereUniqueInput | AllocatedSeatWhereUniqueInput[]
    connect?: AllocatedSeatWhereUniqueInput | AllocatedSeatWhereUniqueInput[]
    update?: AllocatedSeatUpdateWithWhereUniqueWithoutStudentInput | AllocatedSeatUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AllocatedSeatUpdateManyWithWhereWithoutStudentInput | AllocatedSeatUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AllocatedSeatScalarWhereInput | AllocatedSeatScalarWhereInput[]
  }

  export type AllocatedSeatUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AllocatedSeatCreateWithoutStudentInput, AllocatedSeatUncheckedCreateWithoutStudentInput> | AllocatedSeatCreateWithoutStudentInput[] | AllocatedSeatUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AllocatedSeatCreateOrConnectWithoutStudentInput | AllocatedSeatCreateOrConnectWithoutStudentInput[]
    upsert?: AllocatedSeatUpsertWithWhereUniqueWithoutStudentInput | AllocatedSeatUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AllocatedSeatCreateManyStudentInputEnvelope
    set?: AllocatedSeatWhereUniqueInput | AllocatedSeatWhereUniqueInput[]
    disconnect?: AllocatedSeatWhereUniqueInput | AllocatedSeatWhereUniqueInput[]
    delete?: AllocatedSeatWhereUniqueInput | AllocatedSeatWhereUniqueInput[]
    connect?: AllocatedSeatWhereUniqueInput | AllocatedSeatWhereUniqueInput[]
    update?: AllocatedSeatUpdateWithWhereUniqueWithoutStudentInput | AllocatedSeatUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AllocatedSeatUpdateManyWithWhereWithoutStudentInput | AllocatedSeatUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AllocatedSeatScalarWhereInput | AllocatedSeatScalarWhereInput[]
  }

  export type SeatMatrixCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SeatMatrixCreateWithoutDepartmentInput, SeatMatrixUncheckedCreateWithoutDepartmentInput> | SeatMatrixCreateWithoutDepartmentInput[] | SeatMatrixUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SeatMatrixCreateOrConnectWithoutDepartmentInput | SeatMatrixCreateOrConnectWithoutDepartmentInput[]
    createMany?: SeatMatrixCreateManyDepartmentInputEnvelope
    connect?: SeatMatrixWhereUniqueInput | SeatMatrixWhereUniqueInput[]
  }

  export type OriginalSeatMatrixCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<OriginalSeatMatrixCreateWithoutDepartmentInput, OriginalSeatMatrixUncheckedCreateWithoutDepartmentInput> | OriginalSeatMatrixCreateWithoutDepartmentInput[] | OriginalSeatMatrixUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: OriginalSeatMatrixCreateOrConnectWithoutDepartmentInput | OriginalSeatMatrixCreateOrConnectWithoutDepartmentInput[]
    createMany?: OriginalSeatMatrixCreateManyDepartmentInputEnvelope
    connect?: OriginalSeatMatrixWhereUniqueInput | OriginalSeatMatrixWhereUniqueInput[]
  }

  export type SeatMatrixUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SeatMatrixCreateWithoutDepartmentInput, SeatMatrixUncheckedCreateWithoutDepartmentInput> | SeatMatrixCreateWithoutDepartmentInput[] | SeatMatrixUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SeatMatrixCreateOrConnectWithoutDepartmentInput | SeatMatrixCreateOrConnectWithoutDepartmentInput[]
    createMany?: SeatMatrixCreateManyDepartmentInputEnvelope
    connect?: SeatMatrixWhereUniqueInput | SeatMatrixWhereUniqueInput[]
  }

  export type OriginalSeatMatrixUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<OriginalSeatMatrixCreateWithoutDepartmentInput, OriginalSeatMatrixUncheckedCreateWithoutDepartmentInput> | OriginalSeatMatrixCreateWithoutDepartmentInput[] | OriginalSeatMatrixUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: OriginalSeatMatrixCreateOrConnectWithoutDepartmentInput | OriginalSeatMatrixCreateOrConnectWithoutDepartmentInput[]
    createMany?: OriginalSeatMatrixCreateManyDepartmentInputEnvelope
    connect?: OriginalSeatMatrixWhereUniqueInput | OriginalSeatMatrixWhereUniqueInput[]
  }

  export type SeatMatrixUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SeatMatrixCreateWithoutDepartmentInput, SeatMatrixUncheckedCreateWithoutDepartmentInput> | SeatMatrixCreateWithoutDepartmentInput[] | SeatMatrixUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SeatMatrixCreateOrConnectWithoutDepartmentInput | SeatMatrixCreateOrConnectWithoutDepartmentInput[]
    upsert?: SeatMatrixUpsertWithWhereUniqueWithoutDepartmentInput | SeatMatrixUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SeatMatrixCreateManyDepartmentInputEnvelope
    set?: SeatMatrixWhereUniqueInput | SeatMatrixWhereUniqueInput[]
    disconnect?: SeatMatrixWhereUniqueInput | SeatMatrixWhereUniqueInput[]
    delete?: SeatMatrixWhereUniqueInput | SeatMatrixWhereUniqueInput[]
    connect?: SeatMatrixWhereUniqueInput | SeatMatrixWhereUniqueInput[]
    update?: SeatMatrixUpdateWithWhereUniqueWithoutDepartmentInput | SeatMatrixUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SeatMatrixUpdateManyWithWhereWithoutDepartmentInput | SeatMatrixUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SeatMatrixScalarWhereInput | SeatMatrixScalarWhereInput[]
  }

  export type OriginalSeatMatrixUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<OriginalSeatMatrixCreateWithoutDepartmentInput, OriginalSeatMatrixUncheckedCreateWithoutDepartmentInput> | OriginalSeatMatrixCreateWithoutDepartmentInput[] | OriginalSeatMatrixUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: OriginalSeatMatrixCreateOrConnectWithoutDepartmentInput | OriginalSeatMatrixCreateOrConnectWithoutDepartmentInput[]
    upsert?: OriginalSeatMatrixUpsertWithWhereUniqueWithoutDepartmentInput | OriginalSeatMatrixUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: OriginalSeatMatrixCreateManyDepartmentInputEnvelope
    set?: OriginalSeatMatrixWhereUniqueInput | OriginalSeatMatrixWhereUniqueInput[]
    disconnect?: OriginalSeatMatrixWhereUniqueInput | OriginalSeatMatrixWhereUniqueInput[]
    delete?: OriginalSeatMatrixWhereUniqueInput | OriginalSeatMatrixWhereUniqueInput[]
    connect?: OriginalSeatMatrixWhereUniqueInput | OriginalSeatMatrixWhereUniqueInput[]
    update?: OriginalSeatMatrixUpdateWithWhereUniqueWithoutDepartmentInput | OriginalSeatMatrixUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: OriginalSeatMatrixUpdateManyWithWhereWithoutDepartmentInput | OriginalSeatMatrixUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: OriginalSeatMatrixScalarWhereInput | OriginalSeatMatrixScalarWhereInput[]
  }

  export type SeatMatrixUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SeatMatrixCreateWithoutDepartmentInput, SeatMatrixUncheckedCreateWithoutDepartmentInput> | SeatMatrixCreateWithoutDepartmentInput[] | SeatMatrixUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SeatMatrixCreateOrConnectWithoutDepartmentInput | SeatMatrixCreateOrConnectWithoutDepartmentInput[]
    upsert?: SeatMatrixUpsertWithWhereUniqueWithoutDepartmentInput | SeatMatrixUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SeatMatrixCreateManyDepartmentInputEnvelope
    set?: SeatMatrixWhereUniqueInput | SeatMatrixWhereUniqueInput[]
    disconnect?: SeatMatrixWhereUniqueInput | SeatMatrixWhereUniqueInput[]
    delete?: SeatMatrixWhereUniqueInput | SeatMatrixWhereUniqueInput[]
    connect?: SeatMatrixWhereUniqueInput | SeatMatrixWhereUniqueInput[]
    update?: SeatMatrixUpdateWithWhereUniqueWithoutDepartmentInput | SeatMatrixUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SeatMatrixUpdateManyWithWhereWithoutDepartmentInput | SeatMatrixUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SeatMatrixScalarWhereInput | SeatMatrixScalarWhereInput[]
  }

  export type OriginalSeatMatrixUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<OriginalSeatMatrixCreateWithoutDepartmentInput, OriginalSeatMatrixUncheckedCreateWithoutDepartmentInput> | OriginalSeatMatrixCreateWithoutDepartmentInput[] | OriginalSeatMatrixUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: OriginalSeatMatrixCreateOrConnectWithoutDepartmentInput | OriginalSeatMatrixCreateOrConnectWithoutDepartmentInput[]
    upsert?: OriginalSeatMatrixUpsertWithWhereUniqueWithoutDepartmentInput | OriginalSeatMatrixUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: OriginalSeatMatrixCreateManyDepartmentInputEnvelope
    set?: OriginalSeatMatrixWhereUniqueInput | OriginalSeatMatrixWhereUniqueInput[]
    disconnect?: OriginalSeatMatrixWhereUniqueInput | OriginalSeatMatrixWhereUniqueInput[]
    delete?: OriginalSeatMatrixWhereUniqueInput | OriginalSeatMatrixWhereUniqueInput[]
    connect?: OriginalSeatMatrixWhereUniqueInput | OriginalSeatMatrixWhereUniqueInput[]
    update?: OriginalSeatMatrixUpdateWithWhereUniqueWithoutDepartmentInput | OriginalSeatMatrixUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: OriginalSeatMatrixUpdateManyWithWhereWithoutDepartmentInput | OriginalSeatMatrixUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: OriginalSeatMatrixScalarWhereInput | OriginalSeatMatrixScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutSeatMatrixInput = {
    create?: XOR<DepartmentCreateWithoutSeatMatrixInput, DepartmentUncheckedCreateWithoutSeatMatrixInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSeatMatrixInput
    connect?: DepartmentWhereUniqueInput
  }

  export type DepartmentUpdateOneRequiredWithoutSeatMatrixNestedInput = {
    create?: XOR<DepartmentCreateWithoutSeatMatrixInput, DepartmentUncheckedCreateWithoutSeatMatrixInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSeatMatrixInput
    upsert?: DepartmentUpsertWithoutSeatMatrixInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutSeatMatrixInput, DepartmentUpdateWithoutSeatMatrixInput>, DepartmentUncheckedUpdateWithoutSeatMatrixInput>
  }

  export type StudentApplicationCreateNestedOneWithoutAllocationsInput = {
    create?: XOR<StudentApplicationCreateWithoutAllocationsInput, StudentApplicationUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutAllocationsInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type StudentApplicationUpdateOneRequiredWithoutAllocationsNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutAllocationsInput, StudentApplicationUncheckedCreateWithoutAllocationsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutAllocationsInput
    upsert?: StudentApplicationUpsertWithoutAllocationsInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutAllocationsInput, StudentApplicationUpdateWithoutAllocationsInput>, StudentApplicationUncheckedUpdateWithoutAllocationsInput>
  }

  export type DepartmentCreateNestedOneWithoutOriginalSeatMatrixInput = {
    create?: XOR<DepartmentCreateWithoutOriginalSeatMatrixInput, DepartmentUncheckedCreateWithoutOriginalSeatMatrixInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutOriginalSeatMatrixInput
    connect?: DepartmentWhereUniqueInput
  }

  export type DepartmentUpdateOneRequiredWithoutOriginalSeatMatrixNestedInput = {
    create?: XOR<DepartmentCreateWithoutOriginalSeatMatrixInput, DepartmentUncheckedCreateWithoutOriginalSeatMatrixInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutOriginalSeatMatrixInput
    upsert?: DepartmentUpsertWithoutOriginalSeatMatrixInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutOriginalSeatMatrixInput, DepartmentUpdateWithoutOriginalSeatMatrixInput>, DepartmentUncheckedUpdateWithoutOriginalSeatMatrixInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AllocatedSeatCreateWithoutStudentInput = {
    allocatedCourse: string
    allocationRound: number
    allocatedAt?: Date | string
  }

  export type AllocatedSeatUncheckedCreateWithoutStudentInput = {
    id?: number
    allocatedCourse: string
    allocationRound: number
    allocatedAt?: Date | string
  }

  export type AllocatedSeatCreateOrConnectWithoutStudentInput = {
    where: AllocatedSeatWhereUniqueInput
    create: XOR<AllocatedSeatCreateWithoutStudentInput, AllocatedSeatUncheckedCreateWithoutStudentInput>
  }

  export type AllocatedSeatCreateManyStudentInputEnvelope = {
    data: AllocatedSeatCreateManyStudentInput | AllocatedSeatCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AllocatedSeatUpsertWithWhereUniqueWithoutStudentInput = {
    where: AllocatedSeatWhereUniqueInput
    update: XOR<AllocatedSeatUpdateWithoutStudentInput, AllocatedSeatUncheckedUpdateWithoutStudentInput>
    create: XOR<AllocatedSeatCreateWithoutStudentInput, AllocatedSeatUncheckedCreateWithoutStudentInput>
  }

  export type AllocatedSeatUpdateWithWhereUniqueWithoutStudentInput = {
    where: AllocatedSeatWhereUniqueInput
    data: XOR<AllocatedSeatUpdateWithoutStudentInput, AllocatedSeatUncheckedUpdateWithoutStudentInput>
  }

  export type AllocatedSeatUpdateManyWithWhereWithoutStudentInput = {
    where: AllocatedSeatScalarWhereInput
    data: XOR<AllocatedSeatUpdateManyMutationInput, AllocatedSeatUncheckedUpdateManyWithoutStudentInput>
  }

  export type AllocatedSeatScalarWhereInput = {
    AND?: AllocatedSeatScalarWhereInput | AllocatedSeatScalarWhereInput[]
    OR?: AllocatedSeatScalarWhereInput[]
    NOT?: AllocatedSeatScalarWhereInput | AllocatedSeatScalarWhereInput[]
    id?: IntFilter<"AllocatedSeat"> | number
    studentId?: StringFilter<"AllocatedSeat"> | string
    allocatedCourse?: StringFilter<"AllocatedSeat"> | string
    allocationRound?: IntFilter<"AllocatedSeat"> | number
    allocatedAt?: DateTimeFilter<"AllocatedSeat"> | Date | string
  }

  export type SeatMatrixCreateWithoutDepartmentInput = {
    category: string
    subCategory: string
    totalSeats: number
  }

  export type SeatMatrixUncheckedCreateWithoutDepartmentInput = {
    id?: number
    category: string
    subCategory: string
    totalSeats: number
  }

  export type SeatMatrixCreateOrConnectWithoutDepartmentInput = {
    where: SeatMatrixWhereUniqueInput
    create: XOR<SeatMatrixCreateWithoutDepartmentInput, SeatMatrixUncheckedCreateWithoutDepartmentInput>
  }

  export type SeatMatrixCreateManyDepartmentInputEnvelope = {
    data: SeatMatrixCreateManyDepartmentInput | SeatMatrixCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type OriginalSeatMatrixCreateWithoutDepartmentInput = {
    category: string
    subCategory: string
    totalSeats: number
  }

  export type OriginalSeatMatrixUncheckedCreateWithoutDepartmentInput = {
    id?: number
    category: string
    subCategory: string
    totalSeats: number
  }

  export type OriginalSeatMatrixCreateOrConnectWithoutDepartmentInput = {
    where: OriginalSeatMatrixWhereUniqueInput
    create: XOR<OriginalSeatMatrixCreateWithoutDepartmentInput, OriginalSeatMatrixUncheckedCreateWithoutDepartmentInput>
  }

  export type OriginalSeatMatrixCreateManyDepartmentInputEnvelope = {
    data: OriginalSeatMatrixCreateManyDepartmentInput | OriginalSeatMatrixCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type SeatMatrixUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: SeatMatrixWhereUniqueInput
    update: XOR<SeatMatrixUpdateWithoutDepartmentInput, SeatMatrixUncheckedUpdateWithoutDepartmentInput>
    create: XOR<SeatMatrixCreateWithoutDepartmentInput, SeatMatrixUncheckedCreateWithoutDepartmentInput>
  }

  export type SeatMatrixUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: SeatMatrixWhereUniqueInput
    data: XOR<SeatMatrixUpdateWithoutDepartmentInput, SeatMatrixUncheckedUpdateWithoutDepartmentInput>
  }

  export type SeatMatrixUpdateManyWithWhereWithoutDepartmentInput = {
    where: SeatMatrixScalarWhereInput
    data: XOR<SeatMatrixUpdateManyMutationInput, SeatMatrixUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type SeatMatrixScalarWhereInput = {
    AND?: SeatMatrixScalarWhereInput | SeatMatrixScalarWhereInput[]
    OR?: SeatMatrixScalarWhereInput[]
    NOT?: SeatMatrixScalarWhereInput | SeatMatrixScalarWhereInput[]
    id?: IntFilter<"SeatMatrix"> | number
    departmentId?: StringFilter<"SeatMatrix"> | string
    category?: StringFilter<"SeatMatrix"> | string
    subCategory?: StringFilter<"SeatMatrix"> | string
    totalSeats?: IntFilter<"SeatMatrix"> | number
  }

  export type OriginalSeatMatrixUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: OriginalSeatMatrixWhereUniqueInput
    update: XOR<OriginalSeatMatrixUpdateWithoutDepartmentInput, OriginalSeatMatrixUncheckedUpdateWithoutDepartmentInput>
    create: XOR<OriginalSeatMatrixCreateWithoutDepartmentInput, OriginalSeatMatrixUncheckedCreateWithoutDepartmentInput>
  }

  export type OriginalSeatMatrixUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: OriginalSeatMatrixWhereUniqueInput
    data: XOR<OriginalSeatMatrixUpdateWithoutDepartmentInput, OriginalSeatMatrixUncheckedUpdateWithoutDepartmentInput>
  }

  export type OriginalSeatMatrixUpdateManyWithWhereWithoutDepartmentInput = {
    where: OriginalSeatMatrixScalarWhereInput
    data: XOR<OriginalSeatMatrixUpdateManyMutationInput, OriginalSeatMatrixUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type OriginalSeatMatrixScalarWhereInput = {
    AND?: OriginalSeatMatrixScalarWhereInput | OriginalSeatMatrixScalarWhereInput[]
    OR?: OriginalSeatMatrixScalarWhereInput[]
    NOT?: OriginalSeatMatrixScalarWhereInput | OriginalSeatMatrixScalarWhereInput[]
    id?: IntFilter<"OriginalSeatMatrix"> | number
    departmentId?: StringFilter<"OriginalSeatMatrix"> | string
    category?: StringFilter<"OriginalSeatMatrix"> | string
    subCategory?: StringFilter<"OriginalSeatMatrix"> | string
    totalSeats?: IntFilter<"OriginalSeatMatrix"> | number
  }

  export type DepartmentCreateWithoutSeatMatrixInput = {
    id: string
    name: string
    originalSeatMatrix?: OriginalSeatMatrixCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutSeatMatrixInput = {
    id: string
    name: string
    originalSeatMatrix?: OriginalSeatMatrixUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutSeatMatrixInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutSeatMatrixInput, DepartmentUncheckedCreateWithoutSeatMatrixInput>
  }

  export type DepartmentUpsertWithoutSeatMatrixInput = {
    update: XOR<DepartmentUpdateWithoutSeatMatrixInput, DepartmentUncheckedUpdateWithoutSeatMatrixInput>
    create: XOR<DepartmentCreateWithoutSeatMatrixInput, DepartmentUncheckedCreateWithoutSeatMatrixInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutSeatMatrixInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutSeatMatrixInput, DepartmentUncheckedUpdateWithoutSeatMatrixInput>
  }

  export type DepartmentUpdateWithoutSeatMatrixInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalSeatMatrix?: OriginalSeatMatrixUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutSeatMatrixInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalSeatMatrix?: OriginalSeatMatrixUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type StudentApplicationCreateWithoutAllocationsInput = {
    applicationNumber: string
    studentName: string
    fatherMotherName: string
    phoneNumber: string
    email: string
    jeeCRL: number
    category: string
    categoryRank?: number | null
    subCategory?: string | null
    subCategoryRank?: number | null
    courseChoice1: string
    courseChoice2?: string | null
    courseChoice3?: string | null
    courseChoice4?: string | null
    courseChoice5?: string | null
    courseChoice6?: string | null
    courseChoice7?: string | null
    sportsMarks?: number | null
    createdAt?: Date | string
  }

  export type StudentApplicationUncheckedCreateWithoutAllocationsInput = {
    applicationNumber: string
    studentName: string
    fatherMotherName: string
    phoneNumber: string
    email: string
    jeeCRL: number
    category: string
    categoryRank?: number | null
    subCategory?: string | null
    subCategoryRank?: number | null
    courseChoice1: string
    courseChoice2?: string | null
    courseChoice3?: string | null
    courseChoice4?: string | null
    courseChoice5?: string | null
    courseChoice6?: string | null
    courseChoice7?: string | null
    sportsMarks?: number | null
    createdAt?: Date | string
  }

  export type StudentApplicationCreateOrConnectWithoutAllocationsInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutAllocationsInput, StudentApplicationUncheckedCreateWithoutAllocationsInput>
  }

  export type StudentApplicationUpsertWithoutAllocationsInput = {
    update: XOR<StudentApplicationUpdateWithoutAllocationsInput, StudentApplicationUncheckedUpdateWithoutAllocationsInput>
    create: XOR<StudentApplicationCreateWithoutAllocationsInput, StudentApplicationUncheckedCreateWithoutAllocationsInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutAllocationsInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutAllocationsInput, StudentApplicationUncheckedUpdateWithoutAllocationsInput>
  }

  export type StudentApplicationUpdateWithoutAllocationsInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    fatherMotherName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jeeCRL?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    categoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    courseChoice1?: StringFieldUpdateOperationsInput | string
    courseChoice2?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice3?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice4?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice5?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice6?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice7?: NullableStringFieldUpdateOperationsInput | string | null
    sportsMarks?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationUncheckedUpdateWithoutAllocationsInput = {
    applicationNumber?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    fatherMotherName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    jeeCRL?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    categoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    subCategoryRank?: NullableIntFieldUpdateOperationsInput | number | null
    courseChoice1?: StringFieldUpdateOperationsInput | string
    courseChoice2?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice3?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice4?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice5?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice6?: NullableStringFieldUpdateOperationsInput | string | null
    courseChoice7?: NullableStringFieldUpdateOperationsInput | string | null
    sportsMarks?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateWithoutOriginalSeatMatrixInput = {
    id: string
    name: string
    seatMatrix?: SeatMatrixCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutOriginalSeatMatrixInput = {
    id: string
    name: string
    seatMatrix?: SeatMatrixUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutOriginalSeatMatrixInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutOriginalSeatMatrixInput, DepartmentUncheckedCreateWithoutOriginalSeatMatrixInput>
  }

  export type DepartmentUpsertWithoutOriginalSeatMatrixInput = {
    update: XOR<DepartmentUpdateWithoutOriginalSeatMatrixInput, DepartmentUncheckedUpdateWithoutOriginalSeatMatrixInput>
    create: XOR<DepartmentCreateWithoutOriginalSeatMatrixInput, DepartmentUncheckedCreateWithoutOriginalSeatMatrixInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutOriginalSeatMatrixInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutOriginalSeatMatrixInput, DepartmentUncheckedUpdateWithoutOriginalSeatMatrixInput>
  }

  export type DepartmentUpdateWithoutOriginalSeatMatrixInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatMatrix?: SeatMatrixUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutOriginalSeatMatrixInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatMatrix?: SeatMatrixUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type AllocatedSeatCreateManyStudentInput = {
    id?: number
    allocatedCourse: string
    allocationRound: number
    allocatedAt?: Date | string
  }

  export type AllocatedSeatUpdateWithoutStudentInput = {
    allocatedCourse?: StringFieldUpdateOperationsInput | string
    allocationRound?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllocatedSeatUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    allocatedCourse?: StringFieldUpdateOperationsInput | string
    allocationRound?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllocatedSeatUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    allocatedCourse?: StringFieldUpdateOperationsInput | string
    allocationRound?: IntFieldUpdateOperationsInput | number
    allocatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatMatrixCreateManyDepartmentInput = {
    id?: number
    category: string
    subCategory: string
    totalSeats: number
  }

  export type OriginalSeatMatrixCreateManyDepartmentInput = {
    id?: number
    category: string
    subCategory: string
    totalSeats: number
  }

  export type SeatMatrixUpdateWithoutDepartmentInput = {
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type SeatMatrixUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type SeatMatrixUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type OriginalSeatMatrixUpdateWithoutDepartmentInput = {
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type OriginalSeatMatrixUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type OriginalSeatMatrixUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    subCategory?: StringFieldUpdateOperationsInput | string
    totalSeats?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}