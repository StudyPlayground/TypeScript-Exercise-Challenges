export type Fill<
    T extends unknown[],
    N,
    Start extends number = 0,
    End extends number = T['length'],
    withFill extends boolean = Start extends 0 ? true : false,
    Result extends unknown[] = [],
> = T extends [infer F, ...infer R]
        ? Result['length'] extends End
            ? Fill<R, N, Start, End, false, [...Result, F]>
        : Result['length'] extends Start
            ? Fill<R, N, Start, End, true, [...Result, N]>
        : Fill<R, N, Start, End, withFill, [...Result, withFill extends true ? N : F]>
    : Result