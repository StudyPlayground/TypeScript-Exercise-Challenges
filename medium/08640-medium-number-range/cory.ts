export type LengthArray<L extends number, Result extends any[] = []> = Result['length'] extends L
    ? Result
    : LengthArray<L,  [...Result, 0]>;

export type NumberRange<
    L extends number,
    H extends number,
    Arr extends any[] = LengthArray<L>,
    Result extends number = L,
> = Arr['length'] extends H
    ? Result | H
    : NumberRange<L, H, [...Arr, 0], Result | Arr['length']>