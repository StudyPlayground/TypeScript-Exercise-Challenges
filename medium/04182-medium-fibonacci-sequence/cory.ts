export type Fibonacci<T extends number, S extends any[] = [0], Prev extends any[] = [], Curr extends any[] = [0]> = S['length'] extends T
    ? Curr['length']
    : Fibonacci<T, [0, ...S], Curr, [...Prev, ...Curr]>
