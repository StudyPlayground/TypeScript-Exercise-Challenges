export type All<T extends any[], E> = T extends [infer A, ...infer Rest]
  ? Equal<A, E> extends true
    ? All<Rest, E>
    : false
  : true;