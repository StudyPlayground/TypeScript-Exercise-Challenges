export type ExtractIdx<
    M extends number[][],
    Idx extends any[] = []
> = M extends [infer F extends number[], ...infer R extends number[][]]
    ? [F[Idx['length']], ...ExtractIdx<R, Idx>]
    : M;

export type Transpose<
    M extends number[][],
    Result extends any[] = [],
> = M extends [] ? [] : M[0]['length'] extends Result['length']
    ? Result
    : Transpose<M, [...Result, ExtractIdx<M, Result>]>