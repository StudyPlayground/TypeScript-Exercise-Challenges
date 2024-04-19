export type Zip<T extends any[], U extends any[], Result extends any[] = []> = T extends [infer TF, ...infer TR]
    ? U extends [infer UF, ...infer UR]
        ? Zip<TR, UR, [...Result, [TF, UF]]>
        : Result
    : Result;