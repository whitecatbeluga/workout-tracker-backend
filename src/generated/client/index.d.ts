
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Routine
 * 
 */
export type Routine = $Result.DefaultSelection<Prisma.$RoutinePayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model UserSports
 * 
 */
export type UserSports = $Result.DefaultSelection<Prisma.$UserSportsPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model UserBadges
 * 
 */
export type UserBadges = $Result.DefaultSelection<Prisma.$UserBadgesPayload>
/**
 * Model Badges
 * 
 */
export type Badges = $Result.DefaultSelection<Prisma.$BadgesPayload>
/**
 * Model UserSportPivot
 * 
 */
export type UserSportPivot = $Result.DefaultSelection<Prisma.$UserSportPivotPayload>
/**
 * Model RoutineWorkoutPivot
 * 
 */
export type RoutineWorkoutPivot = $Result.DefaultSelection<Prisma.$RoutineWorkoutPivotPayload>
/**
 * Model WorkoutExercisePivot
 * 
 */
export type WorkoutExercisePivot = $Result.DefaultSelection<Prisma.$WorkoutExercisePivotPayload>
/**
 * Model RoutineExercisePivot
 * 
 */
export type RoutineExercisePivot = $Result.DefaultSelection<Prisma.$RoutineExercisePivotPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routine`: Exposes CRUD operations for the **Routine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routines
    * const routines = await prisma.routine.findMany()
    * ```
    */
  get routine(): Prisma.RoutineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSports`: Exposes CRUD operations for the **UserSports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSports
    * const userSports = await prisma.userSports.findMany()
    * ```
    */
  get userSports(): Prisma.UserSportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userBadges`: Exposes CRUD operations for the **UserBadges** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBadges
    * const userBadges = await prisma.userBadges.findMany()
    * ```
    */
  get userBadges(): Prisma.UserBadgesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badges`: Exposes CRUD operations for the **Badges** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badges.findMany()
    * ```
    */
  get badges(): Prisma.BadgesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSportPivot`: Exposes CRUD operations for the **UserSportPivot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSportPivots
    * const userSportPivots = await prisma.userSportPivot.findMany()
    * ```
    */
  get userSportPivot(): Prisma.UserSportPivotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routineWorkoutPivot`: Exposes CRUD operations for the **RoutineWorkoutPivot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutineWorkoutPivots
    * const routineWorkoutPivots = await prisma.routineWorkoutPivot.findMany()
    * ```
    */
  get routineWorkoutPivot(): Prisma.RoutineWorkoutPivotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutExercisePivot`: Exposes CRUD operations for the **WorkoutExercisePivot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutExercisePivots
    * const workoutExercisePivots = await prisma.workoutExercisePivot.findMany()
    * ```
    */
  get workoutExercisePivot(): Prisma.WorkoutExercisePivotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routineExercisePivot`: Exposes CRUD operations for the **RoutineExercisePivot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutineExercisePivots
    * const routineExercisePivots = await prisma.routineExercisePivot.findMany()
    * ```
    */
  get routineExercisePivot(): Prisma.RoutineExercisePivotDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Routine: 'Routine',
    Workout: 'Workout',
    UserSports: 'UserSports',
    Exercise: 'Exercise',
    UserBadges: 'UserBadges',
    Badges: 'Badges',
    UserSportPivot: 'UserSportPivot',
    RoutineWorkoutPivot: 'RoutineWorkoutPivot',
    WorkoutExercisePivot: 'WorkoutExercisePivot',
    RoutineExercisePivot: 'RoutineExercisePivot'
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
      modelProps: "user" | "routine" | "workout" | "userSports" | "exercise" | "userBadges" | "badges" | "userSportPivot" | "routineWorkoutPivot" | "workoutExercisePivot" | "routineExercisePivot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Routine: {
        payload: Prisma.$RoutinePayload<ExtArgs>
        fields: Prisma.RoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findFirst: {
            args: Prisma.RoutineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          findMany: {
            args: Prisma.RoutineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>[]
          }
          create: {
            args: Prisma.RoutineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          createMany: {
            args: Prisma.RoutineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoutineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          update: {
            args: Prisma.RoutineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          deleteMany: {
            args: Prisma.RoutineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoutineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutinePayload>
          }
          aggregate: {
            args: Prisma.RoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutine>
          }
          groupBy: {
            args: Prisma.RoutineGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      UserSports: {
        payload: Prisma.$UserSportsPayload<ExtArgs>
        fields: Prisma.UserSportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportsPayload>
          }
          findFirst: {
            args: Prisma.UserSportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportsPayload>
          }
          findMany: {
            args: Prisma.UserSportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportsPayload>[]
          }
          create: {
            args: Prisma.UserSportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportsPayload>
          }
          createMany: {
            args: Prisma.UserSportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserSportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportsPayload>
          }
          update: {
            args: Prisma.UserSportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportsPayload>
          }
          deleteMany: {
            args: Prisma.UserSportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportsPayload>
          }
          aggregate: {
            args: Prisma.UserSportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSports>
          }
          groupBy: {
            args: Prisma.UserSportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSportsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSportsCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      UserBadges: {
        payload: Prisma.$UserBadgesPayload<ExtArgs>
        fields: Prisma.UserBadgesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBadgesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBadgesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgesPayload>
          }
          findFirst: {
            args: Prisma.UserBadgesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBadgesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgesPayload>
          }
          findMany: {
            args: Prisma.UserBadgesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgesPayload>[]
          }
          create: {
            args: Prisma.UserBadgesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgesPayload>
          }
          createMany: {
            args: Prisma.UserBadgesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserBadgesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgesPayload>
          }
          update: {
            args: Prisma.UserBadgesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgesPayload>
          }
          deleteMany: {
            args: Prisma.UserBadgesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBadgesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserBadgesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBadgesPayload>
          }
          aggregate: {
            args: Prisma.UserBadgesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBadges>
          }
          groupBy: {
            args: Prisma.UserBadgesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBadgesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBadgesCountArgs<ExtArgs>
            result: $Utils.Optional<UserBadgesCountAggregateOutputType> | number
          }
        }
      }
      Badges: {
        payload: Prisma.$BadgesPayload<ExtArgs>
        fields: Prisma.BadgesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesPayload>
          }
          findFirst: {
            args: Prisma.BadgesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesPayload>
          }
          findMany: {
            args: Prisma.BadgesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesPayload>[]
          }
          create: {
            args: Prisma.BadgesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesPayload>
          }
          createMany: {
            args: Prisma.BadgesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BadgesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesPayload>
          }
          update: {
            args: Prisma.BadgesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesPayload>
          }
          deleteMany: {
            args: Prisma.BadgesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BadgesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgesPayload>
          }
          aggregate: {
            args: Prisma.BadgesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadges>
          }
          groupBy: {
            args: Prisma.BadgesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgesGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgesCountArgs<ExtArgs>
            result: $Utils.Optional<BadgesCountAggregateOutputType> | number
          }
        }
      }
      UserSportPivot: {
        payload: Prisma.$UserSportPivotPayload<ExtArgs>
        fields: Prisma.UserSportPivotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSportPivotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPivotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSportPivotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPivotPayload>
          }
          findFirst: {
            args: Prisma.UserSportPivotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPivotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSportPivotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPivotPayload>
          }
          findMany: {
            args: Prisma.UserSportPivotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPivotPayload>[]
          }
          create: {
            args: Prisma.UserSportPivotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPivotPayload>
          }
          createMany: {
            args: Prisma.UserSportPivotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserSportPivotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPivotPayload>
          }
          update: {
            args: Prisma.UserSportPivotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPivotPayload>
          }
          deleteMany: {
            args: Prisma.UserSportPivotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSportPivotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSportPivotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSportPivotPayload>
          }
          aggregate: {
            args: Prisma.UserSportPivotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSportPivot>
          }
          groupBy: {
            args: Prisma.UserSportPivotGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSportPivotGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSportPivotCountArgs<ExtArgs>
            result: $Utils.Optional<UserSportPivotCountAggregateOutputType> | number
          }
        }
      }
      RoutineWorkoutPivot: {
        payload: Prisma.$RoutineWorkoutPivotPayload<ExtArgs>
        fields: Prisma.RoutineWorkoutPivotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineWorkoutPivotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineWorkoutPivotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineWorkoutPivotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineWorkoutPivotPayload>
          }
          findFirst: {
            args: Prisma.RoutineWorkoutPivotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineWorkoutPivotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineWorkoutPivotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineWorkoutPivotPayload>
          }
          findMany: {
            args: Prisma.RoutineWorkoutPivotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineWorkoutPivotPayload>[]
          }
          create: {
            args: Prisma.RoutineWorkoutPivotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineWorkoutPivotPayload>
          }
          createMany: {
            args: Prisma.RoutineWorkoutPivotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoutineWorkoutPivotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineWorkoutPivotPayload>
          }
          update: {
            args: Prisma.RoutineWorkoutPivotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineWorkoutPivotPayload>
          }
          deleteMany: {
            args: Prisma.RoutineWorkoutPivotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineWorkoutPivotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoutineWorkoutPivotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineWorkoutPivotPayload>
          }
          aggregate: {
            args: Prisma.RoutineWorkoutPivotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutineWorkoutPivot>
          }
          groupBy: {
            args: Prisma.RoutineWorkoutPivotGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineWorkoutPivotGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineWorkoutPivotCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineWorkoutPivotCountAggregateOutputType> | number
          }
        }
      }
      WorkoutExercisePivot: {
        payload: Prisma.$WorkoutExercisePivotPayload<ExtArgs>
        fields: Prisma.WorkoutExercisePivotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutExercisePivotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePivotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutExercisePivotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePivotPayload>
          }
          findFirst: {
            args: Prisma.WorkoutExercisePivotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePivotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutExercisePivotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePivotPayload>
          }
          findMany: {
            args: Prisma.WorkoutExercisePivotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePivotPayload>[]
          }
          create: {
            args: Prisma.WorkoutExercisePivotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePivotPayload>
          }
          createMany: {
            args: Prisma.WorkoutExercisePivotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkoutExercisePivotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePivotPayload>
          }
          update: {
            args: Prisma.WorkoutExercisePivotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePivotPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutExercisePivotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutExercisePivotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkoutExercisePivotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutExercisePivotPayload>
          }
          aggregate: {
            args: Prisma.WorkoutExercisePivotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutExercisePivot>
          }
          groupBy: {
            args: Prisma.WorkoutExercisePivotGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExercisePivotGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutExercisePivotCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutExercisePivotCountAggregateOutputType> | number
          }
        }
      }
      RoutineExercisePivot: {
        payload: Prisma.$RoutineExercisePivotPayload<ExtArgs>
        fields: Prisma.RoutineExercisePivotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineExercisePivotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePivotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineExercisePivotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePivotPayload>
          }
          findFirst: {
            args: Prisma.RoutineExercisePivotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePivotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineExercisePivotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePivotPayload>
          }
          findMany: {
            args: Prisma.RoutineExercisePivotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePivotPayload>[]
          }
          create: {
            args: Prisma.RoutineExercisePivotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePivotPayload>
          }
          createMany: {
            args: Prisma.RoutineExercisePivotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoutineExercisePivotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePivotPayload>
          }
          update: {
            args: Prisma.RoutineExercisePivotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePivotPayload>
          }
          deleteMany: {
            args: Prisma.RoutineExercisePivotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineExercisePivotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoutineExercisePivotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineExercisePivotPayload>
          }
          aggregate: {
            args: Prisma.RoutineExercisePivotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutineExercisePivot>
          }
          groupBy: {
            args: Prisma.RoutineExercisePivotGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineExercisePivotGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineExercisePivotCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineExercisePivotCountAggregateOutputType> | number
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
    user?: UserOmit
    routine?: RoutineOmit
    workout?: WorkoutOmit
    userSports?: UserSportsOmit
    exercise?: ExerciseOmit
    userBadges?: UserBadgesOmit
    badges?: BadgesOmit
    userSportPivot?: UserSportPivotOmit
    routineWorkoutPivot?: RoutineWorkoutPivotOmit
    workoutExercisePivot?: WorkoutExercisePivotOmit
    routineExercisePivot?: RoutineExercisePivotOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    preferred_sports: number
    workouts: number
    routines: number
    userBadges: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferred_sports?: boolean | UserCountOutputTypeCountPreferred_sportsArgs
    workouts?: boolean | UserCountOutputTypeCountWorkoutsArgs
    routines?: boolean | UserCountOutputTypeCountRoutinesArgs
    userBadges?: boolean | UserCountOutputTypeCountUserBadgesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreferred_sportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportPivotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoutinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgesWhereInput
  }


  /**
   * Count Type RoutineCountOutputType
   */

  export type RoutineCountOutputType = {
    workouts: number
    RoutineExercisePivot: number
  }

  export type RoutineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workouts?: boolean | RoutineCountOutputTypeCountWorkoutsArgs
    RoutineExercisePivot?: boolean | RoutineCountOutputTypeCountRoutineExercisePivotArgs
  }

  // Custom InputTypes
  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineCountOutputType
     */
    select?: RoutineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountWorkoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWorkoutPivotWhereInput
  }

  /**
   * RoutineCountOutputType without action
   */
  export type RoutineCountOutputTypeCountRoutineExercisePivotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineExercisePivotWhereInput
  }


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    RoutineWorkoutPivot: number
    exercises: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RoutineWorkoutPivot?: boolean | WorkoutCountOutputTypeCountRoutineWorkoutPivotArgs
    exercises?: boolean | WorkoutCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountRoutineWorkoutPivotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWorkoutPivotWhereInput
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExercisePivotWhereInput
  }


  /**
   * Count Type UserSportsCountOutputType
   */

  export type UserSportsCountOutputType = {
    users: number
  }

  export type UserSportsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserSportsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserSportsCountOutputType without action
   */
  export type UserSportsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportsCountOutputType
     */
    select?: UserSportsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserSportsCountOutputType without action
   */
  export type UserSportsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportPivotWhereInput
  }


  /**
   * Count Type ExerciseCountOutputType
   */

  export type ExerciseCountOutputType = {
    WorkoutExercisePivot: number
    RoutineExercisePivot: number
  }

  export type ExerciseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkoutExercisePivot?: boolean | ExerciseCountOutputTypeCountWorkoutExercisePivotArgs
    RoutineExercisePivot?: boolean | ExerciseCountOutputTypeCountRoutineExercisePivotArgs
  }

  // Custom InputTypes
  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExerciseCountOutputType
     */
    select?: ExerciseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountWorkoutExercisePivotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExercisePivotWhereInput
  }

  /**
   * ExerciseCountOutputType without action
   */
  export type ExerciseCountOutputTypeCountRoutineExercisePivotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineExercisePivotWhereInput
  }


  /**
   * Count Type BadgesCountOutputType
   */

  export type BadgesCountOutputType = {
    userBadges: number
  }

  export type BadgesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | BadgesCountOutputTypeCountUserBadgesArgs
  }

  // Custom InputTypes
  /**
   * BadgesCountOutputType without action
   */
  export type BadgesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BadgesCountOutputType
     */
    select?: BadgesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BadgesCountOutputType without action
   */
  export type BadgesCountOutputTypeCountUserBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    age: number | null
    height: number | null
    weight: number | null
    bmi: number | null
    activity_level: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    age: number | null
    height: number | null
    weight: number | null
    bmi: number | null
    activity_level: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    address: string | null
    user_name: string | null
    email: string | null
    password: string | null
    gender: string | null
    age: number | null
    height: number | null
    weight: number | null
    bmi: number | null
    activity_level: number | null
    user_type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    address: string | null
    user_name: string | null
    email: string | null
    password: string | null
    gender: string | null
    age: number | null
    height: number | null
    weight: number | null
    bmi: number | null
    activity_level: number | null
    user_type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    address: number
    user_name: number
    email: number
    password: number
    gender: number
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
    height?: true
    weight?: true
    bmi?: true
    activity_level?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
    height?: true
    weight?: true
    bmi?: true
    activity_level?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    address?: true
    user_name?: true
    email?: true
    password?: true
    gender?: true
    age?: true
    height?: true
    weight?: true
    bmi?: true
    activity_level?: true
    user_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    address?: true
    user_name?: true
    email?: true
    password?: true
    gender?: true
    age?: true
    height?: true
    weight?: true
    bmi?: true
    activity_level?: true
    user_type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    address?: true
    user_name?: true
    email?: true
    password?: true
    gender?: true
    age?: true
    height?: true
    weight?: true
    bmi?: true
    activity_level?: true
    user_type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    address?: boolean
    user_name?: boolean
    email?: boolean
    password?: boolean
    gender?: boolean
    age?: boolean
    height?: boolean
    weight?: boolean
    bmi?: boolean
    activity_level?: boolean
    user_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferred_sports?: boolean | User$preferred_sportsArgs<ExtArgs>
    workouts?: boolean | User$workoutsArgs<ExtArgs>
    routines?: boolean | User$routinesArgs<ExtArgs>
    userBadges?: boolean | User$userBadgesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    address?: boolean
    user_name?: boolean
    email?: boolean
    password?: boolean
    gender?: boolean
    age?: boolean
    height?: boolean
    weight?: boolean
    bmi?: boolean
    activity_level?: boolean
    user_type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "address" | "user_name" | "email" | "password" | "gender" | "age" | "height" | "weight" | "bmi" | "activity_level" | "user_type" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferred_sports?: boolean | User$preferred_sportsArgs<ExtArgs>
    workouts?: boolean | User$workoutsArgs<ExtArgs>
    routines?: boolean | User$routinesArgs<ExtArgs>
    userBadges?: boolean | User$userBadgesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      preferred_sports: Prisma.$UserSportPivotPayload<ExtArgs>[]
      workouts: Prisma.$WorkoutPayload<ExtArgs>[]
      routines: Prisma.$RoutinePayload<ExtArgs>[]
      userBadges: Prisma.$UserBadgesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      address: string
      user_name: string
      email: string
      password: string
      gender: string
      age: number
      height: number
      weight: number
      bmi: number
      activity_level: number
      user_type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferred_sports<T extends User$preferred_sportsArgs<ExtArgs> = {}>(args?: Subset<T, User$preferred_sportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workouts<T extends User$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routines<T extends User$routinesArgs<ExtArgs> = {}>(args?: Subset<T, User$routinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userBadges<T extends User$userBadgesArgs<ExtArgs> = {}>(args?: Subset<T, User$userBadgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly user_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly height: FieldRef<"User", 'Float'>
    readonly weight: FieldRef<"User", 'Float'>
    readonly bmi: FieldRef<"User", 'Float'>
    readonly activity_level: FieldRef<"User", 'Int'>
    readonly user_type: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.preferred_sports
   */
  export type User$preferred_sportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
    where?: UserSportPivotWhereInput
    orderBy?: UserSportPivotOrderByWithRelationInput | UserSportPivotOrderByWithRelationInput[]
    cursor?: UserSportPivotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSportPivotScalarFieldEnum | UserSportPivotScalarFieldEnum[]
  }

  /**
   * User.workouts
   */
  export type User$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * User.routines
   */
  export type User$routinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    cursor?: RoutineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * User.userBadges
   */
  export type User$userBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
    where?: UserBadgesWhereInput
    orderBy?: UserBadgesOrderByWithRelationInput | UserBadgesOrderByWithRelationInput[]
    cursor?: UserBadgesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgesScalarFieldEnum | UserBadgesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Routine
   */

  export type AggregateRoutine = {
    _count: RoutineCountAggregateOutputType | null
    _avg: RoutineAvgAggregateOutputType | null
    _sum: RoutineSumAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  export type RoutineAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RoutineSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RoutineMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoutineCountAggregateOutputType = {
    id: number
    name: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoutineAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RoutineSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RoutineMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoutineCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routine to aggregate.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routines
    **/
    _count?: true | RoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineMaxAggregateInputType
  }

  export type GetRoutineAggregateType<T extends RoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutine[P]>
      : GetScalarType<T[P], AggregateRoutine[P]>
  }




  export type RoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWhereInput
    orderBy?: RoutineOrderByWithAggregationInput | RoutineOrderByWithAggregationInput[]
    by: RoutineScalarFieldEnum[] | RoutineScalarFieldEnum
    having?: RoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineCountAggregateInputType | true
    _avg?: RoutineAvgAggregateInputType
    _sum?: RoutineSumAggregateInputType
    _min?: RoutineMinAggregateInputType
    _max?: RoutineMaxAggregateInputType
  }

  export type RoutineGroupByOutputType = {
    id: number
    name: string
    description: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: RoutineCountAggregateOutputType | null
    _avg: RoutineAvgAggregateOutputType | null
    _sum: RoutineSumAggregateOutputType | null
    _min: RoutineMinAggregateOutputType | null
    _max: RoutineMaxAggregateOutputType | null
  }

  type GetRoutineGroupByPayload<T extends RoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineGroupByOutputType[P]>
        }
      >
    >


  export type RoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workouts?: boolean | Routine$workoutsArgs<ExtArgs>
    RoutineExercisePivot?: boolean | Routine$RoutineExercisePivotArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routine"]>



  export type RoutineSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoutineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["routine"]>
  export type RoutineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workouts?: boolean | Routine$workoutsArgs<ExtArgs>
    RoutineExercisePivot?: boolean | Routine$RoutineExercisePivotArgs<ExtArgs>
    _count?: boolean | RoutineCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Routine"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workouts: Prisma.$RoutineWorkoutPivotPayload<ExtArgs>[]
      RoutineExercisePivot: Prisma.$RoutineExercisePivotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["routine"]>
    composites: {}
  }

  type RoutineGetPayload<S extends boolean | null | undefined | RoutineDefaultArgs> = $Result.GetResult<Prisma.$RoutinePayload, S>

  type RoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineCountAggregateInputType | true
    }

  export interface RoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Routine'], meta: { name: 'Routine' } }
    /**
     * Find zero or one Routine that matches the filter.
     * @param {RoutineFindUniqueArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineFindUniqueArgs>(args: SelectSubset<T, RoutineFindUniqueArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Routine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutineFindUniqueOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineFindFirstArgs>(args?: SelectSubset<T, RoutineFindFirstArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Routine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindFirstOrThrowArgs} args - Arguments to find a Routine
     * @example
     * // Get one Routine
     * const routine = await prisma.routine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routines
     * const routines = await prisma.routine.findMany()
     * 
     * // Get first 10 Routines
     * const routines = await prisma.routine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineWithIdOnly = await prisma.routine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineFindManyArgs>(args?: SelectSubset<T, RoutineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Routine.
     * @param {RoutineCreateArgs} args - Arguments to create a Routine.
     * @example
     * // Create one Routine
     * const Routine = await prisma.routine.create({
     *   data: {
     *     // ... data to create a Routine
     *   }
     * })
     * 
     */
    create<T extends RoutineCreateArgs>(args: SelectSubset<T, RoutineCreateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routines.
     * @param {RoutineCreateManyArgs} args - Arguments to create many Routines.
     * @example
     * // Create many Routines
     * const routine = await prisma.routine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineCreateManyArgs>(args?: SelectSubset<T, RoutineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Routine.
     * @param {RoutineDeleteArgs} args - Arguments to delete one Routine.
     * @example
     * // Delete one Routine
     * const Routine = await prisma.routine.delete({
     *   where: {
     *     // ... filter to delete one Routine
     *   }
     * })
     * 
     */
    delete<T extends RoutineDeleteArgs>(args: SelectSubset<T, RoutineDeleteArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Routine.
     * @param {RoutineUpdateArgs} args - Arguments to update one Routine.
     * @example
     * // Update one Routine
     * const routine = await prisma.routine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineUpdateArgs>(args: SelectSubset<T, RoutineUpdateArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routines.
     * @param {RoutineDeleteManyArgs} args - Arguments to filter Routines to delete.
     * @example
     * // Delete a few Routines
     * const { count } = await prisma.routine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineDeleteManyArgs>(args?: SelectSubset<T, RoutineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routines
     * const routine = await prisma.routine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineUpdateManyArgs>(args: SelectSubset<T, RoutineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Routine.
     * @param {RoutineUpsertArgs} args - Arguments to update or create a Routine.
     * @example
     * // Update or create a Routine
     * const routine = await prisma.routine.upsert({
     *   create: {
     *     // ... data to create a Routine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Routine we want to update
     *   }
     * })
     */
    upsert<T extends RoutineUpsertArgs>(args: SelectSubset<T, RoutineUpsertArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineCountArgs} args - Arguments to filter Routines to count.
     * @example
     * // Count the number of Routines
     * const count = await prisma.routine.count({
     *   where: {
     *     // ... the filter for the Routines we want to count
     *   }
     * })
    **/
    count<T extends RoutineCountArgs>(
      args?: Subset<T, RoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineAggregateArgs>(args: Subset<T, RoutineAggregateArgs>): Prisma.PrismaPromise<GetRoutineAggregateType<T>>

    /**
     * Group by Routine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineGroupByArgs} args - Group by arguments.
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
      T extends RoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineGroupByArgs['orderBy'] }
        : { orderBy?: RoutineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Routine model
   */
  readonly fields: RoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Routine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workouts<T extends Routine$workoutsArgs<ExtArgs> = {}>(args?: Subset<T, Routine$workoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineWorkoutPivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RoutineExercisePivot<T extends Routine$RoutineExercisePivotArgs<ExtArgs> = {}>(args?: Subset<T, Routine$RoutineExercisePivotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Routine model
   */
  interface RoutineFieldRefs {
    readonly id: FieldRef<"Routine", 'Int'>
    readonly name: FieldRef<"Routine", 'String'>
    readonly description: FieldRef<"Routine", 'String'>
    readonly userId: FieldRef<"Routine", 'Int'>
    readonly createdAt: FieldRef<"Routine", 'DateTime'>
    readonly updatedAt: FieldRef<"Routine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Routine findUnique
   */
  export type RoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findUniqueOrThrow
   */
  export type RoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine findFirst
   */
  export type RoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findFirstOrThrow
   */
  export type RoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routine to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routines.
     */
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine findMany
   */
  export type RoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter, which Routines to fetch.
     */
    where?: RoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routines to fetch.
     */
    orderBy?: RoutineOrderByWithRelationInput | RoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routines.
     */
    cursor?: RoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routines.
     */
    skip?: number
    distinct?: RoutineScalarFieldEnum | RoutineScalarFieldEnum[]
  }

  /**
   * Routine create
   */
  export type RoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to create a Routine.
     */
    data: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
  }

  /**
   * Routine createMany
   */
  export type RoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routines.
     */
    data: RoutineCreateManyInput | RoutineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Routine update
   */
  export type RoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The data needed to update a Routine.
     */
    data: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
    /**
     * Choose, which Routine to update.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine updateMany
   */
  export type RoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routines.
     */
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyInput>
    /**
     * Filter which Routines to update
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to update.
     */
    limit?: number
  }

  /**
   * Routine upsert
   */
  export type RoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * The filter to search for the Routine to update in case it exists.
     */
    where: RoutineWhereUniqueInput
    /**
     * In case the Routine found by the `where` argument doesn't exist, create a new Routine with this data.
     */
    create: XOR<RoutineCreateInput, RoutineUncheckedCreateInput>
    /**
     * In case the Routine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineUpdateInput, RoutineUncheckedUpdateInput>
  }

  /**
   * Routine delete
   */
  export type RoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
    /**
     * Filter which Routine to delete.
     */
    where: RoutineWhereUniqueInput
  }

  /**
   * Routine deleteMany
   */
  export type RoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routines to delete
     */
    where?: RoutineWhereInput
    /**
     * Limit how many Routines to delete.
     */
    limit?: number
  }

  /**
   * Routine.workouts
   */
  export type Routine$workoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
    where?: RoutineWorkoutPivotWhereInput
    orderBy?: RoutineWorkoutPivotOrderByWithRelationInput | RoutineWorkoutPivotOrderByWithRelationInput[]
    cursor?: RoutineWorkoutPivotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineWorkoutPivotScalarFieldEnum | RoutineWorkoutPivotScalarFieldEnum[]
  }

  /**
   * Routine.RoutineExercisePivot
   */
  export type Routine$RoutineExercisePivotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
    where?: RoutineExercisePivotWhereInput
    orderBy?: RoutineExercisePivotOrderByWithRelationInput | RoutineExercisePivotOrderByWithRelationInput[]
    cursor?: RoutineExercisePivotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineExercisePivotScalarFieldEnum | RoutineExercisePivotScalarFieldEnum[]
  }

  /**
   * Routine without action
   */
  export type RoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Routine
     */
    select?: RoutineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Routine
     */
    omit?: RoutineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    duration: number | null
    intensity: number | null
    volumn: number | null
    set: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    id: number | null
    userId: number | null
    duration: number | null
    intensity: number | null
    volumn: number | null
    set: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    duration: number | null
    intensity: number | null
    volumn: number | null
    set: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    duration: number | null
    intensity: number | null
    volumn: number | null
    set: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    intensity?: true
    volumn?: true
    set?: true
  }

  export type WorkoutSumAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    intensity?: true
    volumn?: true
    set?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    duration?: true
    intensity?: true
    volumn?: true
    set?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    duration?: true
    intensity?: true
    volumn?: true
    set?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    duration?: true
    intensity?: true
    volumn?: true
    set?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: number
    userId: number
    name: string
    description: string
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt: Date
    updatedAt: Date
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    intensity?: boolean
    volumn?: boolean
    set?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    RoutineWorkoutPivot?: boolean | Workout$RoutineWorkoutPivotArgs<ExtArgs>
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>



  export type WorkoutSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    intensity?: boolean
    volumn?: boolean
    set?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "duration" | "intensity" | "volumn" | "set" | "createdAt" | "updatedAt", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    RoutineWorkoutPivot?: boolean | Workout$RoutineWorkoutPivotArgs<ExtArgs>
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      RoutineWorkoutPivot: Prisma.$RoutineWorkoutPivotPayload<ExtArgs>[]
      exercises: Prisma.$WorkoutExercisePivotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      description: string
      duration: number
      intensity: number
      volumn: number
      set: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
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
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    RoutineWorkoutPivot<T extends Workout$RoutineWorkoutPivotArgs<ExtArgs> = {}>(args?: Subset<T, Workout$RoutineWorkoutPivotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineWorkoutPivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exercises<T extends Workout$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, Workout$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'Int'>
    readonly userId: FieldRef<"Workout", 'Int'>
    readonly name: FieldRef<"Workout", 'String'>
    readonly description: FieldRef<"Workout", 'String'>
    readonly duration: FieldRef<"Workout", 'Int'>
    readonly intensity: FieldRef<"Workout", 'Int'>
    readonly volumn: FieldRef<"Workout", 'Int'>
    readonly set: FieldRef<"Workout", 'Int'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
    readonly updatedAt: FieldRef<"Workout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout.RoutineWorkoutPivot
   */
  export type Workout$RoutineWorkoutPivotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
    where?: RoutineWorkoutPivotWhereInput
    orderBy?: RoutineWorkoutPivotOrderByWithRelationInput | RoutineWorkoutPivotOrderByWithRelationInput[]
    cursor?: RoutineWorkoutPivotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineWorkoutPivotScalarFieldEnum | RoutineWorkoutPivotScalarFieldEnum[]
  }

  /**
   * Workout.exercises
   */
  export type Workout$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
    where?: WorkoutExercisePivotWhereInput
    orderBy?: WorkoutExercisePivotOrderByWithRelationInput | WorkoutExercisePivotOrderByWithRelationInput[]
    cursor?: WorkoutExercisePivotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExercisePivotScalarFieldEnum | WorkoutExercisePivotScalarFieldEnum[]
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model UserSports
   */

  export type AggregateUserSports = {
    _count: UserSportsCountAggregateOutputType | null
    _avg: UserSportsAvgAggregateOutputType | null
    _sum: UserSportsSumAggregateOutputType | null
    _min: UserSportsMinAggregateOutputType | null
    _max: UserSportsMaxAggregateOutputType | null
  }

  export type UserSportsAvgAggregateOutputType = {
    id: number | null
    sportId: number | null
  }

  export type UserSportsSumAggregateOutputType = {
    id: number | null
    sportId: number | null
  }

  export type UserSportsMinAggregateOutputType = {
    id: number | null
    sportId: number | null
    sport_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSportsMaxAggregateOutputType = {
    id: number | null
    sportId: number | null
    sport_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSportsCountAggregateOutputType = {
    id: number
    sportId: number
    sport_name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSportsAvgAggregateInputType = {
    id?: true
    sportId?: true
  }

  export type UserSportsSumAggregateInputType = {
    id?: true
    sportId?: true
  }

  export type UserSportsMinAggregateInputType = {
    id?: true
    sportId?: true
    sport_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSportsMaxAggregateInputType = {
    id?: true
    sportId?: true
    sport_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSportsCountAggregateInputType = {
    id?: true
    sportId?: true
    sport_name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSports to aggregate.
     */
    where?: UserSportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportsOrderByWithRelationInput | UserSportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSports
    **/
    _count?: true | UserSportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSportsMaxAggregateInputType
  }

  export type GetUserSportsAggregateType<T extends UserSportsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSports[P]>
      : GetScalarType<T[P], AggregateUserSports[P]>
  }




  export type UserSportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportsWhereInput
    orderBy?: UserSportsOrderByWithAggregationInput | UserSportsOrderByWithAggregationInput[]
    by: UserSportsScalarFieldEnum[] | UserSportsScalarFieldEnum
    having?: UserSportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSportsCountAggregateInputType | true
    _avg?: UserSportsAvgAggregateInputType
    _sum?: UserSportsSumAggregateInputType
    _min?: UserSportsMinAggregateInputType
    _max?: UserSportsMaxAggregateInputType
  }

  export type UserSportsGroupByOutputType = {
    id: number
    sportId: number
    sport_name: string
    createdAt: Date
    updatedAt: Date
    _count: UserSportsCountAggregateOutputType | null
    _avg: UserSportsAvgAggregateOutputType | null
    _sum: UserSportsSumAggregateOutputType | null
    _min: UserSportsMinAggregateOutputType | null
    _max: UserSportsMaxAggregateOutputType | null
  }

  type GetUserSportsGroupByPayload<T extends UserSportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSportsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSportsGroupByOutputType[P]>
        }
      >
    >


  export type UserSportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sportId?: boolean
    sport_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UserSports$usersArgs<ExtArgs>
    _count?: boolean | UserSportsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSports"]>



  export type UserSportsSelectScalar = {
    id?: boolean
    sportId?: boolean
    sport_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sportId" | "sport_name" | "createdAt" | "updatedAt", ExtArgs["result"]["userSports"]>
  export type UserSportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserSports$usersArgs<ExtArgs>
    _count?: boolean | UserSportsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserSportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSports"
    objects: {
      users: Prisma.$UserSportPivotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sportId: number
      sport_name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSports"]>
    composites: {}
  }

  type UserSportsGetPayload<S extends boolean | null | undefined | UserSportsDefaultArgs> = $Result.GetResult<Prisma.$UserSportsPayload, S>

  type UserSportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSportsCountAggregateInputType | true
    }

  export interface UserSportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSports'], meta: { name: 'UserSports' } }
    /**
     * Find zero or one UserSports that matches the filter.
     * @param {UserSportsFindUniqueArgs} args - Arguments to find a UserSports
     * @example
     * // Get one UserSports
     * const userSports = await prisma.userSports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSportsFindUniqueArgs>(args: SelectSubset<T, UserSportsFindUniqueArgs<ExtArgs>>): Prisma__UserSportsClient<$Result.GetResult<Prisma.$UserSportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSportsFindUniqueOrThrowArgs} args - Arguments to find a UserSports
     * @example
     * // Get one UserSports
     * const userSports = await prisma.userSports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSportsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSportsClient<$Result.GetResult<Prisma.$UserSportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportsFindFirstArgs} args - Arguments to find a UserSports
     * @example
     * // Get one UserSports
     * const userSports = await prisma.userSports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSportsFindFirstArgs>(args?: SelectSubset<T, UserSportsFindFirstArgs<ExtArgs>>): Prisma__UserSportsClient<$Result.GetResult<Prisma.$UserSportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportsFindFirstOrThrowArgs} args - Arguments to find a UserSports
     * @example
     * // Get one UserSports
     * const userSports = await prisma.userSports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSportsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSportsClient<$Result.GetResult<Prisma.$UserSportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSports
     * const userSports = await prisma.userSports.findMany()
     * 
     * // Get first 10 UserSports
     * const userSports = await prisma.userSports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSportsWithIdOnly = await prisma.userSports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSportsFindManyArgs>(args?: SelectSubset<T, UserSportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSports.
     * @param {UserSportsCreateArgs} args - Arguments to create a UserSports.
     * @example
     * // Create one UserSports
     * const UserSports = await prisma.userSports.create({
     *   data: {
     *     // ... data to create a UserSports
     *   }
     * })
     * 
     */
    create<T extends UserSportsCreateArgs>(args: SelectSubset<T, UserSportsCreateArgs<ExtArgs>>): Prisma__UserSportsClient<$Result.GetResult<Prisma.$UserSportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSports.
     * @param {UserSportsCreateManyArgs} args - Arguments to create many UserSports.
     * @example
     * // Create many UserSports
     * const userSports = await prisma.userSports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSportsCreateManyArgs>(args?: SelectSubset<T, UserSportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSports.
     * @param {UserSportsDeleteArgs} args - Arguments to delete one UserSports.
     * @example
     * // Delete one UserSports
     * const UserSports = await prisma.userSports.delete({
     *   where: {
     *     // ... filter to delete one UserSports
     *   }
     * })
     * 
     */
    delete<T extends UserSportsDeleteArgs>(args: SelectSubset<T, UserSportsDeleteArgs<ExtArgs>>): Prisma__UserSportsClient<$Result.GetResult<Prisma.$UserSportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSports.
     * @param {UserSportsUpdateArgs} args - Arguments to update one UserSports.
     * @example
     * // Update one UserSports
     * const userSports = await prisma.userSports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSportsUpdateArgs>(args: SelectSubset<T, UserSportsUpdateArgs<ExtArgs>>): Prisma__UserSportsClient<$Result.GetResult<Prisma.$UserSportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSports.
     * @param {UserSportsDeleteManyArgs} args - Arguments to filter UserSports to delete.
     * @example
     * // Delete a few UserSports
     * const { count } = await prisma.userSports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSportsDeleteManyArgs>(args?: SelectSubset<T, UserSportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSports
     * const userSports = await prisma.userSports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSportsUpdateManyArgs>(args: SelectSubset<T, UserSportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSports.
     * @param {UserSportsUpsertArgs} args - Arguments to update or create a UserSports.
     * @example
     * // Update or create a UserSports
     * const userSports = await prisma.userSports.upsert({
     *   create: {
     *     // ... data to create a UserSports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSports we want to update
     *   }
     * })
     */
    upsert<T extends UserSportsUpsertArgs>(args: SelectSubset<T, UserSportsUpsertArgs<ExtArgs>>): Prisma__UserSportsClient<$Result.GetResult<Prisma.$UserSportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportsCountArgs} args - Arguments to filter UserSports to count.
     * @example
     * // Count the number of UserSports
     * const count = await prisma.userSports.count({
     *   where: {
     *     // ... the filter for the UserSports we want to count
     *   }
     * })
    **/
    count<T extends UserSportsCountArgs>(
      args?: Subset<T, UserSportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSportsAggregateArgs>(args: Subset<T, UserSportsAggregateArgs>): Prisma.PrismaPromise<GetUserSportsAggregateType<T>>

    /**
     * Group by UserSports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportsGroupByArgs} args - Group by arguments.
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
      T extends UserSportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSportsGroupByArgs['orderBy'] }
        : { orderBy?: UserSportsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSports model
   */
  readonly fields: UserSportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserSports$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserSports$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserSports model
   */
  interface UserSportsFieldRefs {
    readonly id: FieldRef<"UserSports", 'Int'>
    readonly sportId: FieldRef<"UserSports", 'Int'>
    readonly sport_name: FieldRef<"UserSports", 'String'>
    readonly createdAt: FieldRef<"UserSports", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSports", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSports findUnique
   */
  export type UserSportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSports
     */
    select?: UserSportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSports
     */
    omit?: UserSportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportsInclude<ExtArgs> | null
    /**
     * Filter, which UserSports to fetch.
     */
    where: UserSportsWhereUniqueInput
  }

  /**
   * UserSports findUniqueOrThrow
   */
  export type UserSportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSports
     */
    select?: UserSportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSports
     */
    omit?: UserSportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportsInclude<ExtArgs> | null
    /**
     * Filter, which UserSports to fetch.
     */
    where: UserSportsWhereUniqueInput
  }

  /**
   * UserSports findFirst
   */
  export type UserSportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSports
     */
    select?: UserSportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSports
     */
    omit?: UserSportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportsInclude<ExtArgs> | null
    /**
     * Filter, which UserSports to fetch.
     */
    where?: UserSportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportsOrderByWithRelationInput | UserSportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSports.
     */
    cursor?: UserSportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSports.
     */
    distinct?: UserSportsScalarFieldEnum | UserSportsScalarFieldEnum[]
  }

  /**
   * UserSports findFirstOrThrow
   */
  export type UserSportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSports
     */
    select?: UserSportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSports
     */
    omit?: UserSportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportsInclude<ExtArgs> | null
    /**
     * Filter, which UserSports to fetch.
     */
    where?: UserSportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportsOrderByWithRelationInput | UserSportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSports.
     */
    cursor?: UserSportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSports.
     */
    distinct?: UserSportsScalarFieldEnum | UserSportsScalarFieldEnum[]
  }

  /**
   * UserSports findMany
   */
  export type UserSportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSports
     */
    select?: UserSportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSports
     */
    omit?: UserSportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportsInclude<ExtArgs> | null
    /**
     * Filter, which UserSports to fetch.
     */
    where?: UserSportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSports to fetch.
     */
    orderBy?: UserSportsOrderByWithRelationInput | UserSportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSports.
     */
    cursor?: UserSportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSports.
     */
    skip?: number
    distinct?: UserSportsScalarFieldEnum | UserSportsScalarFieldEnum[]
  }

  /**
   * UserSports create
   */
  export type UserSportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSports
     */
    select?: UserSportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSports
     */
    omit?: UserSportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSports.
     */
    data: XOR<UserSportsCreateInput, UserSportsUncheckedCreateInput>
  }

  /**
   * UserSports createMany
   */
  export type UserSportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSports.
     */
    data: UserSportsCreateManyInput | UserSportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSports update
   */
  export type UserSportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSports
     */
    select?: UserSportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSports
     */
    omit?: UserSportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSports.
     */
    data: XOR<UserSportsUpdateInput, UserSportsUncheckedUpdateInput>
    /**
     * Choose, which UserSports to update.
     */
    where: UserSportsWhereUniqueInput
  }

  /**
   * UserSports updateMany
   */
  export type UserSportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSports.
     */
    data: XOR<UserSportsUpdateManyMutationInput, UserSportsUncheckedUpdateManyInput>
    /**
     * Filter which UserSports to update
     */
    where?: UserSportsWhereInput
    /**
     * Limit how many UserSports to update.
     */
    limit?: number
  }

  /**
   * UserSports upsert
   */
  export type UserSportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSports
     */
    select?: UserSportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSports
     */
    omit?: UserSportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSports to update in case it exists.
     */
    where: UserSportsWhereUniqueInput
    /**
     * In case the UserSports found by the `where` argument doesn't exist, create a new UserSports with this data.
     */
    create: XOR<UserSportsCreateInput, UserSportsUncheckedCreateInput>
    /**
     * In case the UserSports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSportsUpdateInput, UserSportsUncheckedUpdateInput>
  }

  /**
   * UserSports delete
   */
  export type UserSportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSports
     */
    select?: UserSportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSports
     */
    omit?: UserSportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportsInclude<ExtArgs> | null
    /**
     * Filter which UserSports to delete.
     */
    where: UserSportsWhereUniqueInput
  }

  /**
   * UserSports deleteMany
   */
  export type UserSportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSports to delete
     */
    where?: UserSportsWhereInput
    /**
     * Limit how many UserSports to delete.
     */
    limit?: number
  }

  /**
   * UserSports.users
   */
  export type UserSports$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
    where?: UserSportPivotWhereInput
    orderBy?: UserSportPivotOrderByWithRelationInput | UserSportPivotOrderByWithRelationInput[]
    cursor?: UserSportPivotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSportPivotScalarFieldEnum | UserSportPivotScalarFieldEnum[]
  }

  /**
   * UserSports without action
   */
  export type UserSportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSports
     */
    select?: UserSportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSports
     */
    omit?: UserSportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportsInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    id: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    id: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    with_out_equipment: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    with_out_equipment: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    with_out_equipment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    id?: true
  }

  export type ExerciseSumAggregateInputType = {
    id?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    with_out_equipment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    with_out_equipment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    with_out_equipment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: number
    name: string
    description: string
    category: string
    with_out_equipment: boolean
    createdAt: Date
    updatedAt: Date
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    with_out_equipment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    WorkoutExercisePivot?: boolean | Exercise$WorkoutExercisePivotArgs<ExtArgs>
    RoutineExercisePivot?: boolean | Exercise$RoutineExercisePivotArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>



  export type ExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    with_out_equipment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExerciseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "with_out_equipment" | "createdAt" | "updatedAt", ExtArgs["result"]["exercise"]>
  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    WorkoutExercisePivot?: boolean | Exercise$WorkoutExercisePivotArgs<ExtArgs>
    RoutineExercisePivot?: boolean | Exercise$RoutineExercisePivotArgs<ExtArgs>
    _count?: boolean | ExerciseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      WorkoutExercisePivot: Prisma.$WorkoutExercisePivotPayload<ExtArgs>[]
      RoutineExercisePivot: Prisma.$RoutineExercisePivotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      category: string
      with_out_equipment: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
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
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    WorkoutExercisePivot<T extends Exercise$WorkoutExercisePivotArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$WorkoutExercisePivotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RoutineExercisePivot<T extends Exercise$RoutineExercisePivotArgs<ExtArgs> = {}>(args?: Subset<T, Exercise$RoutineExercisePivotArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exercise model
   */
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'Int'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly description: FieldRef<"Exercise", 'String'>
    readonly category: FieldRef<"Exercise", 'String'>
    readonly with_out_equipment: FieldRef<"Exercise", 'Boolean'>
    readonly createdAt: FieldRef<"Exercise", 'DateTime'>
    readonly updatedAt: FieldRef<"Exercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to update.
     */
    limit?: number
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
    /**
     * Limit how many Exercises to delete.
     */
    limit?: number
  }

  /**
   * Exercise.WorkoutExercisePivot
   */
  export type Exercise$WorkoutExercisePivotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
    where?: WorkoutExercisePivotWhereInput
    orderBy?: WorkoutExercisePivotOrderByWithRelationInput | WorkoutExercisePivotOrderByWithRelationInput[]
    cursor?: WorkoutExercisePivotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutExercisePivotScalarFieldEnum | WorkoutExercisePivotScalarFieldEnum[]
  }

  /**
   * Exercise.RoutineExercisePivot
   */
  export type Exercise$RoutineExercisePivotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
    where?: RoutineExercisePivotWhereInput
    orderBy?: RoutineExercisePivotOrderByWithRelationInput | RoutineExercisePivotOrderByWithRelationInput[]
    cursor?: RoutineExercisePivotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineExercisePivotScalarFieldEnum | RoutineExercisePivotScalarFieldEnum[]
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exercise
     */
    omit?: ExerciseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model UserBadges
   */

  export type AggregateUserBadges = {
    _count: UserBadgesCountAggregateOutputType | null
    _avg: UserBadgesAvgAggregateOutputType | null
    _sum: UserBadgesSumAggregateOutputType | null
    _min: UserBadgesMinAggregateOutputType | null
    _max: UserBadgesMaxAggregateOutputType | null
  }

  export type UserBadgesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    bardgeId: number | null
  }

  export type UserBadgesSumAggregateOutputType = {
    id: number | null
    userId: number | null
    bardgeId: number | null
  }

  export type UserBadgesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bardgeId: number | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type UserBadgesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bardgeId: number | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type UserBadgesCountAggregateOutputType = {
    id: number
    userId: number
    bardgeId: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type UserBadgesAvgAggregateInputType = {
    id?: true
    userId?: true
    bardgeId?: true
  }

  export type UserBadgesSumAggregateInputType = {
    id?: true
    userId?: true
    bardgeId?: true
  }

  export type UserBadgesMinAggregateInputType = {
    id?: true
    userId?: true
    bardgeId?: true
    createAt?: true
    updatedAt?: true
  }

  export type UserBadgesMaxAggregateInputType = {
    id?: true
    userId?: true
    bardgeId?: true
    createAt?: true
    updatedAt?: true
  }

  export type UserBadgesCountAggregateInputType = {
    id?: true
    userId?: true
    bardgeId?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserBadgesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadges to aggregate.
     */
    where?: UserBadgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgesOrderByWithRelationInput | UserBadgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBadgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBadges
    **/
    _count?: true | UserBadgesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBadgesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBadgesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBadgesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBadgesMaxAggregateInputType
  }

  export type GetUserBadgesAggregateType<T extends UserBadgesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBadges]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBadges[P]>
      : GetScalarType<T[P], AggregateUserBadges[P]>
  }




  export type UserBadgesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBadgesWhereInput
    orderBy?: UserBadgesOrderByWithAggregationInput | UserBadgesOrderByWithAggregationInput[]
    by: UserBadgesScalarFieldEnum[] | UserBadgesScalarFieldEnum
    having?: UserBadgesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBadgesCountAggregateInputType | true
    _avg?: UserBadgesAvgAggregateInputType
    _sum?: UserBadgesSumAggregateInputType
    _min?: UserBadgesMinAggregateInputType
    _max?: UserBadgesMaxAggregateInputType
  }

  export type UserBadgesGroupByOutputType = {
    id: number
    userId: number
    bardgeId: number
    createAt: Date
    updatedAt: Date
    _count: UserBadgesCountAggregateOutputType | null
    _avg: UserBadgesAvgAggregateOutputType | null
    _sum: UserBadgesSumAggregateOutputType | null
    _min: UserBadgesMinAggregateOutputType | null
    _max: UserBadgesMaxAggregateOutputType | null
  }

  type GetUserBadgesGroupByPayload<T extends UserBadgesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBadgesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBadgesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBadgesGroupByOutputType[P]>
            : GetScalarType<T[P], UserBadgesGroupByOutputType[P]>
        }
      >
    >


  export type UserBadgesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bardgeId?: boolean
    createAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userBadges"]>



  export type UserBadgesSelectScalar = {
    id?: boolean
    userId?: boolean
    bardgeId?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type UserBadgesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bardgeId" | "createAt" | "updatedAt", ExtArgs["result"]["userBadges"]>
  export type UserBadgesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    badge?: boolean | BadgesDefaultArgs<ExtArgs>
  }

  export type $UserBadgesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBadges"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      badge: Prisma.$BadgesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      bardgeId: number
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userBadges"]>
    composites: {}
  }

  type UserBadgesGetPayload<S extends boolean | null | undefined | UserBadgesDefaultArgs> = $Result.GetResult<Prisma.$UserBadgesPayload, S>

  type UserBadgesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserBadgesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserBadgesCountAggregateInputType | true
    }

  export interface UserBadgesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBadges'], meta: { name: 'UserBadges' } }
    /**
     * Find zero or one UserBadges that matches the filter.
     * @param {UserBadgesFindUniqueArgs} args - Arguments to find a UserBadges
     * @example
     * // Get one UserBadges
     * const userBadges = await prisma.userBadges.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBadgesFindUniqueArgs>(args: SelectSubset<T, UserBadgesFindUniqueArgs<ExtArgs>>): Prisma__UserBadgesClient<$Result.GetResult<Prisma.$UserBadgesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserBadges that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserBadgesFindUniqueOrThrowArgs} args - Arguments to find a UserBadges
     * @example
     * // Get one UserBadges
     * const userBadges = await prisma.userBadges.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBadgesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBadgesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBadgesClient<$Result.GetResult<Prisma.$UserBadgesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgesFindFirstArgs} args - Arguments to find a UserBadges
     * @example
     * // Get one UserBadges
     * const userBadges = await prisma.userBadges.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBadgesFindFirstArgs>(args?: SelectSubset<T, UserBadgesFindFirstArgs<ExtArgs>>): Prisma__UserBadgesClient<$Result.GetResult<Prisma.$UserBadgesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserBadges that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgesFindFirstOrThrowArgs} args - Arguments to find a UserBadges
     * @example
     * // Get one UserBadges
     * const userBadges = await prisma.userBadges.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBadgesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBadgesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBadgesClient<$Result.GetResult<Prisma.$UserBadgesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserBadges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBadges
     * const userBadges = await prisma.userBadges.findMany()
     * 
     * // Get first 10 UserBadges
     * const userBadges = await prisma.userBadges.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userBadgesWithIdOnly = await prisma.userBadges.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserBadgesFindManyArgs>(args?: SelectSubset<T, UserBadgesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserBadges.
     * @param {UserBadgesCreateArgs} args - Arguments to create a UserBadges.
     * @example
     * // Create one UserBadges
     * const UserBadges = await prisma.userBadges.create({
     *   data: {
     *     // ... data to create a UserBadges
     *   }
     * })
     * 
     */
    create<T extends UserBadgesCreateArgs>(args: SelectSubset<T, UserBadgesCreateArgs<ExtArgs>>): Prisma__UserBadgesClient<$Result.GetResult<Prisma.$UserBadgesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserBadges.
     * @param {UserBadgesCreateManyArgs} args - Arguments to create many UserBadges.
     * @example
     * // Create many UserBadges
     * const userBadges = await prisma.userBadges.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBadgesCreateManyArgs>(args?: SelectSubset<T, UserBadgesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserBadges.
     * @param {UserBadgesDeleteArgs} args - Arguments to delete one UserBadges.
     * @example
     * // Delete one UserBadges
     * const UserBadges = await prisma.userBadges.delete({
     *   where: {
     *     // ... filter to delete one UserBadges
     *   }
     * })
     * 
     */
    delete<T extends UserBadgesDeleteArgs>(args: SelectSubset<T, UserBadgesDeleteArgs<ExtArgs>>): Prisma__UserBadgesClient<$Result.GetResult<Prisma.$UserBadgesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserBadges.
     * @param {UserBadgesUpdateArgs} args - Arguments to update one UserBadges.
     * @example
     * // Update one UserBadges
     * const userBadges = await prisma.userBadges.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBadgesUpdateArgs>(args: SelectSubset<T, UserBadgesUpdateArgs<ExtArgs>>): Prisma__UserBadgesClient<$Result.GetResult<Prisma.$UserBadgesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserBadges.
     * @param {UserBadgesDeleteManyArgs} args - Arguments to filter UserBadges to delete.
     * @example
     * // Delete a few UserBadges
     * const { count } = await prisma.userBadges.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBadgesDeleteManyArgs>(args?: SelectSubset<T, UserBadgesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBadges
     * const userBadges = await prisma.userBadges.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBadgesUpdateManyArgs>(args: SelectSubset<T, UserBadgesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBadges.
     * @param {UserBadgesUpsertArgs} args - Arguments to update or create a UserBadges.
     * @example
     * // Update or create a UserBadges
     * const userBadges = await prisma.userBadges.upsert({
     *   create: {
     *     // ... data to create a UserBadges
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBadges we want to update
     *   }
     * })
     */
    upsert<T extends UserBadgesUpsertArgs>(args: SelectSubset<T, UserBadgesUpsertArgs<ExtArgs>>): Prisma__UserBadgesClient<$Result.GetResult<Prisma.$UserBadgesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgesCountArgs} args - Arguments to filter UserBadges to count.
     * @example
     * // Count the number of UserBadges
     * const count = await prisma.userBadges.count({
     *   where: {
     *     // ... the filter for the UserBadges we want to count
     *   }
     * })
    **/
    count<T extends UserBadgesCountArgs>(
      args?: Subset<T, UserBadgesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBadgesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBadgesAggregateArgs>(args: Subset<T, UserBadgesAggregateArgs>): Prisma.PrismaPromise<GetUserBadgesAggregateType<T>>

    /**
     * Group by UserBadges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBadgesGroupByArgs} args - Group by arguments.
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
      T extends UserBadgesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBadgesGroupByArgs['orderBy'] }
        : { orderBy?: UserBadgesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBadgesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBadgesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBadges model
   */
  readonly fields: UserBadgesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBadges.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBadgesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    badge<T extends BadgesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BadgesDefaultArgs<ExtArgs>>): Prisma__BadgesClient<$Result.GetResult<Prisma.$BadgesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserBadges model
   */
  interface UserBadgesFieldRefs {
    readonly id: FieldRef<"UserBadges", 'Int'>
    readonly userId: FieldRef<"UserBadges", 'Int'>
    readonly bardgeId: FieldRef<"UserBadges", 'Int'>
    readonly createAt: FieldRef<"UserBadges", 'DateTime'>
    readonly updatedAt: FieldRef<"UserBadges", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserBadges findUnique
   */
  export type UserBadgesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where: UserBadgesWhereUniqueInput
  }

  /**
   * UserBadges findUniqueOrThrow
   */
  export type UserBadgesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where: UserBadgesWhereUniqueInput
  }

  /**
   * UserBadges findFirst
   */
  export type UserBadgesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where?: UserBadgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgesOrderByWithRelationInput | UserBadgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgesScalarFieldEnum | UserBadgesScalarFieldEnum[]
  }

  /**
   * UserBadges findFirstOrThrow
   */
  export type UserBadgesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where?: UserBadgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgesOrderByWithRelationInput | UserBadgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBadges.
     */
    cursor?: UserBadgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBadges.
     */
    distinct?: UserBadgesScalarFieldEnum | UserBadgesScalarFieldEnum[]
  }

  /**
   * UserBadges findMany
   */
  export type UserBadgesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
    /**
     * Filter, which UserBadges to fetch.
     */
    where?: UserBadgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBadges to fetch.
     */
    orderBy?: UserBadgesOrderByWithRelationInput | UserBadgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBadges.
     */
    cursor?: UserBadgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBadges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBadges.
     */
    skip?: number
    distinct?: UserBadgesScalarFieldEnum | UserBadgesScalarFieldEnum[]
  }

  /**
   * UserBadges create
   */
  export type UserBadgesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserBadges.
     */
    data: XOR<UserBadgesCreateInput, UserBadgesUncheckedCreateInput>
  }

  /**
   * UserBadges createMany
   */
  export type UserBadgesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBadges.
     */
    data: UserBadgesCreateManyInput | UserBadgesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBadges update
   */
  export type UserBadgesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserBadges.
     */
    data: XOR<UserBadgesUpdateInput, UserBadgesUncheckedUpdateInput>
    /**
     * Choose, which UserBadges to update.
     */
    where: UserBadgesWhereUniqueInput
  }

  /**
   * UserBadges updateMany
   */
  export type UserBadgesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBadges.
     */
    data: XOR<UserBadgesUpdateManyMutationInput, UserBadgesUncheckedUpdateManyInput>
    /**
     * Filter which UserBadges to update
     */
    where?: UserBadgesWhereInput
    /**
     * Limit how many UserBadges to update.
     */
    limit?: number
  }

  /**
   * UserBadges upsert
   */
  export type UserBadgesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserBadges to update in case it exists.
     */
    where: UserBadgesWhereUniqueInput
    /**
     * In case the UserBadges found by the `where` argument doesn't exist, create a new UserBadges with this data.
     */
    create: XOR<UserBadgesCreateInput, UserBadgesUncheckedCreateInput>
    /**
     * In case the UserBadges was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBadgesUpdateInput, UserBadgesUncheckedUpdateInput>
  }

  /**
   * UserBadges delete
   */
  export type UserBadgesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
    /**
     * Filter which UserBadges to delete.
     */
    where: UserBadgesWhereUniqueInput
  }

  /**
   * UserBadges deleteMany
   */
  export type UserBadgesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBadges to delete
     */
    where?: UserBadgesWhereInput
    /**
     * Limit how many UserBadges to delete.
     */
    limit?: number
  }

  /**
   * UserBadges without action
   */
  export type UserBadgesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
  }


  /**
   * Model Badges
   */

  export type AggregateBadges = {
    _count: BadgesCountAggregateOutputType | null
    _avg: BadgesAvgAggregateOutputType | null
    _sum: BadgesSumAggregateOutputType | null
    _min: BadgesMinAggregateOutputType | null
    _max: BadgesMaxAggregateOutputType | null
  }

  export type BadgesAvgAggregateOutputType = {
    badgeId: number | null
    requirement_value: number | null
  }

  export type BadgesSumAggregateOutputType = {
    badgeId: number | null
    requirement_value: number | null
  }

  export type BadgesMinAggregateOutputType = {
    badgeId: number | null
    name: string | null
    description: string | null
    requirement_type: string | null
    requirement_value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BadgesMaxAggregateOutputType = {
    badgeId: number | null
    name: string | null
    description: string | null
    requirement_type: string | null
    requirement_value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BadgesCountAggregateOutputType = {
    badgeId: number
    name: number
    description: number
    requirement_type: number
    requirement_value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BadgesAvgAggregateInputType = {
    badgeId?: true
    requirement_value?: true
  }

  export type BadgesSumAggregateInputType = {
    badgeId?: true
    requirement_value?: true
  }

  export type BadgesMinAggregateInputType = {
    badgeId?: true
    name?: true
    description?: true
    requirement_type?: true
    requirement_value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BadgesMaxAggregateInputType = {
    badgeId?: true
    name?: true
    description?: true
    requirement_type?: true
    requirement_value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BadgesCountAggregateInputType = {
    badgeId?: true
    name?: true
    description?: true
    requirement_type?: true
    requirement_value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BadgesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to aggregate.
     */
    where?: BadgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgesOrderByWithRelationInput | BadgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgesMaxAggregateInputType
  }

  export type GetBadgesAggregateType<T extends BadgesAggregateArgs> = {
        [P in keyof T & keyof AggregateBadges]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadges[P]>
      : GetScalarType<T[P], AggregateBadges[P]>
  }




  export type BadgesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgesWhereInput
    orderBy?: BadgesOrderByWithAggregationInput | BadgesOrderByWithAggregationInput[]
    by: BadgesScalarFieldEnum[] | BadgesScalarFieldEnum
    having?: BadgesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgesCountAggregateInputType | true
    _avg?: BadgesAvgAggregateInputType
    _sum?: BadgesSumAggregateInputType
    _min?: BadgesMinAggregateInputType
    _max?: BadgesMaxAggregateInputType
  }

  export type BadgesGroupByOutputType = {
    badgeId: number
    name: string
    description: string
    requirement_type: string
    requirement_value: number
    createdAt: Date
    updatedAt: Date
    _count: BadgesCountAggregateOutputType | null
    _avg: BadgesAvgAggregateOutputType | null
    _sum: BadgesSumAggregateOutputType | null
    _min: BadgesMinAggregateOutputType | null
    _max: BadgesMaxAggregateOutputType | null
  }

  type GetBadgesGroupByPayload<T extends BadgesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgesGroupByOutputType[P]>
            : GetScalarType<T[P], BadgesGroupByOutputType[P]>
        }
      >
    >


  export type BadgesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    badgeId?: boolean
    name?: boolean
    description?: boolean
    requirement_type?: boolean
    requirement_value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userBadges?: boolean | Badges$userBadgesArgs<ExtArgs>
    _count?: boolean | BadgesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badges"]>



  export type BadgesSelectScalar = {
    badgeId?: boolean
    name?: boolean
    description?: boolean
    requirement_type?: boolean
    requirement_value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BadgesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"badgeId" | "name" | "description" | "requirement_type" | "requirement_value" | "createdAt" | "updatedAt", ExtArgs["result"]["badges"]>
  export type BadgesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userBadges?: boolean | Badges$userBadgesArgs<ExtArgs>
    _count?: boolean | BadgesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BadgesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badges"
    objects: {
      userBadges: Prisma.$UserBadgesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      badgeId: number
      name: string
      description: string
      requirement_type: string
      requirement_value: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["badges"]>
    composites: {}
  }

  type BadgesGetPayload<S extends boolean | null | undefined | BadgesDefaultArgs> = $Result.GetResult<Prisma.$BadgesPayload, S>

  type BadgesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgesCountAggregateInputType | true
    }

  export interface BadgesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badges'], meta: { name: 'Badges' } }
    /**
     * Find zero or one Badges that matches the filter.
     * @param {BadgesFindUniqueArgs} args - Arguments to find a Badges
     * @example
     * // Get one Badges
     * const badges = await prisma.badges.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgesFindUniqueArgs>(args: SelectSubset<T, BadgesFindUniqueArgs<ExtArgs>>): Prisma__BadgesClient<$Result.GetResult<Prisma.$BadgesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badges that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgesFindUniqueOrThrowArgs} args - Arguments to find a Badges
     * @example
     * // Get one Badges
     * const badges = await prisma.badges.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgesFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgesClient<$Result.GetResult<Prisma.$BadgesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesFindFirstArgs} args - Arguments to find a Badges
     * @example
     * // Get one Badges
     * const badges = await prisma.badges.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgesFindFirstArgs>(args?: SelectSubset<T, BadgesFindFirstArgs<ExtArgs>>): Prisma__BadgesClient<$Result.GetResult<Prisma.$BadgesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badges that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesFindFirstOrThrowArgs} args - Arguments to find a Badges
     * @example
     * // Get one Badges
     * const badges = await prisma.badges.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgesFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgesFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgesClient<$Result.GetResult<Prisma.$BadgesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badges.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badges.findMany({ take: 10 })
     * 
     * // Only select the `badgeId`
     * const badgesWithBadgeIdOnly = await prisma.badges.findMany({ select: { badgeId: true } })
     * 
     */
    findMany<T extends BadgesFindManyArgs>(args?: SelectSubset<T, BadgesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badges.
     * @param {BadgesCreateArgs} args - Arguments to create a Badges.
     * @example
     * // Create one Badges
     * const Badges = await prisma.badges.create({
     *   data: {
     *     // ... data to create a Badges
     *   }
     * })
     * 
     */
    create<T extends BadgesCreateArgs>(args: SelectSubset<T, BadgesCreateArgs<ExtArgs>>): Prisma__BadgesClient<$Result.GetResult<Prisma.$BadgesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {BadgesCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badges = await prisma.badges.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgesCreateManyArgs>(args?: SelectSubset<T, BadgesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Badges.
     * @param {BadgesDeleteArgs} args - Arguments to delete one Badges.
     * @example
     * // Delete one Badges
     * const Badges = await prisma.badges.delete({
     *   where: {
     *     // ... filter to delete one Badges
     *   }
     * })
     * 
     */
    delete<T extends BadgesDeleteArgs>(args: SelectSubset<T, BadgesDeleteArgs<ExtArgs>>): Prisma__BadgesClient<$Result.GetResult<Prisma.$BadgesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badges.
     * @param {BadgesUpdateArgs} args - Arguments to update one Badges.
     * @example
     * // Update one Badges
     * const badges = await prisma.badges.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgesUpdateArgs>(args: SelectSubset<T, BadgesUpdateArgs<ExtArgs>>): Prisma__BadgesClient<$Result.GetResult<Prisma.$BadgesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {BadgesDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badges.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgesDeleteManyArgs>(args?: SelectSubset<T, BadgesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badges = await prisma.badges.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgesUpdateManyArgs>(args: SelectSubset<T, BadgesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Badges.
     * @param {BadgesUpsertArgs} args - Arguments to update or create a Badges.
     * @example
     * // Update or create a Badges
     * const badges = await prisma.badges.upsert({
     *   create: {
     *     // ... data to create a Badges
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badges we want to update
     *   }
     * })
     */
    upsert<T extends BadgesUpsertArgs>(args: SelectSubset<T, BadgesUpsertArgs<ExtArgs>>): Prisma__BadgesClient<$Result.GetResult<Prisma.$BadgesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badges.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgesCountArgs>(
      args?: Subset<T, BadgesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadgesAggregateArgs>(args: Subset<T, BadgesAggregateArgs>): Prisma.PrismaPromise<GetBadgesAggregateType<T>>

    /**
     * Group by Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgesGroupByArgs} args - Group by arguments.
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
      T extends BadgesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgesGroupByArgs['orderBy'] }
        : { orderBy?: BadgesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BadgesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badges model
   */
  readonly fields: BadgesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badges.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userBadges<T extends Badges$userBadgesArgs<ExtArgs> = {}>(args?: Subset<T, Badges$userBadgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBadgesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Badges model
   */
  interface BadgesFieldRefs {
    readonly badgeId: FieldRef<"Badges", 'Int'>
    readonly name: FieldRef<"Badges", 'String'>
    readonly description: FieldRef<"Badges", 'String'>
    readonly requirement_type: FieldRef<"Badges", 'String'>
    readonly requirement_value: FieldRef<"Badges", 'Int'>
    readonly createdAt: FieldRef<"Badges", 'DateTime'>
    readonly updatedAt: FieldRef<"Badges", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Badges findUnique
   */
  export type BadgesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badges
     */
    select?: BadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badges
     */
    omit?: BadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgesInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where: BadgesWhereUniqueInput
  }

  /**
   * Badges findUniqueOrThrow
   */
  export type BadgesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badges
     */
    select?: BadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badges
     */
    omit?: BadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgesInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where: BadgesWhereUniqueInput
  }

  /**
   * Badges findFirst
   */
  export type BadgesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badges
     */
    select?: BadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badges
     */
    omit?: BadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgesInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgesOrderByWithRelationInput | BadgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgesScalarFieldEnum | BadgesScalarFieldEnum[]
  }

  /**
   * Badges findFirstOrThrow
   */
  export type BadgesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badges
     */
    select?: BadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badges
     */
    omit?: BadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgesInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgesOrderByWithRelationInput | BadgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgesScalarFieldEnum | BadgesScalarFieldEnum[]
  }

  /**
   * Badges findMany
   */
  export type BadgesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badges
     */
    select?: BadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badges
     */
    omit?: BadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgesInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgesOrderByWithRelationInput | BadgesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgesScalarFieldEnum | BadgesScalarFieldEnum[]
  }

  /**
   * Badges create
   */
  export type BadgesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badges
     */
    select?: BadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badges
     */
    omit?: BadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgesInclude<ExtArgs> | null
    /**
     * The data needed to create a Badges.
     */
    data: XOR<BadgesCreateInput, BadgesUncheckedCreateInput>
  }

  /**
   * Badges createMany
   */
  export type BadgesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgesCreateManyInput | BadgesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badges update
   */
  export type BadgesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badges
     */
    select?: BadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badges
     */
    omit?: BadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgesInclude<ExtArgs> | null
    /**
     * The data needed to update a Badges.
     */
    data: XOR<BadgesUpdateInput, BadgesUncheckedUpdateInput>
    /**
     * Choose, which Badges to update.
     */
    where: BadgesWhereUniqueInput
  }

  /**
   * Badges updateMany
   */
  export type BadgesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgesUpdateManyMutationInput, BadgesUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgesWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badges upsert
   */
  export type BadgesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badges
     */
    select?: BadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badges
     */
    omit?: BadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgesInclude<ExtArgs> | null
    /**
     * The filter to search for the Badges to update in case it exists.
     */
    where: BadgesWhereUniqueInput
    /**
     * In case the Badges found by the `where` argument doesn't exist, create a new Badges with this data.
     */
    create: XOR<BadgesCreateInput, BadgesUncheckedCreateInput>
    /**
     * In case the Badges was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgesUpdateInput, BadgesUncheckedUpdateInput>
  }

  /**
   * Badges delete
   */
  export type BadgesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badges
     */
    select?: BadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badges
     */
    omit?: BadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgesInclude<ExtArgs> | null
    /**
     * Filter which Badges to delete.
     */
    where: BadgesWhereUniqueInput
  }

  /**
   * Badges deleteMany
   */
  export type BadgesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgesWhereInput
    /**
     * Limit how many Badges to delete.
     */
    limit?: number
  }

  /**
   * Badges.userBadges
   */
  export type Badges$userBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBadges
     */
    select?: UserBadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserBadges
     */
    omit?: UserBadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserBadgesInclude<ExtArgs> | null
    where?: UserBadgesWhereInput
    orderBy?: UserBadgesOrderByWithRelationInput | UserBadgesOrderByWithRelationInput[]
    cursor?: UserBadgesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserBadgesScalarFieldEnum | UserBadgesScalarFieldEnum[]
  }

  /**
   * Badges without action
   */
  export type BadgesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badges
     */
    select?: BadgesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badges
     */
    omit?: BadgesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgesInclude<ExtArgs> | null
  }


  /**
   * Model UserSportPivot
   */

  export type AggregateUserSportPivot = {
    _count: UserSportPivotCountAggregateOutputType | null
    _avg: UserSportPivotAvgAggregateOutputType | null
    _sum: UserSportPivotSumAggregateOutputType | null
    _min: UserSportPivotMinAggregateOutputType | null
    _max: UserSportPivotMaxAggregateOutputType | null
  }

  export type UserSportPivotAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
  }

  export type UserSportPivotSumAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
  }

  export type UserSportPivotMinAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSportPivotMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    sportId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSportPivotCountAggregateOutputType = {
    id: number
    userId: number
    sportId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSportPivotAvgAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
  }

  export type UserSportPivotSumAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
  }

  export type UserSportPivotMinAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSportPivotMaxAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSportPivotCountAggregateInputType = {
    id?: true
    userId?: true
    sportId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSportPivotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSportPivot to aggregate.
     */
    where?: UserSportPivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSportPivots to fetch.
     */
    orderBy?: UserSportPivotOrderByWithRelationInput | UserSportPivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSportPivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSportPivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSportPivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSportPivots
    **/
    _count?: true | UserSportPivotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSportPivotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSportPivotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSportPivotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSportPivotMaxAggregateInputType
  }

  export type GetUserSportPivotAggregateType<T extends UserSportPivotAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSportPivot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSportPivot[P]>
      : GetScalarType<T[P], AggregateUserSportPivot[P]>
  }




  export type UserSportPivotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSportPivotWhereInput
    orderBy?: UserSportPivotOrderByWithAggregationInput | UserSportPivotOrderByWithAggregationInput[]
    by: UserSportPivotScalarFieldEnum[] | UserSportPivotScalarFieldEnum
    having?: UserSportPivotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSportPivotCountAggregateInputType | true
    _avg?: UserSportPivotAvgAggregateInputType
    _sum?: UserSportPivotSumAggregateInputType
    _min?: UserSportPivotMinAggregateInputType
    _max?: UserSportPivotMaxAggregateInputType
  }

  export type UserSportPivotGroupByOutputType = {
    id: number
    userId: number
    sportId: number
    createdAt: Date
    updatedAt: Date
    _count: UserSportPivotCountAggregateOutputType | null
    _avg: UserSportPivotAvgAggregateOutputType | null
    _sum: UserSportPivotSumAggregateOutputType | null
    _min: UserSportPivotMinAggregateOutputType | null
    _max: UserSportPivotMaxAggregateOutputType | null
  }

  type GetUserSportPivotGroupByPayload<T extends UserSportPivotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSportPivotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSportPivotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSportPivotGroupByOutputType[P]>
            : GetScalarType<T[P], UserSportPivotGroupByOutputType[P]>
        }
      >
    >


  export type UserSportPivotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sportId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | UserSportsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSportPivot"]>



  export type UserSportPivotSelectScalar = {
    id?: boolean
    userId?: boolean
    sportId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSportPivotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sportId" | "createdAt" | "updatedAt", ExtArgs["result"]["userSportPivot"]>
  export type UserSportPivotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sport?: boolean | UserSportsDefaultArgs<ExtArgs>
  }

  export type $UserSportPivotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSportPivot"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sport: Prisma.$UserSportsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      sportId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSportPivot"]>
    composites: {}
  }

  type UserSportPivotGetPayload<S extends boolean | null | undefined | UserSportPivotDefaultArgs> = $Result.GetResult<Prisma.$UserSportPivotPayload, S>

  type UserSportPivotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSportPivotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSportPivotCountAggregateInputType | true
    }

  export interface UserSportPivotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSportPivot'], meta: { name: 'UserSportPivot' } }
    /**
     * Find zero or one UserSportPivot that matches the filter.
     * @param {UserSportPivotFindUniqueArgs} args - Arguments to find a UserSportPivot
     * @example
     * // Get one UserSportPivot
     * const userSportPivot = await prisma.userSportPivot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSportPivotFindUniqueArgs>(args: SelectSubset<T, UserSportPivotFindUniqueArgs<ExtArgs>>): Prisma__UserSportPivotClient<$Result.GetResult<Prisma.$UserSportPivotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSportPivot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSportPivotFindUniqueOrThrowArgs} args - Arguments to find a UserSportPivot
     * @example
     * // Get one UserSportPivot
     * const userSportPivot = await prisma.userSportPivot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSportPivotFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSportPivotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSportPivotClient<$Result.GetResult<Prisma.$UserSportPivotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSportPivot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportPivotFindFirstArgs} args - Arguments to find a UserSportPivot
     * @example
     * // Get one UserSportPivot
     * const userSportPivot = await prisma.userSportPivot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSportPivotFindFirstArgs>(args?: SelectSubset<T, UserSportPivotFindFirstArgs<ExtArgs>>): Prisma__UserSportPivotClient<$Result.GetResult<Prisma.$UserSportPivotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSportPivot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportPivotFindFirstOrThrowArgs} args - Arguments to find a UserSportPivot
     * @example
     * // Get one UserSportPivot
     * const userSportPivot = await prisma.userSportPivot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSportPivotFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSportPivotFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSportPivotClient<$Result.GetResult<Prisma.$UserSportPivotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSportPivots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportPivotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSportPivots
     * const userSportPivots = await prisma.userSportPivot.findMany()
     * 
     * // Get first 10 UserSportPivots
     * const userSportPivots = await prisma.userSportPivot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSportPivotWithIdOnly = await prisma.userSportPivot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSportPivotFindManyArgs>(args?: SelectSubset<T, UserSportPivotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSportPivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSportPivot.
     * @param {UserSportPivotCreateArgs} args - Arguments to create a UserSportPivot.
     * @example
     * // Create one UserSportPivot
     * const UserSportPivot = await prisma.userSportPivot.create({
     *   data: {
     *     // ... data to create a UserSportPivot
     *   }
     * })
     * 
     */
    create<T extends UserSportPivotCreateArgs>(args: SelectSubset<T, UserSportPivotCreateArgs<ExtArgs>>): Prisma__UserSportPivotClient<$Result.GetResult<Prisma.$UserSportPivotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSportPivots.
     * @param {UserSportPivotCreateManyArgs} args - Arguments to create many UserSportPivots.
     * @example
     * // Create many UserSportPivots
     * const userSportPivot = await prisma.userSportPivot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSportPivotCreateManyArgs>(args?: SelectSubset<T, UserSportPivotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSportPivot.
     * @param {UserSportPivotDeleteArgs} args - Arguments to delete one UserSportPivot.
     * @example
     * // Delete one UserSportPivot
     * const UserSportPivot = await prisma.userSportPivot.delete({
     *   where: {
     *     // ... filter to delete one UserSportPivot
     *   }
     * })
     * 
     */
    delete<T extends UserSportPivotDeleteArgs>(args: SelectSubset<T, UserSportPivotDeleteArgs<ExtArgs>>): Prisma__UserSportPivotClient<$Result.GetResult<Prisma.$UserSportPivotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSportPivot.
     * @param {UserSportPivotUpdateArgs} args - Arguments to update one UserSportPivot.
     * @example
     * // Update one UserSportPivot
     * const userSportPivot = await prisma.userSportPivot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSportPivotUpdateArgs>(args: SelectSubset<T, UserSportPivotUpdateArgs<ExtArgs>>): Prisma__UserSportPivotClient<$Result.GetResult<Prisma.$UserSportPivotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSportPivots.
     * @param {UserSportPivotDeleteManyArgs} args - Arguments to filter UserSportPivots to delete.
     * @example
     * // Delete a few UserSportPivots
     * const { count } = await prisma.userSportPivot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSportPivotDeleteManyArgs>(args?: SelectSubset<T, UserSportPivotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSportPivots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportPivotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSportPivots
     * const userSportPivot = await prisma.userSportPivot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSportPivotUpdateManyArgs>(args: SelectSubset<T, UserSportPivotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSportPivot.
     * @param {UserSportPivotUpsertArgs} args - Arguments to update or create a UserSportPivot.
     * @example
     * // Update or create a UserSportPivot
     * const userSportPivot = await prisma.userSportPivot.upsert({
     *   create: {
     *     // ... data to create a UserSportPivot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSportPivot we want to update
     *   }
     * })
     */
    upsert<T extends UserSportPivotUpsertArgs>(args: SelectSubset<T, UserSportPivotUpsertArgs<ExtArgs>>): Prisma__UserSportPivotClient<$Result.GetResult<Prisma.$UserSportPivotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSportPivots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportPivotCountArgs} args - Arguments to filter UserSportPivots to count.
     * @example
     * // Count the number of UserSportPivots
     * const count = await prisma.userSportPivot.count({
     *   where: {
     *     // ... the filter for the UserSportPivots we want to count
     *   }
     * })
    **/
    count<T extends UserSportPivotCountArgs>(
      args?: Subset<T, UserSportPivotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSportPivotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSportPivot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportPivotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSportPivotAggregateArgs>(args: Subset<T, UserSportPivotAggregateArgs>): Prisma.PrismaPromise<GetUserSportPivotAggregateType<T>>

    /**
     * Group by UserSportPivot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSportPivotGroupByArgs} args - Group by arguments.
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
      T extends UserSportPivotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSportPivotGroupByArgs['orderBy'] }
        : { orderBy?: UserSportPivotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSportPivotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSportPivotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSportPivot model
   */
  readonly fields: UserSportPivotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSportPivot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSportPivotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sport<T extends UserSportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSportsDefaultArgs<ExtArgs>>): Prisma__UserSportsClient<$Result.GetResult<Prisma.$UserSportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSportPivot model
   */
  interface UserSportPivotFieldRefs {
    readonly id: FieldRef<"UserSportPivot", 'Int'>
    readonly userId: FieldRef<"UserSportPivot", 'Int'>
    readonly sportId: FieldRef<"UserSportPivot", 'Int'>
    readonly createdAt: FieldRef<"UserSportPivot", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSportPivot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSportPivot findUnique
   */
  export type UserSportPivotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
    /**
     * Filter, which UserSportPivot to fetch.
     */
    where: UserSportPivotWhereUniqueInput
  }

  /**
   * UserSportPivot findUniqueOrThrow
   */
  export type UserSportPivotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
    /**
     * Filter, which UserSportPivot to fetch.
     */
    where: UserSportPivotWhereUniqueInput
  }

  /**
   * UserSportPivot findFirst
   */
  export type UserSportPivotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
    /**
     * Filter, which UserSportPivot to fetch.
     */
    where?: UserSportPivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSportPivots to fetch.
     */
    orderBy?: UserSportPivotOrderByWithRelationInput | UserSportPivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSportPivots.
     */
    cursor?: UserSportPivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSportPivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSportPivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSportPivots.
     */
    distinct?: UserSportPivotScalarFieldEnum | UserSportPivotScalarFieldEnum[]
  }

  /**
   * UserSportPivot findFirstOrThrow
   */
  export type UserSportPivotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
    /**
     * Filter, which UserSportPivot to fetch.
     */
    where?: UserSportPivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSportPivots to fetch.
     */
    orderBy?: UserSportPivotOrderByWithRelationInput | UserSportPivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSportPivots.
     */
    cursor?: UserSportPivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSportPivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSportPivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSportPivots.
     */
    distinct?: UserSportPivotScalarFieldEnum | UserSportPivotScalarFieldEnum[]
  }

  /**
   * UserSportPivot findMany
   */
  export type UserSportPivotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
    /**
     * Filter, which UserSportPivots to fetch.
     */
    where?: UserSportPivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSportPivots to fetch.
     */
    orderBy?: UserSportPivotOrderByWithRelationInput | UserSportPivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSportPivots.
     */
    cursor?: UserSportPivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSportPivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSportPivots.
     */
    skip?: number
    distinct?: UserSportPivotScalarFieldEnum | UserSportPivotScalarFieldEnum[]
  }

  /**
   * UserSportPivot create
   */
  export type UserSportPivotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSportPivot.
     */
    data: XOR<UserSportPivotCreateInput, UserSportPivotUncheckedCreateInput>
  }

  /**
   * UserSportPivot createMany
   */
  export type UserSportPivotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSportPivots.
     */
    data: UserSportPivotCreateManyInput | UserSportPivotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSportPivot update
   */
  export type UserSportPivotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSportPivot.
     */
    data: XOR<UserSportPivotUpdateInput, UserSportPivotUncheckedUpdateInput>
    /**
     * Choose, which UserSportPivot to update.
     */
    where: UserSportPivotWhereUniqueInput
  }

  /**
   * UserSportPivot updateMany
   */
  export type UserSportPivotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSportPivots.
     */
    data: XOR<UserSportPivotUpdateManyMutationInput, UserSportPivotUncheckedUpdateManyInput>
    /**
     * Filter which UserSportPivots to update
     */
    where?: UserSportPivotWhereInput
    /**
     * Limit how many UserSportPivots to update.
     */
    limit?: number
  }

  /**
   * UserSportPivot upsert
   */
  export type UserSportPivotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSportPivot to update in case it exists.
     */
    where: UserSportPivotWhereUniqueInput
    /**
     * In case the UserSportPivot found by the `where` argument doesn't exist, create a new UserSportPivot with this data.
     */
    create: XOR<UserSportPivotCreateInput, UserSportPivotUncheckedCreateInput>
    /**
     * In case the UserSportPivot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSportPivotUpdateInput, UserSportPivotUncheckedUpdateInput>
  }

  /**
   * UserSportPivot delete
   */
  export type UserSportPivotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
    /**
     * Filter which UserSportPivot to delete.
     */
    where: UserSportPivotWhereUniqueInput
  }

  /**
   * UserSportPivot deleteMany
   */
  export type UserSportPivotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSportPivots to delete
     */
    where?: UserSportPivotWhereInput
    /**
     * Limit how many UserSportPivots to delete.
     */
    limit?: number
  }

  /**
   * UserSportPivot without action
   */
  export type UserSportPivotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSportPivot
     */
    select?: UserSportPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSportPivot
     */
    omit?: UserSportPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSportPivotInclude<ExtArgs> | null
  }


  /**
   * Model RoutineWorkoutPivot
   */

  export type AggregateRoutineWorkoutPivot = {
    _count: RoutineWorkoutPivotCountAggregateOutputType | null
    _avg: RoutineWorkoutPivotAvgAggregateOutputType | null
    _sum: RoutineWorkoutPivotSumAggregateOutputType | null
    _min: RoutineWorkoutPivotMinAggregateOutputType | null
    _max: RoutineWorkoutPivotMaxAggregateOutputType | null
  }

  export type RoutineWorkoutPivotAvgAggregateOutputType = {
    id: number | null
    routineId: number | null
    workoutId: number | null
  }

  export type RoutineWorkoutPivotSumAggregateOutputType = {
    id: number | null
    routineId: number | null
    workoutId: number | null
  }

  export type RoutineWorkoutPivotMinAggregateOutputType = {
    id: number | null
    routineId: number | null
    workoutId: number | null
  }

  export type RoutineWorkoutPivotMaxAggregateOutputType = {
    id: number | null
    routineId: number | null
    workoutId: number | null
  }

  export type RoutineWorkoutPivotCountAggregateOutputType = {
    id: number
    routineId: number
    workoutId: number
    _all: number
  }


  export type RoutineWorkoutPivotAvgAggregateInputType = {
    id?: true
    routineId?: true
    workoutId?: true
  }

  export type RoutineWorkoutPivotSumAggregateInputType = {
    id?: true
    routineId?: true
    workoutId?: true
  }

  export type RoutineWorkoutPivotMinAggregateInputType = {
    id?: true
    routineId?: true
    workoutId?: true
  }

  export type RoutineWorkoutPivotMaxAggregateInputType = {
    id?: true
    routineId?: true
    workoutId?: true
  }

  export type RoutineWorkoutPivotCountAggregateInputType = {
    id?: true
    routineId?: true
    workoutId?: true
    _all?: true
  }

  export type RoutineWorkoutPivotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineWorkoutPivot to aggregate.
     */
    where?: RoutineWorkoutPivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineWorkoutPivots to fetch.
     */
    orderBy?: RoutineWorkoutPivotOrderByWithRelationInput | RoutineWorkoutPivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineWorkoutPivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineWorkoutPivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineWorkoutPivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutineWorkoutPivots
    **/
    _count?: true | RoutineWorkoutPivotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutineWorkoutPivotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutineWorkoutPivotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineWorkoutPivotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineWorkoutPivotMaxAggregateInputType
  }

  export type GetRoutineWorkoutPivotAggregateType<T extends RoutineWorkoutPivotAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutineWorkoutPivot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutineWorkoutPivot[P]>
      : GetScalarType<T[P], AggregateRoutineWorkoutPivot[P]>
  }




  export type RoutineWorkoutPivotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineWorkoutPivotWhereInput
    orderBy?: RoutineWorkoutPivotOrderByWithAggregationInput | RoutineWorkoutPivotOrderByWithAggregationInput[]
    by: RoutineWorkoutPivotScalarFieldEnum[] | RoutineWorkoutPivotScalarFieldEnum
    having?: RoutineWorkoutPivotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineWorkoutPivotCountAggregateInputType | true
    _avg?: RoutineWorkoutPivotAvgAggregateInputType
    _sum?: RoutineWorkoutPivotSumAggregateInputType
    _min?: RoutineWorkoutPivotMinAggregateInputType
    _max?: RoutineWorkoutPivotMaxAggregateInputType
  }

  export type RoutineWorkoutPivotGroupByOutputType = {
    id: number
    routineId: number
    workoutId: number
    _count: RoutineWorkoutPivotCountAggregateOutputType | null
    _avg: RoutineWorkoutPivotAvgAggregateOutputType | null
    _sum: RoutineWorkoutPivotSumAggregateOutputType | null
    _min: RoutineWorkoutPivotMinAggregateOutputType | null
    _max: RoutineWorkoutPivotMaxAggregateOutputType | null
  }

  type GetRoutineWorkoutPivotGroupByPayload<T extends RoutineWorkoutPivotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineWorkoutPivotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineWorkoutPivotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineWorkoutPivotGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineWorkoutPivotGroupByOutputType[P]>
        }
      >
    >


  export type RoutineWorkoutPivotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    workoutId?: boolean
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineWorkoutPivot"]>



  export type RoutineWorkoutPivotSelectScalar = {
    id?: boolean
    routineId?: boolean
    workoutId?: boolean
  }

  export type RoutineWorkoutPivotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routineId" | "workoutId", ExtArgs["result"]["routineWorkoutPivot"]>
  export type RoutineWorkoutPivotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }

  export type $RoutineWorkoutPivotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutineWorkoutPivot"
    objects: {
      routine: Prisma.$RoutinePayload<ExtArgs>
      workout: Prisma.$WorkoutPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      routineId: number
      workoutId: number
    }, ExtArgs["result"]["routineWorkoutPivot"]>
    composites: {}
  }

  type RoutineWorkoutPivotGetPayload<S extends boolean | null | undefined | RoutineWorkoutPivotDefaultArgs> = $Result.GetResult<Prisma.$RoutineWorkoutPivotPayload, S>

  type RoutineWorkoutPivotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutineWorkoutPivotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineWorkoutPivotCountAggregateInputType | true
    }

  export interface RoutineWorkoutPivotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutineWorkoutPivot'], meta: { name: 'RoutineWorkoutPivot' } }
    /**
     * Find zero or one RoutineWorkoutPivot that matches the filter.
     * @param {RoutineWorkoutPivotFindUniqueArgs} args - Arguments to find a RoutineWorkoutPivot
     * @example
     * // Get one RoutineWorkoutPivot
     * const routineWorkoutPivot = await prisma.routineWorkoutPivot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineWorkoutPivotFindUniqueArgs>(args: SelectSubset<T, RoutineWorkoutPivotFindUniqueArgs<ExtArgs>>): Prisma__RoutineWorkoutPivotClient<$Result.GetResult<Prisma.$RoutineWorkoutPivotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoutineWorkoutPivot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutineWorkoutPivotFindUniqueOrThrowArgs} args - Arguments to find a RoutineWorkoutPivot
     * @example
     * // Get one RoutineWorkoutPivot
     * const routineWorkoutPivot = await prisma.routineWorkoutPivot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineWorkoutPivotFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineWorkoutPivotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineWorkoutPivotClient<$Result.GetResult<Prisma.$RoutineWorkoutPivotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineWorkoutPivot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineWorkoutPivotFindFirstArgs} args - Arguments to find a RoutineWorkoutPivot
     * @example
     * // Get one RoutineWorkoutPivot
     * const routineWorkoutPivot = await prisma.routineWorkoutPivot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineWorkoutPivotFindFirstArgs>(args?: SelectSubset<T, RoutineWorkoutPivotFindFirstArgs<ExtArgs>>): Prisma__RoutineWorkoutPivotClient<$Result.GetResult<Prisma.$RoutineWorkoutPivotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineWorkoutPivot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineWorkoutPivotFindFirstOrThrowArgs} args - Arguments to find a RoutineWorkoutPivot
     * @example
     * // Get one RoutineWorkoutPivot
     * const routineWorkoutPivot = await prisma.routineWorkoutPivot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineWorkoutPivotFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineWorkoutPivotFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineWorkoutPivotClient<$Result.GetResult<Prisma.$RoutineWorkoutPivotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoutineWorkoutPivots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineWorkoutPivotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutineWorkoutPivots
     * const routineWorkoutPivots = await prisma.routineWorkoutPivot.findMany()
     * 
     * // Get first 10 RoutineWorkoutPivots
     * const routineWorkoutPivots = await prisma.routineWorkoutPivot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineWorkoutPivotWithIdOnly = await prisma.routineWorkoutPivot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineWorkoutPivotFindManyArgs>(args?: SelectSubset<T, RoutineWorkoutPivotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineWorkoutPivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoutineWorkoutPivot.
     * @param {RoutineWorkoutPivotCreateArgs} args - Arguments to create a RoutineWorkoutPivot.
     * @example
     * // Create one RoutineWorkoutPivot
     * const RoutineWorkoutPivot = await prisma.routineWorkoutPivot.create({
     *   data: {
     *     // ... data to create a RoutineWorkoutPivot
     *   }
     * })
     * 
     */
    create<T extends RoutineWorkoutPivotCreateArgs>(args: SelectSubset<T, RoutineWorkoutPivotCreateArgs<ExtArgs>>): Prisma__RoutineWorkoutPivotClient<$Result.GetResult<Prisma.$RoutineWorkoutPivotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoutineWorkoutPivots.
     * @param {RoutineWorkoutPivotCreateManyArgs} args - Arguments to create many RoutineWorkoutPivots.
     * @example
     * // Create many RoutineWorkoutPivots
     * const routineWorkoutPivot = await prisma.routineWorkoutPivot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineWorkoutPivotCreateManyArgs>(args?: SelectSubset<T, RoutineWorkoutPivotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoutineWorkoutPivot.
     * @param {RoutineWorkoutPivotDeleteArgs} args - Arguments to delete one RoutineWorkoutPivot.
     * @example
     * // Delete one RoutineWorkoutPivot
     * const RoutineWorkoutPivot = await prisma.routineWorkoutPivot.delete({
     *   where: {
     *     // ... filter to delete one RoutineWorkoutPivot
     *   }
     * })
     * 
     */
    delete<T extends RoutineWorkoutPivotDeleteArgs>(args: SelectSubset<T, RoutineWorkoutPivotDeleteArgs<ExtArgs>>): Prisma__RoutineWorkoutPivotClient<$Result.GetResult<Prisma.$RoutineWorkoutPivotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoutineWorkoutPivot.
     * @param {RoutineWorkoutPivotUpdateArgs} args - Arguments to update one RoutineWorkoutPivot.
     * @example
     * // Update one RoutineWorkoutPivot
     * const routineWorkoutPivot = await prisma.routineWorkoutPivot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineWorkoutPivotUpdateArgs>(args: SelectSubset<T, RoutineWorkoutPivotUpdateArgs<ExtArgs>>): Prisma__RoutineWorkoutPivotClient<$Result.GetResult<Prisma.$RoutineWorkoutPivotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoutineWorkoutPivots.
     * @param {RoutineWorkoutPivotDeleteManyArgs} args - Arguments to filter RoutineWorkoutPivots to delete.
     * @example
     * // Delete a few RoutineWorkoutPivots
     * const { count } = await prisma.routineWorkoutPivot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineWorkoutPivotDeleteManyArgs>(args?: SelectSubset<T, RoutineWorkoutPivotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineWorkoutPivots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineWorkoutPivotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutineWorkoutPivots
     * const routineWorkoutPivot = await prisma.routineWorkoutPivot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineWorkoutPivotUpdateManyArgs>(args: SelectSubset<T, RoutineWorkoutPivotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoutineWorkoutPivot.
     * @param {RoutineWorkoutPivotUpsertArgs} args - Arguments to update or create a RoutineWorkoutPivot.
     * @example
     * // Update or create a RoutineWorkoutPivot
     * const routineWorkoutPivot = await prisma.routineWorkoutPivot.upsert({
     *   create: {
     *     // ... data to create a RoutineWorkoutPivot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutineWorkoutPivot we want to update
     *   }
     * })
     */
    upsert<T extends RoutineWorkoutPivotUpsertArgs>(args: SelectSubset<T, RoutineWorkoutPivotUpsertArgs<ExtArgs>>): Prisma__RoutineWorkoutPivotClient<$Result.GetResult<Prisma.$RoutineWorkoutPivotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoutineWorkoutPivots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineWorkoutPivotCountArgs} args - Arguments to filter RoutineWorkoutPivots to count.
     * @example
     * // Count the number of RoutineWorkoutPivots
     * const count = await prisma.routineWorkoutPivot.count({
     *   where: {
     *     // ... the filter for the RoutineWorkoutPivots we want to count
     *   }
     * })
    **/
    count<T extends RoutineWorkoutPivotCountArgs>(
      args?: Subset<T, RoutineWorkoutPivotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineWorkoutPivotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutineWorkoutPivot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineWorkoutPivotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineWorkoutPivotAggregateArgs>(args: Subset<T, RoutineWorkoutPivotAggregateArgs>): Prisma.PrismaPromise<GetRoutineWorkoutPivotAggregateType<T>>

    /**
     * Group by RoutineWorkoutPivot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineWorkoutPivotGroupByArgs} args - Group by arguments.
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
      T extends RoutineWorkoutPivotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineWorkoutPivotGroupByArgs['orderBy'] }
        : { orderBy?: RoutineWorkoutPivotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineWorkoutPivotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineWorkoutPivotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutineWorkoutPivot model
   */
  readonly fields: RoutineWorkoutPivotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutineWorkoutPivot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineWorkoutPivotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routine<T extends RoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoutineDefaultArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoutineWorkoutPivot model
   */
  interface RoutineWorkoutPivotFieldRefs {
    readonly id: FieldRef<"RoutineWorkoutPivot", 'Int'>
    readonly routineId: FieldRef<"RoutineWorkoutPivot", 'Int'>
    readonly workoutId: FieldRef<"RoutineWorkoutPivot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoutineWorkoutPivot findUnique
   */
  export type RoutineWorkoutPivotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
    /**
     * Filter, which RoutineWorkoutPivot to fetch.
     */
    where: RoutineWorkoutPivotWhereUniqueInput
  }

  /**
   * RoutineWorkoutPivot findUniqueOrThrow
   */
  export type RoutineWorkoutPivotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
    /**
     * Filter, which RoutineWorkoutPivot to fetch.
     */
    where: RoutineWorkoutPivotWhereUniqueInput
  }

  /**
   * RoutineWorkoutPivot findFirst
   */
  export type RoutineWorkoutPivotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
    /**
     * Filter, which RoutineWorkoutPivot to fetch.
     */
    where?: RoutineWorkoutPivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineWorkoutPivots to fetch.
     */
    orderBy?: RoutineWorkoutPivotOrderByWithRelationInput | RoutineWorkoutPivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineWorkoutPivots.
     */
    cursor?: RoutineWorkoutPivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineWorkoutPivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineWorkoutPivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineWorkoutPivots.
     */
    distinct?: RoutineWorkoutPivotScalarFieldEnum | RoutineWorkoutPivotScalarFieldEnum[]
  }

  /**
   * RoutineWorkoutPivot findFirstOrThrow
   */
  export type RoutineWorkoutPivotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
    /**
     * Filter, which RoutineWorkoutPivot to fetch.
     */
    where?: RoutineWorkoutPivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineWorkoutPivots to fetch.
     */
    orderBy?: RoutineWorkoutPivotOrderByWithRelationInput | RoutineWorkoutPivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineWorkoutPivots.
     */
    cursor?: RoutineWorkoutPivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineWorkoutPivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineWorkoutPivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineWorkoutPivots.
     */
    distinct?: RoutineWorkoutPivotScalarFieldEnum | RoutineWorkoutPivotScalarFieldEnum[]
  }

  /**
   * RoutineWorkoutPivot findMany
   */
  export type RoutineWorkoutPivotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
    /**
     * Filter, which RoutineWorkoutPivots to fetch.
     */
    where?: RoutineWorkoutPivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineWorkoutPivots to fetch.
     */
    orderBy?: RoutineWorkoutPivotOrderByWithRelationInput | RoutineWorkoutPivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutineWorkoutPivots.
     */
    cursor?: RoutineWorkoutPivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineWorkoutPivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineWorkoutPivots.
     */
    skip?: number
    distinct?: RoutineWorkoutPivotScalarFieldEnum | RoutineWorkoutPivotScalarFieldEnum[]
  }

  /**
   * RoutineWorkoutPivot create
   */
  export type RoutineWorkoutPivotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutineWorkoutPivot.
     */
    data: XOR<RoutineWorkoutPivotCreateInput, RoutineWorkoutPivotUncheckedCreateInput>
  }

  /**
   * RoutineWorkoutPivot createMany
   */
  export type RoutineWorkoutPivotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutineWorkoutPivots.
     */
    data: RoutineWorkoutPivotCreateManyInput | RoutineWorkoutPivotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoutineWorkoutPivot update
   */
  export type RoutineWorkoutPivotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutineWorkoutPivot.
     */
    data: XOR<RoutineWorkoutPivotUpdateInput, RoutineWorkoutPivotUncheckedUpdateInput>
    /**
     * Choose, which RoutineWorkoutPivot to update.
     */
    where: RoutineWorkoutPivotWhereUniqueInput
  }

  /**
   * RoutineWorkoutPivot updateMany
   */
  export type RoutineWorkoutPivotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutineWorkoutPivots.
     */
    data: XOR<RoutineWorkoutPivotUpdateManyMutationInput, RoutineWorkoutPivotUncheckedUpdateManyInput>
    /**
     * Filter which RoutineWorkoutPivots to update
     */
    where?: RoutineWorkoutPivotWhereInput
    /**
     * Limit how many RoutineWorkoutPivots to update.
     */
    limit?: number
  }

  /**
   * RoutineWorkoutPivot upsert
   */
  export type RoutineWorkoutPivotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutineWorkoutPivot to update in case it exists.
     */
    where: RoutineWorkoutPivotWhereUniqueInput
    /**
     * In case the RoutineWorkoutPivot found by the `where` argument doesn't exist, create a new RoutineWorkoutPivot with this data.
     */
    create: XOR<RoutineWorkoutPivotCreateInput, RoutineWorkoutPivotUncheckedCreateInput>
    /**
     * In case the RoutineWorkoutPivot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineWorkoutPivotUpdateInput, RoutineWorkoutPivotUncheckedUpdateInput>
  }

  /**
   * RoutineWorkoutPivot delete
   */
  export type RoutineWorkoutPivotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
    /**
     * Filter which RoutineWorkoutPivot to delete.
     */
    where: RoutineWorkoutPivotWhereUniqueInput
  }

  /**
   * RoutineWorkoutPivot deleteMany
   */
  export type RoutineWorkoutPivotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineWorkoutPivots to delete
     */
    where?: RoutineWorkoutPivotWhereInput
    /**
     * Limit how many RoutineWorkoutPivots to delete.
     */
    limit?: number
  }

  /**
   * RoutineWorkoutPivot without action
   */
  export type RoutineWorkoutPivotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineWorkoutPivot
     */
    select?: RoutineWorkoutPivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineWorkoutPivot
     */
    omit?: RoutineWorkoutPivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineWorkoutPivotInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutExercisePivot
   */

  export type AggregateWorkoutExercisePivot = {
    _count: WorkoutExercisePivotCountAggregateOutputType | null
    _avg: WorkoutExercisePivotAvgAggregateOutputType | null
    _sum: WorkoutExercisePivotSumAggregateOutputType | null
    _min: WorkoutExercisePivotMinAggregateOutputType | null
    _max: WorkoutExercisePivotMaxAggregateOutputType | null
  }

  export type WorkoutExercisePivotAvgAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
  }

  export type WorkoutExercisePivotSumAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
  }

  export type WorkoutExercisePivotMinAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
  }

  export type WorkoutExercisePivotMaxAggregateOutputType = {
    id: number | null
    workoutId: number | null
    exerciseId: number | null
  }

  export type WorkoutExercisePivotCountAggregateOutputType = {
    id: number
    workoutId: number
    exerciseId: number
    _all: number
  }


  export type WorkoutExercisePivotAvgAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
  }

  export type WorkoutExercisePivotSumAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
  }

  export type WorkoutExercisePivotMinAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
  }

  export type WorkoutExercisePivotMaxAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
  }

  export type WorkoutExercisePivotCountAggregateInputType = {
    id?: true
    workoutId?: true
    exerciseId?: true
    _all?: true
  }

  export type WorkoutExercisePivotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercisePivot to aggregate.
     */
    where?: WorkoutExercisePivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercisePivots to fetch.
     */
    orderBy?: WorkoutExercisePivotOrderByWithRelationInput | WorkoutExercisePivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutExercisePivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercisePivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercisePivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutExercisePivots
    **/
    _count?: true | WorkoutExercisePivotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutExercisePivotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutExercisePivotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutExercisePivotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutExercisePivotMaxAggregateInputType
  }

  export type GetWorkoutExercisePivotAggregateType<T extends WorkoutExercisePivotAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutExercisePivot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutExercisePivot[P]>
      : GetScalarType<T[P], AggregateWorkoutExercisePivot[P]>
  }




  export type WorkoutExercisePivotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutExercisePivotWhereInput
    orderBy?: WorkoutExercisePivotOrderByWithAggregationInput | WorkoutExercisePivotOrderByWithAggregationInput[]
    by: WorkoutExercisePivotScalarFieldEnum[] | WorkoutExercisePivotScalarFieldEnum
    having?: WorkoutExercisePivotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutExercisePivotCountAggregateInputType | true
    _avg?: WorkoutExercisePivotAvgAggregateInputType
    _sum?: WorkoutExercisePivotSumAggregateInputType
    _min?: WorkoutExercisePivotMinAggregateInputType
    _max?: WorkoutExercisePivotMaxAggregateInputType
  }

  export type WorkoutExercisePivotGroupByOutputType = {
    id: number
    workoutId: number
    exerciseId: number
    _count: WorkoutExercisePivotCountAggregateOutputType | null
    _avg: WorkoutExercisePivotAvgAggregateOutputType | null
    _sum: WorkoutExercisePivotSumAggregateOutputType | null
    _min: WorkoutExercisePivotMinAggregateOutputType | null
    _max: WorkoutExercisePivotMaxAggregateOutputType | null
  }

  type GetWorkoutExercisePivotGroupByPayload<T extends WorkoutExercisePivotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutExercisePivotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutExercisePivotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutExercisePivotGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutExercisePivotGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutExercisePivotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutExercisePivot"]>



  export type WorkoutExercisePivotSelectScalar = {
    id?: boolean
    workoutId?: boolean
    exerciseId?: boolean
  }

  export type WorkoutExercisePivotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workoutId" | "exerciseId", ExtArgs["result"]["workoutExercisePivot"]>
  export type WorkoutExercisePivotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $WorkoutExercisePivotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutExercisePivot"
    objects: {
      workout: Prisma.$WorkoutPayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workoutId: number
      exerciseId: number
    }, ExtArgs["result"]["workoutExercisePivot"]>
    composites: {}
  }

  type WorkoutExercisePivotGetPayload<S extends boolean | null | undefined | WorkoutExercisePivotDefaultArgs> = $Result.GetResult<Prisma.$WorkoutExercisePivotPayload, S>

  type WorkoutExercisePivotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutExercisePivotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutExercisePivotCountAggregateInputType | true
    }

  export interface WorkoutExercisePivotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutExercisePivot'], meta: { name: 'WorkoutExercisePivot' } }
    /**
     * Find zero or one WorkoutExercisePivot that matches the filter.
     * @param {WorkoutExercisePivotFindUniqueArgs} args - Arguments to find a WorkoutExercisePivot
     * @example
     * // Get one WorkoutExercisePivot
     * const workoutExercisePivot = await prisma.workoutExercisePivot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutExercisePivotFindUniqueArgs>(args: SelectSubset<T, WorkoutExercisePivotFindUniqueArgs<ExtArgs>>): Prisma__WorkoutExercisePivotClient<$Result.GetResult<Prisma.$WorkoutExercisePivotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutExercisePivot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutExercisePivotFindUniqueOrThrowArgs} args - Arguments to find a WorkoutExercisePivot
     * @example
     * // Get one WorkoutExercisePivot
     * const workoutExercisePivot = await prisma.workoutExercisePivot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutExercisePivotFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutExercisePivotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutExercisePivotClient<$Result.GetResult<Prisma.$WorkoutExercisePivotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercisePivot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisePivotFindFirstArgs} args - Arguments to find a WorkoutExercisePivot
     * @example
     * // Get one WorkoutExercisePivot
     * const workoutExercisePivot = await prisma.workoutExercisePivot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutExercisePivotFindFirstArgs>(args?: SelectSubset<T, WorkoutExercisePivotFindFirstArgs<ExtArgs>>): Prisma__WorkoutExercisePivotClient<$Result.GetResult<Prisma.$WorkoutExercisePivotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutExercisePivot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisePivotFindFirstOrThrowArgs} args - Arguments to find a WorkoutExercisePivot
     * @example
     * // Get one WorkoutExercisePivot
     * const workoutExercisePivot = await prisma.workoutExercisePivot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutExercisePivotFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutExercisePivotFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutExercisePivotClient<$Result.GetResult<Prisma.$WorkoutExercisePivotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutExercisePivots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisePivotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutExercisePivots
     * const workoutExercisePivots = await prisma.workoutExercisePivot.findMany()
     * 
     * // Get first 10 WorkoutExercisePivots
     * const workoutExercisePivots = await prisma.workoutExercisePivot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutExercisePivotWithIdOnly = await prisma.workoutExercisePivot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutExercisePivotFindManyArgs>(args?: SelectSubset<T, WorkoutExercisePivotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutExercisePivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutExercisePivot.
     * @param {WorkoutExercisePivotCreateArgs} args - Arguments to create a WorkoutExercisePivot.
     * @example
     * // Create one WorkoutExercisePivot
     * const WorkoutExercisePivot = await prisma.workoutExercisePivot.create({
     *   data: {
     *     // ... data to create a WorkoutExercisePivot
     *   }
     * })
     * 
     */
    create<T extends WorkoutExercisePivotCreateArgs>(args: SelectSubset<T, WorkoutExercisePivotCreateArgs<ExtArgs>>): Prisma__WorkoutExercisePivotClient<$Result.GetResult<Prisma.$WorkoutExercisePivotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutExercisePivots.
     * @param {WorkoutExercisePivotCreateManyArgs} args - Arguments to create many WorkoutExercisePivots.
     * @example
     * // Create many WorkoutExercisePivots
     * const workoutExercisePivot = await prisma.workoutExercisePivot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutExercisePivotCreateManyArgs>(args?: SelectSubset<T, WorkoutExercisePivotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkoutExercisePivot.
     * @param {WorkoutExercisePivotDeleteArgs} args - Arguments to delete one WorkoutExercisePivot.
     * @example
     * // Delete one WorkoutExercisePivot
     * const WorkoutExercisePivot = await prisma.workoutExercisePivot.delete({
     *   where: {
     *     // ... filter to delete one WorkoutExercisePivot
     *   }
     * })
     * 
     */
    delete<T extends WorkoutExercisePivotDeleteArgs>(args: SelectSubset<T, WorkoutExercisePivotDeleteArgs<ExtArgs>>): Prisma__WorkoutExercisePivotClient<$Result.GetResult<Prisma.$WorkoutExercisePivotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutExercisePivot.
     * @param {WorkoutExercisePivotUpdateArgs} args - Arguments to update one WorkoutExercisePivot.
     * @example
     * // Update one WorkoutExercisePivot
     * const workoutExercisePivot = await prisma.workoutExercisePivot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutExercisePivotUpdateArgs>(args: SelectSubset<T, WorkoutExercisePivotUpdateArgs<ExtArgs>>): Prisma__WorkoutExercisePivotClient<$Result.GetResult<Prisma.$WorkoutExercisePivotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutExercisePivots.
     * @param {WorkoutExercisePivotDeleteManyArgs} args - Arguments to filter WorkoutExercisePivots to delete.
     * @example
     * // Delete a few WorkoutExercisePivots
     * const { count } = await prisma.workoutExercisePivot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutExercisePivotDeleteManyArgs>(args?: SelectSubset<T, WorkoutExercisePivotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutExercisePivots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisePivotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutExercisePivots
     * const workoutExercisePivot = await prisma.workoutExercisePivot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutExercisePivotUpdateManyArgs>(args: SelectSubset<T, WorkoutExercisePivotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkoutExercisePivot.
     * @param {WorkoutExercisePivotUpsertArgs} args - Arguments to update or create a WorkoutExercisePivot.
     * @example
     * // Update or create a WorkoutExercisePivot
     * const workoutExercisePivot = await prisma.workoutExercisePivot.upsert({
     *   create: {
     *     // ... data to create a WorkoutExercisePivot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutExercisePivot we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutExercisePivotUpsertArgs>(args: SelectSubset<T, WorkoutExercisePivotUpsertArgs<ExtArgs>>): Prisma__WorkoutExercisePivotClient<$Result.GetResult<Prisma.$WorkoutExercisePivotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutExercisePivots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisePivotCountArgs} args - Arguments to filter WorkoutExercisePivots to count.
     * @example
     * // Count the number of WorkoutExercisePivots
     * const count = await prisma.workoutExercisePivot.count({
     *   where: {
     *     // ... the filter for the WorkoutExercisePivots we want to count
     *   }
     * })
    **/
    count<T extends WorkoutExercisePivotCountArgs>(
      args?: Subset<T, WorkoutExercisePivotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutExercisePivotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutExercisePivot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisePivotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutExercisePivotAggregateArgs>(args: Subset<T, WorkoutExercisePivotAggregateArgs>): Prisma.PrismaPromise<GetWorkoutExercisePivotAggregateType<T>>

    /**
     * Group by WorkoutExercisePivot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutExercisePivotGroupByArgs} args - Group by arguments.
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
      T extends WorkoutExercisePivotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutExercisePivotGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutExercisePivotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutExercisePivotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutExercisePivotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutExercisePivot model
   */
  readonly fields: WorkoutExercisePivotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutExercisePivot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutExercisePivotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkoutExercisePivot model
   */
  interface WorkoutExercisePivotFieldRefs {
    readonly id: FieldRef<"WorkoutExercisePivot", 'Int'>
    readonly workoutId: FieldRef<"WorkoutExercisePivot", 'Int'>
    readonly exerciseId: FieldRef<"WorkoutExercisePivot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutExercisePivot findUnique
   */
  export type WorkoutExercisePivotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercisePivot to fetch.
     */
    where: WorkoutExercisePivotWhereUniqueInput
  }

  /**
   * WorkoutExercisePivot findUniqueOrThrow
   */
  export type WorkoutExercisePivotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercisePivot to fetch.
     */
    where: WorkoutExercisePivotWhereUniqueInput
  }

  /**
   * WorkoutExercisePivot findFirst
   */
  export type WorkoutExercisePivotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercisePivot to fetch.
     */
    where?: WorkoutExercisePivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercisePivots to fetch.
     */
    orderBy?: WorkoutExercisePivotOrderByWithRelationInput | WorkoutExercisePivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercisePivots.
     */
    cursor?: WorkoutExercisePivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercisePivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercisePivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercisePivots.
     */
    distinct?: WorkoutExercisePivotScalarFieldEnum | WorkoutExercisePivotScalarFieldEnum[]
  }

  /**
   * WorkoutExercisePivot findFirstOrThrow
   */
  export type WorkoutExercisePivotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercisePivot to fetch.
     */
    where?: WorkoutExercisePivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercisePivots to fetch.
     */
    orderBy?: WorkoutExercisePivotOrderByWithRelationInput | WorkoutExercisePivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutExercisePivots.
     */
    cursor?: WorkoutExercisePivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercisePivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercisePivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutExercisePivots.
     */
    distinct?: WorkoutExercisePivotScalarFieldEnum | WorkoutExercisePivotScalarFieldEnum[]
  }

  /**
   * WorkoutExercisePivot findMany
   */
  export type WorkoutExercisePivotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutExercisePivots to fetch.
     */
    where?: WorkoutExercisePivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutExercisePivots to fetch.
     */
    orderBy?: WorkoutExercisePivotOrderByWithRelationInput | WorkoutExercisePivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutExercisePivots.
     */
    cursor?: WorkoutExercisePivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutExercisePivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutExercisePivots.
     */
    skip?: number
    distinct?: WorkoutExercisePivotScalarFieldEnum | WorkoutExercisePivotScalarFieldEnum[]
  }

  /**
   * WorkoutExercisePivot create
   */
  export type WorkoutExercisePivotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutExercisePivot.
     */
    data: XOR<WorkoutExercisePivotCreateInput, WorkoutExercisePivotUncheckedCreateInput>
  }

  /**
   * WorkoutExercisePivot createMany
   */
  export type WorkoutExercisePivotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutExercisePivots.
     */
    data: WorkoutExercisePivotCreateManyInput | WorkoutExercisePivotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutExercisePivot update
   */
  export type WorkoutExercisePivotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutExercisePivot.
     */
    data: XOR<WorkoutExercisePivotUpdateInput, WorkoutExercisePivotUncheckedUpdateInput>
    /**
     * Choose, which WorkoutExercisePivot to update.
     */
    where: WorkoutExercisePivotWhereUniqueInput
  }

  /**
   * WorkoutExercisePivot updateMany
   */
  export type WorkoutExercisePivotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutExercisePivots.
     */
    data: XOR<WorkoutExercisePivotUpdateManyMutationInput, WorkoutExercisePivotUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutExercisePivots to update
     */
    where?: WorkoutExercisePivotWhereInput
    /**
     * Limit how many WorkoutExercisePivots to update.
     */
    limit?: number
  }

  /**
   * WorkoutExercisePivot upsert
   */
  export type WorkoutExercisePivotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutExercisePivot to update in case it exists.
     */
    where: WorkoutExercisePivotWhereUniqueInput
    /**
     * In case the WorkoutExercisePivot found by the `where` argument doesn't exist, create a new WorkoutExercisePivot with this data.
     */
    create: XOR<WorkoutExercisePivotCreateInput, WorkoutExercisePivotUncheckedCreateInput>
    /**
     * In case the WorkoutExercisePivot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutExercisePivotUpdateInput, WorkoutExercisePivotUncheckedUpdateInput>
  }

  /**
   * WorkoutExercisePivot delete
   */
  export type WorkoutExercisePivotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
    /**
     * Filter which WorkoutExercisePivot to delete.
     */
    where: WorkoutExercisePivotWhereUniqueInput
  }

  /**
   * WorkoutExercisePivot deleteMany
   */
  export type WorkoutExercisePivotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutExercisePivots to delete
     */
    where?: WorkoutExercisePivotWhereInput
    /**
     * Limit how many WorkoutExercisePivots to delete.
     */
    limit?: number
  }

  /**
   * WorkoutExercisePivot without action
   */
  export type WorkoutExercisePivotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutExercisePivot
     */
    select?: WorkoutExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutExercisePivot
     */
    omit?: WorkoutExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutExercisePivotInclude<ExtArgs> | null
  }


  /**
   * Model RoutineExercisePivot
   */

  export type AggregateRoutineExercisePivot = {
    _count: RoutineExercisePivotCountAggregateOutputType | null
    _avg: RoutineExercisePivotAvgAggregateOutputType | null
    _sum: RoutineExercisePivotSumAggregateOutputType | null
    _min: RoutineExercisePivotMinAggregateOutputType | null
    _max: RoutineExercisePivotMaxAggregateOutputType | null
  }

  export type RoutineExercisePivotAvgAggregateOutputType = {
    id: number | null
    routineId: number | null
    exerciseId: number | null
  }

  export type RoutineExercisePivotSumAggregateOutputType = {
    id: number | null
    routineId: number | null
    exerciseId: number | null
  }

  export type RoutineExercisePivotMinAggregateOutputType = {
    id: number | null
    routineId: number | null
    exerciseId: number | null
  }

  export type RoutineExercisePivotMaxAggregateOutputType = {
    id: number | null
    routineId: number | null
    exerciseId: number | null
  }

  export type RoutineExercisePivotCountAggregateOutputType = {
    id: number
    routineId: number
    exerciseId: number
    _all: number
  }


  export type RoutineExercisePivotAvgAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
  }

  export type RoutineExercisePivotSumAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
  }

  export type RoutineExercisePivotMinAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
  }

  export type RoutineExercisePivotMaxAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
  }

  export type RoutineExercisePivotCountAggregateInputType = {
    id?: true
    routineId?: true
    exerciseId?: true
    _all?: true
  }

  export type RoutineExercisePivotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineExercisePivot to aggregate.
     */
    where?: RoutineExercisePivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercisePivots to fetch.
     */
    orderBy?: RoutineExercisePivotOrderByWithRelationInput | RoutineExercisePivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineExercisePivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercisePivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercisePivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutineExercisePivots
    **/
    _count?: true | RoutineExercisePivotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutineExercisePivotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutineExercisePivotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineExercisePivotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineExercisePivotMaxAggregateInputType
  }

  export type GetRoutineExercisePivotAggregateType<T extends RoutineExercisePivotAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutineExercisePivot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutineExercisePivot[P]>
      : GetScalarType<T[P], AggregateRoutineExercisePivot[P]>
  }




  export type RoutineExercisePivotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineExercisePivotWhereInput
    orderBy?: RoutineExercisePivotOrderByWithAggregationInput | RoutineExercisePivotOrderByWithAggregationInput[]
    by: RoutineExercisePivotScalarFieldEnum[] | RoutineExercisePivotScalarFieldEnum
    having?: RoutineExercisePivotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineExercisePivotCountAggregateInputType | true
    _avg?: RoutineExercisePivotAvgAggregateInputType
    _sum?: RoutineExercisePivotSumAggregateInputType
    _min?: RoutineExercisePivotMinAggregateInputType
    _max?: RoutineExercisePivotMaxAggregateInputType
  }

  export type RoutineExercisePivotGroupByOutputType = {
    id: number
    routineId: number
    exerciseId: number
    _count: RoutineExercisePivotCountAggregateOutputType | null
    _avg: RoutineExercisePivotAvgAggregateOutputType | null
    _sum: RoutineExercisePivotSumAggregateOutputType | null
    _min: RoutineExercisePivotMinAggregateOutputType | null
    _max: RoutineExercisePivotMaxAggregateOutputType | null
  }

  type GetRoutineExercisePivotGroupByPayload<T extends RoutineExercisePivotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineExercisePivotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineExercisePivotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineExercisePivotGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineExercisePivotGroupByOutputType[P]>
        }
      >
    >


  export type RoutineExercisePivotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineExercisePivot"]>



  export type RoutineExercisePivotSelectScalar = {
    id?: boolean
    routineId?: boolean
    exerciseId?: boolean
  }

  export type RoutineExercisePivotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routineId" | "exerciseId", ExtArgs["result"]["routineExercisePivot"]>
  export type RoutineExercisePivotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routine?: boolean | RoutineDefaultArgs<ExtArgs>
    exercise?: boolean | ExerciseDefaultArgs<ExtArgs>
  }

  export type $RoutineExercisePivotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutineExercisePivot"
    objects: {
      routine: Prisma.$RoutinePayload<ExtArgs>
      exercise: Prisma.$ExercisePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      routineId: number
      exerciseId: number
    }, ExtArgs["result"]["routineExercisePivot"]>
    composites: {}
  }

  type RoutineExercisePivotGetPayload<S extends boolean | null | undefined | RoutineExercisePivotDefaultArgs> = $Result.GetResult<Prisma.$RoutineExercisePivotPayload, S>

  type RoutineExercisePivotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutineExercisePivotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineExercisePivotCountAggregateInputType | true
    }

  export interface RoutineExercisePivotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutineExercisePivot'], meta: { name: 'RoutineExercisePivot' } }
    /**
     * Find zero or one RoutineExercisePivot that matches the filter.
     * @param {RoutineExercisePivotFindUniqueArgs} args - Arguments to find a RoutineExercisePivot
     * @example
     * // Get one RoutineExercisePivot
     * const routineExercisePivot = await prisma.routineExercisePivot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineExercisePivotFindUniqueArgs>(args: SelectSubset<T, RoutineExercisePivotFindUniqueArgs<ExtArgs>>): Prisma__RoutineExercisePivotClient<$Result.GetResult<Prisma.$RoutineExercisePivotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoutineExercisePivot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutineExercisePivotFindUniqueOrThrowArgs} args - Arguments to find a RoutineExercisePivot
     * @example
     * // Get one RoutineExercisePivot
     * const routineExercisePivot = await prisma.routineExercisePivot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineExercisePivotFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineExercisePivotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineExercisePivotClient<$Result.GetResult<Prisma.$RoutineExercisePivotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineExercisePivot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExercisePivotFindFirstArgs} args - Arguments to find a RoutineExercisePivot
     * @example
     * // Get one RoutineExercisePivot
     * const routineExercisePivot = await prisma.routineExercisePivot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineExercisePivotFindFirstArgs>(args?: SelectSubset<T, RoutineExercisePivotFindFirstArgs<ExtArgs>>): Prisma__RoutineExercisePivotClient<$Result.GetResult<Prisma.$RoutineExercisePivotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineExercisePivot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExercisePivotFindFirstOrThrowArgs} args - Arguments to find a RoutineExercisePivot
     * @example
     * // Get one RoutineExercisePivot
     * const routineExercisePivot = await prisma.routineExercisePivot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineExercisePivotFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineExercisePivotFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineExercisePivotClient<$Result.GetResult<Prisma.$RoutineExercisePivotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoutineExercisePivots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExercisePivotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutineExercisePivots
     * const routineExercisePivots = await prisma.routineExercisePivot.findMany()
     * 
     * // Get first 10 RoutineExercisePivots
     * const routineExercisePivots = await prisma.routineExercisePivot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineExercisePivotWithIdOnly = await prisma.routineExercisePivot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineExercisePivotFindManyArgs>(args?: SelectSubset<T, RoutineExercisePivotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineExercisePivotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoutineExercisePivot.
     * @param {RoutineExercisePivotCreateArgs} args - Arguments to create a RoutineExercisePivot.
     * @example
     * // Create one RoutineExercisePivot
     * const RoutineExercisePivot = await prisma.routineExercisePivot.create({
     *   data: {
     *     // ... data to create a RoutineExercisePivot
     *   }
     * })
     * 
     */
    create<T extends RoutineExercisePivotCreateArgs>(args: SelectSubset<T, RoutineExercisePivotCreateArgs<ExtArgs>>): Prisma__RoutineExercisePivotClient<$Result.GetResult<Prisma.$RoutineExercisePivotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoutineExercisePivots.
     * @param {RoutineExercisePivotCreateManyArgs} args - Arguments to create many RoutineExercisePivots.
     * @example
     * // Create many RoutineExercisePivots
     * const routineExercisePivot = await prisma.routineExercisePivot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineExercisePivotCreateManyArgs>(args?: SelectSubset<T, RoutineExercisePivotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoutineExercisePivot.
     * @param {RoutineExercisePivotDeleteArgs} args - Arguments to delete one RoutineExercisePivot.
     * @example
     * // Delete one RoutineExercisePivot
     * const RoutineExercisePivot = await prisma.routineExercisePivot.delete({
     *   where: {
     *     // ... filter to delete one RoutineExercisePivot
     *   }
     * })
     * 
     */
    delete<T extends RoutineExercisePivotDeleteArgs>(args: SelectSubset<T, RoutineExercisePivotDeleteArgs<ExtArgs>>): Prisma__RoutineExercisePivotClient<$Result.GetResult<Prisma.$RoutineExercisePivotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoutineExercisePivot.
     * @param {RoutineExercisePivotUpdateArgs} args - Arguments to update one RoutineExercisePivot.
     * @example
     * // Update one RoutineExercisePivot
     * const routineExercisePivot = await prisma.routineExercisePivot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineExercisePivotUpdateArgs>(args: SelectSubset<T, RoutineExercisePivotUpdateArgs<ExtArgs>>): Prisma__RoutineExercisePivotClient<$Result.GetResult<Prisma.$RoutineExercisePivotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoutineExercisePivots.
     * @param {RoutineExercisePivotDeleteManyArgs} args - Arguments to filter RoutineExercisePivots to delete.
     * @example
     * // Delete a few RoutineExercisePivots
     * const { count } = await prisma.routineExercisePivot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineExercisePivotDeleteManyArgs>(args?: SelectSubset<T, RoutineExercisePivotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineExercisePivots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExercisePivotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutineExercisePivots
     * const routineExercisePivot = await prisma.routineExercisePivot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineExercisePivotUpdateManyArgs>(args: SelectSubset<T, RoutineExercisePivotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoutineExercisePivot.
     * @param {RoutineExercisePivotUpsertArgs} args - Arguments to update or create a RoutineExercisePivot.
     * @example
     * // Update or create a RoutineExercisePivot
     * const routineExercisePivot = await prisma.routineExercisePivot.upsert({
     *   create: {
     *     // ... data to create a RoutineExercisePivot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutineExercisePivot we want to update
     *   }
     * })
     */
    upsert<T extends RoutineExercisePivotUpsertArgs>(args: SelectSubset<T, RoutineExercisePivotUpsertArgs<ExtArgs>>): Prisma__RoutineExercisePivotClient<$Result.GetResult<Prisma.$RoutineExercisePivotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoutineExercisePivots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExercisePivotCountArgs} args - Arguments to filter RoutineExercisePivots to count.
     * @example
     * // Count the number of RoutineExercisePivots
     * const count = await prisma.routineExercisePivot.count({
     *   where: {
     *     // ... the filter for the RoutineExercisePivots we want to count
     *   }
     * })
    **/
    count<T extends RoutineExercisePivotCountArgs>(
      args?: Subset<T, RoutineExercisePivotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineExercisePivotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutineExercisePivot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExercisePivotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineExercisePivotAggregateArgs>(args: Subset<T, RoutineExercisePivotAggregateArgs>): Prisma.PrismaPromise<GetRoutineExercisePivotAggregateType<T>>

    /**
     * Group by RoutineExercisePivot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineExercisePivotGroupByArgs} args - Group by arguments.
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
      T extends RoutineExercisePivotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineExercisePivotGroupByArgs['orderBy'] }
        : { orderBy?: RoutineExercisePivotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineExercisePivotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineExercisePivotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutineExercisePivot model
   */
  readonly fields: RoutineExercisePivotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutineExercisePivot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineExercisePivotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routine<T extends RoutineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoutineDefaultArgs<ExtArgs>>): Prisma__RoutineClient<$Result.GetResult<Prisma.$RoutinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exercise<T extends ExerciseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExerciseDefaultArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoutineExercisePivot model
   */
  interface RoutineExercisePivotFieldRefs {
    readonly id: FieldRef<"RoutineExercisePivot", 'Int'>
    readonly routineId: FieldRef<"RoutineExercisePivot", 'Int'>
    readonly exerciseId: FieldRef<"RoutineExercisePivot", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RoutineExercisePivot findUnique
   */
  export type RoutineExercisePivotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercisePivot to fetch.
     */
    where: RoutineExercisePivotWhereUniqueInput
  }

  /**
   * RoutineExercisePivot findUniqueOrThrow
   */
  export type RoutineExercisePivotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercisePivot to fetch.
     */
    where: RoutineExercisePivotWhereUniqueInput
  }

  /**
   * RoutineExercisePivot findFirst
   */
  export type RoutineExercisePivotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercisePivot to fetch.
     */
    where?: RoutineExercisePivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercisePivots to fetch.
     */
    orderBy?: RoutineExercisePivotOrderByWithRelationInput | RoutineExercisePivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineExercisePivots.
     */
    cursor?: RoutineExercisePivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercisePivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercisePivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineExercisePivots.
     */
    distinct?: RoutineExercisePivotScalarFieldEnum | RoutineExercisePivotScalarFieldEnum[]
  }

  /**
   * RoutineExercisePivot findFirstOrThrow
   */
  export type RoutineExercisePivotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercisePivot to fetch.
     */
    where?: RoutineExercisePivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercisePivots to fetch.
     */
    orderBy?: RoutineExercisePivotOrderByWithRelationInput | RoutineExercisePivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineExercisePivots.
     */
    cursor?: RoutineExercisePivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercisePivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercisePivots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineExercisePivots.
     */
    distinct?: RoutineExercisePivotScalarFieldEnum | RoutineExercisePivotScalarFieldEnum[]
  }

  /**
   * RoutineExercisePivot findMany
   */
  export type RoutineExercisePivotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
    /**
     * Filter, which RoutineExercisePivots to fetch.
     */
    where?: RoutineExercisePivotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineExercisePivots to fetch.
     */
    orderBy?: RoutineExercisePivotOrderByWithRelationInput | RoutineExercisePivotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutineExercisePivots.
     */
    cursor?: RoutineExercisePivotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineExercisePivots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineExercisePivots.
     */
    skip?: number
    distinct?: RoutineExercisePivotScalarFieldEnum | RoutineExercisePivotScalarFieldEnum[]
  }

  /**
   * RoutineExercisePivot create
   */
  export type RoutineExercisePivotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutineExercisePivot.
     */
    data: XOR<RoutineExercisePivotCreateInput, RoutineExercisePivotUncheckedCreateInput>
  }

  /**
   * RoutineExercisePivot createMany
   */
  export type RoutineExercisePivotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutineExercisePivots.
     */
    data: RoutineExercisePivotCreateManyInput | RoutineExercisePivotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoutineExercisePivot update
   */
  export type RoutineExercisePivotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutineExercisePivot.
     */
    data: XOR<RoutineExercisePivotUpdateInput, RoutineExercisePivotUncheckedUpdateInput>
    /**
     * Choose, which RoutineExercisePivot to update.
     */
    where: RoutineExercisePivotWhereUniqueInput
  }

  /**
   * RoutineExercisePivot updateMany
   */
  export type RoutineExercisePivotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutineExercisePivots.
     */
    data: XOR<RoutineExercisePivotUpdateManyMutationInput, RoutineExercisePivotUncheckedUpdateManyInput>
    /**
     * Filter which RoutineExercisePivots to update
     */
    where?: RoutineExercisePivotWhereInput
    /**
     * Limit how many RoutineExercisePivots to update.
     */
    limit?: number
  }

  /**
   * RoutineExercisePivot upsert
   */
  export type RoutineExercisePivotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutineExercisePivot to update in case it exists.
     */
    where: RoutineExercisePivotWhereUniqueInput
    /**
     * In case the RoutineExercisePivot found by the `where` argument doesn't exist, create a new RoutineExercisePivot with this data.
     */
    create: XOR<RoutineExercisePivotCreateInput, RoutineExercisePivotUncheckedCreateInput>
    /**
     * In case the RoutineExercisePivot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineExercisePivotUpdateInput, RoutineExercisePivotUncheckedUpdateInput>
  }

  /**
   * RoutineExercisePivot delete
   */
  export type RoutineExercisePivotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
    /**
     * Filter which RoutineExercisePivot to delete.
     */
    where: RoutineExercisePivotWhereUniqueInput
  }

  /**
   * RoutineExercisePivot deleteMany
   */
  export type RoutineExercisePivotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineExercisePivots to delete
     */
    where?: RoutineExercisePivotWhereInput
    /**
     * Limit how many RoutineExercisePivots to delete.
     */
    limit?: number
  }

  /**
   * RoutineExercisePivot without action
   */
  export type RoutineExercisePivotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineExercisePivot
     */
    select?: RoutineExercisePivotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineExercisePivot
     */
    omit?: RoutineExercisePivotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineExercisePivotInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    address: 'address',
    user_name: 'user_name',
    email: 'email',
    password: 'password',
    gender: 'gender',
    age: 'age',
    height: 'height',
    weight: 'weight',
    bmi: 'bmi',
    activity_level: 'activity_level',
    user_type: 'user_type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoutineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoutineScalarFieldEnum = (typeof RoutineScalarFieldEnum)[keyof typeof RoutineScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    duration: 'duration',
    intensity: 'intensity',
    volumn: 'volumn',
    set: 'set',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const UserSportsScalarFieldEnum: {
    id: 'id',
    sportId: 'sportId',
    sport_name: 'sport_name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSportsScalarFieldEnum = (typeof UserSportsScalarFieldEnum)[keyof typeof UserSportsScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    with_out_equipment: 'with_out_equipment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const UserBadgesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bardgeId: 'bardgeId',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type UserBadgesScalarFieldEnum = (typeof UserBadgesScalarFieldEnum)[keyof typeof UserBadgesScalarFieldEnum]


  export const BadgesScalarFieldEnum: {
    badgeId: 'badgeId',
    name: 'name',
    description: 'description',
    requirement_type: 'requirement_type',
    requirement_value: 'requirement_value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BadgesScalarFieldEnum = (typeof BadgesScalarFieldEnum)[keyof typeof BadgesScalarFieldEnum]


  export const UserSportPivotScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sportId: 'sportId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSportPivotScalarFieldEnum = (typeof UserSportPivotScalarFieldEnum)[keyof typeof UserSportPivotScalarFieldEnum]


  export const RoutineWorkoutPivotScalarFieldEnum: {
    id: 'id',
    routineId: 'routineId',
    workoutId: 'workoutId'
  };

  export type RoutineWorkoutPivotScalarFieldEnum = (typeof RoutineWorkoutPivotScalarFieldEnum)[keyof typeof RoutineWorkoutPivotScalarFieldEnum]


  export const WorkoutExercisePivotScalarFieldEnum: {
    id: 'id',
    workoutId: 'workoutId',
    exerciseId: 'exerciseId'
  };

  export type WorkoutExercisePivotScalarFieldEnum = (typeof WorkoutExercisePivotScalarFieldEnum)[keyof typeof WorkoutExercisePivotScalarFieldEnum]


  export const RoutineExercisePivotScalarFieldEnum: {
    id: 'id',
    routineId: 'routineId',
    exerciseId: 'exerciseId'
  };

  export type RoutineExercisePivotScalarFieldEnum = (typeof RoutineExercisePivotScalarFieldEnum)[keyof typeof RoutineExercisePivotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name',
    address: 'address',
    user_name: 'user_name',
    email: 'email',
    password: 'password',
    gender: 'gender',
    user_type: 'user_type'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoutineOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type RoutineOrderByRelevanceFieldEnum = (typeof RoutineOrderByRelevanceFieldEnum)[keyof typeof RoutineOrderByRelevanceFieldEnum]


  export const WorkoutOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type WorkoutOrderByRelevanceFieldEnum = (typeof WorkoutOrderByRelevanceFieldEnum)[keyof typeof WorkoutOrderByRelevanceFieldEnum]


  export const UserSportsOrderByRelevanceFieldEnum: {
    sport_name: 'sport_name'
  };

  export type UserSportsOrderByRelevanceFieldEnum = (typeof UserSportsOrderByRelevanceFieldEnum)[keyof typeof UserSportsOrderByRelevanceFieldEnum]


  export const ExerciseOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category'
  };

  export type ExerciseOrderByRelevanceFieldEnum = (typeof ExerciseOrderByRelevanceFieldEnum)[keyof typeof ExerciseOrderByRelevanceFieldEnum]


  export const BadgesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    requirement_type: 'requirement_type'
  };

  export type BadgesOrderByRelevanceFieldEnum = (typeof BadgesOrderByRelevanceFieldEnum)[keyof typeof BadgesOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    user_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    height?: FloatFilter<"User"> | number
    weight?: FloatFilter<"User"> | number
    bmi?: FloatFilter<"User"> | number
    activity_level?: IntFilter<"User"> | number
    user_type?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    preferred_sports?: UserSportPivotListRelationFilter
    workouts?: WorkoutListRelationFilter
    routines?: RoutineListRelationFilter
    userBadges?: UserBadgesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bmi?: SortOrder
    activity_level?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    preferred_sports?: UserSportPivotOrderByRelationAggregateInput
    workouts?: WorkoutOrderByRelationAggregateInput
    routines?: RoutineOrderByRelationAggregateInput
    userBadges?: UserBadgesOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    user_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    height?: FloatFilter<"User"> | number
    weight?: FloatFilter<"User"> | number
    bmi?: FloatFilter<"User"> | number
    activity_level?: IntFilter<"User"> | number
    user_type?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    preferred_sports?: UserSportPivotListRelationFilter
    workouts?: WorkoutListRelationFilter
    routines?: RoutineListRelationFilter
    userBadges?: UserBadgesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bmi?: SortOrder
    activity_level?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    user_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
    age?: IntWithAggregatesFilter<"User"> | number
    height?: FloatWithAggregatesFilter<"User"> | number
    weight?: FloatWithAggregatesFilter<"User"> | number
    bmi?: FloatWithAggregatesFilter<"User"> | number
    activity_level?: IntWithAggregatesFilter<"User"> | number
    user_type?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoutineWhereInput = {
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    id?: IntFilter<"Routine"> | number
    name?: StringFilter<"Routine"> | string
    description?: StringFilter<"Routine"> | string
    userId?: IntFilter<"Routine"> | number
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workouts?: RoutineWorkoutPivotListRelationFilter
    RoutineExercisePivot?: RoutineExercisePivotListRelationFilter
  }

  export type RoutineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    workouts?: RoutineWorkoutPivotOrderByRelationAggregateInput
    RoutineExercisePivot?: RoutineExercisePivotOrderByRelationAggregateInput
    _relevance?: RoutineOrderByRelevanceInput
  }

  export type RoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoutineWhereInput | RoutineWhereInput[]
    OR?: RoutineWhereInput[]
    NOT?: RoutineWhereInput | RoutineWhereInput[]
    name?: StringFilter<"Routine"> | string
    description?: StringFilter<"Routine"> | string
    userId?: IntFilter<"Routine"> | number
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workouts?: RoutineWorkoutPivotListRelationFilter
    RoutineExercisePivot?: RoutineExercisePivotListRelationFilter
  }, "id">

  export type RoutineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoutineCountOrderByAggregateInput
    _avg?: RoutineAvgOrderByAggregateInput
    _max?: RoutineMaxOrderByAggregateInput
    _min?: RoutineMinOrderByAggregateInput
    _sum?: RoutineSumOrderByAggregateInput
  }

  export type RoutineScalarWhereWithAggregatesInput = {
    AND?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    OR?: RoutineScalarWhereWithAggregatesInput[]
    NOT?: RoutineScalarWhereWithAggregatesInput | RoutineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Routine"> | number
    name?: StringWithAggregatesFilter<"Routine"> | string
    description?: StringWithAggregatesFilter<"Routine"> | string
    userId?: IntWithAggregatesFilter<"Routine"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Routine"> | Date | string
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: IntFilter<"Workout"> | number
    userId?: IntFilter<"Workout"> | number
    name?: StringFilter<"Workout"> | string
    description?: StringFilter<"Workout"> | string
    duration?: IntFilter<"Workout"> | number
    intensity?: IntFilter<"Workout"> | number
    volumn?: IntFilter<"Workout"> | number
    set?: IntFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    RoutineWorkoutPivot?: RoutineWorkoutPivotListRelationFilter
    exercises?: WorkoutExercisePivotListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    volumn?: SortOrder
    set?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    RoutineWorkoutPivot?: RoutineWorkoutPivotOrderByRelationAggregateInput
    exercises?: WorkoutExercisePivotOrderByRelationAggregateInput
    _relevance?: WorkoutOrderByRelevanceInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    userId?: IntFilter<"Workout"> | number
    name?: StringFilter<"Workout"> | string
    description?: StringFilter<"Workout"> | string
    duration?: IntFilter<"Workout"> | number
    intensity?: IntFilter<"Workout"> | number
    volumn?: IntFilter<"Workout"> | number
    set?: IntFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    RoutineWorkoutPivot?: RoutineWorkoutPivotListRelationFilter
    exercises?: WorkoutExercisePivotListRelationFilter
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    volumn?: SortOrder
    set?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workout"> | number
    userId?: IntWithAggregatesFilter<"Workout"> | number
    name?: StringWithAggregatesFilter<"Workout"> | string
    description?: StringWithAggregatesFilter<"Workout"> | string
    duration?: IntWithAggregatesFilter<"Workout"> | number
    intensity?: IntWithAggregatesFilter<"Workout"> | number
    volumn?: IntWithAggregatesFilter<"Workout"> | number
    set?: IntWithAggregatesFilter<"Workout"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
  }

  export type UserSportsWhereInput = {
    AND?: UserSportsWhereInput | UserSportsWhereInput[]
    OR?: UserSportsWhereInput[]
    NOT?: UserSportsWhereInput | UserSportsWhereInput[]
    id?: IntFilter<"UserSports"> | number
    sportId?: IntFilter<"UserSports"> | number
    sport_name?: StringFilter<"UserSports"> | string
    createdAt?: DateTimeFilter<"UserSports"> | Date | string
    updatedAt?: DateTimeFilter<"UserSports"> | Date | string
    users?: UserSportPivotListRelationFilter
  }

  export type UserSportsOrderByWithRelationInput = {
    id?: SortOrder
    sportId?: SortOrder
    sport_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserSportPivotOrderByRelationAggregateInput
    _relevance?: UserSportsOrderByRelevanceInput
  }

  export type UserSportsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserSportsWhereInput | UserSportsWhereInput[]
    OR?: UserSportsWhereInput[]
    NOT?: UserSportsWhereInput | UserSportsWhereInput[]
    sportId?: IntFilter<"UserSports"> | number
    sport_name?: StringFilter<"UserSports"> | string
    createdAt?: DateTimeFilter<"UserSports"> | Date | string
    updatedAt?: DateTimeFilter<"UserSports"> | Date | string
    users?: UserSportPivotListRelationFilter
  }, "id">

  export type UserSportsOrderByWithAggregationInput = {
    id?: SortOrder
    sportId?: SortOrder
    sport_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSportsCountOrderByAggregateInput
    _avg?: UserSportsAvgOrderByAggregateInput
    _max?: UserSportsMaxOrderByAggregateInput
    _min?: UserSportsMinOrderByAggregateInput
    _sum?: UserSportsSumOrderByAggregateInput
  }

  export type UserSportsScalarWhereWithAggregatesInput = {
    AND?: UserSportsScalarWhereWithAggregatesInput | UserSportsScalarWhereWithAggregatesInput[]
    OR?: UserSportsScalarWhereWithAggregatesInput[]
    NOT?: UserSportsScalarWhereWithAggregatesInput | UserSportsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSports"> | number
    sportId?: IntWithAggregatesFilter<"UserSports"> | number
    sport_name?: StringWithAggregatesFilter<"UserSports"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserSports"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSports"> | Date | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: IntFilter<"Exercise"> | number
    name?: StringFilter<"Exercise"> | string
    description?: StringFilter<"Exercise"> | string
    category?: StringFilter<"Exercise"> | string
    with_out_equipment?: BoolFilter<"Exercise"> | boolean
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    WorkoutExercisePivot?: WorkoutExercisePivotListRelationFilter
    RoutineExercisePivot?: RoutineExercisePivotListRelationFilter
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    with_out_equipment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    WorkoutExercisePivot?: WorkoutExercisePivotOrderByRelationAggregateInput
    RoutineExercisePivot?: RoutineExercisePivotOrderByRelationAggregateInput
    _relevance?: ExerciseOrderByRelevanceInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    name?: StringFilter<"Exercise"> | string
    description?: StringFilter<"Exercise"> | string
    category?: StringFilter<"Exercise"> | string
    with_out_equipment?: BoolFilter<"Exercise"> | boolean
    createdAt?: DateTimeFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeFilter<"Exercise"> | Date | string
    WorkoutExercisePivot?: WorkoutExercisePivotListRelationFilter
    RoutineExercisePivot?: RoutineExercisePivotListRelationFilter
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    with_out_equipment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exercise"> | number
    name?: StringWithAggregatesFilter<"Exercise"> | string
    description?: StringWithAggregatesFilter<"Exercise"> | string
    category?: StringWithAggregatesFilter<"Exercise"> | string
    with_out_equipment?: BoolWithAggregatesFilter<"Exercise"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exercise"> | Date | string
  }

  export type UserBadgesWhereInput = {
    AND?: UserBadgesWhereInput | UserBadgesWhereInput[]
    OR?: UserBadgesWhereInput[]
    NOT?: UserBadgesWhereInput | UserBadgesWhereInput[]
    id?: IntFilter<"UserBadges"> | number
    userId?: IntFilter<"UserBadges"> | number
    bardgeId?: IntFilter<"UserBadges"> | number
    createAt?: DateTimeFilter<"UserBadges"> | Date | string
    updatedAt?: DateTimeFilter<"UserBadges"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgesScalarRelationFilter, BadgesWhereInput>
  }

  export type UserBadgesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bardgeId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    badge?: BadgesOrderByWithRelationInput
  }

  export type UserBadgesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserBadgesWhereInput | UserBadgesWhereInput[]
    OR?: UserBadgesWhereInput[]
    NOT?: UserBadgesWhereInput | UserBadgesWhereInput[]
    userId?: IntFilter<"UserBadges"> | number
    bardgeId?: IntFilter<"UserBadges"> | number
    createAt?: DateTimeFilter<"UserBadges"> | Date | string
    updatedAt?: DateTimeFilter<"UserBadges"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    badge?: XOR<BadgesScalarRelationFilter, BadgesWhereInput>
  }, "id">

  export type UserBadgesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bardgeId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserBadgesCountOrderByAggregateInput
    _avg?: UserBadgesAvgOrderByAggregateInput
    _max?: UserBadgesMaxOrderByAggregateInput
    _min?: UserBadgesMinOrderByAggregateInput
    _sum?: UserBadgesSumOrderByAggregateInput
  }

  export type UserBadgesScalarWhereWithAggregatesInput = {
    AND?: UserBadgesScalarWhereWithAggregatesInput | UserBadgesScalarWhereWithAggregatesInput[]
    OR?: UserBadgesScalarWhereWithAggregatesInput[]
    NOT?: UserBadgesScalarWhereWithAggregatesInput | UserBadgesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserBadges"> | number
    userId?: IntWithAggregatesFilter<"UserBadges"> | number
    bardgeId?: IntWithAggregatesFilter<"UserBadges"> | number
    createAt?: DateTimeWithAggregatesFilter<"UserBadges"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserBadges"> | Date | string
  }

  export type BadgesWhereInput = {
    AND?: BadgesWhereInput | BadgesWhereInput[]
    OR?: BadgesWhereInput[]
    NOT?: BadgesWhereInput | BadgesWhereInput[]
    badgeId?: IntFilter<"Badges"> | number
    name?: StringFilter<"Badges"> | string
    description?: StringFilter<"Badges"> | string
    requirement_type?: StringFilter<"Badges"> | string
    requirement_value?: IntFilter<"Badges"> | number
    createdAt?: DateTimeFilter<"Badges"> | Date | string
    updatedAt?: DateTimeFilter<"Badges"> | Date | string
    userBadges?: UserBadgesListRelationFilter
  }

  export type BadgesOrderByWithRelationInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requirement_type?: SortOrder
    requirement_value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userBadges?: UserBadgesOrderByRelationAggregateInput
    _relevance?: BadgesOrderByRelevanceInput
  }

  export type BadgesWhereUniqueInput = Prisma.AtLeast<{
    badgeId?: number
    AND?: BadgesWhereInput | BadgesWhereInput[]
    OR?: BadgesWhereInput[]
    NOT?: BadgesWhereInput | BadgesWhereInput[]
    name?: StringFilter<"Badges"> | string
    description?: StringFilter<"Badges"> | string
    requirement_type?: StringFilter<"Badges"> | string
    requirement_value?: IntFilter<"Badges"> | number
    createdAt?: DateTimeFilter<"Badges"> | Date | string
    updatedAt?: DateTimeFilter<"Badges"> | Date | string
    userBadges?: UserBadgesListRelationFilter
  }, "badgeId">

  export type BadgesOrderByWithAggregationInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requirement_type?: SortOrder
    requirement_value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BadgesCountOrderByAggregateInput
    _avg?: BadgesAvgOrderByAggregateInput
    _max?: BadgesMaxOrderByAggregateInput
    _min?: BadgesMinOrderByAggregateInput
    _sum?: BadgesSumOrderByAggregateInput
  }

  export type BadgesScalarWhereWithAggregatesInput = {
    AND?: BadgesScalarWhereWithAggregatesInput | BadgesScalarWhereWithAggregatesInput[]
    OR?: BadgesScalarWhereWithAggregatesInput[]
    NOT?: BadgesScalarWhereWithAggregatesInput | BadgesScalarWhereWithAggregatesInput[]
    badgeId?: IntWithAggregatesFilter<"Badges"> | number
    name?: StringWithAggregatesFilter<"Badges"> | string
    description?: StringWithAggregatesFilter<"Badges"> | string
    requirement_type?: StringWithAggregatesFilter<"Badges"> | string
    requirement_value?: IntWithAggregatesFilter<"Badges"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Badges"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Badges"> | Date | string
  }

  export type UserSportPivotWhereInput = {
    AND?: UserSportPivotWhereInput | UserSportPivotWhereInput[]
    OR?: UserSportPivotWhereInput[]
    NOT?: UserSportPivotWhereInput | UserSportPivotWhereInput[]
    id?: IntFilter<"UserSportPivot"> | number
    userId?: IntFilter<"UserSportPivot"> | number
    sportId?: IntFilter<"UserSportPivot"> | number
    createdAt?: DateTimeFilter<"UserSportPivot"> | Date | string
    updatedAt?: DateTimeFilter<"UserSportPivot"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<UserSportsScalarRelationFilter, UserSportsWhereInput>
  }

  export type UserSportPivotOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sport?: UserSportsOrderByWithRelationInput
  }

  export type UserSportPivotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserSportPivotWhereInput | UserSportPivotWhereInput[]
    OR?: UserSportPivotWhereInput[]
    NOT?: UserSportPivotWhereInput | UserSportPivotWhereInput[]
    userId?: IntFilter<"UserSportPivot"> | number
    sportId?: IntFilter<"UserSportPivot"> | number
    createdAt?: DateTimeFilter<"UserSportPivot"> | Date | string
    updatedAt?: DateTimeFilter<"UserSportPivot"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sport?: XOR<UserSportsScalarRelationFilter, UserSportsWhereInput>
  }, "id">

  export type UserSportPivotOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSportPivotCountOrderByAggregateInput
    _avg?: UserSportPivotAvgOrderByAggregateInput
    _max?: UserSportPivotMaxOrderByAggregateInput
    _min?: UserSportPivotMinOrderByAggregateInput
    _sum?: UserSportPivotSumOrderByAggregateInput
  }

  export type UserSportPivotScalarWhereWithAggregatesInput = {
    AND?: UserSportPivotScalarWhereWithAggregatesInput | UserSportPivotScalarWhereWithAggregatesInput[]
    OR?: UserSportPivotScalarWhereWithAggregatesInput[]
    NOT?: UserSportPivotScalarWhereWithAggregatesInput | UserSportPivotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSportPivot"> | number
    userId?: IntWithAggregatesFilter<"UserSportPivot"> | number
    sportId?: IntWithAggregatesFilter<"UserSportPivot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserSportPivot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSportPivot"> | Date | string
  }

  export type RoutineWorkoutPivotWhereInput = {
    AND?: RoutineWorkoutPivotWhereInput | RoutineWorkoutPivotWhereInput[]
    OR?: RoutineWorkoutPivotWhereInput[]
    NOT?: RoutineWorkoutPivotWhereInput | RoutineWorkoutPivotWhereInput[]
    id?: IntFilter<"RoutineWorkoutPivot"> | number
    routineId?: IntFilter<"RoutineWorkoutPivot"> | number
    workoutId?: IntFilter<"RoutineWorkoutPivot"> | number
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
  }

  export type RoutineWorkoutPivotOrderByWithRelationInput = {
    id?: SortOrder
    routineId?: SortOrder
    workoutId?: SortOrder
    routine?: RoutineOrderByWithRelationInput
    workout?: WorkoutOrderByWithRelationInput
  }

  export type RoutineWorkoutPivotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoutineWorkoutPivotWhereInput | RoutineWorkoutPivotWhereInput[]
    OR?: RoutineWorkoutPivotWhereInput[]
    NOT?: RoutineWorkoutPivotWhereInput | RoutineWorkoutPivotWhereInput[]
    routineId?: IntFilter<"RoutineWorkoutPivot"> | number
    workoutId?: IntFilter<"RoutineWorkoutPivot"> | number
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
  }, "id">

  export type RoutineWorkoutPivotOrderByWithAggregationInput = {
    id?: SortOrder
    routineId?: SortOrder
    workoutId?: SortOrder
    _count?: RoutineWorkoutPivotCountOrderByAggregateInput
    _avg?: RoutineWorkoutPivotAvgOrderByAggregateInput
    _max?: RoutineWorkoutPivotMaxOrderByAggregateInput
    _min?: RoutineWorkoutPivotMinOrderByAggregateInput
    _sum?: RoutineWorkoutPivotSumOrderByAggregateInput
  }

  export type RoutineWorkoutPivotScalarWhereWithAggregatesInput = {
    AND?: RoutineWorkoutPivotScalarWhereWithAggregatesInput | RoutineWorkoutPivotScalarWhereWithAggregatesInput[]
    OR?: RoutineWorkoutPivotScalarWhereWithAggregatesInput[]
    NOT?: RoutineWorkoutPivotScalarWhereWithAggregatesInput | RoutineWorkoutPivotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoutineWorkoutPivot"> | number
    routineId?: IntWithAggregatesFilter<"RoutineWorkoutPivot"> | number
    workoutId?: IntWithAggregatesFilter<"RoutineWorkoutPivot"> | number
  }

  export type WorkoutExercisePivotWhereInput = {
    AND?: WorkoutExercisePivotWhereInput | WorkoutExercisePivotWhereInput[]
    OR?: WorkoutExercisePivotWhereInput[]
    NOT?: WorkoutExercisePivotWhereInput | WorkoutExercisePivotWhereInput[]
    id?: IntFilter<"WorkoutExercisePivot"> | number
    workoutId?: IntFilter<"WorkoutExercisePivot"> | number
    exerciseId?: IntFilter<"WorkoutExercisePivot"> | number
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type WorkoutExercisePivotOrderByWithRelationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    workout?: WorkoutOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type WorkoutExercisePivotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    workoutId_exerciseId?: WorkoutExercisePivotWorkoutIdExerciseIdCompoundUniqueInput
    AND?: WorkoutExercisePivotWhereInput | WorkoutExercisePivotWhereInput[]
    OR?: WorkoutExercisePivotWhereInput[]
    NOT?: WorkoutExercisePivotWhereInput | WorkoutExercisePivotWhereInput[]
    workoutId?: IntFilter<"WorkoutExercisePivot"> | number
    exerciseId?: IntFilter<"WorkoutExercisePivot"> | number
    workout?: XOR<WorkoutScalarRelationFilter, WorkoutWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id" | "workoutId_exerciseId">

  export type WorkoutExercisePivotOrderByWithAggregationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
    _count?: WorkoutExercisePivotCountOrderByAggregateInput
    _avg?: WorkoutExercisePivotAvgOrderByAggregateInput
    _max?: WorkoutExercisePivotMaxOrderByAggregateInput
    _min?: WorkoutExercisePivotMinOrderByAggregateInput
    _sum?: WorkoutExercisePivotSumOrderByAggregateInput
  }

  export type WorkoutExercisePivotScalarWhereWithAggregatesInput = {
    AND?: WorkoutExercisePivotScalarWhereWithAggregatesInput | WorkoutExercisePivotScalarWhereWithAggregatesInput[]
    OR?: WorkoutExercisePivotScalarWhereWithAggregatesInput[]
    NOT?: WorkoutExercisePivotScalarWhereWithAggregatesInput | WorkoutExercisePivotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkoutExercisePivot"> | number
    workoutId?: IntWithAggregatesFilter<"WorkoutExercisePivot"> | number
    exerciseId?: IntWithAggregatesFilter<"WorkoutExercisePivot"> | number
  }

  export type RoutineExercisePivotWhereInput = {
    AND?: RoutineExercisePivotWhereInput | RoutineExercisePivotWhereInput[]
    OR?: RoutineExercisePivotWhereInput[]
    NOT?: RoutineExercisePivotWhereInput | RoutineExercisePivotWhereInput[]
    id?: IntFilter<"RoutineExercisePivot"> | number
    routineId?: IntFilter<"RoutineExercisePivot"> | number
    exerciseId?: IntFilter<"RoutineExercisePivot"> | number
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }

  export type RoutineExercisePivotOrderByWithRelationInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    routine?: RoutineOrderByWithRelationInput
    exercise?: ExerciseOrderByWithRelationInput
  }

  export type RoutineExercisePivotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    routineId_exerciseId?: RoutineExercisePivotRoutineIdExerciseIdCompoundUniqueInput
    AND?: RoutineExercisePivotWhereInput | RoutineExercisePivotWhereInput[]
    OR?: RoutineExercisePivotWhereInput[]
    NOT?: RoutineExercisePivotWhereInput | RoutineExercisePivotWhereInput[]
    routineId?: IntFilter<"RoutineExercisePivot"> | number
    exerciseId?: IntFilter<"RoutineExercisePivot"> | number
    routine?: XOR<RoutineScalarRelationFilter, RoutineWhereInput>
    exercise?: XOR<ExerciseScalarRelationFilter, ExerciseWhereInput>
  }, "id" | "routineId_exerciseId">

  export type RoutineExercisePivotOrderByWithAggregationInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
    _count?: RoutineExercisePivotCountOrderByAggregateInput
    _avg?: RoutineExercisePivotAvgOrderByAggregateInput
    _max?: RoutineExercisePivotMaxOrderByAggregateInput
    _min?: RoutineExercisePivotMinOrderByAggregateInput
    _sum?: RoutineExercisePivotSumOrderByAggregateInput
  }

  export type RoutineExercisePivotScalarWhereWithAggregatesInput = {
    AND?: RoutineExercisePivotScalarWhereWithAggregatesInput | RoutineExercisePivotScalarWhereWithAggregatesInput[]
    OR?: RoutineExercisePivotScalarWhereWithAggregatesInput[]
    NOT?: RoutineExercisePivotScalarWhereWithAggregatesInput | RoutineExercisePivotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoutineExercisePivot"> | number
    routineId?: IntWithAggregatesFilter<"RoutineExercisePivot"> | number
    exerciseId?: IntWithAggregatesFilter<"RoutineExercisePivot"> | number
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferred_sports?: UserSportPivotCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    userBadges?: UserBadgesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferred_sports?: UserSportPivotUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferred_sports?: UserSportPivotUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferred_sports?: UserSportPivotUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutinesInput
    workouts?: RoutineWorkoutPivotCreateNestedManyWithoutRoutineInput
    RoutineExercisePivot?: RoutineExercisePivotCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: RoutineWorkoutPivotUncheckedCreateNestedManyWithoutRoutineInput
    RoutineExercisePivot?: RoutineExercisePivotUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutinesNestedInput
    workouts?: RoutineWorkoutPivotUpdateManyWithoutRoutineNestedInput
    RoutineExercisePivot?: RoutineExercisePivotUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: RoutineWorkoutPivotUncheckedUpdateManyWithoutRoutineNestedInput
    RoutineExercisePivot?: RoutineExercisePivotUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineCreateManyInput = {
    id?: number
    name: string
    description: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutCreateInput = {
    name: string
    description: string
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkoutsInput
    RoutineWorkoutPivot?: RoutineWorkoutPivotCreateNestedManyWithoutWorkoutInput
    exercises?: WorkoutExercisePivotCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    description: string
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt?: Date | string
    updatedAt?: Date | string
    RoutineWorkoutPivot?: RoutineWorkoutPivotUncheckedCreateNestedManyWithoutWorkoutInput
    exercises?: WorkoutExercisePivotUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: IntFieldUpdateOperationsInput | number
    volumn?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutsNestedInput
    RoutineWorkoutPivot?: RoutineWorkoutPivotUpdateManyWithoutWorkoutNestedInput
    exercises?: WorkoutExercisePivotUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: IntFieldUpdateOperationsInput | number
    volumn?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoutineWorkoutPivot?: RoutineWorkoutPivotUncheckedUpdateManyWithoutWorkoutNestedInput
    exercises?: WorkoutExercisePivotUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: number
    userId: number
    name: string
    description: string
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: IntFieldUpdateOperationsInput | number
    volumn?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: IntFieldUpdateOperationsInput | number
    volumn?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportsCreateInput = {
    sportId: number
    sport_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserSportPivotCreateNestedManyWithoutSportInput
  }

  export type UserSportsUncheckedCreateInput = {
    id?: number
    sportId: number
    sport_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserSportPivotUncheckedCreateNestedManyWithoutSportInput
  }

  export type UserSportsUpdateInput = {
    sportId?: IntFieldUpdateOperationsInput | number
    sport_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserSportPivotUpdateManyWithoutSportNestedInput
  }

  export type UserSportsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    sport_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserSportPivotUncheckedUpdateManyWithoutSportNestedInput
  }

  export type UserSportsCreateManyInput = {
    id?: number
    sportId: number
    sport_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSportsUpdateManyMutationInput = {
    sportId?: IntFieldUpdateOperationsInput | number
    sport_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    sport_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateInput = {
    name: string
    description: string
    category: string
    with_out_equipment: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercisePivot?: WorkoutExercisePivotCreateNestedManyWithoutExerciseInput
    RoutineExercisePivot?: RoutineExercisePivotCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    category: string
    with_out_equipment: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercisePivot?: WorkoutExercisePivotUncheckedCreateNestedManyWithoutExerciseInput
    RoutineExercisePivot?: RoutineExercisePivotUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    with_out_equipment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercisePivot?: WorkoutExercisePivotUpdateManyWithoutExerciseNestedInput
    RoutineExercisePivot?: RoutineExercisePivotUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    with_out_equipment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercisePivot?: WorkoutExercisePivotUncheckedUpdateManyWithoutExerciseNestedInput
    RoutineExercisePivot?: RoutineExercisePivotUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseCreateManyInput = {
    id?: number
    name: string
    description: string
    category: string
    with_out_equipment: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExerciseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    with_out_equipment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    with_out_equipment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgesCreateInput = {
    createAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBadgesInput
    badge: BadgesCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgesUncheckedCreateInput = {
    id?: number
    userId: number
    bardgeId: number
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgesUpdateInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBadgesNestedInput
    badge?: BadgesUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bardgeId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgesCreateManyInput = {
    id?: number
    userId: number
    bardgeId: number
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgesUpdateManyMutationInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bardgeId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgesCreateInput = {
    name: string
    description: string
    requirement_type: string
    requirement_value: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userBadges?: UserBadgesCreateNestedManyWithoutBadgeInput
  }

  export type BadgesUncheckedCreateInput = {
    badgeId?: number
    name: string
    description: string
    requirement_type: string
    requirement_value: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userBadges?: UserBadgesUncheckedCreateNestedManyWithoutBadgeInput
  }

  export type BadgesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement_type?: StringFieldUpdateOperationsInput | string
    requirement_value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgesUpdateManyWithoutBadgeNestedInput
  }

  export type BadgesUncheckedUpdateInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement_type?: StringFieldUpdateOperationsInput | string
    requirement_value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userBadges?: UserBadgesUncheckedUpdateManyWithoutBadgeNestedInput
  }

  export type BadgesCreateManyInput = {
    badgeId?: number
    name: string
    description: string
    requirement_type: string
    requirement_value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement_type?: StringFieldUpdateOperationsInput | string
    requirement_value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgesUncheckedUpdateManyInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement_type?: StringFieldUpdateOperationsInput | string
    requirement_value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportPivotCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferred_sportsInput
    sport: UserSportsCreateNestedOneWithoutUsersInput
  }

  export type UserSportPivotUncheckedCreateInput = {
    id?: number
    userId: number
    sportId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSportPivotUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferred_sportsNestedInput
    sport?: UserSportsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSportPivotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportPivotCreateManyInput = {
    id?: number
    userId: number
    sportId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSportPivotUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportPivotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineWorkoutPivotCreateInput = {
    routine: RoutineCreateNestedOneWithoutWorkoutsInput
    workout: WorkoutCreateNestedOneWithoutRoutineWorkoutPivotInput
  }

  export type RoutineWorkoutPivotUncheckedCreateInput = {
    id?: number
    routineId: number
    workoutId: number
  }

  export type RoutineWorkoutPivotUpdateInput = {
    routine?: RoutineUpdateOneRequiredWithoutWorkoutsNestedInput
    workout?: WorkoutUpdateOneRequiredWithoutRoutineWorkoutPivotNestedInput
  }

  export type RoutineWorkoutPivotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineWorkoutPivotCreateManyInput = {
    id?: number
    routineId: number
    workoutId: number
  }

  export type RoutineWorkoutPivotUpdateManyMutationInput = {

  }

  export type RoutineWorkoutPivotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExercisePivotCreateInput = {
    workout: WorkoutCreateNestedOneWithoutExercisesInput
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisePivotInput
  }

  export type WorkoutExercisePivotUncheckedCreateInput = {
    id?: number
    workoutId: number
    exerciseId: number
  }

  export type WorkoutExercisePivotUpdateInput = {
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisePivotNestedInput
  }

  export type WorkoutExercisePivotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExercisePivotCreateManyInput = {
    id?: number
    workoutId: number
    exerciseId: number
  }

  export type WorkoutExercisePivotUpdateManyMutationInput = {

  }

  export type WorkoutExercisePivotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineExercisePivotCreateInput = {
    routine: RoutineCreateNestedOneWithoutRoutineExercisePivotInput
    exercise: ExerciseCreateNestedOneWithoutRoutineExercisePivotInput
  }

  export type RoutineExercisePivotUncheckedCreateInput = {
    id?: number
    routineId: number
    exerciseId: number
  }

  export type RoutineExercisePivotUpdateInput = {
    routine?: RoutineUpdateOneRequiredWithoutRoutineExercisePivotNestedInput
    exercise?: ExerciseUpdateOneRequiredWithoutRoutineExercisePivotNestedInput
  }

  export type RoutineExercisePivotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineExercisePivotCreateManyInput = {
    id?: number
    routineId: number
    exerciseId: number
  }

  export type RoutineExercisePivotUpdateManyMutationInput = {

  }

  export type RoutineExercisePivotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserSportPivotListRelationFilter = {
    every?: UserSportPivotWhereInput
    some?: UserSportPivotWhereInput
    none?: UserSportPivotWhereInput
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type RoutineListRelationFilter = {
    every?: RoutineWhereInput
    some?: RoutineWhereInput
    none?: RoutineWhereInput
  }

  export type UserBadgesListRelationFilter = {
    every?: UserBadgesWhereInput
    some?: UserBadgesWhereInput
    none?: UserBadgesWhereInput
  }

  export type UserSportPivotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserBadgesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bmi?: SortOrder
    activity_level?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bmi?: SortOrder
    activity_level?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bmi?: SortOrder
    activity_level?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    user_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bmi?: SortOrder
    activity_level?: SortOrder
    user_type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    bmi?: SortOrder
    activity_level?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoutineWorkoutPivotListRelationFilter = {
    every?: RoutineWorkoutPivotWhereInput
    some?: RoutineWorkoutPivotWhereInput
    none?: RoutineWorkoutPivotWhereInput
  }

  export type RoutineExercisePivotListRelationFilter = {
    every?: RoutineExercisePivotWhereInput
    some?: RoutineExercisePivotWhereInput
    none?: RoutineExercisePivotWhereInput
  }

  export type RoutineWorkoutPivotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineExercisePivotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineOrderByRelevanceInput = {
    fields: RoutineOrderByRelevanceFieldEnum | RoutineOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoutineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoutineSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type WorkoutExercisePivotListRelationFilter = {
    every?: WorkoutExercisePivotWhereInput
    some?: WorkoutExercisePivotWhereInput
    none?: WorkoutExercisePivotWhereInput
  }

  export type WorkoutExercisePivotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutOrderByRelevanceInput = {
    fields: WorkoutOrderByRelevanceFieldEnum | WorkoutOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    volumn?: SortOrder
    set?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    volumn?: SortOrder
    set?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    volumn?: SortOrder
    set?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    volumn?: SortOrder
    set?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    volumn?: SortOrder
    set?: SortOrder
  }

  export type UserSportsOrderByRelevanceInput = {
    fields: UserSportsOrderByRelevanceFieldEnum | UserSportsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserSportsCountOrderByAggregateInput = {
    id?: SortOrder
    sportId?: SortOrder
    sport_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSportsAvgOrderByAggregateInput = {
    id?: SortOrder
    sportId?: SortOrder
  }

  export type UserSportsMaxOrderByAggregateInput = {
    id?: SortOrder
    sportId?: SortOrder
    sport_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSportsMinOrderByAggregateInput = {
    id?: SortOrder
    sportId?: SortOrder
    sport_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSportsSumOrderByAggregateInput = {
    id?: SortOrder
    sportId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ExerciseOrderByRelevanceInput = {
    fields: ExerciseOrderByRelevanceFieldEnum | ExerciseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    with_out_equipment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    with_out_equipment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    with_out_equipment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BadgesScalarRelationFilter = {
    is?: BadgesWhereInput
    isNot?: BadgesWhereInput
  }

  export type UserBadgesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bardgeId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBadgesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bardgeId?: SortOrder
  }

  export type UserBadgesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bardgeId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBadgesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bardgeId?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserBadgesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bardgeId?: SortOrder
  }

  export type BadgesOrderByRelevanceInput = {
    fields: BadgesOrderByRelevanceFieldEnum | BadgesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BadgesCountOrderByAggregateInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requirement_type?: SortOrder
    requirement_value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgesAvgOrderByAggregateInput = {
    badgeId?: SortOrder
    requirement_value?: SortOrder
  }

  export type BadgesMaxOrderByAggregateInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requirement_type?: SortOrder
    requirement_value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgesMinOrderByAggregateInput = {
    badgeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    requirement_type?: SortOrder
    requirement_value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BadgesSumOrderByAggregateInput = {
    badgeId?: SortOrder
    requirement_value?: SortOrder
  }

  export type UserSportsScalarRelationFilter = {
    is?: UserSportsWhereInput
    isNot?: UserSportsWhereInput
  }

  export type UserSportPivotCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSportPivotAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
  }

  export type UserSportPivotMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSportPivotMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSportPivotSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sportId?: SortOrder
  }

  export type RoutineScalarRelationFilter = {
    is?: RoutineWhereInput
    isNot?: RoutineWhereInput
  }

  export type WorkoutScalarRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type RoutineWorkoutPivotCountOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    workoutId?: SortOrder
  }

  export type RoutineWorkoutPivotAvgOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    workoutId?: SortOrder
  }

  export type RoutineWorkoutPivotMaxOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    workoutId?: SortOrder
  }

  export type RoutineWorkoutPivotMinOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    workoutId?: SortOrder
  }

  export type RoutineWorkoutPivotSumOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    workoutId?: SortOrder
  }

  export type ExerciseScalarRelationFilter = {
    is?: ExerciseWhereInput
    isNot?: ExerciseWhereInput
  }

  export type WorkoutExercisePivotWorkoutIdExerciseIdCompoundUniqueInput = {
    workoutId: number
    exerciseId: number
  }

  export type WorkoutExercisePivotCountOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
  }

  export type WorkoutExercisePivotAvgOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
  }

  export type WorkoutExercisePivotMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
  }

  export type WorkoutExercisePivotMinOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
  }

  export type WorkoutExercisePivotSumOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    exerciseId?: SortOrder
  }

  export type RoutineExercisePivotRoutineIdExerciseIdCompoundUniqueInput = {
    routineId: number
    exerciseId: number
  }

  export type RoutineExercisePivotCountOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
  }

  export type RoutineExercisePivotAvgOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
  }

  export type RoutineExercisePivotMaxOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
  }

  export type RoutineExercisePivotMinOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
  }

  export type RoutineExercisePivotSumOrderByAggregateInput = {
    id?: SortOrder
    routineId?: SortOrder
    exerciseId?: SortOrder
  }

  export type UserSportPivotCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSportPivotCreateWithoutUserInput, UserSportPivotUncheckedCreateWithoutUserInput> | UserSportPivotCreateWithoutUserInput[] | UserSportPivotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportPivotCreateOrConnectWithoutUserInput | UserSportPivotCreateOrConnectWithoutUserInput[]
    createMany?: UserSportPivotCreateManyUserInputEnvelope
    connect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
  }

  export type WorkoutCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type RoutineCreateNestedManyWithoutUserInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type UserBadgesCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgesCreateWithoutUserInput, UserBadgesUncheckedCreateWithoutUserInput> | UserBadgesCreateWithoutUserInput[] | UserBadgesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgesCreateOrConnectWithoutUserInput | UserBadgesCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgesCreateManyUserInputEnvelope
    connect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
  }

  export type UserSportPivotUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSportPivotCreateWithoutUserInput, UserSportPivotUncheckedCreateWithoutUserInput> | UserSportPivotCreateWithoutUserInput[] | UserSportPivotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportPivotCreateOrConnectWithoutUserInput | UserSportPivotCreateOrConnectWithoutUserInput[]
    createMany?: UserSportPivotCreateManyUserInputEnvelope
    connect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
  }

  export type WorkoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type RoutineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
  }

  export type UserBadgesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserBadgesCreateWithoutUserInput, UserBadgesUncheckedCreateWithoutUserInput> | UserBadgesCreateWithoutUserInput[] | UserBadgesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgesCreateOrConnectWithoutUserInput | UserBadgesCreateOrConnectWithoutUserInput[]
    createMany?: UserBadgesCreateManyUserInputEnvelope
    connect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
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

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserSportPivotUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSportPivotCreateWithoutUserInput, UserSportPivotUncheckedCreateWithoutUserInput> | UserSportPivotCreateWithoutUserInput[] | UserSportPivotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportPivotCreateOrConnectWithoutUserInput | UserSportPivotCreateOrConnectWithoutUserInput[]
    upsert?: UserSportPivotUpsertWithWhereUniqueWithoutUserInput | UserSportPivotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSportPivotCreateManyUserInputEnvelope
    set?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    disconnect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    delete?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    connect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    update?: UserSportPivotUpdateWithWhereUniqueWithoutUserInput | UserSportPivotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSportPivotUpdateManyWithWhereWithoutUserInput | UserSportPivotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSportPivotScalarWhereInput | UserSportPivotScalarWhereInput[]
  }

  export type WorkoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type RoutineUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUserInput | RoutineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUserInput | RoutineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUserInput | RoutineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type UserBadgesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgesCreateWithoutUserInput, UserBadgesUncheckedCreateWithoutUserInput> | UserBadgesCreateWithoutUserInput[] | UserBadgesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgesCreateOrConnectWithoutUserInput | UserBadgesCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgesUpsertWithWhereUniqueWithoutUserInput | UserBadgesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgesCreateManyUserInputEnvelope
    set?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    disconnect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    delete?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    connect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    update?: UserBadgesUpdateWithWhereUniqueWithoutUserInput | UserBadgesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgesUpdateManyWithWhereWithoutUserInput | UserBadgesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgesScalarWhereInput | UserBadgesScalarWhereInput[]
  }

  export type UserSportPivotUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSportPivotCreateWithoutUserInput, UserSportPivotUncheckedCreateWithoutUserInput> | UserSportPivotCreateWithoutUserInput[] | UserSportPivotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSportPivotCreateOrConnectWithoutUserInput | UserSportPivotCreateOrConnectWithoutUserInput[]
    upsert?: UserSportPivotUpsertWithWhereUniqueWithoutUserInput | UserSportPivotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSportPivotCreateManyUserInputEnvelope
    set?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    disconnect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    delete?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    connect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    update?: UserSportPivotUpdateWithWhereUniqueWithoutUserInput | UserSportPivotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSportPivotUpdateManyWithWhereWithoutUserInput | UserSportPivotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSportPivotScalarWhereInput | UserSportPivotScalarWhereInput[]
  }

  export type WorkoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type RoutineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput> | RoutineCreateWithoutUserInput[] | RoutineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoutineCreateOrConnectWithoutUserInput | RoutineCreateOrConnectWithoutUserInput[]
    upsert?: RoutineUpsertWithWhereUniqueWithoutUserInput | RoutineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoutineCreateManyUserInputEnvelope
    set?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    disconnect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    delete?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    connect?: RoutineWhereUniqueInput | RoutineWhereUniqueInput[]
    update?: RoutineUpdateWithWhereUniqueWithoutUserInput | RoutineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoutineUpdateManyWithWhereWithoutUserInput | RoutineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
  }

  export type UserBadgesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserBadgesCreateWithoutUserInput, UserBadgesUncheckedCreateWithoutUserInput> | UserBadgesCreateWithoutUserInput[] | UserBadgesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserBadgesCreateOrConnectWithoutUserInput | UserBadgesCreateOrConnectWithoutUserInput[]
    upsert?: UserBadgesUpsertWithWhereUniqueWithoutUserInput | UserBadgesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserBadgesCreateManyUserInputEnvelope
    set?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    disconnect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    delete?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    connect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    update?: UserBadgesUpdateWithWhereUniqueWithoutUserInput | UserBadgesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserBadgesUpdateManyWithWhereWithoutUserInput | UserBadgesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserBadgesScalarWhereInput | UserBadgesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoutinesInput = {
    create?: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput
    connect?: UserWhereUniqueInput
  }

  export type RoutineWorkoutPivotCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineWorkoutPivotCreateWithoutRoutineInput, RoutineWorkoutPivotUncheckedCreateWithoutRoutineInput> | RoutineWorkoutPivotCreateWithoutRoutineInput[] | RoutineWorkoutPivotUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineWorkoutPivotCreateOrConnectWithoutRoutineInput | RoutineWorkoutPivotCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineWorkoutPivotCreateManyRoutineInputEnvelope
    connect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
  }

  export type RoutineExercisePivotCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineExercisePivotCreateWithoutRoutineInput, RoutineExercisePivotUncheckedCreateWithoutRoutineInput> | RoutineExercisePivotCreateWithoutRoutineInput[] | RoutineExercisePivotUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExercisePivotCreateOrConnectWithoutRoutineInput | RoutineExercisePivotCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineExercisePivotCreateManyRoutineInputEnvelope
    connect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
  }

  export type RoutineWorkoutPivotUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineWorkoutPivotCreateWithoutRoutineInput, RoutineWorkoutPivotUncheckedCreateWithoutRoutineInput> | RoutineWorkoutPivotCreateWithoutRoutineInput[] | RoutineWorkoutPivotUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineWorkoutPivotCreateOrConnectWithoutRoutineInput | RoutineWorkoutPivotCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineWorkoutPivotCreateManyRoutineInputEnvelope
    connect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
  }

  export type RoutineExercisePivotUncheckedCreateNestedManyWithoutRoutineInput = {
    create?: XOR<RoutineExercisePivotCreateWithoutRoutineInput, RoutineExercisePivotUncheckedCreateWithoutRoutineInput> | RoutineExercisePivotCreateWithoutRoutineInput[] | RoutineExercisePivotUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExercisePivotCreateOrConnectWithoutRoutineInput | RoutineExercisePivotCreateOrConnectWithoutRoutineInput[]
    createMany?: RoutineExercisePivotCreateManyRoutineInputEnvelope
    connect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRoutinesNestedInput = {
    create?: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoutinesInput
    upsert?: UserUpsertWithoutRoutinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoutinesInput, UserUpdateWithoutRoutinesInput>, UserUncheckedUpdateWithoutRoutinesInput>
  }

  export type RoutineWorkoutPivotUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineWorkoutPivotCreateWithoutRoutineInput, RoutineWorkoutPivotUncheckedCreateWithoutRoutineInput> | RoutineWorkoutPivotCreateWithoutRoutineInput[] | RoutineWorkoutPivotUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineWorkoutPivotCreateOrConnectWithoutRoutineInput | RoutineWorkoutPivotCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineWorkoutPivotUpsertWithWhereUniqueWithoutRoutineInput | RoutineWorkoutPivotUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineWorkoutPivotCreateManyRoutineInputEnvelope
    set?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    disconnect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    delete?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    connect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    update?: RoutineWorkoutPivotUpdateWithWhereUniqueWithoutRoutineInput | RoutineWorkoutPivotUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineWorkoutPivotUpdateManyWithWhereWithoutRoutineInput | RoutineWorkoutPivotUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineWorkoutPivotScalarWhereInput | RoutineWorkoutPivotScalarWhereInput[]
  }

  export type RoutineExercisePivotUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineExercisePivotCreateWithoutRoutineInput, RoutineExercisePivotUncheckedCreateWithoutRoutineInput> | RoutineExercisePivotCreateWithoutRoutineInput[] | RoutineExercisePivotUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExercisePivotCreateOrConnectWithoutRoutineInput | RoutineExercisePivotCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineExercisePivotUpsertWithWhereUniqueWithoutRoutineInput | RoutineExercisePivotUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineExercisePivotCreateManyRoutineInputEnvelope
    set?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    disconnect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    delete?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    connect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    update?: RoutineExercisePivotUpdateWithWhereUniqueWithoutRoutineInput | RoutineExercisePivotUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineExercisePivotUpdateManyWithWhereWithoutRoutineInput | RoutineExercisePivotUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineExercisePivotScalarWhereInput | RoutineExercisePivotScalarWhereInput[]
  }

  export type RoutineWorkoutPivotUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineWorkoutPivotCreateWithoutRoutineInput, RoutineWorkoutPivotUncheckedCreateWithoutRoutineInput> | RoutineWorkoutPivotCreateWithoutRoutineInput[] | RoutineWorkoutPivotUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineWorkoutPivotCreateOrConnectWithoutRoutineInput | RoutineWorkoutPivotCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineWorkoutPivotUpsertWithWhereUniqueWithoutRoutineInput | RoutineWorkoutPivotUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineWorkoutPivotCreateManyRoutineInputEnvelope
    set?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    disconnect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    delete?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    connect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    update?: RoutineWorkoutPivotUpdateWithWhereUniqueWithoutRoutineInput | RoutineWorkoutPivotUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineWorkoutPivotUpdateManyWithWhereWithoutRoutineInput | RoutineWorkoutPivotUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineWorkoutPivotScalarWhereInput | RoutineWorkoutPivotScalarWhereInput[]
  }

  export type RoutineExercisePivotUncheckedUpdateManyWithoutRoutineNestedInput = {
    create?: XOR<RoutineExercisePivotCreateWithoutRoutineInput, RoutineExercisePivotUncheckedCreateWithoutRoutineInput> | RoutineExercisePivotCreateWithoutRoutineInput[] | RoutineExercisePivotUncheckedCreateWithoutRoutineInput[]
    connectOrCreate?: RoutineExercisePivotCreateOrConnectWithoutRoutineInput | RoutineExercisePivotCreateOrConnectWithoutRoutineInput[]
    upsert?: RoutineExercisePivotUpsertWithWhereUniqueWithoutRoutineInput | RoutineExercisePivotUpsertWithWhereUniqueWithoutRoutineInput[]
    createMany?: RoutineExercisePivotCreateManyRoutineInputEnvelope
    set?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    disconnect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    delete?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    connect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    update?: RoutineExercisePivotUpdateWithWhereUniqueWithoutRoutineInput | RoutineExercisePivotUpdateWithWhereUniqueWithoutRoutineInput[]
    updateMany?: RoutineExercisePivotUpdateManyWithWhereWithoutRoutineInput | RoutineExercisePivotUpdateManyWithWhereWithoutRoutineInput[]
    deleteMany?: RoutineExercisePivotScalarWhereInput | RoutineExercisePivotScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput
    connect?: UserWhereUniqueInput
  }

  export type RoutineWorkoutPivotCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<RoutineWorkoutPivotCreateWithoutWorkoutInput, RoutineWorkoutPivotUncheckedCreateWithoutWorkoutInput> | RoutineWorkoutPivotCreateWithoutWorkoutInput[] | RoutineWorkoutPivotUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: RoutineWorkoutPivotCreateOrConnectWithoutWorkoutInput | RoutineWorkoutPivotCreateOrConnectWithoutWorkoutInput[]
    createMany?: RoutineWorkoutPivotCreateManyWorkoutInputEnvelope
    connect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
  }

  export type WorkoutExercisePivotCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExercisePivotCreateWithoutWorkoutInput, WorkoutExercisePivotUncheckedCreateWithoutWorkoutInput> | WorkoutExercisePivotCreateWithoutWorkoutInput[] | WorkoutExercisePivotUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisePivotCreateOrConnectWithoutWorkoutInput | WorkoutExercisePivotCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExercisePivotCreateManyWorkoutInputEnvelope
    connect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
  }

  export type RoutineWorkoutPivotUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<RoutineWorkoutPivotCreateWithoutWorkoutInput, RoutineWorkoutPivotUncheckedCreateWithoutWorkoutInput> | RoutineWorkoutPivotCreateWithoutWorkoutInput[] | RoutineWorkoutPivotUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: RoutineWorkoutPivotCreateOrConnectWithoutWorkoutInput | RoutineWorkoutPivotCreateOrConnectWithoutWorkoutInput[]
    createMany?: RoutineWorkoutPivotCreateManyWorkoutInputEnvelope
    connect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
  }

  export type WorkoutExercisePivotUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<WorkoutExercisePivotCreateWithoutWorkoutInput, WorkoutExercisePivotUncheckedCreateWithoutWorkoutInput> | WorkoutExercisePivotCreateWithoutWorkoutInput[] | WorkoutExercisePivotUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisePivotCreateOrConnectWithoutWorkoutInput | WorkoutExercisePivotCreateOrConnectWithoutWorkoutInput[]
    createMany?: WorkoutExercisePivotCreateManyWorkoutInputEnvelope
    connect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutsInput
    upsert?: UserUpsertWithoutWorkoutsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutsInput, UserUpdateWithoutWorkoutsInput>, UserUncheckedUpdateWithoutWorkoutsInput>
  }

  export type RoutineWorkoutPivotUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<RoutineWorkoutPivotCreateWithoutWorkoutInput, RoutineWorkoutPivotUncheckedCreateWithoutWorkoutInput> | RoutineWorkoutPivotCreateWithoutWorkoutInput[] | RoutineWorkoutPivotUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: RoutineWorkoutPivotCreateOrConnectWithoutWorkoutInput | RoutineWorkoutPivotCreateOrConnectWithoutWorkoutInput[]
    upsert?: RoutineWorkoutPivotUpsertWithWhereUniqueWithoutWorkoutInput | RoutineWorkoutPivotUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: RoutineWorkoutPivotCreateManyWorkoutInputEnvelope
    set?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    disconnect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    delete?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    connect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    update?: RoutineWorkoutPivotUpdateWithWhereUniqueWithoutWorkoutInput | RoutineWorkoutPivotUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: RoutineWorkoutPivotUpdateManyWithWhereWithoutWorkoutInput | RoutineWorkoutPivotUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: RoutineWorkoutPivotScalarWhereInput | RoutineWorkoutPivotScalarWhereInput[]
  }

  export type WorkoutExercisePivotUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExercisePivotCreateWithoutWorkoutInput, WorkoutExercisePivotUncheckedCreateWithoutWorkoutInput> | WorkoutExercisePivotCreateWithoutWorkoutInput[] | WorkoutExercisePivotUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisePivotCreateOrConnectWithoutWorkoutInput | WorkoutExercisePivotCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExercisePivotUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExercisePivotUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExercisePivotCreateManyWorkoutInputEnvelope
    set?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    disconnect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    delete?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    connect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    update?: WorkoutExercisePivotUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExercisePivotUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExercisePivotUpdateManyWithWhereWithoutWorkoutInput | WorkoutExercisePivotUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExercisePivotScalarWhereInput | WorkoutExercisePivotScalarWhereInput[]
  }

  export type RoutineWorkoutPivotUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<RoutineWorkoutPivotCreateWithoutWorkoutInput, RoutineWorkoutPivotUncheckedCreateWithoutWorkoutInput> | RoutineWorkoutPivotCreateWithoutWorkoutInput[] | RoutineWorkoutPivotUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: RoutineWorkoutPivotCreateOrConnectWithoutWorkoutInput | RoutineWorkoutPivotCreateOrConnectWithoutWorkoutInput[]
    upsert?: RoutineWorkoutPivotUpsertWithWhereUniqueWithoutWorkoutInput | RoutineWorkoutPivotUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: RoutineWorkoutPivotCreateManyWorkoutInputEnvelope
    set?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    disconnect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    delete?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    connect?: RoutineWorkoutPivotWhereUniqueInput | RoutineWorkoutPivotWhereUniqueInput[]
    update?: RoutineWorkoutPivotUpdateWithWhereUniqueWithoutWorkoutInput | RoutineWorkoutPivotUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: RoutineWorkoutPivotUpdateManyWithWhereWithoutWorkoutInput | RoutineWorkoutPivotUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: RoutineWorkoutPivotScalarWhereInput | RoutineWorkoutPivotScalarWhereInput[]
  }

  export type WorkoutExercisePivotUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<WorkoutExercisePivotCreateWithoutWorkoutInput, WorkoutExercisePivotUncheckedCreateWithoutWorkoutInput> | WorkoutExercisePivotCreateWithoutWorkoutInput[] | WorkoutExercisePivotUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: WorkoutExercisePivotCreateOrConnectWithoutWorkoutInput | WorkoutExercisePivotCreateOrConnectWithoutWorkoutInput[]
    upsert?: WorkoutExercisePivotUpsertWithWhereUniqueWithoutWorkoutInput | WorkoutExercisePivotUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: WorkoutExercisePivotCreateManyWorkoutInputEnvelope
    set?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    disconnect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    delete?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    connect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    update?: WorkoutExercisePivotUpdateWithWhereUniqueWithoutWorkoutInput | WorkoutExercisePivotUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: WorkoutExercisePivotUpdateManyWithWhereWithoutWorkoutInput | WorkoutExercisePivotUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: WorkoutExercisePivotScalarWhereInput | WorkoutExercisePivotScalarWhereInput[]
  }

  export type UserSportPivotCreateNestedManyWithoutSportInput = {
    create?: XOR<UserSportPivotCreateWithoutSportInput, UserSportPivotUncheckedCreateWithoutSportInput> | UserSportPivotCreateWithoutSportInput[] | UserSportPivotUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportPivotCreateOrConnectWithoutSportInput | UserSportPivotCreateOrConnectWithoutSportInput[]
    createMany?: UserSportPivotCreateManySportInputEnvelope
    connect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
  }

  export type UserSportPivotUncheckedCreateNestedManyWithoutSportInput = {
    create?: XOR<UserSportPivotCreateWithoutSportInput, UserSportPivotUncheckedCreateWithoutSportInput> | UserSportPivotCreateWithoutSportInput[] | UserSportPivotUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportPivotCreateOrConnectWithoutSportInput | UserSportPivotCreateOrConnectWithoutSportInput[]
    createMany?: UserSportPivotCreateManySportInputEnvelope
    connect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
  }

  export type UserSportPivotUpdateManyWithoutSportNestedInput = {
    create?: XOR<UserSportPivotCreateWithoutSportInput, UserSportPivotUncheckedCreateWithoutSportInput> | UserSportPivotCreateWithoutSportInput[] | UserSportPivotUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportPivotCreateOrConnectWithoutSportInput | UserSportPivotCreateOrConnectWithoutSportInput[]
    upsert?: UserSportPivotUpsertWithWhereUniqueWithoutSportInput | UserSportPivotUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: UserSportPivotCreateManySportInputEnvelope
    set?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    disconnect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    delete?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    connect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    update?: UserSportPivotUpdateWithWhereUniqueWithoutSportInput | UserSportPivotUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: UserSportPivotUpdateManyWithWhereWithoutSportInput | UserSportPivotUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: UserSportPivotScalarWhereInput | UserSportPivotScalarWhereInput[]
  }

  export type UserSportPivotUncheckedUpdateManyWithoutSportNestedInput = {
    create?: XOR<UserSportPivotCreateWithoutSportInput, UserSportPivotUncheckedCreateWithoutSportInput> | UserSportPivotCreateWithoutSportInput[] | UserSportPivotUncheckedCreateWithoutSportInput[]
    connectOrCreate?: UserSportPivotCreateOrConnectWithoutSportInput | UserSportPivotCreateOrConnectWithoutSportInput[]
    upsert?: UserSportPivotUpsertWithWhereUniqueWithoutSportInput | UserSportPivotUpsertWithWhereUniqueWithoutSportInput[]
    createMany?: UserSportPivotCreateManySportInputEnvelope
    set?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    disconnect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    delete?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    connect?: UserSportPivotWhereUniqueInput | UserSportPivotWhereUniqueInput[]
    update?: UserSportPivotUpdateWithWhereUniqueWithoutSportInput | UserSportPivotUpdateWithWhereUniqueWithoutSportInput[]
    updateMany?: UserSportPivotUpdateManyWithWhereWithoutSportInput | UserSportPivotUpdateManyWithWhereWithoutSportInput[]
    deleteMany?: UserSportPivotScalarWhereInput | UserSportPivotScalarWhereInput[]
  }

  export type WorkoutExercisePivotCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExercisePivotCreateWithoutExerciseInput, WorkoutExercisePivotUncheckedCreateWithoutExerciseInput> | WorkoutExercisePivotCreateWithoutExerciseInput[] | WorkoutExercisePivotUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExercisePivotCreateOrConnectWithoutExerciseInput | WorkoutExercisePivotCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExercisePivotCreateManyExerciseInputEnvelope
    connect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
  }

  export type RoutineExercisePivotCreateNestedManyWithoutExerciseInput = {
    create?: XOR<RoutineExercisePivotCreateWithoutExerciseInput, RoutineExercisePivotUncheckedCreateWithoutExerciseInput> | RoutineExercisePivotCreateWithoutExerciseInput[] | RoutineExercisePivotUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExercisePivotCreateOrConnectWithoutExerciseInput | RoutineExercisePivotCreateOrConnectWithoutExerciseInput[]
    createMany?: RoutineExercisePivotCreateManyExerciseInputEnvelope
    connect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
  }

  export type WorkoutExercisePivotUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<WorkoutExercisePivotCreateWithoutExerciseInput, WorkoutExercisePivotUncheckedCreateWithoutExerciseInput> | WorkoutExercisePivotCreateWithoutExerciseInput[] | WorkoutExercisePivotUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExercisePivotCreateOrConnectWithoutExerciseInput | WorkoutExercisePivotCreateOrConnectWithoutExerciseInput[]
    createMany?: WorkoutExercisePivotCreateManyExerciseInputEnvelope
    connect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
  }

  export type RoutineExercisePivotUncheckedCreateNestedManyWithoutExerciseInput = {
    create?: XOR<RoutineExercisePivotCreateWithoutExerciseInput, RoutineExercisePivotUncheckedCreateWithoutExerciseInput> | RoutineExercisePivotCreateWithoutExerciseInput[] | RoutineExercisePivotUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExercisePivotCreateOrConnectWithoutExerciseInput | RoutineExercisePivotCreateOrConnectWithoutExerciseInput[]
    createMany?: RoutineExercisePivotCreateManyExerciseInputEnvelope
    connect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkoutExercisePivotUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExercisePivotCreateWithoutExerciseInput, WorkoutExercisePivotUncheckedCreateWithoutExerciseInput> | WorkoutExercisePivotCreateWithoutExerciseInput[] | WorkoutExercisePivotUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExercisePivotCreateOrConnectWithoutExerciseInput | WorkoutExercisePivotCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExercisePivotUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExercisePivotUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExercisePivotCreateManyExerciseInputEnvelope
    set?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    disconnect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    delete?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    connect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    update?: WorkoutExercisePivotUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExercisePivotUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExercisePivotUpdateManyWithWhereWithoutExerciseInput | WorkoutExercisePivotUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExercisePivotScalarWhereInput | WorkoutExercisePivotScalarWhereInput[]
  }

  export type RoutineExercisePivotUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<RoutineExercisePivotCreateWithoutExerciseInput, RoutineExercisePivotUncheckedCreateWithoutExerciseInput> | RoutineExercisePivotCreateWithoutExerciseInput[] | RoutineExercisePivotUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExercisePivotCreateOrConnectWithoutExerciseInput | RoutineExercisePivotCreateOrConnectWithoutExerciseInput[]
    upsert?: RoutineExercisePivotUpsertWithWhereUniqueWithoutExerciseInput | RoutineExercisePivotUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: RoutineExercisePivotCreateManyExerciseInputEnvelope
    set?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    disconnect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    delete?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    connect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    update?: RoutineExercisePivotUpdateWithWhereUniqueWithoutExerciseInput | RoutineExercisePivotUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: RoutineExercisePivotUpdateManyWithWhereWithoutExerciseInput | RoutineExercisePivotUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: RoutineExercisePivotScalarWhereInput | RoutineExercisePivotScalarWhereInput[]
  }

  export type WorkoutExercisePivotUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<WorkoutExercisePivotCreateWithoutExerciseInput, WorkoutExercisePivotUncheckedCreateWithoutExerciseInput> | WorkoutExercisePivotCreateWithoutExerciseInput[] | WorkoutExercisePivotUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: WorkoutExercisePivotCreateOrConnectWithoutExerciseInput | WorkoutExercisePivotCreateOrConnectWithoutExerciseInput[]
    upsert?: WorkoutExercisePivotUpsertWithWhereUniqueWithoutExerciseInput | WorkoutExercisePivotUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: WorkoutExercisePivotCreateManyExerciseInputEnvelope
    set?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    disconnect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    delete?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    connect?: WorkoutExercisePivotWhereUniqueInput | WorkoutExercisePivotWhereUniqueInput[]
    update?: WorkoutExercisePivotUpdateWithWhereUniqueWithoutExerciseInput | WorkoutExercisePivotUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: WorkoutExercisePivotUpdateManyWithWhereWithoutExerciseInput | WorkoutExercisePivotUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: WorkoutExercisePivotScalarWhereInput | WorkoutExercisePivotScalarWhereInput[]
  }

  export type RoutineExercisePivotUncheckedUpdateManyWithoutExerciseNestedInput = {
    create?: XOR<RoutineExercisePivotCreateWithoutExerciseInput, RoutineExercisePivotUncheckedCreateWithoutExerciseInput> | RoutineExercisePivotCreateWithoutExerciseInput[] | RoutineExercisePivotUncheckedCreateWithoutExerciseInput[]
    connectOrCreate?: RoutineExercisePivotCreateOrConnectWithoutExerciseInput | RoutineExercisePivotCreateOrConnectWithoutExerciseInput[]
    upsert?: RoutineExercisePivotUpsertWithWhereUniqueWithoutExerciseInput | RoutineExercisePivotUpsertWithWhereUniqueWithoutExerciseInput[]
    createMany?: RoutineExercisePivotCreateManyExerciseInputEnvelope
    set?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    disconnect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    delete?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    connect?: RoutineExercisePivotWhereUniqueInput | RoutineExercisePivotWhereUniqueInput[]
    update?: RoutineExercisePivotUpdateWithWhereUniqueWithoutExerciseInput | RoutineExercisePivotUpdateWithWhereUniqueWithoutExerciseInput[]
    updateMany?: RoutineExercisePivotUpdateManyWithWhereWithoutExerciseInput | RoutineExercisePivotUpdateManyWithWhereWithoutExerciseInput[]
    deleteMany?: RoutineExercisePivotScalarWhereInput | RoutineExercisePivotScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserBadgesInput = {
    create?: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBadgesInput
    connect?: UserWhereUniqueInput
  }

  export type BadgesCreateNestedOneWithoutUserBadgesInput = {
    create?: XOR<BadgesCreateWithoutUserBadgesInput, BadgesUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgesCreateOrConnectWithoutUserBadgesInput
    connect?: BadgesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserBadgesNestedInput = {
    create?: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserBadgesInput
    upsert?: UserUpsertWithoutUserBadgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserBadgesInput, UserUpdateWithoutUserBadgesInput>, UserUncheckedUpdateWithoutUserBadgesInput>
  }

  export type BadgesUpdateOneRequiredWithoutUserBadgesNestedInput = {
    create?: XOR<BadgesCreateWithoutUserBadgesInput, BadgesUncheckedCreateWithoutUserBadgesInput>
    connectOrCreate?: BadgesCreateOrConnectWithoutUserBadgesInput
    upsert?: BadgesUpsertWithoutUserBadgesInput
    connect?: BadgesWhereUniqueInput
    update?: XOR<XOR<BadgesUpdateToOneWithWhereWithoutUserBadgesInput, BadgesUpdateWithoutUserBadgesInput>, BadgesUncheckedUpdateWithoutUserBadgesInput>
  }

  export type UserBadgesCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgesCreateWithoutBadgeInput, UserBadgesUncheckedCreateWithoutBadgeInput> | UserBadgesCreateWithoutBadgeInput[] | UserBadgesUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgesCreateOrConnectWithoutBadgeInput | UserBadgesCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgesCreateManyBadgeInputEnvelope
    connect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
  }

  export type UserBadgesUncheckedCreateNestedManyWithoutBadgeInput = {
    create?: XOR<UserBadgesCreateWithoutBadgeInput, UserBadgesUncheckedCreateWithoutBadgeInput> | UserBadgesCreateWithoutBadgeInput[] | UserBadgesUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgesCreateOrConnectWithoutBadgeInput | UserBadgesCreateOrConnectWithoutBadgeInput[]
    createMany?: UserBadgesCreateManyBadgeInputEnvelope
    connect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
  }

  export type UserBadgesUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgesCreateWithoutBadgeInput, UserBadgesUncheckedCreateWithoutBadgeInput> | UserBadgesCreateWithoutBadgeInput[] | UserBadgesUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgesCreateOrConnectWithoutBadgeInput | UserBadgesCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgesUpsertWithWhereUniqueWithoutBadgeInput | UserBadgesUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgesCreateManyBadgeInputEnvelope
    set?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    disconnect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    delete?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    connect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    update?: UserBadgesUpdateWithWhereUniqueWithoutBadgeInput | UserBadgesUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgesUpdateManyWithWhereWithoutBadgeInput | UserBadgesUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgesScalarWhereInput | UserBadgesScalarWhereInput[]
  }

  export type UserBadgesUncheckedUpdateManyWithoutBadgeNestedInput = {
    create?: XOR<UserBadgesCreateWithoutBadgeInput, UserBadgesUncheckedCreateWithoutBadgeInput> | UserBadgesCreateWithoutBadgeInput[] | UserBadgesUncheckedCreateWithoutBadgeInput[]
    connectOrCreate?: UserBadgesCreateOrConnectWithoutBadgeInput | UserBadgesCreateOrConnectWithoutBadgeInput[]
    upsert?: UserBadgesUpsertWithWhereUniqueWithoutBadgeInput | UserBadgesUpsertWithWhereUniqueWithoutBadgeInput[]
    createMany?: UserBadgesCreateManyBadgeInputEnvelope
    set?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    disconnect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    delete?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    connect?: UserBadgesWhereUniqueInput | UserBadgesWhereUniqueInput[]
    update?: UserBadgesUpdateWithWhereUniqueWithoutBadgeInput | UserBadgesUpdateWithWhereUniqueWithoutBadgeInput[]
    updateMany?: UserBadgesUpdateManyWithWhereWithoutBadgeInput | UserBadgesUpdateManyWithWhereWithoutBadgeInput[]
    deleteMany?: UserBadgesScalarWhereInput | UserBadgesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPreferred_sportsInput = {
    create?: XOR<UserCreateWithoutPreferred_sportsInput, UserUncheckedCreateWithoutPreferred_sportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferred_sportsInput
    connect?: UserWhereUniqueInput
  }

  export type UserSportsCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserSportsCreateWithoutUsersInput, UserSportsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserSportsCreateOrConnectWithoutUsersInput
    connect?: UserSportsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPreferred_sportsNestedInput = {
    create?: XOR<UserCreateWithoutPreferred_sportsInput, UserUncheckedCreateWithoutPreferred_sportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferred_sportsInput
    upsert?: UserUpsertWithoutPreferred_sportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferred_sportsInput, UserUpdateWithoutPreferred_sportsInput>, UserUncheckedUpdateWithoutPreferred_sportsInput>
  }

  export type UserSportsUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UserSportsCreateWithoutUsersInput, UserSportsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserSportsCreateOrConnectWithoutUsersInput
    upsert?: UserSportsUpsertWithoutUsersInput
    connect?: UserSportsWhereUniqueInput
    update?: XOR<XOR<UserSportsUpdateToOneWithWhereWithoutUsersInput, UserSportsUpdateWithoutUsersInput>, UserSportsUncheckedUpdateWithoutUsersInput>
  }

  export type RoutineCreateNestedOneWithoutWorkoutsInput = {
    create?: XOR<RoutineCreateWithoutWorkoutsInput, RoutineUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutWorkoutsInput
    connect?: RoutineWhereUniqueInput
  }

  export type WorkoutCreateNestedOneWithoutRoutineWorkoutPivotInput = {
    create?: XOR<WorkoutCreateWithoutRoutineWorkoutPivotInput, WorkoutUncheckedCreateWithoutRoutineWorkoutPivotInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutRoutineWorkoutPivotInput
    connect?: WorkoutWhereUniqueInput
  }

  export type RoutineUpdateOneRequiredWithoutWorkoutsNestedInput = {
    create?: XOR<RoutineCreateWithoutWorkoutsInput, RoutineUncheckedCreateWithoutWorkoutsInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutWorkoutsInput
    upsert?: RoutineUpsertWithoutWorkoutsInput
    connect?: RoutineWhereUniqueInput
    update?: XOR<XOR<RoutineUpdateToOneWithWhereWithoutWorkoutsInput, RoutineUpdateWithoutWorkoutsInput>, RoutineUncheckedUpdateWithoutWorkoutsInput>
  }

  export type WorkoutUpdateOneRequiredWithoutRoutineWorkoutPivotNestedInput = {
    create?: XOR<WorkoutCreateWithoutRoutineWorkoutPivotInput, WorkoutUncheckedCreateWithoutRoutineWorkoutPivotInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutRoutineWorkoutPivotInput
    upsert?: WorkoutUpsertWithoutRoutineWorkoutPivotInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutRoutineWorkoutPivotInput, WorkoutUpdateWithoutRoutineWorkoutPivotInput>, WorkoutUncheckedUpdateWithoutRoutineWorkoutPivotInput>
  }

  export type WorkoutCreateNestedOneWithoutExercisesInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput
    connect?: WorkoutWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutWorkoutExercisePivotInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExercisePivotInput, ExerciseUncheckedCreateWithoutWorkoutExercisePivotInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExercisePivotInput
    connect?: ExerciseWhereUniqueInput
  }

  export type WorkoutUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput
    upsert?: WorkoutUpsertWithoutExercisesInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutExercisesInput, WorkoutUpdateWithoutExercisesInput>, WorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type ExerciseUpdateOneRequiredWithoutWorkoutExercisePivotNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutExercisePivotInput, ExerciseUncheckedCreateWithoutWorkoutExercisePivotInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutExercisePivotInput
    upsert?: ExerciseUpsertWithoutWorkoutExercisePivotInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutWorkoutExercisePivotInput, ExerciseUpdateWithoutWorkoutExercisePivotInput>, ExerciseUncheckedUpdateWithoutWorkoutExercisePivotInput>
  }

  export type RoutineCreateNestedOneWithoutRoutineExercisePivotInput = {
    create?: XOR<RoutineCreateWithoutRoutineExercisePivotInput, RoutineUncheckedCreateWithoutRoutineExercisePivotInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutRoutineExercisePivotInput
    connect?: RoutineWhereUniqueInput
  }

  export type ExerciseCreateNestedOneWithoutRoutineExercisePivotInput = {
    create?: XOR<ExerciseCreateWithoutRoutineExercisePivotInput, ExerciseUncheckedCreateWithoutRoutineExercisePivotInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutRoutineExercisePivotInput
    connect?: ExerciseWhereUniqueInput
  }

  export type RoutineUpdateOneRequiredWithoutRoutineExercisePivotNestedInput = {
    create?: XOR<RoutineCreateWithoutRoutineExercisePivotInput, RoutineUncheckedCreateWithoutRoutineExercisePivotInput>
    connectOrCreate?: RoutineCreateOrConnectWithoutRoutineExercisePivotInput
    upsert?: RoutineUpsertWithoutRoutineExercisePivotInput
    connect?: RoutineWhereUniqueInput
    update?: XOR<XOR<RoutineUpdateToOneWithWhereWithoutRoutineExercisePivotInput, RoutineUpdateWithoutRoutineExercisePivotInput>, RoutineUncheckedUpdateWithoutRoutineExercisePivotInput>
  }

  export type ExerciseUpdateOneRequiredWithoutRoutineExercisePivotNestedInput = {
    create?: XOR<ExerciseCreateWithoutRoutineExercisePivotInput, ExerciseUncheckedCreateWithoutRoutineExercisePivotInput>
    connectOrCreate?: ExerciseCreateOrConnectWithoutRoutineExercisePivotInput
    upsert?: ExerciseUpsertWithoutRoutineExercisePivotInput
    connect?: ExerciseWhereUniqueInput
    update?: XOR<XOR<ExerciseUpdateToOneWithWhereWithoutRoutineExercisePivotInput, ExerciseUpdateWithoutRoutineExercisePivotInput>, ExerciseUncheckedUpdateWithoutRoutineExercisePivotInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserSportPivotCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    sport: UserSportsCreateNestedOneWithoutUsersInput
  }

  export type UserSportPivotUncheckedCreateWithoutUserInput = {
    id?: number
    sportId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSportPivotCreateOrConnectWithoutUserInput = {
    where: UserSportPivotWhereUniqueInput
    create: XOR<UserSportPivotCreateWithoutUserInput, UserSportPivotUncheckedCreateWithoutUserInput>
  }

  export type UserSportPivotCreateManyUserInputEnvelope = {
    data: UserSportPivotCreateManyUserInput | UserSportPivotCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutCreateWithoutUserInput = {
    name: string
    description: string
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt?: Date | string
    updatedAt?: Date | string
    RoutineWorkoutPivot?: RoutineWorkoutPivotCreateNestedManyWithoutWorkoutInput
    exercises?: WorkoutExercisePivotCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description: string
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt?: Date | string
    updatedAt?: Date | string
    RoutineWorkoutPivot?: RoutineWorkoutPivotUncheckedCreateNestedManyWithoutWorkoutInput
    exercises?: WorkoutExercisePivotUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutCreateManyUserInputEnvelope = {
    data: WorkoutCreateManyUserInput | WorkoutCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoutineCreateWithoutUserInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: RoutineWorkoutPivotCreateNestedManyWithoutRoutineInput
    RoutineExercisePivot?: RoutineExercisePivotCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: RoutineWorkoutPivotUncheckedCreateNestedManyWithoutRoutineInput
    RoutineExercisePivot?: RoutineExercisePivotUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutUserInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput>
  }

  export type RoutineCreateManyUserInputEnvelope = {
    data: RoutineCreateManyUserInput | RoutineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgesCreateWithoutUserInput = {
    createAt?: Date | string
    updatedAt?: Date | string
    badge: BadgesCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgesUncheckedCreateWithoutUserInput = {
    id?: number
    bardgeId: number
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgesCreateOrConnectWithoutUserInput = {
    where: UserBadgesWhereUniqueInput
    create: XOR<UserBadgesCreateWithoutUserInput, UserBadgesUncheckedCreateWithoutUserInput>
  }

  export type UserBadgesCreateManyUserInputEnvelope = {
    data: UserBadgesCreateManyUserInput | UserBadgesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSportPivotUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSportPivotWhereUniqueInput
    update: XOR<UserSportPivotUpdateWithoutUserInput, UserSportPivotUncheckedUpdateWithoutUserInput>
    create: XOR<UserSportPivotCreateWithoutUserInput, UserSportPivotUncheckedCreateWithoutUserInput>
  }

  export type UserSportPivotUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSportPivotWhereUniqueInput
    data: XOR<UserSportPivotUpdateWithoutUserInput, UserSportPivotUncheckedUpdateWithoutUserInput>
  }

  export type UserSportPivotUpdateManyWithWhereWithoutUserInput = {
    where: UserSportPivotScalarWhereInput
    data: XOR<UserSportPivotUpdateManyMutationInput, UserSportPivotUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSportPivotScalarWhereInput = {
    AND?: UserSportPivotScalarWhereInput | UserSportPivotScalarWhereInput[]
    OR?: UserSportPivotScalarWhereInput[]
    NOT?: UserSportPivotScalarWhereInput | UserSportPivotScalarWhereInput[]
    id?: IntFilter<"UserSportPivot"> | number
    userId?: IntFilter<"UserSportPivot"> | number
    sportId?: IntFilter<"UserSportPivot"> | number
    createdAt?: DateTimeFilter<"UserSportPivot"> | Date | string
    updatedAt?: DateTimeFilter<"UserSportPivot"> | Date | string
  }

  export type WorkoutUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: IntFilter<"Workout"> | number
    userId?: IntFilter<"Workout"> | number
    name?: StringFilter<"Workout"> | string
    description?: StringFilter<"Workout"> | string
    duration?: IntFilter<"Workout"> | number
    intensity?: IntFilter<"Workout"> | number
    volumn?: IntFilter<"Workout"> | number
    set?: IntFilter<"Workout"> | number
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
  }

  export type RoutineUpsertWithWhereUniqueWithoutUserInput = {
    where: RoutineWhereUniqueInput
    update: XOR<RoutineUpdateWithoutUserInput, RoutineUncheckedUpdateWithoutUserInput>
    create: XOR<RoutineCreateWithoutUserInput, RoutineUncheckedCreateWithoutUserInput>
  }

  export type RoutineUpdateWithWhereUniqueWithoutUserInput = {
    where: RoutineWhereUniqueInput
    data: XOR<RoutineUpdateWithoutUserInput, RoutineUncheckedUpdateWithoutUserInput>
  }

  export type RoutineUpdateManyWithWhereWithoutUserInput = {
    where: RoutineScalarWhereInput
    data: XOR<RoutineUpdateManyMutationInput, RoutineUncheckedUpdateManyWithoutUserInput>
  }

  export type RoutineScalarWhereInput = {
    AND?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    OR?: RoutineScalarWhereInput[]
    NOT?: RoutineScalarWhereInput | RoutineScalarWhereInput[]
    id?: IntFilter<"Routine"> | number
    name?: StringFilter<"Routine"> | string
    description?: StringFilter<"Routine"> | string
    userId?: IntFilter<"Routine"> | number
    createdAt?: DateTimeFilter<"Routine"> | Date | string
    updatedAt?: DateTimeFilter<"Routine"> | Date | string
  }

  export type UserBadgesUpsertWithWhereUniqueWithoutUserInput = {
    where: UserBadgesWhereUniqueInput
    update: XOR<UserBadgesUpdateWithoutUserInput, UserBadgesUncheckedUpdateWithoutUserInput>
    create: XOR<UserBadgesCreateWithoutUserInput, UserBadgesUncheckedCreateWithoutUserInput>
  }

  export type UserBadgesUpdateWithWhereUniqueWithoutUserInput = {
    where: UserBadgesWhereUniqueInput
    data: XOR<UserBadgesUpdateWithoutUserInput, UserBadgesUncheckedUpdateWithoutUserInput>
  }

  export type UserBadgesUpdateManyWithWhereWithoutUserInput = {
    where: UserBadgesScalarWhereInput
    data: XOR<UserBadgesUpdateManyMutationInput, UserBadgesUncheckedUpdateManyWithoutUserInput>
  }

  export type UserBadgesScalarWhereInput = {
    AND?: UserBadgesScalarWhereInput | UserBadgesScalarWhereInput[]
    OR?: UserBadgesScalarWhereInput[]
    NOT?: UserBadgesScalarWhereInput | UserBadgesScalarWhereInput[]
    id?: IntFilter<"UserBadges"> | number
    userId?: IntFilter<"UserBadges"> | number
    bardgeId?: IntFilter<"UserBadges"> | number
    createAt?: DateTimeFilter<"UserBadges"> | Date | string
    updatedAt?: DateTimeFilter<"UserBadges"> | Date | string
  }

  export type UserCreateWithoutRoutinesInput = {
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferred_sports?: UserSportPivotCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    userBadges?: UserBadgesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoutinesInput = {
    id?: number
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferred_sports?: UserSportPivotUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoutinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
  }

  export type RoutineWorkoutPivotCreateWithoutRoutineInput = {
    workout: WorkoutCreateNestedOneWithoutRoutineWorkoutPivotInput
  }

  export type RoutineWorkoutPivotUncheckedCreateWithoutRoutineInput = {
    id?: number
    workoutId: number
  }

  export type RoutineWorkoutPivotCreateOrConnectWithoutRoutineInput = {
    where: RoutineWorkoutPivotWhereUniqueInput
    create: XOR<RoutineWorkoutPivotCreateWithoutRoutineInput, RoutineWorkoutPivotUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineWorkoutPivotCreateManyRoutineInputEnvelope = {
    data: RoutineWorkoutPivotCreateManyRoutineInput | RoutineWorkoutPivotCreateManyRoutineInput[]
    skipDuplicates?: boolean
  }

  export type RoutineExercisePivotCreateWithoutRoutineInput = {
    exercise: ExerciseCreateNestedOneWithoutRoutineExercisePivotInput
  }

  export type RoutineExercisePivotUncheckedCreateWithoutRoutineInput = {
    id?: number
    exerciseId: number
  }

  export type RoutineExercisePivotCreateOrConnectWithoutRoutineInput = {
    where: RoutineExercisePivotWhereUniqueInput
    create: XOR<RoutineExercisePivotCreateWithoutRoutineInput, RoutineExercisePivotUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineExercisePivotCreateManyRoutineInputEnvelope = {
    data: RoutineExercisePivotCreateManyRoutineInput | RoutineExercisePivotCreateManyRoutineInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoutinesInput = {
    update: XOR<UserUpdateWithoutRoutinesInput, UserUncheckedUpdateWithoutRoutinesInput>
    create: XOR<UserCreateWithoutRoutinesInput, UserUncheckedCreateWithoutRoutinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoutinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoutinesInput, UserUncheckedUpdateWithoutRoutinesInput>
  }

  export type UserUpdateWithoutRoutinesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferred_sports?: UserSportPivotUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoutinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferred_sports?: UserSportPivotUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoutineWorkoutPivotUpsertWithWhereUniqueWithoutRoutineInput = {
    where: RoutineWorkoutPivotWhereUniqueInput
    update: XOR<RoutineWorkoutPivotUpdateWithoutRoutineInput, RoutineWorkoutPivotUncheckedUpdateWithoutRoutineInput>
    create: XOR<RoutineWorkoutPivotCreateWithoutRoutineInput, RoutineWorkoutPivotUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineWorkoutPivotUpdateWithWhereUniqueWithoutRoutineInput = {
    where: RoutineWorkoutPivotWhereUniqueInput
    data: XOR<RoutineWorkoutPivotUpdateWithoutRoutineInput, RoutineWorkoutPivotUncheckedUpdateWithoutRoutineInput>
  }

  export type RoutineWorkoutPivotUpdateManyWithWhereWithoutRoutineInput = {
    where: RoutineWorkoutPivotScalarWhereInput
    data: XOR<RoutineWorkoutPivotUpdateManyMutationInput, RoutineWorkoutPivotUncheckedUpdateManyWithoutRoutineInput>
  }

  export type RoutineWorkoutPivotScalarWhereInput = {
    AND?: RoutineWorkoutPivotScalarWhereInput | RoutineWorkoutPivotScalarWhereInput[]
    OR?: RoutineWorkoutPivotScalarWhereInput[]
    NOT?: RoutineWorkoutPivotScalarWhereInput | RoutineWorkoutPivotScalarWhereInput[]
    id?: IntFilter<"RoutineWorkoutPivot"> | number
    routineId?: IntFilter<"RoutineWorkoutPivot"> | number
    workoutId?: IntFilter<"RoutineWorkoutPivot"> | number
  }

  export type RoutineExercisePivotUpsertWithWhereUniqueWithoutRoutineInput = {
    where: RoutineExercisePivotWhereUniqueInput
    update: XOR<RoutineExercisePivotUpdateWithoutRoutineInput, RoutineExercisePivotUncheckedUpdateWithoutRoutineInput>
    create: XOR<RoutineExercisePivotCreateWithoutRoutineInput, RoutineExercisePivotUncheckedCreateWithoutRoutineInput>
  }

  export type RoutineExercisePivotUpdateWithWhereUniqueWithoutRoutineInput = {
    where: RoutineExercisePivotWhereUniqueInput
    data: XOR<RoutineExercisePivotUpdateWithoutRoutineInput, RoutineExercisePivotUncheckedUpdateWithoutRoutineInput>
  }

  export type RoutineExercisePivotUpdateManyWithWhereWithoutRoutineInput = {
    where: RoutineExercisePivotScalarWhereInput
    data: XOR<RoutineExercisePivotUpdateManyMutationInput, RoutineExercisePivotUncheckedUpdateManyWithoutRoutineInput>
  }

  export type RoutineExercisePivotScalarWhereInput = {
    AND?: RoutineExercisePivotScalarWhereInput | RoutineExercisePivotScalarWhereInput[]
    OR?: RoutineExercisePivotScalarWhereInput[]
    NOT?: RoutineExercisePivotScalarWhereInput | RoutineExercisePivotScalarWhereInput[]
    id?: IntFilter<"RoutineExercisePivot"> | number
    routineId?: IntFilter<"RoutineExercisePivot"> | number
    exerciseId?: IntFilter<"RoutineExercisePivot"> | number
  }

  export type UserCreateWithoutWorkoutsInput = {
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferred_sports?: UserSportPivotCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    userBadges?: UserBadgesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutsInput = {
    id?: number
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferred_sports?: UserSportPivotUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
  }

  export type RoutineWorkoutPivotCreateWithoutWorkoutInput = {
    routine: RoutineCreateNestedOneWithoutWorkoutsInput
  }

  export type RoutineWorkoutPivotUncheckedCreateWithoutWorkoutInput = {
    id?: number
    routineId: number
  }

  export type RoutineWorkoutPivotCreateOrConnectWithoutWorkoutInput = {
    where: RoutineWorkoutPivotWhereUniqueInput
    create: XOR<RoutineWorkoutPivotCreateWithoutWorkoutInput, RoutineWorkoutPivotUncheckedCreateWithoutWorkoutInput>
  }

  export type RoutineWorkoutPivotCreateManyWorkoutInputEnvelope = {
    data: RoutineWorkoutPivotCreateManyWorkoutInput | RoutineWorkoutPivotCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutExercisePivotCreateWithoutWorkoutInput = {
    exercise: ExerciseCreateNestedOneWithoutWorkoutExercisePivotInput
  }

  export type WorkoutExercisePivotUncheckedCreateWithoutWorkoutInput = {
    id?: number
    exerciseId: number
  }

  export type WorkoutExercisePivotCreateOrConnectWithoutWorkoutInput = {
    where: WorkoutExercisePivotWhereUniqueInput
    create: XOR<WorkoutExercisePivotCreateWithoutWorkoutInput, WorkoutExercisePivotUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExercisePivotCreateManyWorkoutInputEnvelope = {
    data: WorkoutExercisePivotCreateManyWorkoutInput | WorkoutExercisePivotCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkoutsInput = {
    update: XOR<UserUpdateWithoutWorkoutsInput, UserUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<UserCreateWithoutWorkoutsInput, UserUncheckedCreateWithoutWorkoutsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutsInput, UserUncheckedUpdateWithoutWorkoutsInput>
  }

  export type UserUpdateWithoutWorkoutsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferred_sports?: UserSportPivotUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferred_sports?: UserSportPivotUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoutineWorkoutPivotUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: RoutineWorkoutPivotWhereUniqueInput
    update: XOR<RoutineWorkoutPivotUpdateWithoutWorkoutInput, RoutineWorkoutPivotUncheckedUpdateWithoutWorkoutInput>
    create: XOR<RoutineWorkoutPivotCreateWithoutWorkoutInput, RoutineWorkoutPivotUncheckedCreateWithoutWorkoutInput>
  }

  export type RoutineWorkoutPivotUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: RoutineWorkoutPivotWhereUniqueInput
    data: XOR<RoutineWorkoutPivotUpdateWithoutWorkoutInput, RoutineWorkoutPivotUncheckedUpdateWithoutWorkoutInput>
  }

  export type RoutineWorkoutPivotUpdateManyWithWhereWithoutWorkoutInput = {
    where: RoutineWorkoutPivotScalarWhereInput
    data: XOR<RoutineWorkoutPivotUpdateManyMutationInput, RoutineWorkoutPivotUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutExercisePivotUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExercisePivotWhereUniqueInput
    update: XOR<WorkoutExercisePivotUpdateWithoutWorkoutInput, WorkoutExercisePivotUncheckedUpdateWithoutWorkoutInput>
    create: XOR<WorkoutExercisePivotCreateWithoutWorkoutInput, WorkoutExercisePivotUncheckedCreateWithoutWorkoutInput>
  }

  export type WorkoutExercisePivotUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: WorkoutExercisePivotWhereUniqueInput
    data: XOR<WorkoutExercisePivotUpdateWithoutWorkoutInput, WorkoutExercisePivotUncheckedUpdateWithoutWorkoutInput>
  }

  export type WorkoutExercisePivotUpdateManyWithWhereWithoutWorkoutInput = {
    where: WorkoutExercisePivotScalarWhereInput
    data: XOR<WorkoutExercisePivotUpdateManyMutationInput, WorkoutExercisePivotUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type WorkoutExercisePivotScalarWhereInput = {
    AND?: WorkoutExercisePivotScalarWhereInput | WorkoutExercisePivotScalarWhereInput[]
    OR?: WorkoutExercisePivotScalarWhereInput[]
    NOT?: WorkoutExercisePivotScalarWhereInput | WorkoutExercisePivotScalarWhereInput[]
    id?: IntFilter<"WorkoutExercisePivot"> | number
    workoutId?: IntFilter<"WorkoutExercisePivot"> | number
    exerciseId?: IntFilter<"WorkoutExercisePivot"> | number
  }

  export type UserSportPivotCreateWithoutSportInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferred_sportsInput
  }

  export type UserSportPivotUncheckedCreateWithoutSportInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSportPivotCreateOrConnectWithoutSportInput = {
    where: UserSportPivotWhereUniqueInput
    create: XOR<UserSportPivotCreateWithoutSportInput, UserSportPivotUncheckedCreateWithoutSportInput>
  }

  export type UserSportPivotCreateManySportInputEnvelope = {
    data: UserSportPivotCreateManySportInput | UserSportPivotCreateManySportInput[]
    skipDuplicates?: boolean
  }

  export type UserSportPivotUpsertWithWhereUniqueWithoutSportInput = {
    where: UserSportPivotWhereUniqueInput
    update: XOR<UserSportPivotUpdateWithoutSportInput, UserSportPivotUncheckedUpdateWithoutSportInput>
    create: XOR<UserSportPivotCreateWithoutSportInput, UserSportPivotUncheckedCreateWithoutSportInput>
  }

  export type UserSportPivotUpdateWithWhereUniqueWithoutSportInput = {
    where: UserSportPivotWhereUniqueInput
    data: XOR<UserSportPivotUpdateWithoutSportInput, UserSportPivotUncheckedUpdateWithoutSportInput>
  }

  export type UserSportPivotUpdateManyWithWhereWithoutSportInput = {
    where: UserSportPivotScalarWhereInput
    data: XOR<UserSportPivotUpdateManyMutationInput, UserSportPivotUncheckedUpdateManyWithoutSportInput>
  }

  export type WorkoutExercisePivotCreateWithoutExerciseInput = {
    workout: WorkoutCreateNestedOneWithoutExercisesInput
  }

  export type WorkoutExercisePivotUncheckedCreateWithoutExerciseInput = {
    id?: number
    workoutId: number
  }

  export type WorkoutExercisePivotCreateOrConnectWithoutExerciseInput = {
    where: WorkoutExercisePivotWhereUniqueInput
    create: XOR<WorkoutExercisePivotCreateWithoutExerciseInput, WorkoutExercisePivotUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExercisePivotCreateManyExerciseInputEnvelope = {
    data: WorkoutExercisePivotCreateManyExerciseInput | WorkoutExercisePivotCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type RoutineExercisePivotCreateWithoutExerciseInput = {
    routine: RoutineCreateNestedOneWithoutRoutineExercisePivotInput
  }

  export type RoutineExercisePivotUncheckedCreateWithoutExerciseInput = {
    id?: number
    routineId: number
  }

  export type RoutineExercisePivotCreateOrConnectWithoutExerciseInput = {
    where: RoutineExercisePivotWhereUniqueInput
    create: XOR<RoutineExercisePivotCreateWithoutExerciseInput, RoutineExercisePivotUncheckedCreateWithoutExerciseInput>
  }

  export type RoutineExercisePivotCreateManyExerciseInputEnvelope = {
    data: RoutineExercisePivotCreateManyExerciseInput | RoutineExercisePivotCreateManyExerciseInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutExercisePivotUpsertWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExercisePivotWhereUniqueInput
    update: XOR<WorkoutExercisePivotUpdateWithoutExerciseInput, WorkoutExercisePivotUncheckedUpdateWithoutExerciseInput>
    create: XOR<WorkoutExercisePivotCreateWithoutExerciseInput, WorkoutExercisePivotUncheckedCreateWithoutExerciseInput>
  }

  export type WorkoutExercisePivotUpdateWithWhereUniqueWithoutExerciseInput = {
    where: WorkoutExercisePivotWhereUniqueInput
    data: XOR<WorkoutExercisePivotUpdateWithoutExerciseInput, WorkoutExercisePivotUncheckedUpdateWithoutExerciseInput>
  }

  export type WorkoutExercisePivotUpdateManyWithWhereWithoutExerciseInput = {
    where: WorkoutExercisePivotScalarWhereInput
    data: XOR<WorkoutExercisePivotUpdateManyMutationInput, WorkoutExercisePivotUncheckedUpdateManyWithoutExerciseInput>
  }

  export type RoutineExercisePivotUpsertWithWhereUniqueWithoutExerciseInput = {
    where: RoutineExercisePivotWhereUniqueInput
    update: XOR<RoutineExercisePivotUpdateWithoutExerciseInput, RoutineExercisePivotUncheckedUpdateWithoutExerciseInput>
    create: XOR<RoutineExercisePivotCreateWithoutExerciseInput, RoutineExercisePivotUncheckedCreateWithoutExerciseInput>
  }

  export type RoutineExercisePivotUpdateWithWhereUniqueWithoutExerciseInput = {
    where: RoutineExercisePivotWhereUniqueInput
    data: XOR<RoutineExercisePivotUpdateWithoutExerciseInput, RoutineExercisePivotUncheckedUpdateWithoutExerciseInput>
  }

  export type RoutineExercisePivotUpdateManyWithWhereWithoutExerciseInput = {
    where: RoutineExercisePivotScalarWhereInput
    data: XOR<RoutineExercisePivotUpdateManyMutationInput, RoutineExercisePivotUncheckedUpdateManyWithoutExerciseInput>
  }

  export type UserCreateWithoutUserBadgesInput = {
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferred_sports?: UserSportPivotCreateNestedManyWithoutUserInput
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserBadgesInput = {
    id?: number
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    preferred_sports?: UserSportPivotUncheckedCreateNestedManyWithoutUserInput
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserBadgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
  }

  export type BadgesCreateWithoutUserBadgesInput = {
    name: string
    description: string
    requirement_type: string
    requirement_value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgesUncheckedCreateWithoutUserBadgesInput = {
    badgeId?: number
    name: string
    description: string
    requirement_type: string
    requirement_value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BadgesCreateOrConnectWithoutUserBadgesInput = {
    where: BadgesWhereUniqueInput
    create: XOR<BadgesCreateWithoutUserBadgesInput, BadgesUncheckedCreateWithoutUserBadgesInput>
  }

  export type UserUpsertWithoutUserBadgesInput = {
    update: XOR<UserUpdateWithoutUserBadgesInput, UserUncheckedUpdateWithoutUserBadgesInput>
    create: XOR<UserCreateWithoutUserBadgesInput, UserUncheckedCreateWithoutUserBadgesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserBadgesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserBadgesInput, UserUncheckedUpdateWithoutUserBadgesInput>
  }

  export type UserUpdateWithoutUserBadgesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferred_sports?: UserSportPivotUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserBadgesInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferred_sports?: UserSportPivotUncheckedUpdateManyWithoutUserNestedInput
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BadgesUpsertWithoutUserBadgesInput = {
    update: XOR<BadgesUpdateWithoutUserBadgesInput, BadgesUncheckedUpdateWithoutUserBadgesInput>
    create: XOR<BadgesCreateWithoutUserBadgesInput, BadgesUncheckedCreateWithoutUserBadgesInput>
    where?: BadgesWhereInput
  }

  export type BadgesUpdateToOneWithWhereWithoutUserBadgesInput = {
    where?: BadgesWhereInput
    data: XOR<BadgesUpdateWithoutUserBadgesInput, BadgesUncheckedUpdateWithoutUserBadgesInput>
  }

  export type BadgesUpdateWithoutUserBadgesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement_type?: StringFieldUpdateOperationsInput | string
    requirement_value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgesUncheckedUpdateWithoutUserBadgesInput = {
    badgeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirement_type?: StringFieldUpdateOperationsInput | string
    requirement_value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgesCreateWithoutBadgeInput = {
    createAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserBadgesInput
  }

  export type UserBadgesUncheckedCreateWithoutBadgeInput = {
    id?: number
    userId: number
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgesCreateOrConnectWithoutBadgeInput = {
    where: UserBadgesWhereUniqueInput
    create: XOR<UserBadgesCreateWithoutBadgeInput, UserBadgesUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgesCreateManyBadgeInputEnvelope = {
    data: UserBadgesCreateManyBadgeInput | UserBadgesCreateManyBadgeInput[]
    skipDuplicates?: boolean
  }

  export type UserBadgesUpsertWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgesWhereUniqueInput
    update: XOR<UserBadgesUpdateWithoutBadgeInput, UserBadgesUncheckedUpdateWithoutBadgeInput>
    create: XOR<UserBadgesCreateWithoutBadgeInput, UserBadgesUncheckedCreateWithoutBadgeInput>
  }

  export type UserBadgesUpdateWithWhereUniqueWithoutBadgeInput = {
    where: UserBadgesWhereUniqueInput
    data: XOR<UserBadgesUpdateWithoutBadgeInput, UserBadgesUncheckedUpdateWithoutBadgeInput>
  }

  export type UserBadgesUpdateManyWithWhereWithoutBadgeInput = {
    where: UserBadgesScalarWhereInput
    data: XOR<UserBadgesUpdateManyMutationInput, UserBadgesUncheckedUpdateManyWithoutBadgeInput>
  }

  export type UserCreateWithoutPreferred_sportsInput = {
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutCreateNestedManyWithoutUserInput
    routines?: RoutineCreateNestedManyWithoutUserInput
    userBadges?: UserBadgesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferred_sportsInput = {
    id?: number
    first_name: string
    last_name: string
    address: string
    user_name: string
    email: string
    password: string
    gender: string
    age: number
    height: number
    weight: number
    bmi: number
    activity_level: number
    user_type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    routines?: RoutineUncheckedCreateNestedManyWithoutUserInput
    userBadges?: UserBadgesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferred_sportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferred_sportsInput, UserUncheckedCreateWithoutPreferred_sportsInput>
  }

  export type UserSportsCreateWithoutUsersInput = {
    sportId: number
    sport_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSportsUncheckedCreateWithoutUsersInput = {
    id?: number
    sportId: number
    sport_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSportsCreateOrConnectWithoutUsersInput = {
    where: UserSportsWhereUniqueInput
    create: XOR<UserSportsCreateWithoutUsersInput, UserSportsUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutPreferred_sportsInput = {
    update: XOR<UserUpdateWithoutPreferred_sportsInput, UserUncheckedUpdateWithoutPreferred_sportsInput>
    create: XOR<UserCreateWithoutPreferred_sportsInput, UserUncheckedCreateWithoutPreferred_sportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferred_sportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferred_sportsInput, UserUncheckedUpdateWithoutPreferred_sportsInput>
  }

  export type UserUpdateWithoutPreferred_sportsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUpdateManyWithoutUserNestedInput
    routines?: RoutineUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferred_sportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    user_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
    bmi?: FloatFieldUpdateOperationsInput | number
    activity_level?: IntFieldUpdateOperationsInput | number
    user_type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    routines?: RoutineUncheckedUpdateManyWithoutUserNestedInput
    userBadges?: UserBadgesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserSportsUpsertWithoutUsersInput = {
    update: XOR<UserSportsUpdateWithoutUsersInput, UserSportsUncheckedUpdateWithoutUsersInput>
    create: XOR<UserSportsCreateWithoutUsersInput, UserSportsUncheckedCreateWithoutUsersInput>
    where?: UserSportsWhereInput
  }

  export type UserSportsUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserSportsWhereInput
    data: XOR<UserSportsUpdateWithoutUsersInput, UserSportsUncheckedUpdateWithoutUsersInput>
  }

  export type UserSportsUpdateWithoutUsersInput = {
    sportId?: IntFieldUpdateOperationsInput | number
    sport_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    sport_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineCreateWithoutWorkoutsInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutinesInput
    RoutineExercisePivot?: RoutineExercisePivotCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutWorkoutsInput = {
    id?: number
    name: string
    description: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    RoutineExercisePivot?: RoutineExercisePivotUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutWorkoutsInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutWorkoutsInput, RoutineUncheckedCreateWithoutWorkoutsInput>
  }

  export type WorkoutCreateWithoutRoutineWorkoutPivotInput = {
    name: string
    description: string
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkoutsInput
    exercises?: WorkoutExercisePivotCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutRoutineWorkoutPivotInput = {
    id?: number
    userId: number
    name: string
    description: string
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: WorkoutExercisePivotUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutRoutineWorkoutPivotInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutRoutineWorkoutPivotInput, WorkoutUncheckedCreateWithoutRoutineWorkoutPivotInput>
  }

  export type RoutineUpsertWithoutWorkoutsInput = {
    update: XOR<RoutineUpdateWithoutWorkoutsInput, RoutineUncheckedUpdateWithoutWorkoutsInput>
    create: XOR<RoutineCreateWithoutWorkoutsInput, RoutineUncheckedCreateWithoutWorkoutsInput>
    where?: RoutineWhereInput
  }

  export type RoutineUpdateToOneWithWhereWithoutWorkoutsInput = {
    where?: RoutineWhereInput
    data: XOR<RoutineUpdateWithoutWorkoutsInput, RoutineUncheckedUpdateWithoutWorkoutsInput>
  }

  export type RoutineUpdateWithoutWorkoutsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutinesNestedInput
    RoutineExercisePivot?: RoutineExercisePivotUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutWorkoutsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoutineExercisePivot?: RoutineExercisePivotUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type WorkoutUpsertWithoutRoutineWorkoutPivotInput = {
    update: XOR<WorkoutUpdateWithoutRoutineWorkoutPivotInput, WorkoutUncheckedUpdateWithoutRoutineWorkoutPivotInput>
    create: XOR<WorkoutCreateWithoutRoutineWorkoutPivotInput, WorkoutUncheckedCreateWithoutRoutineWorkoutPivotInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutRoutineWorkoutPivotInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutRoutineWorkoutPivotInput, WorkoutUncheckedUpdateWithoutRoutineWorkoutPivotInput>
  }

  export type WorkoutUpdateWithoutRoutineWorkoutPivotInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: IntFieldUpdateOperationsInput | number
    volumn?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutsNestedInput
    exercises?: WorkoutExercisePivotUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutRoutineWorkoutPivotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: IntFieldUpdateOperationsInput | number
    volumn?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: WorkoutExercisePivotUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateWithoutExercisesInput = {
    name: string
    description: string
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkoutsInput
    RoutineWorkoutPivot?: RoutineWorkoutPivotCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateWithoutExercisesInput = {
    id?: number
    userId: number
    name: string
    description: string
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt?: Date | string
    updatedAt?: Date | string
    RoutineWorkoutPivot?: RoutineWorkoutPivotUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutCreateOrConnectWithoutExercisesInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseCreateWithoutWorkoutExercisePivotInput = {
    name: string
    description: string
    category: string
    with_out_equipment: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    RoutineExercisePivot?: RoutineExercisePivotCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutWorkoutExercisePivotInput = {
    id?: number
    name: string
    description: string
    category: string
    with_out_equipment: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    RoutineExercisePivot?: RoutineExercisePivotUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutWorkoutExercisePivotInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutExercisePivotInput, ExerciseUncheckedCreateWithoutWorkoutExercisePivotInput>
  }

  export type WorkoutUpsertWithoutExercisesInput = {
    update: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutExercisesInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutUpdateWithoutExercisesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: IntFieldUpdateOperationsInput | number
    volumn?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutsNestedInput
    RoutineWorkoutPivot?: RoutineWorkoutPivotUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutExercisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: IntFieldUpdateOperationsInput | number
    volumn?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoutineWorkoutPivot?: RoutineWorkoutPivotUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type ExerciseUpsertWithoutWorkoutExercisePivotInput = {
    update: XOR<ExerciseUpdateWithoutWorkoutExercisePivotInput, ExerciseUncheckedUpdateWithoutWorkoutExercisePivotInput>
    create: XOR<ExerciseCreateWithoutWorkoutExercisePivotInput, ExerciseUncheckedCreateWithoutWorkoutExercisePivotInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutWorkoutExercisePivotInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutWorkoutExercisePivotInput, ExerciseUncheckedUpdateWithoutWorkoutExercisePivotInput>
  }

  export type ExerciseUpdateWithoutWorkoutExercisePivotInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    with_out_equipment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoutineExercisePivot?: RoutineExercisePivotUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutExercisePivotInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    with_out_equipment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoutineExercisePivot?: RoutineExercisePivotUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type RoutineCreateWithoutRoutineExercisePivotInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRoutinesInput
    workouts?: RoutineWorkoutPivotCreateNestedManyWithoutRoutineInput
  }

  export type RoutineUncheckedCreateWithoutRoutineExercisePivotInput = {
    id?: number
    name: string
    description: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    workouts?: RoutineWorkoutPivotUncheckedCreateNestedManyWithoutRoutineInput
  }

  export type RoutineCreateOrConnectWithoutRoutineExercisePivotInput = {
    where: RoutineWhereUniqueInput
    create: XOR<RoutineCreateWithoutRoutineExercisePivotInput, RoutineUncheckedCreateWithoutRoutineExercisePivotInput>
  }

  export type ExerciseCreateWithoutRoutineExercisePivotInput = {
    name: string
    description: string
    category: string
    with_out_equipment: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercisePivot?: WorkoutExercisePivotCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseUncheckedCreateWithoutRoutineExercisePivotInput = {
    id?: number
    name: string
    description: string
    category: string
    with_out_equipment: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    WorkoutExercisePivot?: WorkoutExercisePivotUncheckedCreateNestedManyWithoutExerciseInput
  }

  export type ExerciseCreateOrConnectWithoutRoutineExercisePivotInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutRoutineExercisePivotInput, ExerciseUncheckedCreateWithoutRoutineExercisePivotInput>
  }

  export type RoutineUpsertWithoutRoutineExercisePivotInput = {
    update: XOR<RoutineUpdateWithoutRoutineExercisePivotInput, RoutineUncheckedUpdateWithoutRoutineExercisePivotInput>
    create: XOR<RoutineCreateWithoutRoutineExercisePivotInput, RoutineUncheckedCreateWithoutRoutineExercisePivotInput>
    where?: RoutineWhereInput
  }

  export type RoutineUpdateToOneWithWhereWithoutRoutineExercisePivotInput = {
    where?: RoutineWhereInput
    data: XOR<RoutineUpdateWithoutRoutineExercisePivotInput, RoutineUncheckedUpdateWithoutRoutineExercisePivotInput>
  }

  export type RoutineUpdateWithoutRoutineExercisePivotInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoutinesNestedInput
    workouts?: RoutineWorkoutPivotUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutRoutineExercisePivotInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: RoutineWorkoutPivotUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type ExerciseUpsertWithoutRoutineExercisePivotInput = {
    update: XOR<ExerciseUpdateWithoutRoutineExercisePivotInput, ExerciseUncheckedUpdateWithoutRoutineExercisePivotInput>
    create: XOR<ExerciseCreateWithoutRoutineExercisePivotInput, ExerciseUncheckedCreateWithoutRoutineExercisePivotInput>
    where?: ExerciseWhereInput
  }

  export type ExerciseUpdateToOneWithWhereWithoutRoutineExercisePivotInput = {
    where?: ExerciseWhereInput
    data: XOR<ExerciseUpdateWithoutRoutineExercisePivotInput, ExerciseUncheckedUpdateWithoutRoutineExercisePivotInput>
  }

  export type ExerciseUpdateWithoutRoutineExercisePivotInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    with_out_equipment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercisePivot?: WorkoutExercisePivotUpdateManyWithoutExerciseNestedInput
  }

  export type ExerciseUncheckedUpdateWithoutRoutineExercisePivotInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    with_out_equipment?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    WorkoutExercisePivot?: WorkoutExercisePivotUncheckedUpdateManyWithoutExerciseNestedInput
  }

  export type UserSportPivotCreateManyUserInput = {
    id?: number
    sportId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutCreateManyUserInput = {
    id?: number
    name: string
    description: string
    duration: number
    intensity: number
    volumn: number
    set: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineCreateManyUserInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgesCreateManyUserInput = {
    id?: number
    bardgeId: number
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSportPivotUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sport?: UserSportsUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserSportPivotUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportPivotUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sportId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: IntFieldUpdateOperationsInput | number
    volumn?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoutineWorkoutPivot?: RoutineWorkoutPivotUpdateManyWithoutWorkoutNestedInput
    exercises?: WorkoutExercisePivotUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: IntFieldUpdateOperationsInput | number
    volumn?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    RoutineWorkoutPivot?: RoutineWorkoutPivotUncheckedUpdateManyWithoutWorkoutNestedInput
    exercises?: WorkoutExercisePivotUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: IntFieldUpdateOperationsInput | number
    volumn?: IntFieldUpdateOperationsInput | number
    set?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: RoutineWorkoutPivotUpdateManyWithoutRoutineNestedInput
    RoutineExercisePivot?: RoutineExercisePivotUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workouts?: RoutineWorkoutPivotUncheckedUpdateManyWithoutRoutineNestedInput
    RoutineExercisePivot?: RoutineExercisePivotUncheckedUpdateManyWithoutRoutineNestedInput
  }

  export type RoutineUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgesUpdateWithoutUserInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    badge?: BadgesUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bardgeId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bardgeId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineWorkoutPivotCreateManyRoutineInput = {
    id?: number
    workoutId: number
  }

  export type RoutineExercisePivotCreateManyRoutineInput = {
    id?: number
    exerciseId: number
  }

  export type RoutineWorkoutPivotUpdateWithoutRoutineInput = {
    workout?: WorkoutUpdateOneRequiredWithoutRoutineWorkoutPivotNestedInput
  }

  export type RoutineWorkoutPivotUncheckedUpdateWithoutRoutineInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineWorkoutPivotUncheckedUpdateManyWithoutRoutineInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineExercisePivotUpdateWithoutRoutineInput = {
    exercise?: ExerciseUpdateOneRequiredWithoutRoutineExercisePivotNestedInput
  }

  export type RoutineExercisePivotUncheckedUpdateWithoutRoutineInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineExercisePivotUncheckedUpdateManyWithoutRoutineInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineWorkoutPivotCreateManyWorkoutInput = {
    id?: number
    routineId: number
  }

  export type WorkoutExercisePivotCreateManyWorkoutInput = {
    id?: number
    exerciseId: number
  }

  export type RoutineWorkoutPivotUpdateWithoutWorkoutInput = {
    routine?: RoutineUpdateOneRequiredWithoutWorkoutsNestedInput
  }

  export type RoutineWorkoutPivotUncheckedUpdateWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineWorkoutPivotUncheckedUpdateManyWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExercisePivotUpdateWithoutWorkoutInput = {
    exercise?: ExerciseUpdateOneRequiredWithoutWorkoutExercisePivotNestedInput
  }

  export type WorkoutExercisePivotUncheckedUpdateWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExercisePivotUncheckedUpdateManyWithoutWorkoutInput = {
    id?: IntFieldUpdateOperationsInput | number
    exerciseId?: IntFieldUpdateOperationsInput | number
  }

  export type UserSportPivotCreateManySportInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSportPivotUpdateWithoutSportInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferred_sportsNestedInput
  }

  export type UserSportPivotUncheckedUpdateWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSportPivotUncheckedUpdateManyWithoutSportInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutExercisePivotCreateManyExerciseInput = {
    id?: number
    workoutId: number
  }

  export type RoutineExercisePivotCreateManyExerciseInput = {
    id?: number
    routineId: number
  }

  export type WorkoutExercisePivotUpdateWithoutExerciseInput = {
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type WorkoutExercisePivotUncheckedUpdateWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutExercisePivotUncheckedUpdateManyWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    workoutId?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineExercisePivotUpdateWithoutExerciseInput = {
    routine?: RoutineUpdateOneRequiredWithoutRoutineExercisePivotNestedInput
  }

  export type RoutineExercisePivotUncheckedUpdateWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
  }

  export type RoutineExercisePivotUncheckedUpdateManyWithoutExerciseInput = {
    id?: IntFieldUpdateOperationsInput | number
    routineId?: IntFieldUpdateOperationsInput | number
  }

  export type UserBadgesCreateManyBadgeInput = {
    id?: number
    userId: number
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserBadgesUpdateWithoutBadgeInput = {
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserBadgesNestedInput
  }

  export type UserBadgesUncheckedUpdateWithoutBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserBadgesUncheckedUpdateManyWithoutBadgeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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