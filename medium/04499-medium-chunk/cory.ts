export type Chunk<T extends any[], C extends number, Result extends any[] = []> = Result['length'] extends C ? [Result, ...Chunk<T, C>]
    : T extends [infer U, ...infer R]
        ? Chunk<R, C, [...Result, U]>
    : Result extends []
        ? Result
    : [Result]