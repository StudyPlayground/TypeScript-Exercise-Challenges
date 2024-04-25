export type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 0) extends (<T>() => T extends Y ? 1 : 0) ? true : false;
export type Includes<T extends any[], U> = T extends [infer F, ...infer R]
    ? IsEqual<F, U> extends true
        ? true
        : Includes<R, U>
    : false;

export type Unique<T extends any[], Result extends any[] = []> = T extends [infer F, ...infer R]
    ? Includes<Result, F> extends true
        ? Unique<R, Result>
        : Unique<R,  [...Result, F]>
    : Result;