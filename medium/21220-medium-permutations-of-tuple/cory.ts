export type Insert<T extends unknown[], U> = T extends [infer F, ...infer L]
    ? [F, U, ...L] | [F, ...Insert<L, U>]
    : [U]

export type PermutationsOfTuple<
    T extends unknown[],
    R extends unknown[] = []
> = T extends [infer F, ...infer L] 
    ? PermutationsOfTuple<L, Insert<R, F> | [F, ...R]> 
    : R


/**
 // T = [1, number, unknown], F = 1, L = [number, unknown], R = []
export type R1 = Insert<[], 1> | [1];  // [1]

// T = [number, unknown], F = number, L = [unknown], R = [1]
export type R2 = Insert<R1, number> | [number, ...R1] // [1, number] | [number, 1]

// T = [unknown], F = unknown, L =[], R = [1, number] | [number, 1]
export type R3 = Insert<R2, unknown> | [unknown, ...R2] // -> Result
 */