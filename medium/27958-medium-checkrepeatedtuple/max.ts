export type CheckRepeatedTuple<T extends unknown[], OnlyOnce extends unknown[] = []> = T extends [infer A, ...infer Rest]
  ? A extends OnlyOnce[number]
    ? true
    : CheckRepeatedTuple<Rest, [...OnlyOnce, A]>
  : false;