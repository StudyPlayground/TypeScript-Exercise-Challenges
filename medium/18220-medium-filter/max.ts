export type Filter<T extends any[], P, Result extends any[] = []> = T extends [infer A, ...infer Rest]
  ? A extends P
    ? Filter<Rest, P, [...Result, A]>
    : Filter<Rest, P, [...Result]>
  : Result;