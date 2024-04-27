export type LastIndexOf<T extends any[], U> = T extends [...infer Rest, infer L]
  ? Equal<L, U> extends true
    ? Rest['length']
    : LastIndexOf<Rest, U>
  : -1