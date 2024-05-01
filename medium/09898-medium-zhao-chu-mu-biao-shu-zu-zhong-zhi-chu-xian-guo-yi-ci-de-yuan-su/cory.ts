export type IsEqual<X, Y> = (<T>() => T extends X ? true : false) extends (<T>() => T extends Y ? true : false) ? true : false;

export type Includes<T extends any[], U> = T extends [infer F, ...infer R]
    ? IsEqual<F, U> extends true
        ? true
        : Includes<R, U>
    : false;

export type UniqueArr<T extends any[], Result extends any[] = []> = T extends [infer U, ...infer R]
    ? Includes<Result, U> extends true
        ? UniqueArr<R, Result>
        : UniqueArr<R, [...Result, U]>
    : Result;

export type MoreThanTwo<T extends any[], U, Result extends any[] = []> = Result['length'] extends 2 ? true
    : T extends [infer F, ...infer R]
        ? IsEqual<F, U> extends true
            ? MoreThanTwo<R, U, [...Result, F]>
            : MoreThanTwo<R, U, Result>
        : false

export type FindEles<T extends any[], Origin extends any[] = T> = UniqueArr<T> extends [infer F, ...infer R]
    ? MoreThanTwo<Origin, F> extends true
        ? FindEles<R, Origin>
        : [F, ...FindEles<R, Origin>]
    : []