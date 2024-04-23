export type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
export type Includes<T extends any[], U> =  T extends [infer F, ...infer R]
    ? IsEqual<F, U> extends true ? true
    : Includes<R, U>
    : false

export type Without<
    T extends any[],
    U,
    Result extends any[] = [],
    K extends any[] = U extends any[] ? U : [U],
> = T extends [infer F, ...infer R]
    ? Includes<K, F> extends true
        ? Without<R, U, Result, K>
        : Without<R, U, [...Result, F], K>
    : Result;
