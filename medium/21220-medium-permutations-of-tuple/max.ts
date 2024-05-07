export type Insert<T extends unknown[], U> = T extends [infer A, ...infer Rest]
  ? [A, U, ...Rest] | [A, ...Insert<Rest, U> ]
  : [U]

export type PermutationsOfTuple<T extends unknown[], R extends unknown[] = []> = T extends [infer A, ...infer Rest]
  ? PermutationsOfTuple<Rest, Insert<R, A> | [A, ...R]>
  : R