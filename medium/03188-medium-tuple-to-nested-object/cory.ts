export type TupleToNestedObject<T, U> = T extends [infer A extends string | symbol | number, ...infer R] ? {
    [K in A]: TupleToNestedObject<R, U>
} : U