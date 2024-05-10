export type ParseInt<T extends string> = T extends `${infer Digit extends number}` ? Digit : never;
export type ReverseString<S extends string> = S extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : '';
export type RemoveLeadingZeros<S extends string> = S extends '0' ? S : S extends `${'0'}${infer R}` ? RemoveLeadingZeros<R> : S
export type InternalPlusOne<S extends string> = S extends "9" ? "01"
    : S extends `${infer Digit extends number}${infer Rest}`
        ? Digit extends 9
            ? `0${InternalPlusOne<Rest>}`
            : `${[1, 2, 3, 4, 5, 6, 7, 8, 9][Digit]}${Rest}`
        : never;
export type InternalMinusOne<S extends string> = S extends `${infer Digit extends number}${infer Rest}`
    ? Digit extends 0 ? `9${InternalMinusOne<Rest>}` : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Digit]}${Rest}`
    : never

export type PlusOne<T extends number> = ParseInt<ReverseString<InternalPlusOne<ReverseString<`${T}`>>>>;
export type Plus<T extends number, K extends number, Result extends number[] = []> = Result['length'] extends K ? T : Plus<PlusOne<T>, K, [...Result, 0]>

export type PutSign<S extends string> = `-${S}`;

export type MinusOne<T extends number> = T extends 0
    ? -1
    : `${T}` extends `-${infer Abs}`
        ? ParseInt<PutSign<ReverseString<InternalPlusOne<ReverseString<`${Abs}`>>>>>
        : ParseInt<RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${T}`>>>>>;

export type Triangular<
    N extends number,
    Result extends number = 0
> = N extends 0 ? Result
    : Triangular<MinusOne<N>, Plus<Result, N>>