export type GetLast<T extends number[][]> = T extends [...any,infer L extends number[]] ? L : never;
export type ToTuple<T extends number, R extends number[] = []> = R['length'] extends T ? R : ToTuple<T, [...R, 0]>

export type Sum<T extends number,U extends number> = [...ToTuple<T>,...ToTuple<U>]['length']

export type GenRow<
    T extends number[],
    R extends number[] = [1]
> = T extends [infer F extends number, infer S extends number, ...infer L extends number[]]
    ? [Sum<F, S>] extends [infer A extends number]
        ? GenRow<[S, ...L],[...R, A]>
        : never
    :[...R, 1]

export type Pascal<
    N extends number,
    R extends number[][] = [[1]]
> = R['length'] extends N ? R: Pascal<N, [...R, GenRow<GetLast<R>>]>