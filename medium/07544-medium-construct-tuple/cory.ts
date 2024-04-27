export type ConstructTuple<L extends number, Result extends unknown[] = []> = Result['length'] extends L
    ? Result
    : ConstructTuple<L,  [...Result, unknown]>;
