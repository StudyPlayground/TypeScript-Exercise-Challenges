type TupleToNestedObject<T, U> = T extends [infer A extends string, ...infer Rest] ? {
    [key in A]: TupleToNestedObject<Rest, U>
} : U;