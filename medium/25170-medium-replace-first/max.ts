export type ReplaceFirst<T extends readonly unknown[], S, R> = T extends [infer A, ...infer Rest]
  ? [A] extends [S]
    ? [R, ...Rest]
    : [A, ...ReplaceFirst<Rest, S, R>]
  : T