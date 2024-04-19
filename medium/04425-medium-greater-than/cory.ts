export type CompareLength<
    T extends string,
    U extends string,
> = T extends `${string}${infer TR}`
    ? U extends `${string}${infer UR}`
        ? CompareLength<TR, UR>
        : 1
    : U extends `${string}${infer _}`
        ? -1
        : 0

export type CompareDigit<
    T extends number, 
    U extends number, 
    S extends number[] = []
> = S['length'] extends T 
    ? S['length'] extends U ? 0 : false
    : S['length'] extends U ? true : CompareDigit<T, U, [...S, 0]>;

export type SplitToDigits<T extends string, Result extends number[] = []> = T extends `${infer F extends number}${infer K}` 
    ? SplitToDigits<K, [...Result, F]>
    : Result

export type CompareArrDigit<
    TArr extends number[],
    UArr extends number[],
> =  TArr extends [infer TF extends number, ...infer TR extends number[]] 
    ? UArr extends [infer UF extends number, ...infer UR extends number[]] 
        ? CompareDigit<TF, UF> extends 0 ? CompareArrDigit<TR, UR> : CompareDigit<TF, UF>
        : never
    : false

export type GreaterThan<
    T extends number,
    U extends number,
    CDigit extends number = CompareLength<`${T}`, `${U}`>,
    TArr extends number[] = SplitToDigits<`${T}`>,
    UArr extends number[] = SplitToDigits<`${U}`>,
> = CDigit extends 1 ? true : CDigit extends -1 ? false
    : CompareArrDigit<TArr, UArr>