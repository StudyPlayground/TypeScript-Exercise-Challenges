export type IndexOf<T extends any[], U, Pass extends any[] = []> = T extends [infer F, ...infer Rest]
  ? Equal<F, U> extends true
    ? Pass['length']
    : IndexOf<Rest, U, [...Pass, F]>
  : -1;