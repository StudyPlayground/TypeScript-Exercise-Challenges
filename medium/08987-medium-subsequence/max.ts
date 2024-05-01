export type Subsequence<T extends any[]> = T extends [infer A, ...infer Rest]
  ? [A] | [...Subsequence<Rest>] | [A, ...Subsequence<Rest>]
  : []