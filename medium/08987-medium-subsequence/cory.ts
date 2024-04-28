export type Subsequence<T extends any[]> = T extends [infer F, ...infer R]
    ? [F] | [F, ...Subsequence<R>] | Subsequence<R>
    : [];
